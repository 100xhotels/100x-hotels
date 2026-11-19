import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "100X Hotel — Hotel Revenue Strategy & Commercial Intelligence",
  description:
    "Precision behind every profitable stay. Smarter pricing, stronger distribution, and commercial optimization for forward-thinking hotel owners and operators.",
  keywords: [
    "hotel revenue management",
    "hospitality pricing intelligence",
    "hotel ADR optimization",
    "RevPAR growth",
    "hotel distribution strategy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400;1,6..72,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#171A26] font-sans selection:bg-[#10175F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
