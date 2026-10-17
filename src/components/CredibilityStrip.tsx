import React from "react";

export function CredibilityStrip() {
  const pillars = [
    {
      label: "Hospitality Commercial Experience",
      detail: "Senior revenue & commercial advisory across boutique, luxury resort, and urban portfolio assets.",
    },
    {
      label: "Properties Supported & Evaluated",
      detail: "Rigorous commercial audits, rate architecture design, and channel profitability evaluations.",
    },
    {
      label: "Primary Markets Served",
      detail: "Active market intelligence across European gateways, North American metros, and resort destinations.",
    },
    {
      label: "Commercial Expertise",
      detail: "Specialized in unconstrained demand forecasting, dynamic pricing matrices, and direct mix growth.",
    },
  ];

  return (
    <section
      id="credibility"
      className="bg-[#F3F4F7] border-b border-[#E2E5EC] py-12 md:py-16"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Core Restrained Statement */}
        <div className="mb-10 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2E5EC] pb-8">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#687086] block mb-2">
              Credibility &amp; Professional Foundation
            </span>
            <p className="text-2xl sm:text-3xl font-bold tracking-tight text-[#10175F] font-heading">
              Commercial thinking. Hospitality understanding. Measurable performance.
            </p>
          </div>
          <p className="text-xs text-[#687086] max-w-xs md:text-right font-medium">
            Advisory framework tailored to institutional owners and independent hospitality operators.
          </p>
        </div>

        {/* 4 Neutral Capability Placeholders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="relative pl-5 border-l-2 border-[#10175F]/20 hover:border-[#F32632] transition-colors duration-200"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-[#10175F] mb-1.5 font-heading">
                {pillar.label}
              </div>
              <p className="text-xs text-[#687086] leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
