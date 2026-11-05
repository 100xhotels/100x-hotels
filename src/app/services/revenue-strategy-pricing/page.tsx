import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Revenue Strategy & Dynamic Pricing | 100X Hotel",
  description:
    "Calibrated dynamic rate ladders, demand elasticity modeling, and compset positioning designed to maximize ADR and RevPAR for hotels and resorts.",
};

export default function RevenueStrategyPage() {
  const service = servicesData["revenue-strategy-pricing"];
  return <ServicePageLayout service={service} />;
}
