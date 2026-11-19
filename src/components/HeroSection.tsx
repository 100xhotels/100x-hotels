"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation: () => void;
}

export function HeroSection({ onOpenConsultation }: HeroSectionProps) {
  return (
    <section className="overflow-hidden bg-[#0D1248] text-white">
      <div className="grid min-h-[620px] grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center px-6 py-16 sm:px-10 sm:py-20 lg:py-24 xl:pl-[max(4rem,calc((100vw-1312px)/2))] xl:pr-16">
          <div className="max-w-xl">
            <p className="mb-6 text-sm font-medium text-white/65">
              Hotel revenue strategy &amp; advisory
            </p>

            <h1 className="mb-7 text-5xl leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              A clearer view of your hotel&apos;s next move.
            </h1>

            <p className="mb-9 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg">
              Practical advice on pricing, distribution, and the commercial
              decisions that shape your property&apos;s performance.
            </p>

            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-[#10175F] transition-colors hover:bg-slate-100"
              >
                <span>Discuss your property</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center px-4 py-3 text-sm font-medium text-white/80 underline-offset-4 hover:text-white hover:underline"
              >
                How we work
              </a>
            </div>
          </div>
        </div>

        <figure className="relative min-h-[340px] bg-[#25283a] sm:min-h-[440px] lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1600&auto=format&fit=crop"
            alt="Sunlit hotel room with a view of the city"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#0D1248]/35 via-transparent to-black/10"
          />
          <figcaption className="absolute bottom-5 left-6 text-sm text-white/80 sm:bottom-7 sm:left-8">
            Independent advice for hotels and resorts
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
