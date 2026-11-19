import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const considerations = [
  {
    title: "Understand demand",
    description:
      "Use booking pace, seasonality, and local events to see where demand is changing.",
  },
  {
    title: "Set a considered rate",
    description:
      "Balance your property's position, guest mix, and market conditions when setting prices.",
  },
  {
    title: "Keep more of each booking",
    description:
      "Compare the value and cost of each channel, not just the number of reservations it brings.",
  },
];

export function CommercialOpportunity() {
  return (
    <section id="opportunity" className="bg-[#EFF0F4] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#687086] mb-4">
              The commercial picture
            </p>
            <h2 className="text-4xl sm:text-5xl text-[#10175F] leading-tight mb-5">
              Each decision affects the next.
            </h2>
            <p className="text-base sm:text-lg text-[#687086] leading-relaxed mb-7">
              Pricing, booking channels, and demand are connected. We help hotel
              teams understand those connections and choose their next steps
              with care.
            </p>
            <Link
              href="/services/revenue-strategy-pricing"
              className="inline-flex items-center gap-2 text-sm font-medium text-[#10175F] hover:underline underline-offset-4"
            >
              <span>Explore revenue strategy</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {considerations.map((item, index) => (
              <article
                key={item.title}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 py-6 sm:py-7"
              >
                <span className="pt-1 text-sm text-[#687086] tabular-nums">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-[#10175F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#687086] leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
