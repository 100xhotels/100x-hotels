"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { motion, AnimatePresence } from "framer-motion";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    hotelName: "",
    propertyType: "Boutique Hotel (50-150 rooms)",
    rooms: "75-120",
    location: "",
    name: "",
    email: "",
    objective: "ADR Optimization & Direct Channel Mix",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#10175F]/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top brand accent bar */}
          <div className="h-1.5 w-full bg-[#10175F] relative">
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-[#F32632]" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[#687086] hover:text-[#10175F] p-1.5 transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-8 sm:p-10">
            {!submitted ? (
              <>
                <div className="mb-6">
                  <Logo variant="dark" size="sm" className="mb-4" />
                  <h3 className="text-2xl font-bold tracking-tight text-[#10175F] font-heading">
                    Request a Property Revenue Consultation
                  </h3>
                  <p className="mt-1.5 text-sm text-[#687086] leading-relaxed">
                    Connect directly with our senior commercial strategists to evaluate your property&apos;s rate positioning, channel distribution, and revenue potential.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-1.5 font-heading">
                        Property Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. The Grand Heritage"
                        value={formData.hotelName}
                        onChange={(e) =>
                          setFormData({ ...formData, hotelName: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] text-[#171A26] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#10175F] transition-luxury"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-1.5 font-heading">
                        Destination / City
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. London, Mayfair"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] text-[#171A26] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#10175F] transition-luxury"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-1.5 font-heading">
                        Property Category
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) =>
                          setFormData({ ...formData, propertyType: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] text-[#171A26] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#10175F] transition-luxury"
                      >
                        <option>Boutique Hotel (30-100 rooms)</option>
                        <option>Luxury Resort & Retreat</option>
                        <option>Urban Commercial Hotel (150+ rooms)</option>
                        <option>Multi-Property Portfolio / Group</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-1.5 font-heading">
                        Primary Objective
                      </label>
                      <select
                        value={formData.objective}
                        onChange={(e) =>
                          setFormData({ ...formData, objective: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] text-[#171A26] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#10175F] transition-luxury"
                      >
                        <option>ADR & Rate Yield Optimization</option>
                        <option>Direct Distribution & OTA Commission Reduction</option>
                        <option>CompSet Outperformance & RevPAR Index</option>
                        <option>Comprehensive Revenue Management Steering</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-1.5 font-heading">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] text-[#171A26] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#10175F] transition-luxury"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#10175F] uppercase tracking-wider mb-1.5 font-heading">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@hotelproperty.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-3.5 py-2.5 text-sm bg-[#F8F9FB] text-[#171A26] focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#10175F] transition-luxury"
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#10175F] text-white font-semibold text-sm hover:bg-[#17216F] transition-luxury group shadow-md"
                    >
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4 text-[#F32632] group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <p className="mt-2.5 text-center text-xs text-[#687086]">
                      Confidential. Direct advisory response within 24 business hours.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-[#10175F]/5 flex items-center justify-center text-[#10175F]">
                  <CheckCircle2 className="w-8 h-8 text-[#10175F]" />
                </div>
                <h3 className="text-2xl font-bold text-[#10175F] font-heading">
                  Consultation Request Received
                </h3>
                <p className="mt-2 text-sm text-[#687086] max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || "partner"}. A commercial partner specializing in {formData.propertyType} will review {formData.hotelName || "your property"} and contact you at {formData.email}.
                </p>
                <div className="mt-6 pt-6 border-t border-slate-100 flex justify-center">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 bg-[#10175F] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#17216F] transition-colors"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
