"use client";

import React from "react";
import { ArrowRight, MessageSquare, ShieldCheck, Clock, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface ClosingCTAProps {
  onOpenConsultation: () => void;
}

export function ClosingCTA({ onOpenConsultation }: ClosingCTAProps) {
  return (
    <section className="bg-[#10175F] text-white py-24 lg:py-36 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-[#17216F] rounded-full blur-3xl opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-[#F32632] rounded-full blur-3xl opacity-10 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          
          {/* Accent Tag (No circle pointer) */}
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="w-6 h-[1.5px] bg-[#F32632]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300 font-mono">
              Commercial Advisory Engagement
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading text-white leading-tight mb-6">
            Let&apos;s unlock more potential in{" "}
            <span className="font-editorial italic font-normal text-white">
              your property
            </span>
            .
          </h2>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
            Tell us about your hotel, your current challenges, and where you want to grow.
          </p>

          {/* Action CTAs (No circle pointers) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-white text-[#10175F] font-bold text-sm tracking-wide hover:bg-[#F3F4F7] shadow-xl hover:shadow-2xl transition-luxury group"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1.5 transition-transform" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold text-sm hover:border-white hover:bg-white/5 transition-luxury"
            >
              <MessageSquare className="w-4 h-4 text-slate-300" />
              <span>Talk to Our Team</span>
            </motion.button>
          </div>

          {/* Trust & Engagement Credentials */}
          <div className="pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-8 text-left">
            <div className="flex items-start gap-3.5">
              <ShieldCheck className="w-5 h-5 text-[#F32632] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1 font-heading">
                  NDA &amp; Full Confidentiality
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Strict privacy for proprietary rates, P&amp;L data, and owner accounts.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Clock className="w-5 h-5 text-[#F32632] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1 font-heading">
                  Direct Partner Access
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Consultation held directly with senior hotel revenue directors.
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <Building2 className="w-5 h-5 text-[#F32632] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1 font-heading">
                  Bespoke Property Audit
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  Tailored commercial diagnostic delivered following your intake session.
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
