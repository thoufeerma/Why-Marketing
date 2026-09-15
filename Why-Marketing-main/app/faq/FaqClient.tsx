"use client";

import { useState } from "react";
import { FAQ } from "@/data/faq";
import { FAQCategoryFilter } from "@/components/faq/FAQCategoryFilter";
import { FAQAccordion } from "@/components/faq/FAQAccordion";
import Link from "next/link";

interface FaqClientProps {
  faqs: FAQ[];
  categories: string[];
}

export function FaqClient({ faqs, categories }: FaqClientProps) {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredFaqs = activeCategory === "ALL" 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-24">
        <span className="text-gold-primary text-[11px] font-bold tracking-[0.2em] uppercase mb-6 block">
          FAQ
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif leading-tight text-noir-text mb-8">
          Questions, Answered.
        </h1>
        <p className="text-noir-text-sec text-lg md:text-xl font-sans leading-relaxed">
          Everything you need to know about working with WhyMarketing.
        </p>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 mb-32">
        {/* Left Column */}
        <div className="w-full lg:w-1/3 flex-shrink-0">
          <div className="sticky top-32">
            <h2 className="text-2xl md:text-3xl font-serif text-noir-text mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-noir-text-sec text-base md:text-lg mb-10 font-sans max-w-sm">
              Before we start working together, here are answers to the questions we hear most often.
            </p>
            
            <FAQCategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-2/3">
          <FAQAccordion faqs={filteredFaqs} />
        </div>
      </div>

      {/* Compact CTA */}
      <div className="max-w-xl border-t border-border-white pt-16">
        <h3 className="text-2xl font-serif text-noir-text mb-4">
          Still have questions?
        </h3>
        <p className="text-noir-text-sec mb-8 font-sans">
          Let's talk about your business and see if we're a good fit.
        </p>
        <Link 
          href="/#contact"
          className="inline-flex items-center justify-center px-7 py-3.5 text-[13px] font-bold tracking-[0.1em] text-noir-bg bg-gold-primary rounded-full hover:bg-gold-light transition-colors"
        >
          BOOK A CONSULTATION
        </Link>
      </div>
    </div>
  );
}
