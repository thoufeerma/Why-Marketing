"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const caseStudies = [
  {
    industry: "Healthcare",
    metric: "+412%",
    metricLabel: "ORGANIC TRAFFIC",
    title: "Multi-specialty clinic became Kochi's #1 in 6 months",
    stats: "6.8x ROAS · 1,240 leads / mo"
  },
  {
    industry: "D2C",
    metric: "15x",
    metricLabel: "MONTHLY REVENUE",
    title: "Skincare brand scaled ₹8L → ₹1.2Cr / month",
    stats: "4.1 ROAS · 220K sessions"
  },
  {
    industry: "Real Estate",
    metric: "#1",
    metricLabel: "GOOGLE + AI OVERVIEW",
    title: "Builder captured 62% of 'villas in Kochi' SERP",
    stats: "38 booked-site visits / mo"
  }
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-24 md:py-32 min-h-0 md:min-h-[100svh] flex items-center bg-noir-bg relative w-full border-t border-border-white">
      <Container>
        
        {/* Header */}
        <FadeIn className="flex flex-col items-center text-center mb-20 pt-10 md:pt-0">
          <h2 className="text-[2rem] md:text-[3.5rem] font-serif font-medium tracking-tight text-white mb-6 leading-tight max-w-4xl">
            Before <span className="text-noir-muted font-light px-2">→</span> 
            Research <span className="text-noir-muted font-light px-2">→</span> 
            Strategy <span className="text-noir-muted font-light px-2">→</span> <br className="hidden md:block" />
            Execution <span className="text-noir-muted font-light px-2">→</span> 
            Results
          </h2>
          <p className="text-[16px] md:text-[18px] text-noir-text-sec font-medium tracking-wide">
            Real brands. Verifiable numbers. Compounding growth.
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1200px] mx-auto pb-10 md:pb-0">
          {caseStudies.map((study, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link 
                href="#"
                className="group flex flex-col justify-between bg-noir-surface border border-[rgba(212,175,55,0.12)] rounded-[24px] p-8 md:p-10 transition-all duration-[300ms] ease-out hover:-translate-y-1 hover:border-gold-primary/50 hover:bg-noir-surface h-full shadow-lg hover:shadow-xl"
              >
              
              {/* Top Row: Pill and Arrow */}
              <div className="flex items-center justify-between mb-16">
                <span className="px-4 py-1.5 rounded-full border border-[rgba(255,255,255,0.1)] text-[12px] font-sans font-semibold tracking-wide text-noir-text-sec bg-noir-surface group-hover:text-white transition-colors">
                  {study.industry}
                </span>
                <ArrowUpRight className="w-5 h-5 text-noir-text-sec group-hover:text-gold-light group-hover:rotate-12 transition-all" strokeWidth={1.5} />
              </div>

              {/* Middle: Metric */}
              <div className="mb-10">
                <div className="text-[56px] md:text-[64px] font-sans font-extrabold text-gold-primary leading-none mb-4 tracking-[-0.04em]">
                  {study.metric}
                </div>
                <div className="text-[16px] md:text-[18px] font-sans font-medium text-[rgba(245,242,235,0.82)] tracking-wide">
                  {study.metricLabel}
                </div>
              </div>

              {/* Bottom: Title & Stats */}
              <div>
                <h3 className="text-[20px] font-sans font-bold text-white mb-4 leading-snug">
                  {study.title}
                </h3>
                <p className="text-[15px] text-noir-text-sec font-medium mb-8">
                  {study.stats}
                </p>
                
                {/* Decorative Line */}
                <div className="h-1.5 w-full bg-noir-surface rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-[rgba(212,175,55,0.4)] rounded-full group-hover:w-full group-hover:bg-gold-primary transition-all duration-700 ease-out" />
                </div>
              </div>
              
            </Link>
            </FadeIn>
          ))}
        </div>
        
      </Container>
    </section>
  );
}
