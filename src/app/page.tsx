"use client";

import React, { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { CredibilityStrip } from "@/components/CredibilityStrip";
import { CommercialOpportunity } from "@/components/CommercialOpportunity";
import { CoreServices } from "@/components/CoreServices";
import { CommercialIntelligenceShowcase } from "@/components/CommercialIntelligenceShowcase";
import { ApproachSection } from "@/components/ApproachSection";
import { VisualInterlude } from "@/components/VisualInterlude";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";

export default function HomePage() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#171A26] flex flex-col font-sans selection:bg-[#10175F] selection:text-white">
      {/* Section 1 — Navigation */}
      <Navigation onOpenConsultation={() => setIsConsultationOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 2 — Hero: Make every room work harder */}
        <HeroSection onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Section 3 — Credibility strip */}
        <CredibilityStrip />

        {/* Section 4 — The commercial opportunity */}
        <CommercialOpportunity />

        {/* Section 5 — Core services */}
        <CoreServices onOpenConsultation={() => setIsConsultationOpen(true)} />

        {/* Section 6 — A glimpse into commercial intelligence */}
        <CommercialIntelligenceShowcase />

        {/* Section 7 — The 100X approach */}
        <ApproachSection />

        {/* Section 8 — Hospitality-focused visual interlude */}
        <VisualInterlude />

        {/* Section 9 — Closing CTA */}
        <ClosingCTA onOpenConsultation={() => setIsConsultationOpen(true)} />
      </main>

      {/* Section 10 — Footer */}
      <Footer />

      {/* Interactive Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
