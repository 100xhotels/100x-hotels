import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0D1248] border-t border-white/10 text-white pt-20 pb-14">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Narrative (Cols 1-5) */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 focus:outline-none" aria-label="100X Hotel">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              100X Hotel is a commercial intelligence and hospitality revenue optimization consultancy. We partner with hotel owners, operators, and asset managers to maximize ADR, RevPAR, and long-term asset value.
            </p>

            <div className="text-xs font-mono text-slate-400">
              <span>Precision behind every profitable stay.</span>
            </div>
          </div>

          {/* Navigation Links (Cols 6-7) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 font-mono">
              Navigation
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/#services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#opportunity" className="hover:text-white transition-colors">
                  Commercial Solutions
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-white transition-colors">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/#intelligence" className="hover:text-white transition-colors">
                  Commercial Intelligence
                </Link>
              </li>
              <li>
                <Link href="/#credibility" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Services (Cols 8-9) */}
          <div className="lg:col-span-3">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 font-mono">
              Advisory Practice
            </div>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/services/revenue-strategy-pricing" className="hover:text-white transition-colors">
                  Revenue Strategy &amp; Dynamic Pricing
                </Link>
              </li>
              <li>
                <Link href="/services/distribution-channel-performance" className="hover:text-white transition-colors">
                  Distribution &amp; Channel Performance
                </Link>
              </li>
              <li>
                <Link href="/services/performance-analytics-forecasting" className="hover:text-white transition-colors">
                  Performance Analytics &amp; Forecasting
                </Link>
              </li>
              <li>
                <Link href="/#opportunity" className="hover:text-white transition-colors">
                  CompSet Benchmarking &amp; RGI Analysis
                </Link>
              </li>
              <li>
                <Link href="/#opportunity" className="hover:text-white transition-colors">
                  Direct Channel Margin Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact (Cols 10-12) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 font-mono">
              Contact
            </div>
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <a
                href="tel:+918368239837"
                className="block text-slate-300 hover:text-white font-mono text-[12px] transition-colors"
              >
                +91 83682 39837
              </a>
              <a
                href="mailto:contact@100xhotel.com"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 text-[#F32632]" />
                <span>contact@100xhotel.com</span>
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/100xhotel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/1JiKZMgfc9/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.413c0-3.026 1.792-4.698 4.533-4.698 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.49 0-1.956.932-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/100xhotel"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-slate-300 hover:text-white hover:border-white/40 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.967 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div className="font-mono">
            &copy; {new Date().getFullYear()} 100X Hotel. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Commercial Advisory Terms</span>
            <span className="hover:text-white transition-colors cursor-pointer">Confidentiality &amp; Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Proprietary Rate Index</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
