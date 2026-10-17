"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  onOpenConsultation: () => void;
}

export function Navigation({ onOpenConsultation }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Services", href: "#services" },
    { label: "Solutions", href: "#opportunity" },
    { label: "Our Approach", href: "#approach" },
    { label: "Commercial Intelligence", href: "#intelligence" },
    { label: "About Us", href: "#credibility" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 w-full transition-luxury ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-xs border-b border-slate-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand Logo with Generous Clear Space */}
          <div className="flex items-center">
            <a
              href="#"
              className="inline-flex items-center focus:outline-none"
              aria-label="100X Hotel Homepage"
            >
              <Logo variant="dark" size="md" />
            </a>
          </div>

          {/* Center/Right: Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-[#171A26] hover:text-[#10175F] py-2 transition-colors tracking-tight"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#10175F] transition-all duration-300 ease-out group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary CTA Button (No circle pointer) */}
          <div className="hidden sm:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#10175F] text-white text-sm font-medium tracking-normal hover:bg-[#17216F] shadow-xs hover:shadow-md transition-luxury group"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#F32632] group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#10175F] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer with Smooth Animation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-b border-slate-200 bg-white px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-[#10175F] py-1 border-b border-slate-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#10175F] text-white text-sm font-medium"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#F32632]" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
