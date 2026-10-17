"use client";

import React from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Clock, Building2 } from "lucide-react";

interface ClosingCTAProps {
  onOpenConsultation: () => void;
}

export function ClosingCTA({ onOpenConsultation }: ClosingCTAProps) {
  return (
    <section className="bg-[#10175F] text-white py-24 lg:py-32 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#17216F] rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#F32632] rounded-full blur-3xl opacity-10" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Accent Tag */}
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              Commercial Advisory Engagement
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white leading-tight mb-6">
            Let&apos;s unlock more potential in your property.
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Tell us about your hotel, your current challenges, and where you want to grow.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#10175F] font-bold text-sm tracking-wide hover:bg-[#F3F4F7] transition-all duration-150 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#F32632]" />
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 text-white font-semibold text-sm hover:border-white hover:bg-white/5 transition-all duration-150"
            >
              <MessageSquare className="w-4 h-4 text-slate-300" />
              <span>Talk to Our Team</span>
            </button>
          </div>

          {/* Trust & Engagement Credentials */}
          <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-[#F32632] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-0.5">
                  NDA &amp; Full Confidentiality
                </div>
                <div className="text-[11px] text-slate-400">
                  Strict privacy for proprietary rates, P&amp;L data, and owner accounts.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#F32632] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-0.5">
                  Direct Partner Access
                </div>
                <div className="text-[11px] text-slate-400">
                  Consultation held directly with senior hotel revenue directors.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Building2 className="w-5 h-5 text-[#F32632] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-0.5">
                  Bespoke Property Audit
                </div>
                <div className="text-[11px] text-slate-400">
                  Tailored commercial diagnostic delivered following your intake session.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
