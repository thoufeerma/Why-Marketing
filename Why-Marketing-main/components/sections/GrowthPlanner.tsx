"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Step = 1 | 2 | 3 | 4 | 5;

interface Selections {
  business: string;
  goal: string;
  timeline: string;
  budget: string;
}

const QUESTIONS = [
  {
    step: 1,
    title: "What best describes your business?",
    key: "business",
    options: ["B2B SaaS", "E-commerce", "Service Business", "Enterprise", "Healthcare", "Real Estate"]
  },
  {
    step: 2,
    title: "What is your primary goal?",
    key: "goal",
    options: ["Generate More Leads", "Increase Sales", "Improve SEO", "Build a Stronger Brand", "Launch a Website", "Scale Existing Marketing"]
  },
  {
    step: 3,
    title: "When do you want results?",
    key: "timeline",
    options: ["Immediately", "Within 3 Months", "Within 6 Months", "Long-Term Growth"]
  },
  {
    step: 4,
    title: "Current Monthly Marketing Budget",
    key: "budget",
    options: ["Under $1k", "$1k–5k", "$5k–20k", "$20k+"]
  }
];

const getStrategy = (selections: Selections) => {
  const strategy = {
    services: [] as string[],
    timeline: "—",
    focus: [] as string[],
    priority: "—"
  };

  // Budget mapping
  if (selections.budget === "$20k+") strategy.priority = "Enterprise Focus";
  else if (selections.budget === "$5k–20k") strategy.priority = "High Priority";
  else if (selections.budget === "$1k–5k") strategy.priority = "Standard";
  else if (selections.budget === "Under $1k") strategy.priority = "Bootstrapped";

  // Timeline mapping
  if (selections.timeline === "Immediately") strategy.timeline = "1–2 Months";
  else if (selections.timeline === "Within 3 Months") strategy.timeline = "2–3 Months";
  else if (selections.timeline === "Within 6 Months") strategy.timeline = "4–6 Months";
  else if (selections.timeline === "Long-Term Growth") strategy.timeline = "6–12+ Months";

  // Business mapping
  if (selections.business === "Healthcare") {
    strategy.services = ["Branding", "Website", "Local SEO", "Google Ads", "Reputation Management"];
    strategy.focus = ["Patient Acquisition", "Trust & Authority", "Local Dominance"];
  } else if (selections.business === "E-commerce") {
    strategy.services = ["Shopify Setup", "Technical SEO", "Performance Marketing", "CRO", "Marketing Automation"];
    strategy.focus = ["ROAS Optimization", "Cart Conversion", "Retention"];
  } else if (selections.business === "B2B SaaS") {
    strategy.services = ["Brand Positioning", "Website", "Content Strategy", "LinkedIn Ads", "Technical SEO"];
    strategy.focus = ["Demo Requests", "MQL Generation", "Authority Building"];
  } else if (selections.business === "Enterprise") {
    strategy.services = ["Digital Transformation", "Custom Web Apps", "Enterprise SEO", "Account-Based Marketing"];
    strategy.focus = ["Scale & Automation", "Market Share", "Complex Sales Cycles"];
  } else if (selections.business === "Real Estate") {
    strategy.services = ["Local SEO", "Lead Gen Funnels", "Google Ads", "Branding"];
    strategy.focus = ["Lead Volume", "Local Dominance", "Brand Trust"];
  } else if (selections.business === "Service Business") {
    strategy.services = ["Branding", "Website Development", "Local SEO", "Lead Generation"];
    strategy.focus = ["Lead Quality", "Brand Authority", "Conversion"];
  }

  // Goal mapping additions
  if (selections.goal === "Generate More Leads" && strategy.focus.length > 0 && !strategy.focus.includes("Lead Generation")) {
    strategy.focus = ["Lead Generation", ...strategy.focus.slice(0, 2)];
  } else if (selections.goal === "Improve SEO" && strategy.focus.length > 0 && !strategy.focus.includes("Organic Traffic")) {
    strategy.focus = ["Organic Traffic", ...strategy.focus.slice(0, 2)];
  } else if (selections.goal === "Build a Stronger Brand" && strategy.focus.length > 0 && !strategy.focus.includes("Brand Equity")) {
    strategy.focus = ["Brand Equity", ...strategy.focus.slice(0, 2)];
  } else if (selections.goal === "Increase Sales" && strategy.focus.length > 0 && !strategy.focus.includes("Sales Velocity")) {
    strategy.focus = ["Sales Velocity", ...strategy.focus.slice(0, 2)];
  }

  return strategy;
};

