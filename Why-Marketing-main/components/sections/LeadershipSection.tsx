"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BadgeCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";

const certBadges = [
  "Google Ads Search & Measurement",
  "HubSpot SEO & Inbound Marketing",
  "Google Partner Program",
];

const capabilities = [
  "Technical SEO",
  "Legal Services SEO",
  "Healthcare SEO",
  "eCommerce SEO",
  "International SEO",
  "AI SEO (AEO, GEO, AIO)",
];

const certificates = [
  { id: 1, src: "/certificate_1.png", alt: "Google Partner Certificate" },
  { id: 2, src: "/certificate_2.png", alt: "HubSpot Certification" },
  { id: 3, src: "/certificate_1.png", alt: "Meta Certification" },
  { id: 4, src: "/certificate_2.png", alt: "SEMrush Certification" },
];

export function LeadershipSection() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#111111] relative w-full border-t border-border-white overflow-hidden">
      <Container>
        {/* Section Header */}
        <FadeIn className="mb-16 md:mb-24">
          <span className="text-gold-primary text-[13px] font-bold tracking-[0.15em] uppercase mb-6 block">
            Our Leadership
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif font-medium tracking-tight text-white mb-6 leading-tight max-w-2xl">
            Meet Our CEO — Aiswariya Kolora
          </h2>
          <p className="text-[16px] md:text-[18px] text-noir-text-sec font-medium tracking-wide max-w-2xl">
            Every strategy begins with leadership, experience, and a commitment to measurable business growth.
          </p>
        </FadeIn>

        {/* Profile Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-12 lg:gap-20 mb-24 md:mb-32">
          
          {/* Left: Portrait */}
          <div 
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
            className="relative h-[550px] lg:h-[650px] w-full rounded-[28px] overflow-hidden border border-[rgba(212,175,55,0.2)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0A0A0A] group"
          >
            <motion.div
              animate={{ 
                x: mousePosition.x * 8, // Max 4px movement in either direction
                y: mousePosition.y * 8 
              }}
              transition={{ type: "spring", stiffness: 75, damping: 20, mass: 0.5 }}
              className="absolute inset-0 w-[105%] h-[105%] -left-[2.5%] -top-[2.5%]"
            >
              <Image
                src="/founder_portrait.png"
                alt="Founder Portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </motion.div>
            {/* Inner Shadow overlay */}
            <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none" />
          </div>

          {/* Right: Info */}
          <FadeIn delay={0.2} direction="left" className="flex flex-col justify-center">
            <h3 className="text-[32px] md:text-[40px] font-serif font-medium text-white mb-3 leading-none">
              Aiswariya Kolora
            </h3>
            <p className="text-[15px] font-sans font-bold tracking-[0.1em] text-gold-primary uppercase mb-10">
              SEO Strategist at Techpullers
            </p>

            <div className="text-[16px] md:text-[17px] text-noir-text-sec font-normal leading-[1.8] mb-12 space-y-6">
              <p>
                Aiswariya Kolora is our CEO. She is the one who leads SEO and digital marketing at Techpullers Technology Solutions Pvt Ltd.
              </p>
              <p>
                She is an experienced digital marketer who started her career in 2012. She manages all the SEO activities and the team works under her guidance. She helps craft strategies for each client.
              </p>
            </div>

            {/* Certifications Row */}
            <div className="mb-12">
              <h4 className="text-[12px] font-bold text-noir-muted uppercase tracking-[0.15em] mb-5 block">
                Recognized By
              </h4>
              <div className="flex flex-wrap gap-3">
                {certBadges.map((badge) => (
                  <div 
                    key={badge} 
                    className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#111111] border border-[rgba(212,175,55,0.15)] hover:border-gold-primary hover:bg-[#151515] hover:-translate-y-0.5 transition-all duration-300 group cursor-default shadow-lg"
                  >
                    <BadgeCheck className="w-4 h-4 text-gold-primary group-hover:scale-110 transition-transform" strokeWidth={2} />
                    <span className="text-[13px] font-sans font-bold tracking-wide text-noir-text-sec group-hover:text-gold-light transition-colors">{badge}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-[12px] font-bold text-noir-muted uppercase tracking-[0.15em] mb-5 block">
                Core Expertise
              </h4>
              <div className="flex flex-wrap gap-2.5">
                {capabilities.map((cap) => (
                  <span 
                    key={cap}
                    className="px-4 py-2 rounded-lg bg-transparent border border-[rgba(255,255,255,0.08)] text-[13px] font-semibold text-noir-muted tracking-wide"
                  >
                    {cap}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Certificates Gallery */}
        <FadeIn delay={0.1} className="border-t border-[rgba(255,255,255,0.05)] pt-20">
          <h3 className="text-[20px] md:text-[24px] font-serif font-medium text-white mb-10">
            Professional Certifications & Industry Recognition
          </h3>
          
          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-12 snap-x snap-mandatory -mx-6 px-6 md:mx-0 md:px-0">
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                onClick={() => setSelectedCert(cert.src)}
                className="flex-shrink-0 snap-start relative w-[240px] h-[170px] md:w-[360px] md:h-[260px] rounded-[16px] overflow-hidden cursor-zoom-in bg-white border border-[rgba(212,175,55,0.1)] hover:border-gold-primary transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
              >
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                <Image
                  src={cert.src}
                  alt={cert.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 240px, 360px"
                />
              </div>
            ))}
          </div>
        </FadeIn>

      </Container>

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-6 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedCert(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 flex items-center justify-center rounded-full bg-[#111111] border border-border-white text-white hover:border-gold-primary hover:text-gold-primary transition-colors z-[110]"
              onClick={(e) => { e.stopPropagation(); setSelectedCert(null); }}
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-[900px] aspect-[4/3] bg-[#F5F2EB] rounded-[12px] overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedCert}
                alt="Certificate Zoomed"
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Scrollbar hiding styles */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
