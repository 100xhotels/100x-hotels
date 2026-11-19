import React from "react";

const areas = [
  {
    title: "Pricing",
    detail:
      "Rates shaped around demand, market position, and the needs of your property.",
  },
  {
    title: "Distribution",
    detail:
      "A clearer view of where bookings come from and what each channel costs.",
  },
  {
    title: "Performance",
    detail:
      "Useful reporting that helps your team understand results and plan ahead.",
  },
  {
    title: "Partnership",
    detail:
      "Practical conversations with people who understand hotel operations.",
  },
];

export function CredibilityStrip() {
  return (
    <section id="credibility" className="bg-[#E7E9EF] py-14 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-9 max-w-2xl">
          <p className="text-sm font-medium text-[#687086] mb-3">
            How we can help
          </p>
          <h2 className="text-3xl sm:text-4xl text-[#10175F] leading-tight">
            Focused on the decisions that shape hotel performance.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-7">
          {areas.map((area) => (
            <article key={area.title} className="border-t border-slate-300 pt-4">
              <h3 className="text-base font-medium text-[#10175F] mb-2">
                {area.title}
              </h3>
              <p className="text-sm text-[#687086] leading-relaxed">
                {area.detail}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
