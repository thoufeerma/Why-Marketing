"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Landmark, 
  Activity, 
  Cloud, 
  ShoppingBag, 
  Factory, 
  GraduationCap, 
  Building, 
  Shirt, 
  Scale, 
  Truck, 
  Sparkles 
} from "lucide-react";

const industries = [
  {
    id: "fintech",
    name: "FinTech",
    icon: Landmark,
    heading: "FinTech",
    description: "Helping fintech companies build trust through premium branding, scalable websites, AI search optimization, and measurable customer acquisition.",
    capabilities: ["Branding", "Website Development", "SEO & AEO", "Performance Marketing"],
    insight: "From early-stage startups to enterprise financial platforms."
  },
  {
    id: "healthcare",
    name: "Healthcare",
    icon: Activity,
    heading: "Healthcare",
    description: "Empowering healthcare providers and health-tech startups to scale patient acquisition with compliant, high-performing digital experiences.",
    capabilities: ["Brand Strategy", "Patient Acquisition", "Web Applications", "Local SEO"],
    insight: "HIPAA-compliant marketing and secure digital scaling."
  },
  {
    id: "saas",
    name: "SaaS",
    icon: Cloud,
    heading: "Software as a Service",
    description: "Engineering growth engines for B2B and B2C SaaS platforms, focusing on driving qualified demos, lowering CAC, and boosting MRR.",
    capabilities: ["Go-to-Market Strategy", "Product Marketing", "Lead Generation", "UI/UX Design"],
    insight: "Specialized in lowering CAC and increasing lifetime value."
  },
  {
    id: "retail",
    name: "Retail",
    icon: ShoppingBag,
    heading: "Retail & E-commerce",
    description: "Transforming traditional retail and direct-to-consumer brands into digital powerhouses through seamless, conversion-optimized shopping experiences.",
    capabilities: ["E-commerce SEO", "Shopify Development", "Performance Ads", "Retention Strategy"],
    insight: "Omnichannel growth for modern consumer brands."
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: Factory,
    heading: "Manufacturing",
    description: "Modernizing the industrial sector with powerful digital identities and automated lead generation strategies that capture global B2B contracts.",
    capabilities: ["Corporate Branding", "B2B Lead Gen", "CRM Integration", "Technical SEO"],
    insight: "Digitizing traditional industrial supply chains."
  },
  {
    id: "education",
    name: "Education",
    icon: GraduationCap,
    heading: "Education & EdTech",
    description: "Driving enrollment and platform adoption for universities, e-learning platforms, and educational technology disruptors.",
    capabilities: ["Enrollment Marketing", "Brand Positioning", "Content Strategy", "Performance Media"],
    insight: "Connecting educators with lifelong learners globally."
  },
  {
    id: "realestate",
    name: "Real Estate",
    icon: Building,
    heading: "Real Estate",
    description: "Elevating property developers and luxury brokerages with premium branding and hyper-targeted lead generation campaigns.",
    capabilities: ["Luxury Branding", "Lead Nurturing", "Local SEO", "3D Web Experiences"],
    insight: "Premium positioning for high-ticket developments."
  },
  {
    id: "fashion",
    name: "Fashion",
    icon: Shirt,
    heading: "Fashion & Apparel",
    description: "Creating highly visual, fast-loading, and conversion-optimized digital flagship stores for luxury and contemporary fashion brands.",
    capabilities: ["Creative Direction", "E-commerce Dev", "Social Commerce", "Meta Ads"],
    insight: "Aesthetic precision meets performance marketing."
  },
  {
    id: "legal",
    name: "Legal",
    icon: Scale,
    heading: "Legal Services",
    description: "Establishing commanding authority for law firms through sophisticated brand identities and aggressive search engine dominance.",
    capabilities: ["Authority Branding", "Local SEO", "Content Marketing", "Lead Generation"],
    insight: "Building trust before the first consultation."
  },
  {
    id: "logistics",
    name: "Logistics",
    icon: Truck,
    heading: "Logistics & Supply Chain",
    description: "Streamlining digital operations and B2B marketing for global freight, shipping, and supply chain technology companies.",
    capabilities: ["B2B Marketing", "Corporate Websites", "Account-Based Marketing", "SEO"],
    insight: "Digital transformation for global supply chains."
  },
  {
    id: "beauty",
    name: "Beauty",
    icon: Sparkles,
    heading: "Beauty & Cosmetics",
    description: "Scaling beauty brands through influencer-ready aesthetic design, rapid e-commerce experiences, and high-ROI performance campaigns.",
    capabilities: ["Brand Identity", "Shopify Plus", "TikTok Ads", "Retention Marketing"],
    insight: "Capturing attention in a highly visual market."
  },
];

