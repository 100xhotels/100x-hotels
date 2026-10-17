"use client";

import React, { useState } from "react";
import { TrendingUp, Layers, Compass, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function CommercialOpportunity() {
  const [activeView, setActiveView] = useState<"rate-vs-demand" | "pickup-pace">("rate-vs-demand");

  return (
    <section id="opportunity" className="bg-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Split Composition Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Cols 1-5): Business Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-6 h-[1.5px] bg-[#F32632]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#687086] font-mono">
                The Commercial Opportunity
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10175F] tracking-tight font-heading leading-[1.12] mb-6">
              A better hotel business starts with{" "}
              <span className="font-editorial italic font-normal text-[#10175F]">
                better revenue decisions
              </span>
              .
            </h2>

            <p className="text-base sm:text-lg text-[#687086] leading-relaxed mb-10">
              Demand changes. Competitors adjust their rates. Booking channels
              influence profitability. The right strategy brings these moving
              parts together to help your property capture more of its potential.
            </p>

            {/* 3 Core Commercial Pillars (Clean borderless editorial layout) */}
            <div className="space-y-8">
              <div className="group">
                <h4 className="text-base font-bold text-[#10175F] mb-1.5 font-heading group-hover:text-[#F32632] transition-colors">
                  Dynamic Demand Elasticity
                </h4>
                <p className="text-sm text-[#687086] leading-relaxed">
                  Static rate grids fail to capture surge periods or protect occupancy during seasonal shoulder dips. Precision pricing reacts before compression peaks.
                </p>
              </div>

              <div className="group">
                <h4 className="text-base font-bold text-[#10175F] mb-1.5 font-heading group-hover:text-[#F32632] transition-colors">
                  Channel Margin Preservation
                </h4>
                <p className="text-sm text-[#687086] leading-relaxed">
                  Heavy reliance on high-commission OTA channels quietly erodes net operating income. Balanced distribution secures high-yield direct and corporate volume.
                </p>
              </div>

              <div className="group">
                <h4 className="text-base font-bold text-[#10175F] mb-1.5 font-heading group-hover:text-[#F32632] transition-colors">
                  CompSet Market Calibration
                </h4>
                <p className="text-sm text-[#687086] leading-relaxed">
                  Blind discounting during market softening forfeits rate integrity. Strategic positioning leverages property-specific value drivers against competitive benchmarks.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column (Cols 6-12): Custom-Designed Business Intelligence Artifact */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-[#F8F9FB] p-7 sm:p-10 shadow-xl">
              
              {/* Header of Business Intelligence Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-200/80 gap-4">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#687086]">
                    Revenue Modeling Artifact — 30-Day Rate &amp; Demand Pacing
                  </div>
                  <div className="text-xl font-bold text-[#10175F] font-heading mt-1">
                    Static Flat Pricing vs. 100X Yield Architecture
                  </div>
                </div>

                {/* View Switcher Pills */}
                <div className="inline-flex p-1 bg-white shadow-xs text-xs font-medium">
                  <button
                    onClick={() => setActiveView("rate-vs-demand")}
                    className={`px-4 py-2 transition-luxury ${
                      activeView === "rate-vs-demand"
                        ? "bg-[#10175F] text-white shadow-xs"
                        : "text-[#687086] hover:text-[#10175F]"
                    }`}
                  >
                    Yield Curve
                  </button>
                  <button
                    onClick={() => setActiveView("pickup-pace")}
                    className={`px-4 py-2 transition-luxury ${
                      activeView === "pickup-pace"
                        ? "bg-[#10175F] text-white shadow-xs"
                        : "text-[#687086] hover:text-[#10175F]"
                    }`}
                  >
                    Channel Net Margin
                  </button>
                </div>
              </div>

              {/* View 1: Animated Rate vs Demand Curve Chart */}
              <AnimatePresence mode="wait">
                {activeView === "rate-vs-demand" ? (
                  <motion.div
                    key="rate-curve"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Visual Chart Container */}
                    <div className="bg-white p-6 shadow-xs">
                      
                      {/* SVG Chart Graphic with Animated Stroke */}
                      <div className="w-full aspect-[16/9] sm:aspect-[2/1] relative">
                        <svg
                          viewBox="0 0 600 260"
                          className="w-full h-full overflow-visible"
                        >
                          {/* Grid lines */}
                          <line x1="50" y1="30" x2="570" y2="30" stroke="#F1F3F7" />
                          <line x1="50" y1="80" x2="570" y2="80" stroke="#F1F3F7" />
                          <line x1="50" y1="130" x2="570" y2="130" stroke="#F1F3F7" />
                          <line x1="50" y1="180" x2="570" y2="180" stroke="#F1F3F7" />
                          <line x1="50" y1="230" x2="570" y2="230" stroke="#E2E5EC" />

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
                          <rect x="290" y="20" width="130" height="210" fill="#F32632" fillOpacity="0.04" />
                          <line x1="290" y1="20" x2="290" y2="230" stroke="#F32632" strokeOpacity="0.3" strokeDasharray="2 2" />
                          <line x1="420" y1="20" x2="420" y2="230" stroke="#F32632" strokeOpacity="0.3" strokeDasharray="2 2" />
                          <text x="355" y="18" textAnchor="middle" fontSize="9" fontFamily="Inter" fontWeight="700" fill="#F32632" letterSpacing="0.05em">
                            HIGH COMPRESSION WINDOW
                          </text>

                          {/* Static Unoptimized Rate Curve (Flat line at $260) */}
                          <line
                            x1="50"
                            y1="170"
                            x2="570"
                            y2="170"
                            stroke="#CBD2E1"
                            strokeWidth="2"
                            strokeDasharray="4 4"
                          />
                          <text x="120" y="163" fontSize="10" fontFamily="Plus Jakarta Sans" fontWeight="500" fill="#687086">
                            Static Baseline ($275 fixed)
                          </text>

                          {/* Market Demand Index Curve */}
                          <path
                            d="M 50 200 C 130 190, 190 175, 270 120 C 330 70, 380 65, 430 90 C 490 120, 530 150, 570 160"
                            stroke="#94A3B8"
                            strokeWidth="1.5"
                            strokeDasharray="3 3"
                            fill="none"
                          />

                          {/* 100X Dynamic Rate Strategy Line */}
                          <motion.path
                            initial={{ pathLength: 0 }}
                            whileInView={{ pathLength: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            d="M 50 170 Q 150 160, 220 145 T 320 60 T 420 50 T 520 85 L 570 100"
                            stroke="#10175F"
                            strokeWidth="3.5"
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
                          <text x="377" y="95" textAnchor="middle" fontSize="9" fontFamily="Plus Jakarta Sans" fill="#F32632" fontWeight="600">
                            +$150 Yield Capture
                          </text>
                        </svg>
                      </div>

                      {/* Chart Legend (No circle pointers) */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5 border-t border-slate-100 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-1 bg-[#10175F]" />
                          <span className="font-semibold text-[#10175F]">100X Dynamic Rate Strategy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-0.5 bg-[#CBD2E1] border-b border-dashed border-[#CBD2E1]" />
                          <span className="text-[#687086]">Static Baseline Rate</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-1 bg-[#F32632]" />
                          <span className="text-[#10175F] font-medium">Demand Peak Trigger</span>
                        </div>
                      </div>
                    </div>

                    {/* Summary Metric Callouts below chart */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      <div className="bg-white p-4 shadow-xs">
                        <div className="text-[10px] uppercase font-mono text-[#687086]">ADR Yield Expansion</div>
                        <div className="text-2xl font-bold text-[#10175F] font-mono-metric mt-1">+$68.40</div>
                        <div className="text-[11px] text-[#687086] mt-0.5">during compression days</div>
                      </div>
                      <div className="bg-white p-4 shadow-xs">
                        <div className="text-[10px] uppercase font-mono text-[#687086]">RevPAR Growth</div>
                        <div className="text-2xl font-bold text-[#F32632] font-mono-metric mt-1">+24.8%</div>
                        <div className="text-[11px] text-[#687086] mt-0.5">net commercial lift</div>
                      </div>
                      <div className="bg-white p-4 shadow-xs col-span-2 sm:col-span-1">
                        <div className="text-[10px] uppercase font-mono text-[#687086]">Lead-Time Protection</div>
                        <div className="text-2xl font-bold text-[#10175F] font-mono-metric mt-1">18 Days</div>
                        <div className="text-[11px] text-[#687086] mt-0.5">unconstrained pace window</div>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="net-margin"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="bg-white p-6 sm:p-7 shadow-xs">
                      <div className="text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-6 font-heading">
                        Net Retained Revenue per $400 Room Night by Channel
                      </div>

                      <div className="space-y-5">
                        {/* Direct Website */}
                        <div>
                          <div className="flex justify-between text-xs mb-1.5 font-medium">
                            <span className="font-semibold text-[#10175F]">Brand Direct Web &amp; Loyalty</span>
                            <span className="font-mono font-bold text-[#10175F]">$382.00 net (95.5%)</span>
                          </div>
                          <div className="w-full h-3 bg-slate-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "95.5%" }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-[#10175F]"
                            />
                          </div>
                          <div className="text-[11px] text-[#687086] mt-1">Direct engine acquisition cost: 4.5%</div>
                        </div>

                        {/* Corporate / Consortia GDS */}
                        <div>
                          <div className="flex justify-between text-xs mb-1.5 font-medium">
                            <span className="font-semibold text-[#10175F]">Consortia &amp; Corporate GDS</span>
                            <span className="font-mono font-bold text-[#10175F]">$348.00 net (87.0%)</span>
                          </div>
                          <div className="w-full h-3 bg-slate-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "87%" }}
                              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                              className="h-full bg-[#17216F]"
                            />
                          </div>
                          <div className="text-[11px] text-[#687086] mt-1">Corporate travel manager negotiated rate</div>
                        </div>

                        {/* Standard Online Travel Agency */}
                        <div>
                          <div className="flex justify-between text-xs mb-1.5 font-medium">
                            <span className="font-semibold text-[#10175F]">Tier-1 Online Travel Agency (OTA)</span>
                            <span className="font-mono font-bold text-[#F32632]">$312.00 net (78.0%)</span>
                          </div>
                          <div className="w-full h-3 bg-slate-100 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: "78%" }}
                              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                              className="h-full bg-[#F32632]"
                            />
                          </div>
                          <div className="text-[11px] text-[#F32632] mt-1">22% commission drag on gross margin</div>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-[#F8F9FB] text-xs text-[#171A26] leading-relaxed">
                        <strong className="text-[#10175F]">Commercial Takeaway:</strong> Shifting 15% of bookings from high-commission OTAs into direct channels captures an immediate +$70,000 net operating profit for a 100-room property.
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
