import { getPostBySlug, getPosts } from "@/lib/wordpress";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArticleCard } from "@/components/blog/ArticleCard";

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = await getPostBySlug(slug);
  if (!article) return { title: "Article Not Found | WhyMarketing" };
  
  return {
    title: `${article.title} | WhyMarketing`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [{ url: article.featuredImage, alt: article.featuredImageAlt }],
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  // In Next 15, params is a promise
  const { slug } = await params;
  const article = await getPostBySlug(slug);

  if (!article) {
    notFound();
  }

  // Get some related articles for the bottom section
  const allArticles = await getPosts();
  const relatedArticles = allArticles
    .filter(a => a.slug !== slug && a.category === article.category)
    .slice(0, 3);
    
  // Fallback if not enough in the same category
  if (relatedArticles.length < 3) {
    const additional = allArticles
      .filter(a => a.slug !== slug && !relatedArticles.some(r => r.slug === a.slug))
      .slice(0, 3 - relatedArticles.length);
    relatedArticles.push(...additional);
  }

  return (
    <article className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Header Section */}
      <header className="max-w-[780px] mx-auto mb-16">
        <Link 
          href="/resources" 
          className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-noir-muted uppercase mb-12 hover:text-gold-primary transition-colors"
        >
          <span>←</span> Back to Resources
        </Link>
        
        <div className="flex items-center gap-4 mb-6">
          <span className="text-gold-primary text-xs font-bold tracking-widest uppercase">
            {article.category}
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight text-noir-text mb-8">
          {article.title}
        </h1>

        <p className="text-noir-text-sec text-xl md:text-2xl font-sans leading-relaxed mb-10">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-6 text-xs font-semibold text-noir-muted tracking-wide border-t border-border-white pt-6">
          <span className="text-noir-text">{article.author}</span>
          <span className="w-1 h-1 rounded-full bg-border-white" />
          <span>{article.date}</span>
          <span className="w-1 h-1 rounded-full bg-border-white" />
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* Hero Image */}
      <div className="w-full max-w-[1200px] mx-auto aspect-[16/9] relative rounded-sm overflow-hidden bg-noir-surface mb-20">
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Article Content - Rendered from WordPress API */}
      <div 
        className="max-w-[780px] mx-auto prose prose-invert prose-lg prose-headings:font-serif prose-headings:text-noir-text prose-p:text-noir-text-sec prose-p:leading-relaxed prose-a:text-gold-light hover:prose-a:text-gold-primary mb-32"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <div className="max-w-[1200px] mx-auto pt-24 border-t border-border-white">
          <h2 className="text-3xl font-serif text-noir-text mb-12">Related Articles</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {relatedArticles.map(related => (
              // @ts-ignore
              <ArticleCard key={related.slug} article={related} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
