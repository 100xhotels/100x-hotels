"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24 md:pt-20 md:pb-32 lg:pt-24 lg:pb-36">
      
      {/* Subtle organic luxury ambient glow in background (non-neon) */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#F3F4F7] rounded-full blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Cols 1-6): Staggered Editorial Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            
            {/* Category / Super-header (No circle pointer) */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-[1.5px] bg-[#F32632]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#687086]">
                Revenue Management &amp; Commercial Advisory
              </span>
            </div>

            {/* Headline with luxury editorial balance */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10175F] font-heading leading-[1.08] mb-7">
              Turn hotel performance into{" "}
              <span className="font-editorial italic font-normal text-[#10175F]">
                profitable growth
              </span>
              .
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#687086] leading-relaxed max-w-xl mb-10 font-normal">
              Smarter pricing. Stronger distribution. Better commercial decisions.
              We help hotels uncover revenue opportunities and turn them into
              measurable business performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#10175F] text-white text-sm font-semibold tracking-wide hover:bg-[#17216F] shadow-lg hover:shadow-xl transition-luxury group"
              >
                <span>Discuss Your Hotel</span>
                <ArrowRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1.5 transition-transform duration-200" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-[#10175F] text-sm font-semibold hover:bg-[#F3F4F7] transition-luxury"
              >
                <span>Explore Our Approach</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </motion.a>
            </div>

            {/* Credibility Line (No circle pointer) */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs uppercase tracking-widest text-[#687086] font-medium">
                Revenue strategy built around your property&apos;s performance.
              </span>
            </div>

          </motion.div>

          {/* Right Column (Cols 7-12): Cinematic Photography with Seamless Floating Inset */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative overflow-hidden shadow-2xl bg-[#10175F] group">
              
              {/* Luxury Hospitality Architectural Imagery */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
                  alt="Curated luxury boutique hotel interior architecture with natural light"
                  fill
                  priority
                  unoptimized
                  className="object-cover object-center filter brightness-[0.96] contrast-[1.03] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10175F]/80 via-transparent to-black/10" />
                
                {/* Property Context Tag (No circle pointer) */}
                <div className="absolute top-5 left-5 z-10 px-3.5 py-1.5 bg-[#10175F]/85 backdrop-blur-md text-white text-[11px] font-mono tracking-wider uppercase">
                  Commercial Performance Study — Reference Profile
                </div>
              </div>

              {/* Integrated Editorial Data Overlay — Borderless, elevated luxury surface */}
              <div className="relative z-10 bg-white p-6 sm:p-7 shadow-lg">
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-[#10175F] uppercase tracking-wider font-heading">
                      Live Performance Pacing — Trailing 30D
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#687086] flex items-center gap-1">
                    <span className="text-[#10175F] font-semibold">+18.4%</span> RevPAR Index
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F32632]" />
                  </span>
                </div>

                {/* 3-Column Tabular Metric Grid (No harsh grid borders, clean tonal spacing) */}
                <div className="grid grid-cols-3 gap-4 sm:gap-8">
                  
                  {/* Occupancy */}
                  <div>
                    <div className="text-[11px] font-medium text-[#687086] uppercase tracking-wider mb-1">
                      Occupancy
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#10175F] font-mono-metric tracking-tight">
                      84.6%
                    </div>
                    <div className="text-[11px] text-[#687086] mt-1 font-mono">
                      <span className="text-[#10175F] font-semibold">+6.2%</span> vs CompSet
                    </div>
                  </div>

                  {/* ADR */}
                  <div>
                    <div className="text-[11px] font-medium text-[#687086] uppercase tracking-wider mb-1">
                      ADR
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#10175F] font-mono-metric tracking-tight">
                      $386.50
                    </div>
                    <div className="text-[11px] text-[#687086] mt-1 font-mono">
                      <span className="text-[#10175F] font-semibold">+$42.00</span> rate yield
                    </div>
                  </div>

                  {/* RevPAR */}
                  <div>
                    <div className="text-[11px] font-medium text-[#687086] uppercase tracking-wider mb-1">
                      RevPAR
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#10175F] font-mono-metric tracking-tight">
                      $326.98
                    </div>
                    <div className="text-[11px] text-[#687086] mt-1 font-mono">
                      <span className="text-[#F32632] font-semibold">+22.1%</span> net capture
                    </div>
                  </div>

                </div>

                {/* Micro trend note */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] text-[#687086]">
                  <span className="italic">
                    * Illustrative commercial model based on luxury independent asset optimization.
                  </span>
                  <span className="hidden sm:inline font-mono font-medium text-[#10175F]">
                    Dynamic Pricing Active
                  </span>
                </div>

              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
