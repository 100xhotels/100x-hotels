"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  BarChart2,
  Calendar,
  Layers,
  SlidersHorizontal,
  ChevronRight,
  Info,
} from "lucide-react";

export function CommercialIntelligenceShowcase() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "compset" | "calendar" | "pacing"
  >("overview");

  return (
    <section
      id="intelligence"
      className="bg-[#10175F] text-white py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Subtle architectural background depth */}
      <div className="absolute inset-0 bg-radial-[at_top_right] from-[#17216F] via-[#10175F] to-[#0D1248] opacity-80" />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 lg:mb-18">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300">
              Commercial Intelligence
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight mb-4">
            See the opportunity behind the numbers.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Bring pricing, demand, and property performance into a clearer
            picture — so your next commercial decision starts with context.
          </p>
        </div>

        {/* Master Showcase Terminal / Editorial Data Graphic */}
        <div className="bg-[#121B66] border border-white/10 rounded-none shadow-2xl overflow-hidden">
          
          {/* Top Control Bar */}
          <div className="bg-[#0E1552] border-b border-white/10 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F32632]" />
              <div className="text-xs font-mono uppercase tracking-wider text-slate-200">
                Asset Intelligence Inset — <span className="text-white font-semibold">The Grand Heritage (118 Keys)</span>
              </div>
              <span className="hidden sm:inline text-xs text-slate-400">|</span>
              <span className="hidden sm:inline text-xs font-mono text-slate-400">CompSet Index: 118.4 RGI</span>
            </div>

            {/* Interactive View Switcher Tabs */}
            <div className="flex flex-wrap items-center gap-1">
              {[
                { id: "overview", label: "Commercial Overview", icon: BarChart2 },
                { id: "compset", label: "CompSet Benchmark", icon: SlidersHorizontal },
                { id: "calendar", label: "Demand Calendar", icon: Calendar },
                { id: "pacing", label: "Booking Pace", icon: TrendingUp },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as typeof activeTab)}
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium transition-all ${
                      isActive
                        ? "bg-[#17216F] text-white border border-white/20 shadow-xs"
                        : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#F32632]" : "text-slate-400"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Top KPI Summary Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10 bg-[#10175F]/50">
            
            {/* Metric 1: ADR */}
            <div className="p-5 sm:p-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Average Daily Rate (ADR)
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-metric text-white">
                $394.50
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-1 font-mono">
                <span className="text-[#F32632] font-semibold">+$48.20</span> vs CompSet avg
              </div>
            </div>

            {/* Metric 2: RevPAR */}
            <div className="p-5 sm:p-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                RevPAR (Yield Index)
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-metric text-white">
                $339.27
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-1 font-mono">
                <span className="text-emerald-400 font-semibold">+22.4%</span> net performance
              </div>
            </div>

            {/* Metric 3: Occupancy */}
            <div className="p-5 sm:p-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Occupancy (30D Trailing)
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-metric text-white">
                86.0%
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-1 font-mono">
                <span className="text-slate-200 font-medium">+7.4 pts</span> market share
              </div>
            </div>

            {/* Metric 4: Direct Channel Share */}
            <div className="p-5 sm:p-6">
              <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                Direct Net Booking Mix
              </div>
              <div className="text-2xl sm:text-3xl font-bold font-mono-metric text-white">
                48.2%
              </div>
              <div className="text-xs text-slate-300 mt-1 flex items-center gap-1 font-mono">
                <span className="text-[#F32632] font-semibold">-18%</span> OTA commission drag
              </div>
            </div>

          </div>

          {/* Tab 1: Commercial Overview & Pacing Curve */}
          {activeTab === "overview" && (
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-2">
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    Property Revenue Pacing &amp; Demand Velocity
                  </h4>
                  <p className="text-xs text-slate-400">
                    Trailing 30-day ADR yield realization against market unconstrained demand.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-1 bg-[#F32632]" />
                    <span>Property ADR Realized</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-3 h-1 bg-white/40 border-b border-dashed border-white/60" />
                    <span>CompSet Median</span>
                  </span>
                </div>
              </div>

              {/* Main SVG Visualization */}
              <div className="bg-[#0E1552] p-5 border border-white/10">
                <div className="w-full aspect-[21/9] sm:aspect-[2.4/1] relative">
                  <svg viewBox="0 0 800 280" className="w-full h-full overflow-visible">
                    {/* Grid lines */}
                    <line x1="50" y1="30" x2="770" y2="30" stroke="rgba(255,255,255,0.06)" />
                    <line x1="50" y1="90" x2="770" y2="90" stroke="rgba(255,255,255,0.06)" />
                    <line x1="50" y1="150" x2="770" y2="150" stroke="rgba(255,255,255,0.06)" />
                    <line x1="50" y1="210" x2="770" y2="210" stroke="rgba(255,255,255,0.06)" />
                    <line x1="50" y1="250" x2="770" y2="250" stroke="rgba(255,255,255,0.15)" />

                    {/* Y-axis labels */}
                    <text x="42" y="34" textAnchor="end" fontSize="11" fontFamily="JetBrains Mono" fill="#94A3B8">$480</text>
                    <text x="42" y="94" textAnchor="end" fontSize="11" fontFamily="JetBrains Mono" fill="#94A3B8">$420</text>
                    <text x="42" y="154" textAnchor="end" fontSize="11" fontFamily="JetBrains Mono" fill="#94A3B8">$360</text>
                    <text x="42" y="214" textAnchor="end" fontSize="11" fontFamily="JetBrains Mono" fill="#94A3B8">$300</text>
                    <text x="42" y="254" textAnchor="end" fontSize="11" fontFamily="JetBrains Mono" fill="#94A3B8">$240</text>

                    {/* X-axis labels */}
                    {["Day 1", "Day 5", "Day 10", "Day 15 (Frieze Art Fair)", "Day 20", "Day 25", "Day 30"].map((d, i) => (
                      <text
                        key={i}
                        x={50 + i * 115}
                        y="270"
                        fontSize="10"
                        fontFamily="JetBrains Mono"
                        fill="#94A3B8"
                      >
                        {d}
                      </text>
                    ))}

                    {/* Shaded compression event zone */}
                    <rect x="360" y="20" width="160" height="230" fill="#F32632" fillOpacity="0.08" />
                    <line x1="360" y1="20" x2="360" y2="250" stroke="#F32632" strokeOpacity="0.4" strokeDasharray="3 3" />
                    <line x1="520" y1="20" x2="520" y2="250" stroke="#F32632" strokeOpacity="0.4" strokeDasharray="3 3" />
                    <text x="440" y="15" textAnchor="middle" fontSize="10" fontFamily="Inter" fontWeight="700" fill="#F32632">
                      MARKET COMPRESSION EVENT
                    </text>

                    {/* CompSet Median Benchmark Curve (Dashed light grey) */}
                    <path
                      d="M 50 180 Q 150 170, 260 160 T 440 115 T 620 140 T 770 150"
                      stroke="rgba(255,255,255,0.4)"
                      strokeWidth="2"
                      strokeDasharray="4 4"
                      fill="none"
                    />

                    {/* Property Yield Area Fill */}
                    <path
                      d="M 50 170 Q 160 150, 270 130 T 440 50 T 620 95 T 770 110 L 770 250 L 50 250 Z"
                      fill="url(#propertyYieldGrad)"
                      fillOpacity="0.25"
                    />

                    <defs>
                      <linearGradient id="propertyYieldGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#F32632" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#10175F" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Property Realized Rate Line */}
                    <path
                      d="M 50 170 Q 160 150, 270 130 T 440 50 T 620 95 T 770 110"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      fill="none"
                    />

                    {/* Highlighted Surge Peak Point */}
                    <circle cx="440" cy="50" r="5" fill="#F32632" />
                    <circle cx="440" cy="50" r="11" fill="#F32632" fillOpacity="0.3" />

                    {/* Peak Tooltip Callout */}
                    <rect x="390" y="65" width="100" height="38" fill="#10175F" stroke="#F32632" strokeWidth="1" />
                    <text x="440" y="80" textAnchor="middle" fontSize="10" fontFamily="JetBrains Mono" fontWeight="700" fill="#FFFFFF">
                      $465.00 ADR
                    </text>
                    <text x="440" y="94" textAnchor="middle" fontSize="9" fontFamily="Inter" fill="#F32632" fontWeight="600">
                      +$115 over CompSet
                    </text>
                  </svg>
                </div>
              </div>

              {/* Bottom Editorial Context Bar */}
              <div className="mt-5 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-300 gap-3">
                <div className="flex items-center gap-2">
                  <Info className="w-4 h-4 text-[#F32632] shrink-0" />
                  <span>
                    Compression optimization captured $48,200 incremental revenue across the 4-day market event without rate pushback.
                  </span>
                </div>
                <span className="font-mono text-slate-400">
                  Source: 100X Commercial Intelligence Engine
                </span>
              </div>
            </div>
          )}

          {/* Tab 2: CompSet Rate Benchmark */}
          {activeTab === "compset" && (
            <div className="p-6 sm:p-8">
              <div className="pb-4 mb-6 border-b border-white/10">
                <h4 className="text-lg font-bold text-white font-heading">
                  Competitive Set Rate Architecture Benchmark
                </h4>
                <p className="text-xs text-slate-400">
                  Rate positioning and Revenue Generation Index (RGI) against primary competitive tier.
                </p>
              </div>

              <div className="space-y-3.5">
                {[
                  {
                    name: "The Grand Heritage (Our Property)",
                    adr: "$394.50",
                    revpar: "$339.27",
                    index: "118.4",
                    share: "Leader",
                    isOurProperty: true,
                  },
                  {
                    name: "Competitor A — The Cadogan Contemporary",
                    adr: "$372.00",
                    revpar: "$298.10",
                    index: "104.2",
                    share: "Follower",
                    isOurProperty: false,
                  },
                  {
                    name: "Competitor B — Mayfair Sovereign",
                    adr: "$355.00",
                    revpar: "$284.00",
                    index: "99.1",
                    share: "Parity",
                    isOurProperty: false,
                  },
                  {
                    name: "Competitor C — The Berkeley Pavilion",
                    adr: "$342.00",
                    revpar: "$270.18",
                    index: "94.3",
                    share: "Discounting",
                    isOurProperty: false,
                  },
                  {
                    name: "Competitor D — Belgravia Grand",
                    adr: "$328.00",
                    revpar: "$255.84",
                    index: "89.2",
                    share: "Vulnerable",
                    isOurProperty: false,
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-4 border transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      item.isOurProperty
                        ? "bg-[#17216F] border-white/30 text-white"
                        : "bg-[#0E1552] border-white/10 text-slate-200"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          item.isOurProperty ? "bg-[#F32632]" : "bg-slate-500"
                        }`}
                      />
                      <div>
                        <div className="text-sm font-semibold flex items-center gap-2">
                          <span>{item.name}</span>
                          {item.isOurProperty && (
                            <span className="px-2 py-0.5 bg-[#F32632] text-white text-[10px] font-mono tracking-wider uppercase font-bold">
                              Subject Property
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-slate-400 mt-0.5">
                          Strategy Status: <span className={item.isOurProperty ? "text-white font-medium" : ""}>{item.share}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 sm:gap-8 justify-between">
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Published ADR</div>
                        <div className="text-base font-bold font-mono text-white">{item.adr}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[10px] uppercase font-mono text-slate-400">Net RevPAR</div>
                        <div className="text-base font-bold font-mono text-white">{item.revpar}</div>
                      </div>
                      <div className="text-right min-w-[70px]">
                        <div className="text-[10px] uppercase font-mono text-slate-400">RGI Score</div>
                        <div className={`text-base font-bold font-mono ${item.isOurProperty ? "text-[#F32632]" : "text-slate-300"}`}>
                          {item.index}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Demand Calendar Heatmap */}
          {activeTab === "calendar" && (
            <div className="p-6 sm:p-8">
              <div className="pb-4 mb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    30-Day Demand Pacing Calendar &amp; Rate Recommendations
                  </h4>
                  <p className="text-xs text-slate-400">
                    Day-by-day compression scoring, pacing alerts, and rate triggers.
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs font-mono text-slate-300">
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-[#F32632]" /> Surge Compression
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-[#17216F]" /> Optimal Pace
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-white/10" /> Base Floor
                  </span>
                </div>
              </div>

              {/* 5-Week Calendar Grid */}
              <div className="grid grid-cols-7 gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <div key={day} className="text-center text-[11px] font-mono font-semibold text-slate-400 py-1">
                    {day}
                  </div>
                ))}

                {[
                  { d: 1, rate: "$340", occ: "72%", type: "normal" },
                  { d: 2, rate: "$350", occ: "75%", type: "normal" },
                  { d: 3, rate: "$380", occ: "82%", type: "optimal" },
                  { d: 4, rate: "$390", occ: "84%", type: "optimal" },
                  { d: 5, rate: "$440", occ: "94%", type: "surge" },
                  { d: 6, rate: "$465", occ: "98%", type: "surge" },
                  { d: 7, rate: "$360", occ: "76%", type: "normal" },

                  { d: 8, rate: "$345", occ: "74%", type: "normal" },
                  { d: 9, rate: "$355", occ: "78%", type: "normal" },
                  { d: 10, rate: "$395", occ: "85%", type: "optimal" },
                  { d: 11, rate: "$410", occ: "88%", type: "optimal" },
                  { d: 12, rate: "$475", occ: "96%", type: "surge" },
                  { d: 13, rate: "$490", occ: "99%", type: "surge" },
                  { d: 14, rate: "$380", occ: "80%", type: "optimal" },

                  { d: 15, rate: "$420", occ: "89%", type: "optimal" },
                  { d: 16, rate: "$430", occ: "91%", type: "optimal" },
                  { d: 17, rate: "$485", occ: "97%", type: "surge" },
                  { d: 18, rate: "$510", occ: "100%", type: "surge" },
                  { d: 19, rate: "$520", occ: "100%", type: "surge" },
                  { d: 20, rate: "$440", occ: "92%", type: "optimal" },
                  { d: 21, rate: "$375", occ: "79%", type: "normal" },

                  { d: 22, rate: "$360", occ: "75%", type: "normal" },
                  { d: 23, rate: "$370", occ: "78%", type: "normal" },
                  { d: 24, rate: "$390", occ: "83%", type: "optimal" },
                  { d: 25, rate: "$415", occ: "87%", type: "optimal" },
                  { d: 26, rate: "$460", occ: "95%", type: "surge" },
                  { d: 27, rate: "$470", occ: "96%", type: "surge" },
                  { d: 28, rate: "$380", occ: "81%", type: "optimal" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-2.5 border text-left transition-transform hover:scale-[1.02] cursor-pointer ${
                      item.type === "surge"
                        ? "bg-[#F32632]/20 border-[#F32632] text-white"
                        : item.type === "optimal"
                        ? "bg-[#17216F] border-white/20 text-white"
                        : "bg-[#0E1552] border-white/10 text-slate-300"
                    }`}
                  >
                    <div className="flex justify-between items-center text-[10px] font-mono text-slate-400 mb-1">
                      <span>D-{item.d}</span>
                      <span className={item.type === "surge" ? "text-[#F32632] font-bold" : ""}>
                        {item.occ}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-bold font-mono text-white">
                      {item.rate}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 4: Booking Pace Velocity */}
          {activeTab === "pacing" && (
            <div className="p-6 sm:p-8">
              <div className="pb-4 mb-6 border-b border-white/10">
                <h4 className="text-lg font-bold text-white font-heading">
                  Lead-Time Pacing Velocity (D-90 to Stay Date)
                </h4>
                <p className="text-xs text-slate-400">
                  Room pickup velocity curve highlighting unconstrained demand capture vs baseline pacing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-[#0E1552] p-5 border border-white/10">
                  <div className="text-xs font-mono uppercase text-slate-400">Early Window (D-90 to D-45)</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">28% Picked Up</div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Protecting premium room categories without premature advance-purchase discounting.
                  </p>
                  <div className="mt-3 text-xs font-mono text-[#F32632] font-semibold">
                    +$32 ADR Premium Preserved
                  </div>
                </div>

                <div className="bg-[#17216F] p-5 border border-white/20">
                  <div className="text-xs font-mono uppercase text-slate-300">Core Window (D-45 to D-14)</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">54% Picked Up</div>
                  <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                    High booking velocity triggered dynamic rate ladder adjustment to Tier 3.
                  </p>
                  <div className="mt-3 text-xs font-mono text-white font-semibold">
                    Optimal Pace: +14% vs CompSet
                  </div>
                </div>

                <div className="bg-[#0E1552] p-5 border border-white/10">
                  <div className="text-xs font-mono uppercase text-slate-400">Close-In Window (D-14 to D-0)</div>
                  <div className="text-2xl font-bold font-mono text-white mt-1">18% Picked Up</div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Capturing high-intent last-minute business &amp; leisure travel at premium rack rates.
                  </p>
                  <div className="mt-3 text-xs font-mono text-[#F32632] font-semibold">
                    Zero Distressed Inventory
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
