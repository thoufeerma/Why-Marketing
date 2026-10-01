"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { BadgeCheck, X } from "lucide-react";
import { cn } from "@/lib/utils";


const founders = [
  {
    name: "Mubeen",
    title: "Founder & AI Digital Marketing Strategist",
    image: "/mubeen-founder.png",
    bio: [
      "Mubeen is the Founder of WhyMarketing and an AI Digital Marketing Strategist with 7+ years of experience in digital marketing, brand growth, and online business strategy.",
      "Starting his journey in 2017, Mubeen has worked with 500+ brands across different markets, helping businesses build their digital presence, generate visibility, acquire customers, and scale through strategic digital marketing.",
      "With experience across India and the GCC, particularly the Dubai and UAE market, his approach combines traditional digital marketing expertise with emerging AI powered marketing strategies.",
      "He holds certifications in Google Fundamentals, 1 Million Prompters, and Dubai based professional training, with a strong focus on applying AI to modern marketing, content, customer acquisition, and business growth.",
      "At WhyMarketing, Mubeen focuses on developing growth strategies that connect branding, performance marketing, social media, SEO, AI, content, and customer acquisition into one scalable system.",
      "For Mubeen, digital marketing isn't just about getting attention. It's about turning attention into business."
    ],
    certifications: [
      "Google Fundamentals",
      "1 Million Prompters",
      "Dubai Professional Certification",
      "AI Digital Marketing Strategy",
      "Digital Marketing Strategy",
      "Performance Marketing",
      "Social Media Marketing",
      "Brand Growth & Customer Acquisition",
      "AI Powered Marketing"
    ],
    specialties: [
      "AI Digital Marketing", "SEO & AEO", "GEO & AI Search", "Performance Marketing", "Social Media Marketing", "Brand Strategy", "Lead Generation", "Content Strategy", "GCC Marketing", "Dubai Digital Marketing", "Kerala Digital Marketing"
    ],
    imagePosition: "left"
  },
  {
    name: "Assna Samad",
    title: "Co Founder & Brand Strategist",
    image: "/assna-founder.png",
    bio: [
      "With a passion for turning ideas into impactful brands, Assna Samad has been working in the field of brand strategy and visual communication since 2020.",
      "Holding a Diploma in Advertisement Designing, she combines creative thinking, strategic perspective, and a strong understanding of visual identity to help businesses communicate who they are and what they stand for.",
      "As the Co Founder of WhyMarketing, Assna focuses on building brands with purpose. From defining their brand identity and positioning to developing a consistent visual presence that connects with the right audience.",
      "Her work brings together branding, creative direction, visual communication, content, and brand storytelling to create businesses that are not only visually strong but also memorable and strategically positioned.",
      "For Assna, branding is more than making a business look good. It's about creating an identity, telling the right story, and building a brand people remember."
    ],
    certifications: [
      "Diploma in Advertisement Designing",
      "Brand Strategy",
      "Visual Communication",
      "Brand Identity Development",
      "Creative Direction",
      "Content & Visual Strategy",
      "Brand Positioning",
      "Social Media Branding"
    ],
    specialties: [
      "Brand Strategy", "Brand Identity", "Visual Branding", "Creative Direction", "Content Strategy", "Social Media Branding", "Brand Positioning", "Business Branding"
    ],
    imagePosition: "right"
  }
];

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-24 md:py-32 bg-noir-surface relative w-full border-t border-border-white overflow-hidden">
      <Container>
        {/* Section Header */}
        <FadeIn className="mb-16 md:mb-24">
          <span className="text-gold-primary text-[13px] font-bold tracking-[0.15em] uppercase mb-6 block md:text-left">
            Our Leadership
          </span>
          <h2 className="text-[2.5rem] md:text-[3.5rem] font-serif font-medium tracking-tight text-white mb-6 leading-tight max-w-2xl md:mx-0 md:text-left">
            Meet Our Founders
          </h2>
          <p className="text-[16px] md:text-[18px] text-noir-text-sec font-medium tracking-wide max-w-2xl md:mx-0 md:text-left">
            Every strategy begins with leadership, experience, and a commitment to measurable business growth.
          </p>
        </FadeIn>

        {/* Founders List */}
        <div className="space-y-32 md:space-y-40">
          {founders.map((founder, index) => (
            <FounderProfile key={founder.name} founder={founder} />
          ))}
        </div>

      </Container>
    </section>
  );
}

