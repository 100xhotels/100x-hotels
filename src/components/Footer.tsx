import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ArrowUpRight } from "lucide-react";

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

          {/* Commercial Desks / Contact Info Placeholders (Cols 10-12) */}
          <div className="lg:col-span-2">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 font-mono">
              Commercial Desks
            </div>
            <div className="space-y-3 text-xs text-slate-300 leading-relaxed">
              <div>
                <span className="font-semibold text-white block">London Advisory Desk</span>
                <span className="text-slate-400 font-mono text-[11px]">[Contact details on consultation request]</span>
              </div>
              <div>
                <span className="font-semibold text-white block">Singapore Regional Desk</span>
                <span className="text-slate-400 font-mono text-[11px]">[Contact details on consultation request]</span>
              </div>
              <div>
                <span className="font-semibold text-white block">New York Commercial Desk</span>
                <span className="text-slate-400 font-mono text-[11px]">[Contact details on consultation request]</span>
              </div>
            </div>

            {/* LinkedIn Link */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4 fill-current text-[#F32632]" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span>LinkedIn Corporate Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
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
