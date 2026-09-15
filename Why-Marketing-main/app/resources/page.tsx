import { getPosts, getCategories } from "@/lib/wordpress";
import { ResourcesClient } from "./ResourcesClient";

export const metadata = {
  title: "Resources | WhyMarketing",
  description: "Practical thinking on branding, websites, SEO, AI visibility, and sustainable growth.",
};

export default async function ResourcesPage() {
  const articles = await getPosts();
  const categories = await getCategories();
  
  // If no articles exist (or API failed), provide a clean fallback state
  if (!articles || articles.length === 0) {
    return (
      <div className="pt-48 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-serif text-noir-text mb-6">Resources</h1>
        <p className="text-noir-text-sec text-lg">No articles have been published yet. Please check back later.</p>
      </div>
    );
  }

  const featuredArticle = articles[0];

  return (
    <ResourcesClient 
      // @ts-ignore - Temporary mapping until component types are fully swapped
      articles={articles} 
      // @ts-ignore
      featuredArticle={featuredArticle} 
      categories={categories} 
    />
  );
}