function FounderProfile({ founder }: { founder: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  const isRight = founder.imagePosition === "right";

  return (
    <div className="flex flex-col gap-12 lg:gap-16">
      {/* Top Row: Portrait & Bio */}
      <div className={cn(
        "grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-12 lg:gap-20",
        isRight && "lg:grid-cols-[1fr_450px]"
      )}>
        
        {/* Portrait */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
          className={cn(
            "relative h-[550px] lg:h-[650px] w-full rounded-[28px] overflow-hidden border border-[rgba(212,175,55,0.2)] shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-[#0A0A0A] group",
            isRight && "lg:order-2"
          )}
        >
          <motion.div
            animate={{ 
              x: mousePosition.x * 8, 
              y: mousePosition.y * 8 
            }}
            transition={{ type: "spring", stiffness: 75, damping: 20, mass: 0.5 }}
            className="absolute inset-0 w-[105%] h-[105%] -left-[2.5%] -top-[2.5%]"
          >
            <Image
              src={founder.image}
              alt={founder.name}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </motion.div>
          {/* Inner Shadow overlay */}
          <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] pointer-events-none" />
        </div>

        {/* Info (Bio) */}
        <FadeIn delay={0.2} direction={isRight ? "right" : "left"} className={cn("flex flex-col justify-center", isRight && "lg:order-1")}>
          <h3 className="text-[32px] md:text-[40px] font-serif font-medium text-white mb-3 leading-none">
            {founder.name}
          </h3>
          <p className="text-[15px] font-sans font-bold tracking-[0.1em] text-gold-primary uppercase mb-10">
            {founder.title}
          </p>

          <div className="text-[16px] md:text-[17px] text-noir-text-sec font-normal leading-[1.8] space-y-6">
            {founder.bio.map((paragraph: string, i: number) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Bottom Row: Specialties & Certifications */}
      <FadeIn delay={0.3} className={cn(
        "grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-12 lg:gap-20",
        isRight && "lg:grid-cols-[1fr_450px]"
      )}>
        
        {/* Under the Image (Left for Mubeen, Right for Assna) */}
        <div className={cn(isRight ? "lg:order-2" : "lg:order-1")}>
          <h4 className="text-[12px] font-bold text-noir-muted uppercase tracking-[0.15em] mb-5 block">
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {founder.specialties.map((cap: string) => (
              <span 
                key={cap}
                className="px-4 py-2 rounded-lg bg-transparent border border-[rgba(255,255,255,0.08)] text-[13px] font-semibold text-noir-muted tracking-wide"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>

        {/* Under the Bio (Right for Mubeen, Left for Assna) */}
        <div className={cn(isRight ? "lg:order-1" : "lg:order-2")}>
          <h4 className="text-[12px] font-bold text-noir-muted uppercase tracking-[0.15em] mb-5 block">
            {founder.name === "Assna Samad" ? "Qualifications & Expertise" : "Certifications & Expertise"}
          </h4>
          <div className="flex flex-wrap gap-3">
            {founder.certifications.map((cert: string) => (
              <div 
                key={cert} 
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-noir-surface border border-[rgba(212,175,55,0.15)] hover:border-gold-primary hover:bg-noir-surface hover:-translate-y-0.5 transition-all duration-300 group cursor-default shadow-lg"
              >
                <BadgeCheck className="w-4 h-4 text-gold-primary group-hover:scale-110 transition-transform" strokeWidth={2} />
                <span className="text-[13px] font-sans font-bold tracking-wide text-noir-text-sec group-hover:text-gold-light transition-colors">{cert}</span>
              </div>
            ))}
          </div>
        </div>

      </FadeIn>
    </div>
  );
}
