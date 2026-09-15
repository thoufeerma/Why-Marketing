import Link from "next/link";
import Image from "next/image";
import { Article } from "@/data/blog";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link href={`/resources/${article.slug}`} className="group flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full mb-3 md:mb-6 overflow-hidden bg-noir-surface rounded-sm">
        <Image
          src={article.featuredImage}
          alt={article.featuredImageAlt || article.title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 border border-border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm pointer-events-none" />
      </div>

      <div className="flex flex-col flex-grow">
        <span className="text-gold-muted text-[8px] md:text-[10px] font-bold tracking-[0.15em] uppercase mb-2 md:mb-4">
          {article.category}
        </span>

        <h3 className="text-base sm:text-xl md:text-2xl font-serif leading-snug text-noir-text mb-2 md:mb-4 group-hover:text-gold-light transition-colors duration-300">
          {article.title}
        </h3>

        <p className="text-noir-text-sec text-xs sm:text-sm leading-relaxed mb-3 md:mb-6 font-sans line-clamp-2 md:line-clamp-3">
          {article.excerpt}
        </p>

        <div className="flex items-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-semibold text-noir-muted tracking-wide mt-auto">
          <span>{article.readTime}</span>
          <span className="w-1 h-1 rounded-full bg-border-white" />
          <span>{article.date}</span>
        </div>
      </div>
    </Link>
  );
}
