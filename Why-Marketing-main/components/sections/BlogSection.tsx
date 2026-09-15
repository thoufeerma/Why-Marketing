import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { getPosts } from "@/lib/wordpress";
import { ArticleCard } from "@/components/blog/ArticleCard";

export async function BlogSection() {
  const posts = await getPosts();
  
  if (!posts || posts.length === 0) return null;
  
  // Show only latest 3 posts
  const latestPosts = posts.slice(0, 3);

  return (
    <section id="blog" className="py-24 bg-noir-bg border-t border-[rgba(212,175,55,0.1)] w-full relative">
      <Container>
        <FadeIn className="text-center mb-16">
          <h2 className="text-[3rem] md:text-[4rem] font-serif font-medium text-noir-text tracking-tight leading-none">
            Latest <span className="text-gold-primary italic font-light">Blog</span>
          </h2>
        </FadeIn>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-12">
          {latestPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <ArticleCard article={post} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
