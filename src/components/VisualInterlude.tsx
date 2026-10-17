"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function VisualInterlude() {
  return (
    <section className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] overflow-hidden bg-[#10175F]">
      {/* High-Resolution Cinematic Luxury Hospitality Photography */}
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop"
        alt="Serene architectural luxury hotel destination with authentic materials and warm atmospheric lighting"
        fill
        unoptimized
        className="object-cover object-center filter brightness-[0.82] contrast-[1.05]"
      />

      {/* Subtle Navy Editorial Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10175F]/95 via-[#10175F]/40 to-[#10175F]/30" />

      {/* Centered Editorial Statement with Motion */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 text-center"
        >
          
          {/* Overline (No circle pointer) */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/80">
              The Hospitality Philosophy
            </span>
            <span className="w-8 h-[1px] bg-white/40" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight max-w-4xl mx-auto leading-[1.14]">
            “Behind every profitable room is a{" "}
            <span className="font-editorial italic font-normal text-white">
              better commercial decision
            </span>
            .”
          </h2>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-xs text-white/70 font-mono uppercase tracking-widest">
              100X Hotel Commercial Principle
            </span>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
