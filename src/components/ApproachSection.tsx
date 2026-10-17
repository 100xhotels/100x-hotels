"use client";

import React from "react";
import { motion } from "framer-motion";

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
    <section id="approach" className="bg-white py-16 lg:py-20">
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
              Our Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10175F] tracking-tight font-heading leading-tight mb-5">
            From understanding performance to{" "}
            <span className="font-editorial italic font-normal text-[#10175F]">
              improving it
            </span>
            .
          </h2>

          <p className="text-lg text-[#687086] leading-relaxed">
            A disciplined, three-stage advisory process that turns complex hospitality commercial data into consistent financial performance.
          </p>
        </motion.div>

        {/* Horizontal Editorial Timeline (Clean, borderless, airy) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          {stages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group flex flex-col bg-[#F8F9FB] p-8 sm:p-10 shadow-sm hover:shadow-xl transition-luxury"
            >
              {/* Stage Header with Number */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-200/80">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter group-hover:text-[#F32632] transition-colors">
                  {stage.num}
                </span>
                <span className="text-xs font-mono uppercase tracking-wider text-[#687086]">
                  Stage {stage.num}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-bold text-[#10175F] font-heading mb-1.5">
                {stage.title}
              </h3>
              <div className="text-xs font-semibold text-[#F32632] uppercase tracking-wider mb-5 font-mono">
                {stage.tagline}
              </div>

              {/* Primary Description */}
              <p className="text-sm text-[#687086] leading-relaxed mb-8">
                {stage.description}
              </p>

              {/* Deliverables (No circle pointers, clean typographic dashes) */}
              <div className="mt-auto pt-6 border-t border-slate-200/80">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#10175F] mb-4 font-heading">
                  Key Advisory Workstreams
                </div>
                <ul className="space-y-2.5 text-xs text-[#687086]">
                  {stage.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2.5">
                      <span className="text-[#F32632] font-mono text-sm leading-none select-none">—</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
