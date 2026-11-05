import { Metadata } from "next";
import { servicesData } from "@/data/servicesData";
import { ServicePageLayout } from "@/components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Performance Analytics & Forecasting | 100X Hotel",
  description:
    "Forward-looking commercial pacing, unconstrained demand modeling, and executive KPI intelligence to protect hotel asset value and drive EBITDA.",
};

export default function PerformanceAnalyticsPage() {
  const service = servicesData["performance-analytics-forecasting"];
  return <ServicePageLayout service={service} />;
}
