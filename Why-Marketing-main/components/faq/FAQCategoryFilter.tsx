"use client";

interface FAQCategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function FAQCategoryFilter({ categories, activeCategory, onSelectCategory }: FAQCategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`text-[10px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 ${
              isActive 
                ? "text-gold-primary bg-gold-primary/10 px-3 py-1.5 rounded-sm" 
                : "text-noir-muted hover:text-noir-text px-3 py-1.5"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
