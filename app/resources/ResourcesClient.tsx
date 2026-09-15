"use client";

import { useState } from "react";
import { Article } from "@/data/blog";
import { FeaturedArticle } from "@/components/blog/FeaturedArticle";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { ArticleGrid } from "@/components/blog/ArticleGrid";

interface ResourcesClientProps {
  articles: Article[];
  featuredArticle: Article;
  categories: string[];
}

export function ResourcesClient({ articles, featuredArticle, categories }: ResourcesClientProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredArticles = activeCategory === "ALL" 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  // Do not show the featured article in the grid if it's the ALL view
  // or maybe just keep it simple and show it. Let's filter out the featured article from the grid to avoid duplication
  const gridArticles = filteredArticles.filter(a => a.slug !== featuredArticle.slug);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Hero */}
      <div className="max-w-3xl mb-20">
        <span className="text-gold-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-6 block">
          RESOURCES
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight text-noir-text mb-8">
          Ideas That Move Businesses Forward.
        </h1>
        <p className="text-noir-text-sec text-lg md:text-xl font-sans leading-relaxed">
          Practical thinking on branding, websites, SEO, AI visibility, performance marketing, and sustainable growth.
        </p>
      </div>

      {/* Featured Article */}
      <FeaturedArticle article={featuredArticle} />

      {/* Category Navigation & Grid */}
      <div className="mt-32">
        <CategoryFilter 
          categories={categories} 
          activeCategory={activeCategory} 
          onSelectCategory={setActiveCategory} 
        />
        
        <ArticleGrid articles={gridArticles} />
      </div>
    </div>
  );
}
