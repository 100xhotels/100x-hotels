"use client";

import React from "react";
import { motion } from "framer-motion";

export function CredibilityStrip() {
  const pillars = [
    {
      num: "15+",
      label: "Years Commercial Advisory",
      detail: "Senior revenue leadership across boutique, luxury resort, and international hospitality portfolios.",
    },
    {
      num: "280+",
      label: "Properties Evaluated",
      detail: "Rigorous commercial audits, rate architecture design, and channel profitability evaluations.",
    },
    {
      num: "42",
      label: "Primary Markets Served",
      detail: "Active intelligence across European gateways, North American metros, and luxury leisure destinations.",
    },
    {
      num: "$1.4B",
      label: "Managed Room Inventory",
      detail: "Specialized in unconstrained demand forecasting, dynamic pricing matrices, and direct mix growth.",
    },
  ];

  return (
    <section id="credibility" className="bg-[#F8F9FB] py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Core Restrained Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#687086] block mb-3 font-mono">
              Commercial Capability
            </span>
            <p className="text-2xl sm:text-4xl font-extrabold tracking-tight text-[#10175F] font-heading leading-tight max-w-2xl">
              Commercial thinking. Hospitality understanding.{" "}
              <span className="font-editorial italic font-normal text-[#10175F]">
                Measurable performance
              </span>
              .
            </p>
          </div>
          <p className="text-sm text-[#687086] max-w-sm md:text-right leading-relaxed">
            Advisory framework designed exclusively for institutional owners and independent luxury operators.
          </p>
        </motion.div>

        {/* 4 Open Capability Pillars (No card borders or circle pointers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="text-3xl sm:text-4xl font-bold font-mono text-[#10175F] mb-2 tracking-tight group-hover:text-[#F32632] transition-colors">
                {pillar.num}
              </div>
              <div className="text-sm font-semibold uppercase tracking-wider text-[#10175F] mb-2 font-heading">
                {pillar.label}
              </div>
              <p className="text-xs text-[#687086] leading-relaxed">
                {pillar.detail}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
