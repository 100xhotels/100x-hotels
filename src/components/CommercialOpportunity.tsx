"use client";

import React, { useState } from "react";
import { TrendingUp, Layers, Compass, ArrowRight } from "lucide-react";

export function CommercialOpportunity() {
  const [activeView, setActiveView] = useState<"rate-vs-demand" | "pickup-pace">("rate-vs-demand");

  return (
    <section id="opportunity" className="bg-white py-24 lg:py-32 border-b border-[#F3F4F7]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Split Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Cols 1-5): Business Narrative */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
              <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#687086]">
                The Commercial Opportunity
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10175F] tracking-tight font-heading leading-[1.12] mb-6">
              A better hotel business starts with better revenue decisions.
            </h2>

            <p className="text-base sm:text-lg text-[#687086] leading-relaxed mb-8">
              Demand changes. Competitors adjust their rates. Booking channels
              influence profitability. The right strategy brings these moving
              parts together to help your property capture more of its potential.
            </p>

            {/* 3 Core Commercial Pillars */}
            <div className="space-y-6 pt-2 border-t border-[#E2E5EC]">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none bg-[#F3F4F7] border border-[#E2E5EC] flex items-center justify-center shrink-0 text-[#10175F] mt-0.5">
                  <TrendingUp className="w-4 h-4 text-[#10175F]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10175F] mb-1 font-heading">
                    Dynamic Demand Elasticity
                  </h4>
                  <p className="text-xs text-[#687086] leading-relaxed">
                    Static rate grids fail to capture surge periods or protect occupancy during seasonal shoulder dips. Precision pricing reacts before compression peaks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none bg-[#F3F4F7] border border-[#E2E5EC] flex items-center justify-center shrink-0 text-[#10175F] mt-0.5">
                  <Layers className="w-4 h-4 text-[#10175F]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10175F] mb-1 font-heading">
                    Channel Margin Preservation
                  </h4>
                  <p className="text-xs text-[#687086] leading-relaxed">
                    Heavy reliance on high-commission OTA channels quietly erodes net operating income. Balanced distribution secures high-yield direct and corporate volume.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-none bg-[#F3F4F7] border border-[#E2E5EC] flex items-center justify-center shrink-0 text-[#10175F] mt-0.5">
                  <Compass className="w-4 h-4 text-[#10175F]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#10175F] mb-1 font-heading">
                    CompSet Market Calibration
                  </h4>
                  <p className="text-xs text-[#687086] leading-relaxed">
                    Blind discounting during market softening forfeits rate integrity. Strategic positioning leverages property-specific value drivers against competitive benchmarks.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column (Cols 6-12): Custom-Designed Business Intelligence Artifact */}
          <div className="lg:col-span-7">
            <div className="bg-[#F3F4F7] border border-[#E2E5EC] p-6 sm:p-8 relative">
              
              {/* Header of Business Intelligence Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 mb-6 border-b border-[#E2E5EC] gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#687086]">
                    Revenue Modeling Artifact — 30-Day Rate &amp; Demand Pacing
                  </div>
                  <div className="text-lg font-bold text-[#10175F] font-heading mt-0.5">
                    Unoptimized Flat Pricing vs. 100X Yield Architecture
                  </div>
                </div>

                {/* View Switcher Pills */}
                <div className="inline-flex p-1 bg-white border border-[#E2E5EC] text-xs font-medium">
                  <button
                    onClick={() => setActiveView("rate-vs-demand")}
                    className={`px-3 py-1.5 transition-colors ${
                      activeView === "rate-vs-demand"
                        ? "bg-[#10175F] text-white"
                        : "text-[#687086] hover:text-[#10175F]"
                    }`}
                  >
                    Yield Curve
                  </button>
                  <button
                    onClick={() => setActiveView("pickup-pace")}
                    className={`px-3 py-1.5 transition-colors ${
                      activeView === "pickup-pace"
                        ? "bg-[#10175F] text-white"
                        : "text-[#687086] hover:text-[#10175F]"
                    }`}
                  >
                    Channel Net Margin
                  </button>
                </div>
              </div>

              {/* View 1: Rate vs Demand Curve Chart */}
              {activeView === "rate-vs-demand" && (
                <div className="space-y-6">
                  {/* Visual Chart Container */}
                  <div className="bg-white p-5 border border-[#E2E5EC] relative">
                    
                    {/* SVG Chart Graphic */}
                    <div className="w-full aspect-[16/9] sm:aspect-[2/1] relative">
                      <svg
                        viewBox="0 0 600 260"
                        className="w-full h-full overflow-visible"
                      >
                        {/* Grid lines */}
                        <line x1="50" y1="30" x2="570" y2="30" stroke="#E2E5EC" strokeDasharray="3 3" />
                        <line x1="50" y1="80" x2="570" y2="80" stroke="#E2E5EC" strokeDasharray="3 3" />
                        <line x1="50" y1="130" x2="570" y2="130" stroke="#E2E5EC" strokeDasharray="3 3" />
                        <line x1="50" y1="180" x2="570" y2="180" stroke="#E2E5EC" strokeDasharray="3 3" />
                        <line x1="50" y1="230" x2="570" y2="230" stroke="#CAD0DE" />

                        {/* Y-axis labels */}
                        <text x="42" y="34" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">$440</text>
                        <text x="42" y="84" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">$380</text>
                        <text x="42" y="134" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">$320</text>
                        <text x="42" y="184" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">$260</text>
                        <text x="42" y="234" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">$200</text>

                        {/* X-axis labels */}
                        <text x="50" y="248" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">D-30</text>
                        <text x="180" y="248" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">D-20</text>
                        <text x="310" y="248" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">D-10 (Compression)</text>
                        <text x="440" y="248" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">D-5</text>
                        <text x="560" y="248" textAnchor="end" fontSize="10" fontFamily="JetBrains Mono" fill="#687086">Stay Date</text>

                        {/* Compression Event Highlight Column */}
                        <rect x="290" y="20" width="130" height="210" fill="#F32632" fillOpacity="0.05" />
                        <line x1="290" y1="20" x2="290" y2="230" stroke="#F32632" strokeOpacity="0.3" strokeDasharray="2 2" />
                        <line x1="420" y1="20" x2="420" y2="230" stroke="#F32632" strokeOpacity="0.3" strokeDasharray="2 2" />
                        <text x="355" y="18" textAnchor="middle" fontSize="9" fontFamily="Inter" fontWeight="700" fill="#F32632" letterSpacing="0.05em">
                          HIGH COMPRESSION WINDOW
                        </text>

                        {/* Area of Upside Captured (Gradient between 100X rate and static rate) */}
                        <path
                          d="M 50 170 Q 150 160, 220 145 T 320 60 T 420 50 T 520 85 L 570 100 L 570 170 L 50 170 Z"
                          fill="#10175F"
                          fillOpacity="0.07"
                        />

                        {/* Static Unoptimized Rate Curve (Flat grey line at $260) */}
                        <path
                          d="M 50 170 L 570 170"
                          stroke="#94A3B8"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                        />
                        <text x="120" y="164" fontSize="10" fontFamily="Inter" fontWeight="500" fill="#687086">
                          Static Rack Rate ($275 fixed)
                        </text>

                        {/* Market Demand Index Curve (Smooth Slate Blue Line) */}
                        <path
                          d="M 50 200 C 130 190, 190 175, 270 120 C 330 70, 380 65, 430 90 C 490 120, 530 150, 570 160"
                          stroke="#687086"
                          strokeWidth="1.5"
                          strokeDasharray="2 2"
                          fill="none"
                        />

                        {/* 100X Dynamic Rate Strategy Line (Signal Red & Midnight Navy) */}
                        <path
                          d="M 50 170 Q 150 160, 220 145 T 320 60 T 420 50 T 520 85 L 570 100"
                          stroke="#10175F"
                          strokeWidth="3"
                          fill="none"
                        />

                        {/* Peak Point on 100X Curve */}
                        <circle cx="370" cy="52" r="5" fill="#F32632" />
                        <circle cx="370" cy="52" r="10" fill="#F32632" fillOpacity="0.2" />

                        {/* Data Callout at Peak */}
                        <rect x="330" y="68" width="95" height="34" fill="#10175F" rx="0" />
                        <text x="377" y="82" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700" fill="#FFFFFF">
                          $425.00 ADR
                        </text>
                        <text x="377" y="95" textAnchor="middle" fontSize="9" fontFamily="Inter" fill="#F32632" fontWeight="600">
                          +$150 Yield Capture
                        </text>
                      </svg>
                    </div>

                    {/* Chart Legend */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mt-4 pt-4 border-t border-[#E2E5EC] text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-1 bg-[#10175F]" />
                        <span className="font-semibold text-[#10175F]">100X Dynamic Rate Strategy</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-0.5 bg-[#94A3B8] border-b border-dashed border-[#94A3B8]" />
                        <span className="text-[#687086]">Static Baseline Rate</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#F32632]" />
                        <span className="text-[#10175F] font-medium">Demand Peak Trigger</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Metric Callouts below the chart */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-white p-3.5 border border-[#E2E5EC]">
                      <div className="text-[10px] uppercase font-mono text-[#687086]">ADR Yield Expansion</div>
                      <div className="text-xl font-bold text-[#10175F] font-mono-metric mt-0.5">+$68.40</div>
                      <div className="text-[11px] text-[#687086]">during compression days</div>
                    </div>
                    <div className="bg-white p-3.5 border border-[#E2E5EC]">
                      <div className="text-[10px] uppercase font-mono text-[#687086]">RevPAR Growth</div>
                      <div className="text-xl font-bold text-[#F32632] font-mono-metric mt-0.5">+24.8%</div>
                      <div className="text-[11px] text-[#687086]">net commercial lift</div>
                    </div>
                    <div className="bg-white p-3.5 border border-[#E2E5EC] col-span-2 sm:col-span-1">
                      <div className="text-[10px] uppercase font-mono text-[#687086]">Lead-Time Protection</div>
                      <div className="text-xl font-bold text-[#10175F] font-mono-metric mt-0.5">18 Days</div>
                      <div className="text-[11px] text-[#687086]">unconstrained pace window</div>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Channel Net Margin Waterfall */}
              {activeView === "pickup-pace" && (
                <div className="space-y-6">
                  <div className="bg-white p-5 border border-[#E2E5EC]">
                    <div className="text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-4">
                      Net Retained Revenue per $400 Room Night by Channel
                    </div>

                    <div className="space-y-4">
                      {/* Direct Website */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-[#10175F]">Brand Direct Web &amp; Loyalty</span>
                          <span className="font-mono font-bold text-[#10175F]">$382.00 net (95.5%)</span>
                        </div>
                        <div className="w-full h-3 bg-[#F3F4F7]">
                          <div className="h-full bg-[#10175F]" style={{ width: "95.5%" }} />
                        </div>
                        <div className="text-[11px] text-[#687086] mt-0.5">Direct engine acquisition cost: 4.5%</div>
                      </div>

                      {/* Corporate / Consortia GDS */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-[#10175F]">Consortia &amp; Corporate GDS</span>
                          <span className="font-mono font-bold text-[#10175F]">$348.00 net (87.0%)</span>
                        </div>
                        <div className="w-full h-3 bg-[#F3F4F7]">
                          <div className="h-full bg-[#17216F]" style={{ width: "87%" }} />
                        </div>
                        <div className="text-[11px] text-[#687086] mt-0.5">Corporate travel manager negotiated rate</div>
                      </div>

                      {/* Standard Online Travel Agency */}
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="font-semibold text-[#10175F]">Tier-1 Online Travel Agency (OTA)</span>
                          <span className="font-mono font-bold text-[#F32632]">$312.00 net (78.0%)</span>
                        </div>
                        <div className="w-full h-3 bg-[#F3F4F7]">
                          <div className="h-full bg-[#F32632]" style={{ width: "78%" }} />
                        </div>
                        <div className="text-[11px] text-[#F32632] mt-0.5">22% commission drag on gross margin</div>
                      </div>
                    </div>

                    <div className="mt-6 p-3.5 bg-[#F3F4F7] border-l-2 border-[#10175F] text-xs text-[#171A26]">
                      <span className="font-semibold text-[#10175F]">Commercial Takeaway:</span> Shifting 15% of bookings from high-commission OTAs into direct channels captures an immediate +$70,000 net operating profit for a 100-room property.
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
