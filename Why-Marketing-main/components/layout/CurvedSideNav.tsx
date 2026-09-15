"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Digital marketing", href: "/#services" },
  { name: "Branding", href: "/#services" },
  { name: "Resources", href: "/resources" },
  { name: "Case Studies", href: "/#case-studies" },
  { name: "Blog", href: "/#blog" },
  { name: "Contact", href: "/#contact" },
];

export function CurvedSideNav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Header / Logo Space / Menu Trigger */}
      <header className="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none">
        
        {/* Desktop Logo */}
        <Link href="/" className="hidden lg:flex items-center group shrink-0 pointer-events-auto">
          <Image
            src="/logo.png"
            alt="WhyMarketing Logo"
            width={120}
            height={120}
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation Pill (Links Only) */}
        <div className="hidden lg:flex flex-1 justify-center items-center pointer-events-none mx-4 lg:mx-8">
          <div className="pointer-events-auto bg-[#1a1a1a]/90 backdrop-blur-xl border border-[rgba(212,175,55,0.15)] rounded-full px-12 py-4 shadow-2xl flex items-center">
            {/* Navigation Links */}
            <nav className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-white/90 hover:text-gold-primary transition-colors tracking-wide whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Desktop Action Button */}
        <div className="hidden lg:flex items-center pointer-events-auto shrink-0">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-8 py-3.5 text-[14px] font-bold tracking-wide text-noir-bg bg-gold-primary rounded-full hover:bg-gold-light transition-colors shrink-0"
          >
            Book Consultation
          </Link>
        </div>
        
        {/* Mobile Header Layout */}
        <div className="lg:hidden flex justify-between items-center w-full pointer-events-auto">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/logo.png"
              alt="WhyMarketing Logo"
              width={96}
              height={96}
              className="object-contain group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
          
          {/* Mobile Actions */}
          <div className="flex items-center gap-4 shrink-0">
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center justify-center px-7 py-3.5 text-[14px] font-bold tracking-wide text-noir-bg bg-gold-primary rounded-full hover:bg-gold-light transition-colors shadow-lg"
            >
              Book Consultation
            </Link>
            
            {/* Floating Circular Menu Button (Mobile Only) */}
            <button
              onClick={toggleMenu}
              className="w-14 h-14 bg-noir-surface/90 backdrop-blur-md rounded-full border border-border-white flex items-center justify-center text-gold-primary hover:border-gold-primary/50 hover:bg-noir-card transition-colors shadow-lg"
              aria-label="Toggle Navigation"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-noir-bg/60 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Side Panel with Curved Edge */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-[90%] md:w-[450px] bg-noir-nav backdrop-blur-xl z-50 shadow-2xl flex flex-col border-l border-border-white"
            style={{
              borderTopLeftRadius: "40px",
              borderBottomLeftRadius: "40px",
            }}
          >
            <div className="flex justify-end p-8 md:p-12">
              <button
                onClick={toggleMenu}
                className="w-12 h-12 rounded-full border border-border-white flex items-center justify-center text-gold-primary hover:border-gold-primary hover:bg-gold-primary/10 transition-colors"
                aria-label="Close Navigation"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-12 md:px-16 gap-8">
              <span className="text-gold-primary text-[13px] font-bold tracking-[0.12em] uppercase mb-4">
                Navigation
              </span>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  className="group flex items-center"
                >
                  <div className="w-0 h-[2px] bg-gold-primary group-hover:w-6 transition-all duration-300 mr-0 group-hover:mr-4 opacity-0 group-hover:opacity-100" />
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-[16px] font-sans font-semibold text-noir-text group-hover:text-white transition-colors block w-max tracking-[0.02em]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="p-12 md:p-16">
              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center px-8 py-4 text-[15px] font-semibold tracking-wide text-noir-bg bg-gold-primary rounded-full hover:bg-gold-light transition-colors w-full"
              >
                Book Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