export function Industries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const checkSize = () => setIsDesktop(window.innerWidth >= 1024);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const activeIndustry = industries[activeIndex];

  return (
    <section className="py-24 md:py-32 min-h-0 md:min-h-[90svh] flex items-center bg-noir-surface relative border-t border-border-white w-full">
      <Container>
        {/* Editorial Header */}
        <FadeIn className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-6 block">
            Our Focus
          </span>
          <h2 className="text-[3rem] md:text-[4rem] font-serif font-medium text-noir-text tracking-tight mb-6 leading-none">
            Industries We Transform
          </h2>
          <p className="text-[18px] text-noir-muted font-normal leading-[1.7] -tracking-[0.01em]">
            We build specialized growth systems tailored to each industry's unique challenges.
          </p>
        </FadeIn>

        {/* Pill Navigation */}
        <FadeIn delay={0.1} className="flex flex-wrap justify-center gap-2 mb-8 max-w-5xl mx-auto">
          {industries.map((ind, i) => {
            const isActive = i === activeIndex;
            const Icon = ind.icon;
            
            return (
              <button
                key={ind.id}
                onMouseEnter={() => isDesktop && setActiveIndex(i)}
                onClick={() => !isDesktop && setActiveIndex(i)}
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 rounded-full border transition-all duration-300",
                  isActive 
                    ? "bg-gold-primary border-gold-primary text-noir-bg" 
                    : "bg-transparent border-border-white text-noir-muted hover:border-[rgba(212,175,55,0.4)] hover:text-gold-light hover:-translate-y-[2px]"
                )}
              >
                <Icon className="w-4 h-4" strokeWidth={isActive ? 2 : 1.5} />
                <span className="text-[14px] font-sans font-medium tracking-[0.02em]">
                  {ind.name}
                </span>
              </button>
            );
          })}
        </FadeIn>

        {/* Content Panel */}
        <FadeIn delay={0.2} className="max-w-5xl mx-auto bg-[#111111] border border-[rgba(212,175,55,0.12)] rounded-[24px] p-6 md:p-10 lg:p-12 min-h-[280px] flex items-center relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndustry.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start w-full"
            >
              {/* Left Side: Heading & Description */}
              <div className="flex-1">
                <h3 className="text-[32px] md:text-[40px] font-serif font-medium text-gold-primary mb-6 leading-none tracking-tight">
                  {activeIndustry.heading}
                </h3>
                <p className="text-[18px] text-noir-text-sec font-normal leading-[1.7] -tracking-[0.01em] max-w-xl">
                  {activeIndustry.description}
                </p>
              </div>
              
              {/* Right Side: Capabilities & Insight */}
              <div className="w-full lg:w-[380px] shrink-0 lg:border-l border-[rgba(212,175,55,0.15)] pt-8 lg:pt-0 lg:pl-16 flex flex-col justify-between border-t lg:border-t-0">
                <div className="mb-10">
                  <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-noir-muted block mb-5">
                    Capabilities
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    {activeIndustry.capabilities.map((cap, idx) => (
                      <span 
                        key={idx} 
                        className="px-4 py-2 rounded-full bg-[#171717] border border-[rgba(212,175,55,0.15)] text-[13px] font-sans font-medium text-noir-text/80 cursor-default"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-noir-muted block mb-3">
                    Insight
                  </span>
                  <p className="text-[16px] font-sans font-medium text-gold-light/90 italic leading-[1.6]">
                    "{activeIndustry.insight}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </FadeIn>

      </Container>
    </section>
  );
}
