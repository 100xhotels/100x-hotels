import React from "react";
import Image from "next/image";

export function VisualInterlude() {
  return (
    <section className="relative w-full h-[520px] sm:h-[620px] lg:h-[720px] overflow-hidden bg-[#10175F]">
      {/* High-Resolution Cinematic Luxury Hospitality Photography */}
      <Image
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop"
        alt="Serene architectural luxury hotel destination with authentic materials and warm atmospheric lighting"
        fill
        unoptimized
        className="object-cover object-center filter brightness-[0.82] contrast-[1.05]"
      />

      {/* Subtle Navy Editorial Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#10175F]/90 via-[#10175F]/40 to-[#10175F]/30" />

      {/* Centered Editorial Statement */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-16 text-center">
          
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F32632]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-white/80">
              The Hospitality Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white font-heading tracking-tight max-w-4xl mx-auto leading-[1.12]">
            “Behind every profitable room is a better commercial decision.”
          </h2>

          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="w-8 h-[1px] bg-white/40" />
            <span className="text-xs text-white/70 font-mono uppercase tracking-widest">
              100X Hotel Commercial Principle
            </span>
            <span className="w-8 h-[1px] bg-white/40" />
          </div>

        </div>
      </div>
    </section>
  );
}
