"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight } from "lucide-react";

interface NavigationProps {
  onOpenConsultation: () => void;
}

export function Navigation({ onOpenConsultation }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Pricing", href: "/services/revenue-strategy-pricing" },
    { label: "Distribution", href: "/services/distribution-channel-performance" },
    { label: "Analytics", href: "/services/performance-analytics-forecasting" },
    { label: "Our approach", href: "/#approach" },
    { label: "About", href: "/#credibility" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0D1248]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="inline-flex items-center focus:outline-none"
            aria-label="100X Hotel Homepage"
          >
            <Logo variant="light" size="md" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-slate-200 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#10175F] text-sm hover:bg-slate-100 transition-colors"
          >
            <span>Book a consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="p-2 text-white hover:bg-white/10 transition-colors focus:outline-none lg:hidden"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0D1248] px-6 py-5">
          <nav className="flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 text-sm text-slate-100 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="mt-4 w-full flex items-center justify-center gap-2 px-5 py-3 bg-white text-[#10175F] text-sm"
            >
              <span>Book a consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
