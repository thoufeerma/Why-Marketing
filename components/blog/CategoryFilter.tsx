"use client";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ categories, activeCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mb-16 border-b border-border-white pb-6">
      {categories.map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 relative ${
              isActive ? "text-gold-primary" : "text-noir-muted hover:text-noir-text"
            }`}
          >
            {category}
            {isActive && (
              <span className="absolute -bottom-[25px] left-0 right-0 h-[2px] bg-gold-primary rounded-full" />
            )}
          </button>
        );
      })}
    </div>
  );
}
