"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function LoadingScreen() {
  const [show, setShow] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If it's a returning visit in this session, the inline script already hid it,
    // but we still want to unmount it from the React tree.
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (hasVisited) {
      setShow(false);
      return;
    }
    
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("hasVisited", "true");
    }, shouldReduceMotion ? 1000 : 3000);

    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          id="global-loader"
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#0B0B0B] flex flex-col items-center justify-center pointer-events-none"
        >
          <div className="flex flex-col items-center justify-center">
            {/* Logo Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative w-[180px] h-[120px] md:w-[240px] md:h-[160px] flex items-center justify-center mb-2"
            >
              <Image
                src="/wxb logo-03.png"
                alt="WhyMarketing Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            
            {/* Horizontal Gold Divider */}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { scaleX: 0, opacity: 0 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.25, delay: shouldReduceMotion ? 0 : 1.25, ease: "easeOut" }}
              className="h-[1px] bg-[rgba(212,175,55,0.6)] mt-8 w-16 origin-center"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
