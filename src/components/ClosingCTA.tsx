"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface ClosingCTAProps {
  onOpenConsultation: () => void;
}

export function ClosingCTA({ onOpenConsultation }: ClosingCTAProps) {
  return (
    <section className="bg-[#10175F] text-white py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm text-white/70 mb-4">Start a conversation</p>
          <h2 className="text-4xl sm:text-5xl text-white leading-tight mb-5">
            Let&apos;s talk about your hotel.
          </h2>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mb-8">
            Tell us what you&apos;re working through. We&apos;ll discuss where
            clearer pricing, distribution, or performance advice could help.
          </p>
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#10175F] text-sm font-medium hover:bg-slate-100 transition-colors"
          >
            <span>Book a consultation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
