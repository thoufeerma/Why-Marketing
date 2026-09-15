"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

const phases = [
  {
    id: "01",
    title: "Discovery",
    description: "Deep audit of your business, audience, competitors, and growth opportunities.",
  },
  {
    id: "02",
    title: "Strategy",
    description: "Research, positioning, messaging, and a measurable growth roadmap.",
  },
  {
    id: "03",
    title: "Brand Identity",
    description: "Visual identity, brand system, brand voice, and positioning.",
  },
  {
    id: "04",
    title: "Digital Experience",
    description: "High-converting websites, UI/UX, web applications, and digital experiences.",
  },
  {
    id: "05",
    title: "Growth Engine",
    description: "SEO, AEO, content strategy, performance marketing, and lead generation.",
  },
  {
    id: "06",
    title: "Automation & Analytics",
    description: "AI automation, CRM integration, reporting, attribution, and optimization.",
  },
  {
    id: "07",
    title: "Scale",
    description: "Continuous experimentation, optimization, and sustainable business growth.",
  },
];

export function ProcessTimeline() {
  const [activePhase, setActivePhase] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Initialize refs array
  useEffect(() => {
    nodeRefs.current = nodeRefs.current.slice(0, phases.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Auto-scroll to keep active phase in view
  useEffect(() => {
    if (scrollContainerRef.current && nodeRefs.current[activePhase]) {
      const container = scrollContainerRef.current;
      const node = nodeRefs.current[activePhase];
      
      if (!node) return;

      const containerWidth = container.clientWidth;
      const nodeLeft = node.offsetLeft;
      const nodeWidth = node.clientWidth;
      
      const scrollPos = nodeLeft - (containerWidth / 2) + (nodeWidth / 2);
      
      container.scrollTo({
        left: Math.max(0, scrollPos),
        behavior: 'smooth'
      });
    }
  }, [activePhase]);

  return (
    <section 
      id="process" 
      className="py-32 bg-noir-surface relative overflow-hidden border-y border-border-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <FadeIn>
          <SectionHeading 
            label="The Framework"
            title="Brand Transformation" 
            subtitle="Our strategic 7-phase methodology to engineer market leaders and accelerate sustainable growth."
            align="center"
          />
        </FadeIn>

        <div className="mt-16 md:mt-24 mb-16 -mx-6 md:mx-0 px-6 md:px-0">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing pb-8 scroll-smooth"
          >
            <div className="flex relative min-w-[950px] md:min-w-full justify-between">
              
              {/* Line Container (Centered with nodes) */}
              <div className="absolute top-3 left-[60px] right-[60px] h-[1px] bg-border-white">
                {/* Active Progress Line */}
                <motion.div 
                  className="h-full bg-gold-primary origin-left" 
                  initial={{ width: "0%" }}
                  animate={{ width: `${(activePhase / (phases.length - 1)) * 100}%` }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </div>

              {/* Nodes */}
              {phases.map((phase, index) => {
                const isActive = index === activePhase;
                const isPast = index < activePhase;
                
                return (
                  <div 
                    key={phase.id}
                    ref={(el) => {
                      nodeRefs.current[index] = el;
                    }}
                    className="flex-shrink-0 w-[120px] flex flex-col items-center cursor-pointer group relative z-10"
                    onMouseEnter={() => setActivePhase(index)}
                    onClick={() => setActivePhase(index)}
                  >
                    {/* Node Dot */}
                    <motion.div 
                      className={`rounded-full shrink-0 flex items-center justify-center mb-8 border transition-colors duration-300 relative z-20 ${
                        isActive 
                          ? "bg-gold-primary border-gold-primary shadow-[0_0_10px_rgba(212,175,55,0.3)]" 
                          : isPast 
                            ? "bg-noir-surface border-gold-primary" 
                            : "bg-noir-surface border-border-white"
                      }`}
                      initial={false}
                      animate={{ 
                        width: isActive ? 28 : 24,
                        height: isActive ? 28 : 24,
                      }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                      <div 
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                          isActive 
                            ? "bg-noir-surface" 
                            : isPast 
                              ? "bg-gold-primary" 
                              : "bg-transparent"
                        }`} 
                      />
                    </motion.div>
                    
                    {/* Step Number */}
                    <span className={`text-[13px] font-bold mb-3 tracking-[0.12em] uppercase transition-colors duration-300 ${isActive ? 'text-gold-primary' : 'text-noir-muted'}`}>
                      {phase.id}
                    </span>
                    
                    {/* Step Name */}
                    <span className={`text-[15px] font-sans font-semibold text-center tracking-[0.02em] transition-colors duration-300 ${isActive ? 'text-noir-text' : 'text-noir-muted group-hover:text-gold-light'}`}>
                      {phase.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Dynamic Description Panel */}
        <FadeIn delay={0.2} className="max-w-2xl mx-auto min-h-[120px] flex items-start md:items-center justify-center text-center px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <h4 className="text-[22px] font-sans font-semibold text-noir-text mb-4 tracking-[0.02em] hidden md:block">
                {phases[activePhase].title}
              </h4>
              <p className="text-[18px] text-noir-muted font-normal leading-[1.7] -tracking-[0.01em]">
                {phases[activePhase].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </FadeIn>

      </Container>

      {/* Hide Scrollbar Styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
