import React from "react";

const areas = [
  {
    number: "01",
    title: "Demand and booking pace",
    description:
      "Understand when demand is building, where bookings are coming from, and how much time is left to act.",
  },
  {
    number: "02",
    title: "Rates and market position",
    description:
      "Review your pricing against the market and make rate decisions that fit your property and its guests.",
  },
  {
    number: "03",
    title: "Channels and net revenue",
    description:
      "Look beyond room revenue to understand the cost of each channel and the value it brings to your business.",
  },
];

export function CommercialIntelligenceShowcase() {
  return (
    <section id="intelligence" className="bg-[#F8F9FB] py-16 lg:py-20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-[#687086] mb-4">
              What we look at
            </p>
            <h2 className="text-4xl sm:text-5xl text-[#10175F] leading-tight mb-5">
              Useful advice starts with the details.
            </h2>
            <p className="text-base sm:text-lg text-[#687086] leading-relaxed max-w-xl">
              We bring the important parts of your commercial picture together
              and turn them into clear next steps for your team.
            </p>
          </div>

          <div className="lg:col-span-7 divide-y divide-slate-200 border-y border-slate-200">
            {areas.map((area) => (
              <article
                key={area.number}
                className="grid grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr] gap-4 py-6 sm:py-7"
              >
                <span className="pt-1 text-sm text-[#687086] tabular-nums">
                  {area.number}
                </span>
                <div>
                  <h3 className="text-xl font-medium text-[#10175F] mb-2">
                    {area.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#687086] leading-relaxed max-w-2xl">
                    {area.description}
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