export function GrowthPlanner() {
  const [step, setStep] = useState<Step>(1);
  const [selections, setSelections] = useState<Selections>({
    business: "",
    goal: "",
    timeline: "",
    budget: "",
  });

  const handleSelect = (key: keyof Selections, value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
    setTimeout(() => {
      setStep((prev) => (prev < 5 ? (prev + 1) as Step : prev));
    }, 400); // 400ms delay to show highlight
  };

  const strategy = getStrategy(selections);
  const currentQuestion = step < 5 ? QUESTIONS[step - 1] : null;

  return (
    <section id="planner" className="py-24 md:py-32 min-h-0 md:min-h-[100svh] flex flex-col justify-center bg-noir-surface relative border-y border-border-white w-full overflow-hidden">
      <Container>
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto pt-10 md:pt-0">
          <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-6 block">
            Strategy Assessment
          </span>
          <h2 className="text-[3rem] md:text-[4rem] font-serif font-medium text-noir-text tracking-tight leading-none mb-6">
            Build Your Growth Blueprint.
          </h2>
          <p className="text-[18px] text-noir-muted font-normal leading-[1.7] max-w-2xl mx-auto -tracking-[0.01em]">
            Answer a few strategic questions and discover the services, timeline, and roadmap your business needs to scale.
          </p>
        </div>

        {/* 2-Column Assessment & Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 max-w-[1200px] mx-auto pb-10">
          
          {/* LEFT: Assessment Questionnaire */}
          <div className="flex flex-col justify-center min-h-[400px]">
            <AnimatePresence mode="wait">
              {step < 5 && currentQuestion ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex flex-col h-full"
                >
                  <h3 className="text-[2rem] md:text-[2.25rem] font-serif font-medium text-noir-text tracking-tight mb-8 leading-tight">
                    {currentQuestion.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-12">
                    {currentQuestion.options.map((opt) => {
                      const isSelected = selections[currentQuestion.key as keyof Selections] === opt;
                      return (
                        <button
                          key={opt}
                          onClick={() => handleSelect(currentQuestion.key as keyof Selections, opt)}
                          className={cn(
                            "text-left p-6 rounded-[20px] border transition-all duration-[250ms] ease-out",
                            isSelected 
                              ? "border-gold-primary bg-[#151515] -translate-y-1 shadow-lg" 
                              : "border-[rgba(212,175,55,0.12)] bg-[#111111] hover:border-gold-primary hover:bg-[#151515] hover:-translate-y-1"
                          )}
                        >
                          <span className={cn(
                            "text-[15px] font-sans font-semibold tracking-[0.02em]",
                            isSelected ? "text-gold-light" : "text-noir-text"
                          )}>
                            {opt}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Progress Indicator */}
                  <div className="flex items-center gap-0 mt-auto pt-4">
                    {[1, 2, 3, 4].map((i, index) => (
                      <div key={i} className="flex items-center">
                        <div className={cn(
                          "w-3 h-3 rounded-full transition-colors duration-300",
                          step >= i ? "bg-gold-primary" : "border border-border-white bg-transparent"
                        )} />
                        {index < 3 && (
                          <div className={cn(
                            "h-[1px] w-8 md:w-12 transition-colors duration-300",
                            step > i ? "bg-gold-primary" : "bg-border-white"
                          )} />
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="final"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="flex flex-col h-full justify-center"
                >
                  <span className="text-[13px] font-sans font-bold tracking-[0.12em] uppercase text-gold-primary mb-6 block">
                    Analysis Complete
                  </span>
                  <h3 className="text-[2.5rem] md:text-[3rem] font-serif font-medium text-noir-text tracking-tight mb-6 leading-none">
                    Your Growth Blueprint is Ready.
                  </h3>
                  <p className="text-[18px] text-noir-text-sec font-normal leading-[1.6] mb-10 max-w-md">
                    Based on your answers, we've identified the strongest growth strategy for your business. You can download this roadmap or schedule a call to discuss the execution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-bold tracking-wide text-noir-text bg-[#111111] border border-gold-primary rounded-full hover:bg-[rgba(212,175,55,0.05)] transition-colors">
                      Download Strategy PDF
                    </button>
                    <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-[14px] font-bold tracking-wide text-noir-bg bg-gold-primary rounded-full hover:bg-gold-light transition-colors">
                      Book a Strategy Session
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Live Strategy Dashboard */}
          <div className="bg-[#111111] border border-[rgba(212,175,55,0.12)] rounded-[28px] p-8 md:p-12 relative flex flex-col shadow-2xl h-full">
            <div className="mb-10">
              <h3 className="text-[24px] font-serif font-medium text-noir-text tracking-tight mb-2">Growth Blueprint</h3>
              <p className="text-[13px] font-semibold text-gold-primary uppercase tracking-[0.1em]">Live Strategy Preview</p>
            </div>

            <div className="flex flex-col gap-8 flex-grow">
              {/* Dynamic Rows */}
              <div className="grid grid-cols-2 gap-6 pb-8 border-b border-[rgba(255,255,255,0.05)]">
                <div>
                  <span className="text-[11px] font-bold text-noir-muted uppercase tracking-[0.12em] block mb-3">Business</span>
                  <span className="text-[15px] font-sans font-semibold text-white tracking-wide">{selections.business || "—"}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-noir-muted uppercase tracking-[0.12em] block mb-3">Primary Goal</span>
                  <span className="text-[15px] font-sans font-semibold text-white tracking-wide">{selections.goal || "—"}</span>
                </div>
              </div>

              {/* Recommended Services */}
              <div className="pb-8 border-b border-[rgba(255,255,255,0.05)]">
                 <span className="text-[11px] font-bold text-noir-muted uppercase tracking-[0.12em] block mb-4">Recommended Services</span>
                 <div className="flex flex-wrap gap-3" key={selections.business}>
                   {strategy.services.length > 0 ? strategy.services.map((s, i) => (
                     <motion.div
                       key={s}
                       initial={{ opacity: 0, scale: 0.95 }}
                       animate={{ opacity: 1, scale: 1 }}
                       transition={{ duration: 0.2, delay: i * 0.05 }}
                       className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[rgba(212,175,55,0.15)] bg-[#151515] transition-colors hover:border-gold-primary hover:bg-[#1A1A1A]"
                     >
                       <Check className="w-3.5 h-3.5 text-gold-primary" strokeWidth={3} />
                       <span className="text-[13px] font-sans font-bold text-noir-text tracking-[0.02em]">{s}</span>
                     </motion.div>
                   )) : (
                     <span className="text-[14px] text-noir-text-sec italic">Awaiting business type...</span>
                   )}
                 </div>
              </div>

              {/* Timeline & Priority Row */}
              <div className="grid grid-cols-2 gap-6 pb-8 border-b border-[rgba(255,255,255,0.05)]">
                <div>
                  <span className="text-[11px] font-bold text-noir-muted uppercase tracking-[0.12em] block mb-3">Estimated Timeline</span>
                  <span className="text-[15px] font-sans font-semibold text-white tracking-wide">{strategy.timeline}</span>
                </div>
                <div>
                  <span className="text-[11px] font-bold text-noir-muted uppercase tracking-[0.12em] block mb-3">Priority Level</span>
                  <span className="text-[15px] font-sans font-semibold text-white tracking-wide">{strategy.priority}</span>
                </div>
              </div>

              {/* Growth Focus */}
              <div>
                 <span className="text-[11px] font-bold text-noir-muted uppercase tracking-[0.12em] block mb-4">Growth Focus</span>
                 <div className="flex flex-wrap gap-2.5" key={selections.business + selections.goal}>
                   {strategy.focus.length > 0 ? strategy.focus.map((f, i) => (
                     <motion.span 
                        key={f} 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.05 }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-border-white bg-[#151515] text-[13px] font-semibold tracking-wide text-noir-text-sec"
                     >
                       {f}
                     </motion.span>
                   )) : (
                       <span className="text-[14px] text-noir-text-sec italic">Awaiting selection...</span>
                   )}
                 </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
