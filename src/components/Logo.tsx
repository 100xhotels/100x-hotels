"useContent";
import React from "react";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({
  variant = "dark",
  className = "",
  size = "md",
}: LogoProps) {
  const isLight = variant === "light";

  // Size mapping
  const heightClass = {
    sm: "h-7",
    md: "h-9",
    lg: "h-11",
  }[size];

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none ${className}`}
      aria-label="100X Hotel"
    >
      <div className={`relative flex items-center ${heightClass}`}>
        <svg
          viewBox="0 0 168 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-auto"
        >
          {/* "100" Numerals in confident, modern geometric typography */}
          <text
            x="0"
            y="28"
            fontFamily="Inter, Manrope, system-ui, sans-serif"
            fontWeight="800"
            fontSize="30"
            letterSpacing="-0.04em"
            fill={isLight ? "#FFFFFF" : "#10175F"}
          >
            100
          </text>

          {/* Bespoke "X" Symbol with Red and Grey Intersecting Geometry */}
          {/* Grey diagonal bar (bottom-left to top-right) */}
          <path
            d="M58 30L76 8"
            stroke={isLight ? "#94A3B8" : "#687086"}
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Signal Red diagonal bar (top-left to bottom-right) */}
          <path
            d="M58 8L76 30"
            stroke="#F32632"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* "HOTEL" Lettering in refined, tracked uppercase */}
          <text
            x="88"
            y="27"
            fontFamily="Manrope, Inter, system-ui, sans-serif"
            fontWeight="700"
            fontSize="21"
            letterSpacing="0.08em"
            fill={isLight ? "#FFFFFF" : "#10175F"}
          >
            HOTEL
          </text>
        </svg>
      </div>
    </div>
  );
}
