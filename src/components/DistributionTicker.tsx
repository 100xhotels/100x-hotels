import React from "react";

const channels = [
  { name: "Booking.com", className: "font-bold tracking-tight text-[#003B95]" },
  { name: "expedia", className: "font-semibold tracking-tight text-[#141D38]" },
  { name: "Agoda", className: "font-bold tracking-tight text-[#E11D48]" },
  { name: "Airbnb", className: "font-medium tracking-tight text-[#FF385C]" },
  { name: "Hotels.com", className: "font-bold tracking-tight text-[#D9232E]" },
  { name: "MakeMyTrip", className: "font-semibold tracking-tight text-[#1464C0]" },
  { name: "Trip.com", className: "font-semibold tracking-tight text-[#287DCE]" },
];

function ChannelWordmarks({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-12 sm:gap-16 pr-12 sm:pr-16"
      aria-hidden={duplicate}
    >
      {channels.map((channel) => (
        <span
          key={channel.name}
          className={`whitespace-nowrap text-lg sm:text-xl ${channel.className}`}
        >
          {channel.name}
        </span>
      ))}
    </div>
  );
}

export function DistributionTicker() {
  return (
    <section className="border-y border-slate-300/70 bg-[#E7E9EF] py-5">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <div className="distribution-ticker overflow-hidden">
          <div className="distribution-ticker-track flex w-max">
            <ChannelWordmarks />
            <ChannelWordmarks duplicate />
          </div>
        </div>
      </div>

      <ul className="sr-only">
        {channels.map((channel) => (
          <li key={channel.name}>{channel.name}</li>
        ))}
      </ul>
    </section>
  );
}
