"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-white pt-12 pb-20 md:pt-16 md:pb-28 lg:pt-20 lg:pb-32 border-b border-[#F3F4F7]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Cols 1-6): Oversized Typography & Commercial Narrative */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Category / Super-header */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#687086]">
                Revenue Management &amp; Commercial Advisory
              </span>
            </div>

            {/* Oversized Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#10175F] font-heading leading-[1.08] mb-7">
              Turn hotel performance into profitable growth.
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-[#687086] leading-relaxed max-w-xl mb-10 font-normal">
              Smarter pricing. Stronger distribution. Better commercial decisions.
              We help hotels uncover revenue opportunities and turn them into
              measurable business performance.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-8">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[#10175F] text-white text-sm font-semibold tracking-wide hover:bg-[#17216F] transition-all duration-150 group"
              >
                <span>Discuss Your Hotel</span>
                <ArrowRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-[#E2E5EC] text-[#10175F] text-sm font-semibold hover:border-[#10175F] hover:bg-[#F3F4F7] transition-all duration-150"
              >
                <span>Explore Our Approach</span>
              </a>
            </div>

            {/* Credibility Line */}
            <div className="pt-2 border-t border-[#F3F4F7]">
              <p className="text-xs uppercase tracking-wider text-[#687086] font-medium flex items-center gap-2">
                <span className="inline-block w-4 h-[1px] bg-[#687086]" />
                Revenue strategy built around your property&apos;s performance.
              </p>
            </div>

          </div>

          {/* Right Column (Cols 7-12): Cinematic Photography with Integrated Analytical Inset */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-none overflow-hidden shadow-2xl bg-[#10175F]">
              
              {/* Luxury Hospitality Architectural Imagery */}
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
                  alt="Curated luxury boutique hotel interior architecture with natural light"
                  fill
                  priority
                  className="object-cover object-center filter brightness-[0.96] contrast-[1.03]"
                />
                
                {/* Subtle vignette gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#10175F]/75 via-transparent to-black/15" />
                
                {/* Property Context Tag */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1.5 bg-[#10175F]/85 backdrop-blur-md text-white text-[11px] font-mono tracking-wider uppercase border border-white/10">
                  Commercial Performance Study — Reference Profile
                </div>
              </div>

              {/* Integrated Editorial Data Overlay — Anchored at bottom of image */}
              <div className="relative z-10 bg-white border-t-2 border-[#10175F] p-5 sm:p-6">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E5EC]">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F32632]" />
                    <span className="text-xs font-semibold text-[#10175F] uppercase tracking-wider">
                      Live Performance Pacing — Trailing 30D
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-[#687086] flex items-center gap-1">
                    <span className="text-[#10175F] font-semibold">+18.4%</span> RevPAR Index
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F32632]" />
                  </span>
                </div>

                {/* 3-Column Tabular Metric Grid */}
                <div className="grid grid-cols-3 gap-3 sm:gap-6 divide-x divide-[#E2E5EC]">
                  
                  {/* Occupancy */}
                  <div className="pr-2 sm:pr-4">
                    <div className="text-[11px] font-medium text-[#687086] uppercase tracking-wider mb-1">
                      Occupancy
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#10175F] font-mono-metric tracking-tight">
                      84.6%
                    </div>
                    <div className="text-[11px] text-[#687086] mt-0.5 font-mono">
                      <span className="text-[#10175F] font-medium">+6.2%</span> vs CompSet
                    </div>
                  </div>

                  {/* ADR */}
                  <div className="px-2 sm:px-4">
                    <div className="text-[11px] font-medium text-[#687086] uppercase tracking-wider mb-1">
                      ADR
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#10175F] font-mono-metric tracking-tight">
                      $386.50
                    </div>
                    <div className="text-[11px] text-[#687086] mt-0.5 font-mono">
                      <span className="text-[#10175F] font-medium">+$42.00</span> rate yield
                    </div>
                  </div>

                  {/* RevPAR */}
                  <div className="pl-2 sm:pl-4">
                    <div className="text-[11px] font-medium text-[#687086] uppercase tracking-wider mb-1">
                      RevPAR
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#10175F] font-mono-metric tracking-tight">
                      $326.98
                    </div>
                    <div className="text-[11px] text-[#687086] mt-0.5 font-mono">
                      <span className="text-[#F32632] font-semibold">+22.1%</span> net capture
                    </div>
                  </div>

                </div>

                {/* Micro trend note */}
                <div className="mt-4 pt-3 border-t border-[#F3F4F7] flex items-center justify-between text-[11px] text-[#687086]">
                  <span className="italic">
                    * Illustrative commercial model based on luxury independent asset optimization.
                  </span>
                  <span className="hidden sm:inline font-mono font-medium text-[#10175F]">
                    Dynamic Pricing Active
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
