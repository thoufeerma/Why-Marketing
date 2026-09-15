"use client";

import { useState } from "react";
import { FAQ } from "@/data/faq";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQAccordionProps {
  faqs: FAQ[];
}

export function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggle = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  if (faqs.length === 0) {
    return (
      <div className="py-12 text-noir-muted">
        <p>No questions found for this category.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col border-t border-border-white">
      {faqs.map((faq) => {
        const isOpen = openId === faq.id;

        return (
          <div key={faq.id} className="border-b border-border-white">
            <button
              onClick={() => toggle(faq.id)}
              className="w-full flex items-center justify-between py-6 md:py-8 text-left group focus:outline-none"
            >
              <h3 className={`text-lg md:text-xl font-serif pr-8 transition-colors duration-300 ${
                isOpen ? "text-gold-light" : "text-noir-text group-hover:text-gold-muted"
              }`}>
                {faq.question}
              </h3>
              
              <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                isOpen 
                  ? "border-gold-primary text-gold-primary" 
                  : "border-border-white text-noir-muted group-hover:border-gold-muted group-hover:text-gold-muted"
              }`}>
                <motion.div
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Plus className="w-4 h-4" />
                </motion.div>
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pr-12 text-noir-text-sec text-base md:text-lg font-sans leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
