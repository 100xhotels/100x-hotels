import React from "react";
import { ArrowRight } from "lucide-react";

export function ApproachSection() {
  const stages = [
    {
      num: "01",
      title: "Understand",
      tagline: "Commercial Diagnostic & Market Audit",
      description:
        "Assess the property's current performance, market position, pricing, and distribution.",
      deliverables: [
        "Historical ADR, RevPAR, and pickup pace audit",
        "CompSet positioning & rate parity evaluation",
        "Channel profitability & net margin analysis",
        "Unconstrained demand & segmentation modeling",
      ],
    },
    {
      num: "02",
      title: "Strategize",
      tagline: "Dynamic Pricing Architecture",
      description:
        "Identify opportunities and build a commercial strategy around the property's goals.",
      deliverables: [
        "Custom demand-driven rate ladders & rules",
        "Direct booking acceleration blueprint",
        "Channel yield management & OTA containment",
        "Targeted market segment pricing matrices",
      ],
    },
    {
      num: "03",
      title: "Optimize",
      tagline: "Continuous Commercial Steering",
      description:
        "Review results, refine decisions, and respond as market conditions change.",
      deliverables: [
        "Weekly commercial steering & pickup review",
        "Real-time compression date rate calibration",
        "Quarterly business review & budget alignment",
        "Ongoing competitor response and index tracking",
      ],
    },
  ];

  return (
    <section id="approach" className="bg-white py-24 lg:py-32 border-b border-[#F3F4F7]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#687086]">
              Our Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10175F] tracking-tight font-heading leading-tight mb-4">
            From understanding performance to improving it.
          </h2>

          <p className="text-lg text-[#687086] leading-relaxed">
            A disciplined, three-stage advisory process that turns complex hospitality commercial data into consistent financial performance.
          </p>
        </div>

        {/* Horizontal Editorial Timeline / Structured Sequence */}
        <div className="relative">
          
          {/* Subtle Horizontal Connecting Line spanning the 3 stages */}
          <div className="hidden lg:block absolute top-[28px] left-[40px] right-[40px] h-[1px] bg-[#E2E5EC] z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 relative z-10">
            {stages.map((stage, idx) => (
              <div
                key={idx}
                className="group flex flex-col bg-white border border-[#E2E5EC] p-8 sm:p-10 hover:border-[#10175F] transition-all duration-200"
              >
                {/* Stage Header with Number & Indicator */}
                <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#F3F4F7]">
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#10175F] group-hover:bg-[#F32632] transition-colors" />
                    <span className="text-3xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                      {stage.num}
                    </span>
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#687086]">
                    Stage {stage.num}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 className="text-2xl font-bold text-[#10175F] font-heading mb-1.5">
                  {stage.title}
                </h3>
                <div className="text-xs font-semibold text-[#F32632] uppercase tracking-wider mb-4 font-mono">
                  {stage.tagline}
                </div>

                {/* Primary Description */}
                <p className="text-sm text-[#687086] leading-relaxed mb-8">
                  {stage.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="mt-auto pt-6 border-t border-[#F3F4F7]">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-[#10175F] mb-3">
                    Key Advisory Workstreams
                  </div>
                  <ul className="space-y-2 text-xs text-[#687086]">
                    {stage.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E2E5EC] group-hover:bg-[#10175F] mt-1.5 shrink-0 transition-colors" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
