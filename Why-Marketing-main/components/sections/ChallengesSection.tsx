"use client";

import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import Link from "next/link";
import { cn } from "@/lib/utils";

const challenges = [
  {
    num: "01",
    title: "You're investing in marketing, but growth isn't following.",
    desc: "You've spent time and money on websites, SEO, or campaigns, yet the results never matched the promises. Instead of measurable growth, you've been left with reports full of numbers but little business impact."
  },
  {
    num: "02",
    title: "Your competitors consistently appear ahead of you.",
    desc: "They're ranking higher, attracting more customers, and building stronger authority online. You know there must be a reason—you just don't know where to start fixing it."
  },
  {
    num: "03",
    title: "Customer acquisition is becoming more expensive.",
    desc: "Advertising costs continue to rise while returns become harder to predict. Sustainable growth requires better systems, not just bigger budgets."
  },
  {
    num: "04",
    title: "You're not sure what your agency actually does.",
    desc: "Reports are delivered every month, but strategy, accountability, and measurable progress remain unclear. You need a partner who builds alongside your business."
  }
];

export function ChallengesSection() {
  return (
    <section id="challenges" className="py-24 md:py-32 min-h-0 md:min-h-[100svh] flex items-center bg-[#0d0d0d] relative w-full border-t border-border-white">
      <Container>
        {/* Header */}
        <FadeIn className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto pt-10 md:pt-0">
          <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-6 block">
            Common Challenges
          </span>
          <h2 className="text-[3rem] md:text-[4rem] font-serif font-medium text-noir-text tracking-tight leading-none mb-6">
            Does Any of This Sound Familiar?
          </h2>
          <p className="text-[18px] text-noir-muted font-normal leading-[1.7] max-w-2xl mx-auto -tracking-[0.01em]">
            Most businesses don't struggle because they lack ambition. They struggle because they lack the right strategy, systems, and execution.
          </p>
        </FadeIn>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 max-w-5xl mx-auto">
          {challenges.map((c, i) => (
            <FadeIn key={c.num} delay={i * 0.1}>
              <div 
                className="group relative flex flex-col h-full justify-start rounded-[28px] bg-[#111111] p-10 border border-[rgba(212,175,55,0.12)] transition-all duration-[300ms] ease-out hover:-translate-y-1 hover:shadow-xl hover:border-gold-primary/50 hover:bg-[#151515]"
              >
              <span className="text-[14px] font-sans font-bold tracking-[0.12em] text-gold-primary mb-5 block">
                {c.num}
              </span>
              <h3 className="text-[22px] md:text-[24px] font-sans font-bold tracking-tight text-noir-text mb-4 leading-snug">
                {c.title}
              </h3>
              <p className="text-[16px] text-noir-text-sec font-normal leading-[1.6]">
                {c.desc}
              </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.2} className="flex flex-col items-center text-center pb-10 md:pb-0">
          <p className="text-[22px] font-serif font-medium text-gold-light italic mb-8 max-w-2xl mx-auto leading-snug">
            "If any of these challenges sound familiar, you're exactly who we built WhyMarketing for."
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-semibold tracking-wide text-noir-bg bg-gold-primary rounded-full hover:bg-gold-light transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 shadow-lg hover:shadow-xl"
          >
            Book a Strategy Call
          </Link>
        </FadeIn>
      </Container>
    </section>
  );
}
