"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-0 py-24 md:py-32 md:min-h-[100svh] flex items-center overflow-hidden bg-noir-bg w-full">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-full h-[500px] bg-gold-primary/10 rounded-full blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[150px] translate-y-1/3 pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8 md:gap-10 max-w-2xl items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0"
          >
            <div>
              <h1 className="text-[2.75rem] md:text-6xl lg:text-[6rem] font-serif font-medium leading-none text-noir-text -tracking-[0.03em]">
                Your Brand <br />
                <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-gold-light via-gold-primary to-gold-dark pr-2">Deserves More</span> <br />
                Than Marketing.
              </h1>
            </div>

            <p className="text-[16px] md:text-[18px] text-noir-muted font-normal leading-[1.7] -tracking-[0.01em] max-w-[500px]">
              WhyMarketing is a premium consulting and brand engineering partner helping ambitious businesses create timeless identities and measurable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="relative w-full flex flex-col items-center justify-center lg:items-end"
          >
            {/* Free Audit Form */}
            <div className="w-full max-w-lg bg-noir-surface/80 backdrop-blur-xl border border-[rgba(212,175,55,0.12)] rounded-[24px] md:rounded-[32px] p-5 md:p-8 shadow-2xl relative overflow-hidden">
              {/* Subtle top glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
              
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <div>
                  <h3 className="text-lg md:text-2xl font-serif font-medium text-noir-text mb-1 md:mb-2">
                    Request Your Free <br/> <span className="text-gold-primary text-[15px] md:text-xl mt-1 inline-block">Website or Social Media Audit</span>
                  </h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] md:text-[12px] text-noir-muted font-medium">
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-gold-primary" /> Personalized report in 48 hrs</span>
                    <span className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-gold-primary" /> No obligation</span>
                  </div>
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gold-primary/10 flex items-center justify-center shrink-0 border border-gold-primary/20">
                  <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-gold-primary" />
                </div>
              </div>

              <form className="space-y-3 md:space-y-4 mt-3 md:mt-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] md:text-[11px] font-bold tracking-wide uppercase text-noir-muted ml-1">Full Name</label>
                    <input type="text" placeholder="Your full name" className="w-full bg-noir-card border border-[rgba(212,175,55,0.15)] rounded-[10px] md:rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-[13px] text-white placeholder:text-noir-muted/50 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] md:text-[11px] font-bold tracking-wide uppercase text-noir-muted ml-1">Company / Business</label>
                    <input type="text" placeholder="Company name" className="w-full bg-noir-card border border-[rgba(212,175,55,0.15)] rounded-[10px] md:rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-[13px] text-white placeholder:text-noir-muted/50 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] md:text-[11px] font-bold tracking-wide uppercase text-noir-muted ml-1">Phone Number</label>
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-noir-card border border-[rgba(212,175,55,0.15)] rounded-[10px] md:rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-[13px] text-white placeholder:text-noir-muted/50 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] md:text-[11px] font-bold tracking-wide uppercase text-noir-muted ml-1">Business Email</label>
                    <input type="email" placeholder="you@company.com" className="w-full bg-noir-card border border-[rgba(212,175,55,0.15)] rounded-[10px] md:rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-[13px] text-white placeholder:text-noir-muted/50 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all" />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold tracking-wide uppercase text-noir-muted ml-1 flex items-center gap-2">
                    Website URL <span className="text-[9px] font-normal opacity-60">(Optional)</span>
                  </label>
                  <input type="url" placeholder="https://yourwebsite.com" className="w-full bg-noir-card border border-[rgba(212,175,55,0.15)] rounded-[10px] md:rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-[13px] text-white placeholder:text-noir-muted/50 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all" />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] md:text-[11px] font-bold tracking-wide uppercase text-noir-muted ml-1 flex items-center gap-2">
                    What do you need help with? <span className="text-[9px] font-normal opacity-60">(Optional)</span>
                  </label>
                  <textarea rows={2} placeholder="Tell us about your SEO goals, challenges, or requirements..." className="w-full bg-noir-card border border-[rgba(212,175,55,0.15)] rounded-[10px] md:rounded-xl px-3 py-2 md:px-4 md:py-2.5 text-[13px] text-white placeholder:text-noir-muted/50 focus:border-gold-primary focus:ring-1 focus:ring-gold-primary outline-none transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full mt-2 bg-gold-primary text-noir-bg font-bold tracking-wide py-2.5 md:py-3 rounded-[10px] md:rounded-xl hover:bg-gold-light transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                  Get My Free Audit
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </Container>
    </section>
  );
}
