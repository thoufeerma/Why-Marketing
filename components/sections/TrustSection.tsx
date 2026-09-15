"use client";

import { Container } from "@/components/ui/Container";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const partners = [
  "Google",
  "Meta",
  "Shopify",
  "WordPress",
  "Vercel",
  "Cloudflare",
  "HubSpot",
  "Semrush",
];

const metrics = [
  { value: 500, suffix: "+", label: "Projects" },
  { value: 50, suffix: "+", label: "Industries" },
  { value: 25, suffix: "M+", label: "Revenue Influenced" },
  { value: 2, suffix: "M+", label: "Organic Visitors" },
  { value: 100, suffix: "K+", label: "Qualified Leads" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2500,
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, springValue, value]);

  const displayValue = useTransform(springValue, (current) =>
    Math.floor(current) + suffix
  );

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export function TrustSection() {
  return (
    <section className="py-24 md:py-32 min-h-0 md:min-h-[80svh] flex items-center bg-noir-bg relative z-10 border-y border-border-white overflow-hidden w-full">
      <Container>
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-6">
            Trusted by Ambitious Brands
          </span>
          <h2 className="text-[3rem] md:text-[3.75rem] font-serif font-medium text-noir-text leading-none tracking-tight">
            Recognized. Certified. Referenced.
          </h2>
        </div>

        {/* Partner Carousel */}
        <div className="relative max-w-6xl mx-auto mb-24 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div 
                key={index}
                className="text-2xl font-sans font-bold text-noir-muted/40 hover:text-gold-primary/80 transition-colors duration-300 cursor-default px-12"
              >
                {partner}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className={cn(
                "group relative bg-noir-surface border border-[rgba(212,175,55,0.12)] rounded-[24px] p-10 flex flex-col items-center justify-center text-center transition-all duration-[250ms] ease-out hover:-translate-y-1 hover:border-gold-primary/40 hover:bg-[#171717] overflow-hidden",
                index === 4 ? "col-span-2 w-[calc(50%-12px)] justify-self-center md:col-span-1 md:w-full md:justify-self-auto lg:col-span-1" : ""
              )}
            >
              {/* Subtle top-left gold accent line */}
              <div className="absolute top-0 left-8 w-12 h-[2px] bg-gold-primary/40 rounded-b-sm" />
              
              {/* Soft radial gold glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[250ms] pointer-events-none" />

              <span className="relative z-10 text-[56px] md:text-[64px] font-sans font-extrabold text-gold-primary mb-6 leading-none -tracking-[0.04em]">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </span>
              
              <div className="relative z-10 w-12 h-[1px] bg-[rgba(212,175,55,0.3)] mb-6 group-hover:bg-gold-primary/60 transition-colors duration-[250ms]" />
              
              <div className="relative z-10 text-[18px] font-sans font-medium text-[rgba(245,242,235,0.82)] text-center">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}
