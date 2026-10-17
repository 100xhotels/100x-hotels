"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface CoreServicesProps {
  onOpenConsultation: () => void;
}

export function CoreServices({ onOpenConsultation }: CoreServicesProps) {
  return (
    <section id="services" className="bg-[#F8F9FB] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1.5px] bg-[#F32632]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#687086] font-mono">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10175F] tracking-tight font-heading leading-tight mb-5">
            Every lever that moves{" "}
            <span className="font-editorial italic font-normal text-[#10175F]">
              hotel revenue
            </span>
            .
          </h2>

          <p className="text-lg text-[#687086] leading-relaxed">
            An integrated approach to pricing, distribution, and commercial performance.
          </p>
        </motion.div>

        {/* 3 Visually Distinct Service Modules (Elevated, luxury design agency style) */}
        <div className="space-y-12">
          
          {/* Module 01 — Revenue Strategy & Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-2xl transition-luxury"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                    01
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#F32632] font-mono">
                    Pricing Architecture
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#10175F] font-heading mb-4">
                  Revenue Strategy &amp; Pricing
                </h3>

                <p className="text-base text-[#687086] leading-relaxed mb-8">
                  Make more informed pricing decisions based on demand, market conditions, booking pace, and your hotel&apos;s commercial goals.
                </p>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-100 mb-8">
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#10175F] tracking-wider mb-1 font-heading">
                      Dynamic Rate Elasticity
                    </div>
                    <div className="text-xs text-[#687086] leading-relaxed">
                      Tiered rate ladders responsive to pickup velocity and stay dates.
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#10175F] tracking-wider mb-1 font-heading">
                      CompSet Positioning
                    </div>
                    <div className="text-xs text-[#687086] leading-relaxed">
                      Pricing power protected without arbitrary reactive discounting.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#10175F] hover:text-[#F32632] transition-colors group"
                >
                  <span>Evaluate your property&apos;s pricing architecture</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Right Visual Treatment: Dynamic Price Ladder Simulation */}
              <div className="lg:col-span-6">
                <div className="bg-[#F8F9FB] p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200/80">
                    <span className="text-xs font-mono font-semibold text-[#10175F] uppercase tracking-wider">
                      Dynamic Rate Ladder Simulation
                    </span>
                    <span className="text-[11px] font-mono text-[#687086]">Active Pace Engine</span>
                  </div>

                  <div className="space-y-3">
                    {[
                      { band: "Tier 4 (Compression)", occ: "> 88% Occ", rate: "$485", active: true },
                      { band: "Tier 3 (Accelerated)", occ: "75% - 88%", rate: "$420", active: false },
                      { band: "Tier 2 (Base Optimum)", occ: "60% - 75%", rate: "$365", active: false },
                      { band: "Tier 1 (Base Floor)", occ: "< 60% Occ", rate: "$310", active: false },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-4 transition-luxury ${
                          row.active
                            ? "bg-[#10175F] text-white shadow-md scale-[1.01]"
                            : "bg-white text-[#171A26] shadow-2xs hover:shadow-xs"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`text-xs font-medium ${row.active ? "text-white" : "text-[#10175F]"}`}>
                            {row.band}
                          </span>
                        </div>
                        <div className="flex items-center gap-6">
                          <span className={`text-xs font-mono ${row.active ? "text-slate-300" : "text-[#687086]"}`}>
                            {row.occ}
                          </span>
                          <span className={`text-sm font-bold font-mono ${row.active ? "text-white" : "text-[#10175F]"}`}>
                            {row.rate}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Module 02 — Distribution & Channel Performance */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-2xl transition-luxury"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                    02
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#F32632] font-mono">
                    Channel Profitability
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#10175F] font-heading mb-4">
                  Distribution &amp; Channel Performance
                </h3>

                <p className="text-base text-[#687086] leading-relaxed mb-8">
                  Strengthen your online distribution strategy and make more informed decisions about booking channels, visibility, and acquisition costs.
                </p>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-100 mb-8">
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#10175F] tracking-wider mb-1 font-heading">
                      Direct Engine Calibration
                    </div>
                    <div className="text-xs text-[#687086] leading-relaxed">
                      Reducing acquisition cost while strengthening direct guest relationships.
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#10175F] tracking-wider mb-1 font-heading">
                      OTA Cost Containment
                    </div>
                    <div className="text-xs text-[#687086] leading-relaxed">
                      Optimizing channel margins and eliminating inventory cannibalization.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#10175F] hover:text-[#F32632] transition-colors group"
                >
                  <span>Review your distribution profitability mix</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Right Visual Treatment: Channel Net Retention Graphic */}
              <div className="lg:col-span-6">
                <div className="bg-[#10175F] text-white p-7 sm:p-8 shadow-xl">
                  <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/10">
                    <span className="text-xs font-mono font-semibold uppercase text-slate-200 tracking-wider">
                      Channel Contribution Matrix
                    </span>
                    <span className="text-[11px] font-mono text-[#F32632] font-semibold">
                      Net Operating Margin
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-white">Brand Direct Website</span>
                        <span className="font-mono text-white font-bold">95.2% Net Margin</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10">
                        <div className="h-full bg-white" style={{ width: "95.2%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-slate-300">Corporate &amp; Negotiated GDS</span>
                        <span className="font-mono text-slate-200">86.4% Net Margin</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10">
                        <div className="h-full bg-slate-300" style={{ width: "86.4%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-slate-400">Wholesale &amp; Tour Operators</span>
                        <span className="font-mono text-slate-300">81.0% Net Margin</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10">
                        <div className="h-full bg-slate-400" style={{ width: "81.0%" }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5 font-medium">
                        <span className="text-slate-400">Online Travel Agencies (OTAs)</span>
                        <span className="font-mono text-[#F32632] font-semibold">78.0% Net Margin</span>
                      </div>
                      <div className="w-full h-2.5 bg-white/10">
                        <div className="h-full bg-[#F32632]" style={{ width: "78.0%" }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Target allocation: 45%+ Direct Mix</span>
                    <span className="font-mono text-white font-semibold">+14.6% margin gain</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Module 03 — Performance Analytics & Forecasting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-8 sm:p-12 lg:p-14 shadow-lg hover:shadow-2xl transition-luxury"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                    03
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#F32632] font-mono">
                    Intelligence &amp; Pace
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#10175F] font-heading mb-4">
                  Performance Analytics &amp; Forecasting
                </h3>

                <p className="text-base text-[#687086] leading-relaxed mb-8">
                  Understand the numbers behind your business, identify emerging opportunities, and turn performance insights into a clearer commercial plan.
                </p>

                <div className="grid grid-cols-2 gap-6 py-6 border-y border-slate-100 mb-8">
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#10175F] tracking-wider mb-1 font-heading">
                      Unconstrained Demand
                    </div>
                    <div className="text-xs text-[#687086] leading-relaxed">
                      Quantifying true willingness-to-pay beyond constrained capacity.
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase text-[#10175F] tracking-wider mb-1 font-heading">
                      Forward Pacing Curves
                    </div>
                    <div className="text-xs text-[#687086] leading-relaxed">
                      Evaluating booking velocity vs historical pace and market lead-time.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#10175F] hover:text-[#F32632] transition-colors group"
                >
                  <span>Examine your hotel&apos;s forward commercial pacing</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Right Visual Treatment: Forward 90-Day Forecast Pacing Sparkline */}
              <div className="lg:col-span-6">
                <div className="bg-[#F8F9FB] p-6 sm:p-7 shadow-xs">
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-200/80">
                    <span className="text-xs font-mono font-semibold text-[#10175F] uppercase tracking-wider">
                      Forward 90-Day Booking Pace vs. Target
                    </span>
                    <span className="text-xs font-mono font-semibold text-[#10175F]">
                      +12.8% Pace Surplus
                    </span>
                  </div>

                  <div className="bg-white p-5 shadow-xs">
                    <svg viewBox="0 0 500 130" className="w-full h-auto">
                      <line x1="20" y1="20" x2="480" y2="20" stroke="#F8F9FB" />
                      <line x1="20" y1="65" x2="480" y2="65" stroke="#F8F9FB" />
                      <line x1="20" y1="110" x2="480" y2="110" stroke="#E2E5EC" />

                      <path
                        d="M 20 100 C 120 95, 220 80, 320 60 C 400 45, 450 35, 480 30"
                        stroke="#CBD2E1"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        fill="none"
                      />

                      <motion.path
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        d="M 20 100 C 120 85, 200 65, 300 42 C 380 25, 440 18, 480 15"
                        stroke="#10175F"
                        strokeWidth="2.5"
                        fill="none"
                      />

                      <circle cx="300" cy="42" r="4" fill="#F32632" />
                      <text x="300" y="32" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700" fill="#10175F">
                        +14.2% Pick-up
                      </text>
                    </svg>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-100 text-xs text-[#687086]">
                      <span>D+30 Forecast</span>
                      <span>D+60 Forecast</span>
                      <span className="font-semibold text-[#10175F]">D+90 Forecast</span>
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between text-xs text-[#687086]">
                    <span>Target RevPAR: <strong className="text-[#10175F] font-mono">$342.00</strong></span>
                    <span>Projected: <strong className="text-[#F32632] font-mono font-bold">$386.50</strong></span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
