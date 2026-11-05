import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Distribution & Channel Performance | 100X Hotel",
  description:
    "Re-engineer your hotel distribution mix, strengthen direct brand booking conversion, and eliminate high-cost OTA commission leakage.",
};

export default function DistributionPage() {
  const service = servicesData["distribution-channel-performance"];
  return <ServicePageLayout service={service} />;
}
