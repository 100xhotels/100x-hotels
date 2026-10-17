"use client";

import React from "react";
import { ArrowUpRight, BarChart3, GitFork, Compass } from "lucide-react";

interface CoreServicesProps {
  onOpenConsultation: () => void;
}

export function CoreServices({ onOpenConsultation }: CoreServicesProps) {
  return (
    <section id="services" className="bg-[#F3F4F7] py-24 lg:py-32 border-b border-[#E2E5EC]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
            <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#687086]">
              Core Capabilities
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10175F] tracking-tight font-heading leading-tight mb-4">
            Every lever that moves hotel revenue.
          </h2>

          <p className="text-lg text-[#687086] leading-relaxed">
            An integrated approach to pricing, distribution, and commercial performance.
          </p>
        </div>

        {/* 3 Visually Distinct Service Modules (Not 3 identical rounded rectangles!) */}
        <div className="space-y-8">
          
          {/* Module 01 — Revenue Strategy & Pricing */}
          <div className="bg-white border border-[#E2E5EC] p-8 sm:p-10 lg:p-12 hover:border-[#10175F] transition-colors duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                    01
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#F32632]">
                    Pricing Architecture
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#10175F] font-heading mb-4">
                  Revenue Strategy &amp; Pricing
                </h3>

                <p className="text-base text-[#687086] leading-relaxed mb-6">
                  Make more informed pricing decisions based on demand, market conditions, booking pace, and your hotel&apos;s commercial goals.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#F3F4F7] mb-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-[#10175F] tracking-wider mb-1">
                      Dynamic Rate Elasticity
                    </div>
                    <div className="text-xs text-[#687086]">
                      Tiered rate ladders responsive to pickup velocity and stay dates.
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-[#10175F] tracking-wider mb-1">
                      CompSet Positioning
                    </div>
                    <div className="text-xs text-[#687086]">
                      Pricing power protected without arbitrary reactive discounting.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#10175F] hover:text-[#F32632] transition-colors group"
                >
                  <span>Evaluate your property&apos;s pricing architecture</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Right Visual Treatment: Dynamic Price Ladder Simulation Graphic */}
              <div className="lg:col-span-6">
                <div className="bg-[#F3F4F7] border border-[#E2E5EC] p-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E5EC]">
                    <span className="text-xs font-mono font-semibold text-[#10175F] uppercase">
                      Dynamic Rate Ladder Simulation
                    </span>
                    <span className="text-[11px] font-mono text-[#687086]">Active Pace Engine</span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      { band: "Tier 4 (Compression)", occ: "> 88% Occ", rate: "$485", tag: "Peak Yield", active: true },
                      { band: "Tier 3 (Accelerated)", occ: "75% - 88%", rate: "$420", tag: "Demand Surge", active: false },
                      { band: "Tier 2 (Base Optimum)", occ: "60% - 75%", rate: "$365", tag: "Base Pace", active: false },
                      { band: "Tier 1 (Base Floor)", occ: "< 60% Occ", rate: "$310", tag: "Volume Protection", active: false },
                    ].map((row, i) => (
                      <div
                        key={i}
                        className={`flex items-center justify-between p-3 border transition-colors ${
                          row.active
                            ? "bg-[#10175F] text-white border-[#10175F]"
                            : "bg-white text-[#171A26] border-[#E2E5EC]"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              row.active ? "bg-[#F32632]" : "bg-[#94A3B8]"
                            }`}
                          />
                          <span className="text-xs font-medium">{row.band}</span>
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
          </div>

          {/* Module 02 — Distribution & Channel Performance */}
          <div className="bg-white border border-[#E2E5EC] p-8 sm:p-10 lg:p-12 hover:border-[#10175F] transition-colors duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                    02
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#F32632]">
                    Channel Profitability
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#10175F] font-heading mb-4">
                  Distribution &amp; Channel Performance
                </h3>

                <p className="text-base text-[#687086] leading-relaxed mb-6">
                  Strengthen your online distribution strategy and make more informed decisions about booking channels, visibility, and acquisition costs.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#F3F4F7] mb-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-[#10175F] tracking-wider mb-1">
                      Direct Engine Calibration
                    </div>
                    <div className="text-xs text-[#687086]">
                      Reducing acquisition cost while strengthening direct guest relationships.
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-[#10175F] tracking-wider mb-1">
                      OTA Cost Containment
                    </div>
                    <div className="text-xs text-[#687086]">
                      Optimizing channel margins and eliminating inventory cannibalization.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#10175F] hover:text-[#F32632] transition-colors group"
                >
                  <span>Review your distribution profitability mix</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Right Visual Treatment: Channel Net Retention Graphic */}
              <div className="lg:col-span-6">
                <div className="bg-[#10175F] text-white p-6 relative overflow-hidden">
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                    <span className="text-xs font-mono font-semibold uppercase text-slate-200">
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

                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Target channel allocation: 45%+ Direct</span>
                    <span className="font-mono text-white">+14.6% margin gain</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Module 03 — Performance Analytics & Forecasting */}
          <div className="bg-white border border-[#E2E5EC] p-8 sm:p-10 lg:p-12 hover:border-[#10175F] transition-colors duration-200">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Details */}
              <div className="lg:col-span-6">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                    03
                  </span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#F32632]">
                    Intelligence &amp; Pace
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-[#10175F] font-heading mb-4">
                  Performance Analytics &amp; Forecasting
                </h3>

                <p className="text-base text-[#687086] leading-relaxed mb-6">
                  Understand the numbers behind your business, identify emerging opportunities, and turn performance insights into a clearer commercial plan.
                </p>

                <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#F3F4F7] mb-6">
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-[#10175F] tracking-wider mb-1">
                      Unconstrained Demand
                    </div>
                    <div className="text-xs text-[#687086]">
                      Quantifying true willingness-to-pay beyond constrained capacity.
                    </div>
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold uppercase text-[#10175F] tracking-wider mb-1">
                      Forward Pacing Curves
                    </div>
                    <div className="text-xs text-[#687086]">
                      Evaluating booking velocity vs historical pace and market lead-time.
                    </div>
                  </div>
                </div>

                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#10175F] hover:text-[#F32632] transition-colors group"
                >
                  <span>Examine your hotel&apos;s forward commercial pacing</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>

              {/* Right Visual Treatment: Forward 90-Day Forecast Pacing Sparkline */}
              <div className="lg:col-span-6">
                <div className="bg-[#F3F4F7] border border-[#E2E5EC] p-6">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E2E5EC]">
                    <span className="text-xs font-mono font-semibold text-[#10175F] uppercase">
                      Forward 90-Day Booking Pace vs. Target
                    </span>
                    <span className="text-[11px] font-mono font-semibold text-[#10175F]">
                      +12.8% Pace Surplus
                    </span>
                  </div>

                  <div className="bg-white p-4 border border-[#E2E5EC]">
                    <svg viewBox="0 0 500 130" className="w-full h-auto">
                      {/* Grid */}
                      <line x1="20" y1="20" x2="480" y2="20" stroke="#F3F4F7" />
                      <line x1="20" y1="65" x2="480" y2="65" stroke="#F3F4F7" />
                      <line x1="20" y1="110" x2="480" y2="110" stroke="#E2E5EC" />

                      {/* Historical Budget Curve (Dashed) */}
                      <path
                        d="M 20 100 C 120 95, 220 80, 320 60 C 400 45, 450 35, 480 30"
                        stroke="#94A3B8"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                        fill="none"
                      />

                      {/* Current Year Pacing Curve (Navy) */}
                      <path
                        d="M 20 100 C 120 85, 200 65, 300 42 C 380 25, 440 18, 480 15"
                        stroke="#10175F"
                        strokeWidth="2.5"
                        fill="none"
                      />

                      {/* Marker */}
                      <circle cx="300" cy="42" r="4" fill="#F32632" />
                      <text x="300" y="32" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700" fill="#10175F">
                        +14.2% Pick-up
                      </text>
                    </svg>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-[#F3F4F7] text-[11px] text-[#687086]">
                      <span>D+30 Forecast</span>
                      <span>D+60 Forecast</span>
                      <span className="font-semibold text-[#10175F]">D+90 Forecast</span>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between text-xs text-[#687086]">
                    <span>Target RevPAR: <strong className="text-[#10175F] font-mono">$342.00</strong></span>
                    <span>Projected: <strong className="text-[#F32632] font-mono">$386.50</strong></span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
