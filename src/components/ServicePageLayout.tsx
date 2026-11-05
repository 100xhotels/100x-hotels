"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ServiceDetail, allServicesList } from "@/data/servicesData";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ConsultationModal } from "@/components/ConsultationModal";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronRight,
  Layers,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  BarChart3,
  Calendar,
  AlertTriangle,
  Building2,
  Quote,
} from "lucide-react";
import { motion } from "framer-motion";

interface ServicePageLayoutProps {
  service: ServiceDetail;
}

export function ServicePageLayout({ service }: ServicePageLayoutProps) {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Other two services for related services section
  const relatedServices = allServicesList.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-white text-[#171A26] flex flex-col font-sans selection:bg-[#10175F] selection:text-white">
      {/* Navigation */}
      <Navigation onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main className="flex-1">
        {/* Breadcrumb strip */}
        <section className="bg-[#F8F9FB] border-b border-slate-200/70 py-3.5">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex items-center gap-2 text-xs text-[#687086] font-mono">
            <Link href="/" className="hover:text-[#10175F] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/#services" className="hover:text-[#10175F] transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#10175F] font-semibold truncate">{service.title}</span>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative bg-white pt-16 sm:pt-20 pb-20 border-b border-slate-100 overflow-hidden">
          {/* Subtle architectural background grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#F0F2F6_1px,transparent_1px),linear-gradient(to_bottom,#F0F2F6_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 relative">
            <div className="max-w-4xl">
              {/* Badge & Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl sm:text-5xl font-extrabold font-mono text-[#10175F] tracking-tighter">
                  {service.number}
                </span>
                <span className="w-8 h-[1.5px] bg-[#F32632]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#F32632] font-mono">
                  {service.badge}
                </span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#10175F] tracking-tight font-heading leading-[1.1] mb-6">
                {service.title}
              </h1>

              <p className="text-xl sm:text-2xl text-[#10175F] font-serif italic font-normal leading-relaxed mb-8 max-w-3xl">
                &ldquo;{service.tagline}&rdquo;
              </p>

              <p className="text-base sm:text-lg text-[#687086] leading-relaxed mb-10 max-w-3xl">
                {service.summary}
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#10175F] text-white text-sm font-semibold tracking-normal hover:bg-[#17216F] shadow-sm hover:shadow-md transition-luxury group"
                >
                  <span>Book Practice Diagnostic</span>
                  <ArrowRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#framework"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#F8F9FB] hover:bg-slate-200/60 text-[#10175F] text-sm font-semibold border border-slate-200 transition-colors"
                >
                  <span>View Practice Methodology</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Impact Metric Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-12 border-t border-slate-200">
              {service.heroMetrics.map((metric, i) => (
                <div key={i} className="bg-[#F8F9FB] p-7 border-l-2 border-[#10175F]">
                  <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#10175F] tracking-tight mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#10175F] font-heading mb-2">
                    {metric.label}
                  </div>
                  <div className="text-xs text-[#687086] leading-relaxed">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Core Vulnerabilities Addressed */}
        <section className="py-20 bg-[#F8F9FB]">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl mb-14">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-6 h-[1.5px] bg-[#F32632]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#687086] font-mono">
                  Commercial Vulnerabilities
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10175F] tracking-tight font-heading leading-tight mb-4">
                The Revenue Leakages We Systematically Eliminate
              </h2>
              <p className="text-base text-[#687086] leading-relaxed">
                Hospitality assets frequently underperform not due to product defects, but due to friction and blind spots in their commercial operational design.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.problemsSolved.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-8 sm:p-10 shadow-sm border border-slate-200/70 hover:border-slate-300 hover:shadow-md transition-luxury"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-none bg-red-50 flex items-center justify-center shrink-0">
                      <AlertTriangle className="w-5 h-5 text-[#F32632]" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-semibold uppercase text-slate-400">
                        Vulnerability 0{idx + 1}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-[#10175F] font-heading mt-0.5">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-sm text-[#687086] leading-relaxed pl-14">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: The 3-Phase Execution Framework */}
        <section id="framework" className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-6 h-[1.5px] bg-[#F32632]" />
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#687086] font-mono">
                  Methodology & Execution
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10175F] tracking-tight font-heading leading-tight mb-4">
                Structured 3-Phase Implementation Framework
              </h2>
              <p className="text-base text-[#687086] leading-relaxed">
                How we partner with executive leadership and on-property teams to deploy precision intelligence without disrupting daily guest operations.
              </p>
            </div>

            <div className="space-y-8">
              {service.framework.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F9FB] p-8 sm:p-12 border-l-4 border-[#10175F] hover:bg-white hover:shadow-lg transition-luxury"
                >
                  <div className="text-xs font-mono font-semibold uppercase text-[#F32632] tracking-wider mb-2">
                    {step.phase}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#10175F] font-heading mb-6">
                    {step.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-200">
                    {step.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#10175F] mt-1 shrink-0" />
                        <span className="text-sm text-[#687086] leading-relaxed">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Deep-Dive Quantitative Simulation / Showcase */}
        <section className="py-20 bg-[#10175F] text-white">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left narrative */}
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-3 mb-4">
                  <span className="w-6 h-[1.5px] bg-[#F32632]" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-slate-300 font-mono">
                    {service.sampleInsight.kicker}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-heading leading-tight mb-6 text-white">
                  {service.sampleInsight.headline}
                </h2>
                <p className="text-base text-slate-300 leading-relaxed mb-8">
                  {service.sampleInsight.note}
                </p>

                <div className="grid grid-cols-2 gap-6 p-6 bg-white/5 border border-white/10 mb-8">
                  <div>
                    <div className="text-xs font-mono uppercase text-slate-400 mb-1">
                      {service.sampleInsight.metricA.label}
                    </div>
                    <div className="text-3xl font-extrabold font-mono text-white">
                      {service.sampleInsight.metricA.value}
                    </div>
                  </div>
                  <div className="border-l border-white/10 pl-6">
                    <div className="text-xs font-mono uppercase text-[#F32632] mb-1">
                      {service.sampleInsight.metricB.label}
                    </div>
                    <div className="text-3xl font-extrabold font-mono text-[#F32632]">
                      {service.sampleInsight.metricB.value}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="inline-flex items-center gap-2.5 px-6 py-3 bg-white text-[#10175F] text-sm font-semibold hover:bg-slate-100 transition-colors group"
                >
                  <span>Request Bespoke Property Audit</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Right Deliverables Checklist Box */}
              <div className="lg:col-span-6">
                <div className="bg-white/10 backdrop-blur-md p-8 sm:p-10 border border-white/15 shadow-2xl">
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/15">
                    <div className="text-xs font-mono font-semibold uppercase tracking-wider text-white">
                      Institutional Deliverables
                    </div>
                    <span className="text-[11px] font-mono text-slate-300">Practice Output</span>
                  </div>

                  <ul className="space-y-4">
                    {service.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-3.5">
                        <div className="w-5 h-5 rounded-none bg-[#F32632]/20 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F32632]" />
                        </div>
                        <span className="text-sm text-slate-200 leading-snug">{del}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-slate-400">
                    <span>Integration: PMS, RMS, CRS & Channel Managers</span>
                    <span className="font-mono text-white font-semibold">100% Turnkey</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Client Executive Testimonial */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
            <Quote className="w-10 h-10 text-[#F32632] mx-auto mb-6 opacity-60" />
            <blockquote className="text-xl sm:text-2xl lg:text-3xl font-serif italic text-[#10175F] leading-snug mb-8">
              &ldquo;{service.testimonial.quote}&rdquo;
            </blockquote>
            <div className="font-heading font-bold text-base text-[#10175F]">
              {service.testimonial.author}
            </div>
            <div className="text-xs uppercase font-mono tracking-wider text-[#687086] mt-1">
              {service.testimonial.role} &mdash;{" "}
              <span className="text-[#10175F] font-semibold">{service.testimonial.property}</span>
            </div>
          </div>
        </section>

        {/* Section 6: Explore Complementary Services */}
        <section className="py-20 bg-[#F8F9FB] border-t border-slate-200/80">
          <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <div className="inline-flex items-center gap-3 mb-3">
                  <span className="w-6 h-[1.5px] bg-[#F32632]" />
                  <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#687086] font-mono">
                    Integrated Advisory
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#10175F] tracking-tight font-heading">
                  Complementary Commercial Practices
                </h2>
              </div>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#10175F] hover:text-[#F32632] mt-4 md:mt-0 transition-colors"
              >
                <span>View All Services on Homepage</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group bg-white p-8 sm:p-10 border border-slate-200 hover:border-[#10175F] shadow-xs hover:shadow-lg transition-luxury flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold font-mono text-[#10175F] group-hover:text-[#F32632] transition-colors">
                        {rel.number}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#687086]">
                        {rel.badge}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#10175F] font-heading mb-3 group-hover:text-[#10175F]">
                      {rel.title}
                    </h3>
                    <p className="text-sm text-[#687086] leading-relaxed line-clamp-3 mb-6">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold font-mono uppercase text-[#10175F] group-hover:text-[#F32632] transition-colors pt-4 border-t border-slate-100">
                    <span>Explore Practice Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Section 7: Bottom CTA Banner */}
        <section className="bg-[#10175F] py-16 text-white text-center">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-4 text-white">
              Ready to Stress-Test Your {service.title}?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Schedule a confidential 45-minute commercial review with a senior revenue strategist. No obligation, immediate tangible benchmarks.
            </p>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F32632] hover:bg-[#d61e29] text-white text-sm font-semibold tracking-normal shadow-lg transition-luxury group"
            >
              <span>Schedule Commercial Consultation</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
