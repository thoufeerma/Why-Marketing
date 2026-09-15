"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { Brain, BarChart3, Palette, Handshake, Bot, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "Strategic Thinking",
    heading: "Strategy Before Execution.",
    description: "We don't just execute; we align our marketing efforts with your overarching business goals to drive real, sustainable growth.",
    metric: "Aligning creative output with business objectives.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    heading: "Precision Over Guesswork.",
    description: "Every decision we make is backed by rigorous data analysis, ensuring we optimize for performance and maximum ROI.",
    metric: "Optimized for maximum return on ad spend.",
  },
  {
    icon: Palette,
    title: "Creative Excellence",
    heading: "Design That Commands Authority.",
    description: "Our design team creates premium, award-winning visual identities that instantly communicate trust and exclusivity.",
    metric: "Elevating brand perception at every touchpoint.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    heading: "An Extension of Your Team.",
    description: "We act as an extension of your company, deeply invested in your success for the long haul rather than short-term gains.",
    metric: "Committed to your sustainable growth.",
  },
  {
    icon: Bot,
    title: "AI-First Execution",
    heading: "Powered by Intelligence.",
    description: "We leverage advanced AI automation to multiply our output, optimize campaigns instantly, and uncover hidden growth opportunities.",
    metric: "Faster iterations and deeper insights.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    heading: "Clarity at Every Step.",
    description: "No black-box reporting. You have complete visibility into what we're doing, why we're doing it, and the tangible results.",
    metric: "Complete visibility into your growth.",
  },
];

export function WhyChooseUs() {
  const [lockedIndex, setLockedIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const activeIndex = hoverIndex !== null ? hoverIndex : lockedIndex;
  const activeContent = features[activeIndex];

  return (
    <section id="about" className="py-24 md:py-32 min-h-0 md:min-h-[100svh] flex items-center bg-noir-bg relative w-full">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-32">
          
          {/* Section Header (Mobile only) */}
          <div className="block lg:hidden">
            <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-8 block">
              Why Marketing
            </span>
          </div>

          {/* LEFT: Storytelling Content Panel (Desktop Only) */}
          <FadeIn className="hidden lg:flex flex-1 max-w-xl relative min-h-[450px] flex-col justify-center">
            
            <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-8 block">
              Why Marketing
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="flex flex-col"
              >
                <div className="w-12 h-[2px] bg-gold-primary/30 mb-8" />
                
                <h2 className="text-[2.75rem] md:text-[3.5rem] font-serif font-medium text-noir-text tracking-tight mb-8 leading-none">
                  {activeContent.heading}
                </h2>
                
                <p className="text-[18px] text-noir-muted font-normal leading-[1.7] -tracking-[0.01em] mb-12 max-w-lg">
                  {activeContent.description}
                </p>
                
                <div className="text-[15px] font-sans font-semibold text-gold-primary tracking-[0.02em] uppercase">
                  {activeContent.metric}
                </div>
              </motion.div>
            </AnimatePresence>
          </FadeIn>
          
          {/* RIGHT: Interactive Navigation / Mobile Accordion */}
          <FadeIn delay={0.2} direction="left" className="flex flex-col relative w-full lg:w-[450px] shrink-0">
            {/* Background Vertical Line */}
            <div className="absolute left-[11px] top-6 bottom-6 w-[1px] bg-border-white hidden md:block" />

            {features.map((feature, index) => {
              const isActive = index === activeIndex;
              const Icon = feature.icon;
              
              return (
                <div 
                  key={index}
                  className="flex flex-col cursor-pointer relative group"
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  onClick={() => setLockedIndex(index)}
                >
                  <div className="flex items-center gap-8 py-6">
                    {/* Active Gold Line Highlight */}
                    {isActive && (
                      <motion.div 
                        layoutId="activeFeatureLine"
                        className="absolute left-[11px] top-0 bottom-0 w-[1px] bg-gold-primary z-0 hidden md:block"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Indicator Dot */}
                    <div className="relative z-10 w-[23px] h-[23px] shrink-0 bg-noir-bg flex items-center justify-center hidden md:flex">
                      <motion.div 
                        className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                          isActive ? 'bg-gold-primary' : 'bg-border-white group-hover:bg-noir-muted'
                        }`}
                        animate={{ scale: isActive ? 1.2 : 1 }}
                      />
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-center gap-6 z-10">
                      <Icon 
                        className={`w-7 h-7 transition-colors duration-300 ${
                          isActive ? 'text-gold-primary' : 'text-noir-muted/40 group-hover:text-noir-muted'
                        }`} 
                        strokeWidth={1.5} 
                      />
                      <span 
                        className={`text-[20px] md:text-[22px] font-sans font-semibold tracking-[0.02em] transition-colors duration-300 ${
                          isActive ? 'text-gold-primary' : 'text-noir-text-sec group-hover:text-noir-text'
                        }`}
                      >
                        {feature.title}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Accordion Content */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="block lg:hidden overflow-hidden pl-16 md:pl-[84px] pr-4 pb-6"
                      >
                        <h2 className="text-[1.5rem] font-serif font-medium text-noir-text tracking-tight mb-4 leading-snug">
                          {feature.heading}
                        </h2>
                        <p className="text-[16px] text-noir-muted font-normal leading-[1.6] mb-6">
                          {feature.description}
                        </p>
                        <div className="text-[13px] font-sans font-semibold text-gold-primary tracking-[0.02em] uppercase">
                          {feature.metric}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
