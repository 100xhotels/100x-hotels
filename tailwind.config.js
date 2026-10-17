/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          midnight: "#10175F",
          royal: "#17216F",
          red: "#F32632",
          "grey-cool": "#F3F4F7",
          "grey-slate": "#687086",
          charcoal: "#171A26",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        serif: [
          '"Playfair Display"',
          '"Cormorant Garamond"',
          "Georgia",
          "serif",
        ],
        heading: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        editorial: [
          '"Playfair Display"',
          '"Cormorant Garamond"',
          "Georgia",
          "serif",
        ],
        mono: [
          '"JetBrains Mono"',
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
