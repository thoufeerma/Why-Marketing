"use client";

import React, { useRef, useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ShieldCheck, Monitor, Radar, TrendingUp, Sparkles, Workflow, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    id: "branding",
    number: "01",
    title: "Branding",
    icon: ShieldCheck,
    description: "Build a memorable brand that earns trust before the first conversation.",
    capabilities: ["Logo & Identity", "Positioning", "Messaging", "Brand Strategy"],
    className: "md:col-span-6 lg:col-span-7 min-h-[180px] md:min-h-[200px]", // Large
  },
  {
    id: "ai",
    number: "02",
    title: "AI Marketing",
    icon: Sparkles,
    description: "Create faster, smarter content powered by artificial intelligence.",
    capabilities: ["AI Reels", "AI Videos", "AI Images", "AI Chatbots"],
    className: "md:col-span-6 lg:col-span-5 min-h-[150px] md:min-h-[170px]", // Small
  },
  {
    id: "web",
    number: "03",
    title: "Website Development",
    icon: Monitor,
    description: "Modern websites engineered for speed, scalability, and conversion.",
    capabilities: ["Corporate Websites", "Shopify", "WordPress", "Web Apps", "Landing Pages"],
    className: "md:col-span-6 lg:col-span-5 min-h-[160px] md:min-h-[190px]", // Medium
  },
  {
    id: "seo",
    number: "04",
    title: "SEO & AEO",
    icon: Radar,
    description: "Be discovered across traditional search engines and AI-powered search experiences.",
    capabilities: [
      "Technical SEO",
      "Local SEO",
      "Enterprise SEO",
      "E-commerce SEO",
      "Google AI Overview",
      "ChatGPT Visibility",
      "Gemini & Claude",
      "Perplexity",
    ],
    className: "md:col-span-6 lg:col-span-7 min-h-[180px] md:min-h-[200px]", // Large
  },
  {
    id: "performance",
    number: "05",
    title: "Performance Marketing",
    icon: TrendingUp,
    description: "Acquire customers through measurable, data-driven campaigns.",
    capabilities: ["Google Ads", "Meta Ads", "LinkedIn Ads", "YouTube Ads", "Remarketing", "CRO"],
    className: "md:col-span-6 lg:col-span-6 min-h-[160px] md:min-h-[190px]", // Medium
  },
  {
    id: "automation",
    number: "06",
    title: "Marketing Automation",
    icon: Workflow,
    description: "Connect marketing, sales, and customer journeys into one automated system.",
    capabilities: ["Marketing Automation", "CRM Integration", "Lead Nurturing", "Analytics & Reporting"],
    className: "md:col-span-6 lg:col-span-6 min-h-[150px] md:min-h-[170px]", // Small
  },
];

function BentoCard({ 
  service, 
  isExpanded, 
  onInteraction 
}: { 
  service: typeof services[0];
  isExpanded: boolean;
  onInteraction: (type: 'enter' | 'leave' | 'click') => void;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const div = divRef.current;
    const rect = div.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      layout
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => onInteraction('enter')}
      onMouseLeave={() => onInteraction('leave')}
      onClick={() => onInteraction('click')}
      className={cn(
        "group relative flex flex-col justify-start overflow-hidden rounded-[28px] bg-noir-surface p-8 md:p-10 border transition-colors duration-[250ms] ease-out cursor-pointer shadow-none h-fit",
        isExpanded ? "border-gold-primary/50 bg-[#141414]" : "border-[rgba(212,175,55,0.12)]",
        service.className
      )}
    >
      {/* Soft Radial Hover Glow */}
      <div
        className={cn(
          "pointer-events-none absolute -inset-px transition duration-300 z-0",
          isExpanded ? "opacity-100" : "opacity-0"
        )}
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(212,175,55,0.06), transparent 40%)`,
        }}
      />
      
      {/* Header Row */}
      <motion.div layout className="relative z-10 flex justify-between items-start w-full">
        <div className="flex gap-4 md:gap-6 items-center">
          <span className="text-[12px] md:text-[13px] font-sans font-medium tracking-[0.12em] text-gold-primary w-6 shrink-0 hidden md:block">
            {service.number}
          </span>
          <div className="flex items-center gap-4">
            <service.icon 
              className={cn(
                "w-[26px] h-[26px] shrink-0 transition-colors duration-300",
                isExpanded ? "text-gold-primary" : "text-gold-primary/50 group-hover:text-gold-primary"
              )} 
              strokeWidth={1.5}
            />
            <motion.h3 
              layout="position"
              className="text-[28px] md:text-[34px] font-sans font-bold tracking-tight text-noir-text leading-tight md:leading-none"
            >
              {service.title}
            </motion.h3>
          </div>
        </div>
        <ChevronDown 
          className={cn(
            "w-5 h-5 shrink-0 transition-transform duration-300 mt-2",
            isExpanded ? "rotate-180 text-gold-primary" : "text-noir-muted group-hover:text-gold-primary/50"
          )} 
        />
      </motion.div>
      
      {/* Description & Capabilities (Progressive Disclosure) */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="relative z-10 ml-0 md:ml-[66px] flex flex-col overflow-hidden"
          >
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="text-[17px] text-noir-text-sec font-normal leading-[1.6] max-w-md mb-8 mt-6 line-clamp-2"
            >
              {service.description}
            </motion.p>

            <div className="w-full h-[1px] bg-[rgba(212,175,55,0.15)] mb-8" />
            
            <div className="flex flex-wrap gap-2.5 pb-2">
              {service.capabilities.map((cap, i) => (
                <motion.span 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ 
                    duration: 0.25, 
                    delay: i * 0.05 + 0.1, 
                    ease: "easeOut" 
                  }}
                  className="px-4 py-2 rounded-full bg-[#171717] border border-[rgba(212,175,55,0.15)] text-[13px] font-sans font-medium text-noir-text/80 transition-all duration-[200ms] hover:text-gold-light hover:border-gold-primary/40 cursor-default"
                >
                  {cap}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ServicesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener('resize', checkSize);
    return () => window.removeEventListener('resize', checkSize);
  }, []);

  const handleInteraction = (id: string, type: 'enter' | 'leave' | 'click') => {
    if (isDesktop) {
      if (type === 'enter') setExpandedId(id);
      if (type === 'leave') setExpandedId(null);
    } else {
      if (type === 'click') {
        setExpandedId(prev => prev === id ? null : id);
      }
    }
  };

  return (
    <section id="services" className="py-24 md:py-32 min-h-0 md:min-h-[100svh] flex items-center bg-noir-surface relative w-full">
      <Container>
        {/* Editorial Header */}
        <FadeIn className="mb-20 max-w-4xl">
          <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-6 block">
            Our Expertise
          </span>
          <h2 className="text-[3.5rem] md:text-[4.5rem] font-serif font-medium text-noir-text tracking-tight leading-none mb-8">
            Engineered for Growth.
          </h2>
          <p className="text-[18px] text-noir-muted font-normal leading-[1.7] max-w-[700px] -tracking-[0.01em]">
            From brand strategy to AI-powered marketing systems, we build every layer required for sustainable business growth.
          </p>
        </FadeIn>

        {/* Asymmetric Progressive Bento Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} className={service.className}>
              <BentoCard 
                service={{...service, className: "w-full h-full"}} 
                isExpanded={expandedId === service.id}
                onInteraction={(type) => handleInteraction(service.id, type)}
              />
            </FadeIn>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
