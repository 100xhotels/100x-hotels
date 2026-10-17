"use client";

import React, { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { Menu, X } from "lucide-react";

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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-[#E2E5EC]"
          : "bg-white border-b border-[#F3F4F7]"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Left: Brand Logo with Generous Clear Space */}
          <div className="flex items-center">
            <a
              href="#"
              className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10175F]"
              aria-label="100X Hotel Homepage"
            >
              <Logo variant="dark" size="md" />
            </a>
          </div>

          {/* Center/Right: Editorial Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group relative text-sm font-medium text-[#171A26] hover:text-[#10175F] py-2 transition-colors"
              >
                <span>{link.label}</span>
                {/* Subtle refined hover indicator underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#10175F] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center space-x-4">
            <button
              onClick={onOpenConsultation}
              className="relative inline-flex items-center justify-center px-6 py-2.5 bg-[#10175F] text-white text-sm font-medium tracking-normal hover:bg-[#17216F] transition-all duration-150 group"
            >
              {/* Restrained red accent indicator */}
              <span className="mr-2 inline-block w-1.5 h-1.5 rounded-full bg-[#F32632] group-hover:scale-125 transition-transform" />
              <span>Book a Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#10175F] hover:bg-[#F3F4F7] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E5EC] bg-white px-6 py-6 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#10175F] py-1 border-b border-[#F3F4F7]"
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
                <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
