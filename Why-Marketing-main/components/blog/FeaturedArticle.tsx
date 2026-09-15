import Link from "next/link";
import Image from "next/image";
import { Article } from "@/data/blog";

interface FeaturedArticleProps {
  article: Article;
}

export function FeaturedArticle({ article }: FeaturedArticleProps) {
  return (
    <Link href={`/resources/${article.slug}`} className="group block mb-24 relative">
      <div className="absolute -inset-4 border border-border-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-sm pointer-events-none z-10" />
      <div className="flex flex-col md:flex-row gap-8 lg:gap-16 items-center">
        {/* Image Area */}
        <div className="w-full md:w-3/5 aspect-[16/10] md:aspect-[4/3] lg:aspect-[16/9] relative overflow-hidden rounded-sm bg-noir-surface">
          <Image
            src={article.featuredImage}
            alt={article.featuredImageAlt || article.title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />
          {/* Subtle overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-noir-bg/80 to-transparent md:hidden" />
        </div>

        {/* Content Area */}
        <div className="w-full md:w-2/5 flex flex-col items-start px-4 md:px-0 z-20 md:py-12">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-gold-primary text-xs font-bold tracking-widest uppercase">
              FEATURED
            </span>
            <div className="w-12 h-px bg-border-white" />
            <span className="text-noir-muted text-xs font-semibold tracking-widest uppercase">
              {article.category}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-noir-text mb-6 group-hover:text-gold-light transition-colors duration-300">
            {article.title}
          </h2>

          <p className="text-noir-text-sec text-base md:text-lg mb-8 max-w-md font-sans">
            {article.excerpt}
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold text-noir-muted tracking-wide mt-auto">
            <span>{article.readTime}</span>
            <span className="w-1 h-1 rounded-full bg-border-white" />
            <span>{article.date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
