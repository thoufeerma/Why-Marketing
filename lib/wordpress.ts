/**
 * WordPress Headless CMS Data Layer
 */

const WP_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL;

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  featuredImage: string;
  featuredImageAlt: string;
  category: string;
  categories: string[];
  readTime: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
  categories: string[];
  order: number;
}

/**
 * Generic fetch utility for WordPress REST API
 */
async function fetchWP(endpoint: string) {
  if (!WP_URL) {
    console.warn("NEXT_PUBLIC_WORDPRESS_URL is not defined.");
    return null;
  }
  
  try {
    const res = await fetch(`${WP_URL}/wp-json/wp/v2${endpoint}`, {
      next: { revalidate: 300 }, // Cache for 5 minutes
    });

    if (!res.ok) {
      console.error(`WordPress API error: ${res.status} ${res.statusText}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error("Failed to fetch from WordPress:", error);
    return null;
  }
}

/**
 * Normalizes a raw WordPress post into the frontend BlogPost type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizePost(post: any): BlogPost {
  // Extract embedded data safely
  const author = post._embedded?.author?.[0]?.name || "Editorial Team";
  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || "/fallback-image.jpg";
  const featuredImageAlt = post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered;
  
  // Extract categories (wp:term is an array of taxonomies, usually categories is index 0)
  const wpTerms = post._embedded?.['wp:term']?.[0] || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories = wpTerms.map((t: any) => t.name);
  const primaryCategory = categories.length > 0 ? categories[0] : "UNCATEGORIZED";

  // Calculate a rough reading time based on word count
  const wordCount = post.content?.rendered?.split(/\s+/).length || 0;
  const readTime = Math.max(1, Math.ceil(wordCount / 200)) + " min read";
  
  // Strip simple HTML from excerpt for clean display if needed, but usually we can just rely on line-clamp
  // For safety, let's just use the raw excerpt and let line-clamp or CSS handle it, but stripping p tags is cleaner for a small blurb
  const rawExcerpt = post.excerpt?.rendered || "";
  const cleanExcerpt = rawExcerpt.replace(/<[^>]+>/g, '').trim();

  // Format date
  const dateObj = new Date(post.date);
  const formattedDate = dateObj.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

  return {
    id: post.id,
    slug: post.slug,
    title: post.title.rendered,
    excerpt: cleanExcerpt,
    content: post.content?.rendered || "",
    date: formattedDate,
    author: author,
    featuredImage: featuredImage,
    featuredImageAlt: featuredImageAlt,
    category: primaryCategory.toUpperCase(),
    categories: categories,
    readTime: readTime,
  };
}

// ============================================================================
// BLOG API
// ============================================================================

export async function getPosts(): Promise<BlogPost[]> {
  const data = await fetchWP('/posts?_embed');
  if (!data || !Array.isArray(data)) return [];
  return data.map(normalizePost);
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchWP(`/posts?slug=${slug}&_embed`);
  if (!data || !Array.isArray(data) || data.length === 0) return null;
  return normalizePost(data[0]);
}

export async function getCategories(): Promise<string[]> {
  const data = await fetchWP('/categories');
  if (!data || !Array.isArray(data)) return ["ALL"];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cats = data.map((c: any) => c.name.toUpperCase());
  return ["ALL", ...cats];
}

export async function getPostsByCategory(categoryName: string): Promise<BlogPost[]> {
  // First, find the category ID. This is a bit inefficient to do dynamically, but ok for small blogs.
  if (categoryName.toUpperCase() === "ALL") return getPosts();
  
  const cats = await fetchWP('/categories');
  if (!cats || !Array.isArray(cats)) return [];
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const category = cats.find((c: any) => c.name.toUpperCase() === categoryName.toUpperCase());
  if (!category) return [];

  const data = await fetchWP(`/posts?categories=${category.id}&_embed`);
  if (!data || !Array.isArray(data)) return [];
  return data.map(normalizePost);
}

// ============================================================================
// FAQ API
// ============================================================================

/**
 * Normalizes a raw WordPress FAQ into the frontend FAQ type
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function normalizeFAQ(faq: any): FAQ {
  // Extract categories
  const wpTerms = faq._embedded?.['wp:term']?.[0] || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const categories = wpTerms.map((t: any) => t.name);
  const primaryCategory = categories.length > 0 ? categories[0] : "GENERAL";
  
  // Extract ACF display order, default to a high number if missing
  const order = faq.acf?.display_order !== undefined && faq.acf?.display_order !== "" 
    ? Number(faq.acf.display_order) 
    : 9999;

  return {
    id: faq.id,
    question: faq.title?.rendered || "",
    // We strip tags for FAQ answer if it's rendered as simple text, but if it has links, we might want to keep it.
    // The previous mockup was raw text. We'll strip tags for now, or just use it raw. Let's strip it to keep it simple, or actually we can just pass it raw and use dangerouslySetInnerHTML in the component, or just replace paragraphs.
    // The prompt says: "The main WordPress editor content should represent the FAQ answer."
    // Let's remove root block tags to keep it simple, or just use string.
    answer: faq.content?.rendered?.replace(/<[^>]+>/g, '').trim() || "",
    category: primaryCategory.toUpperCase(),
    categories: categories,
    order: order,
  };
}

export async function getFAQs(): Promise<FAQ[]> {
  // Fetch from the custom post type endpoint 'faq'
  const data = await fetchWP('/faq?_embed&per_page=100');
  if (!data || !Array.isArray(data)) return [];
  
  const faqs = data.map(normalizeFAQ);
  
  // Sort by order
  return faqs.sort((a, b) => a.order - b.order);
}

export async function getFaqCategories(): Promise<string[]> {
  // Fetch from the custom taxonomy endpoint 'faq-category'
  const data = await fetchWP('/faq-category');
  if (!data || !Array.isArray(data)) return ["ALL"];
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cats = data.map((c: any) => c.name.toUpperCase());
  return ["ALL", ...cats];
}
