import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Warehousing & Distribution",
  description: "Secure storage with process-driven inventory control and planned dispatch cycles.",
};

export default function WarehousingDistributionPage() {
  const service = SERVICES.find(s => s.id === "warehousing-distribution")!;
  return <ServiceTemplate service={service} />;
}
