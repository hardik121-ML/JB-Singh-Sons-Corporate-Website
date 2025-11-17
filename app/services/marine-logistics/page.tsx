import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Marine Logistics",
  description: "Vessel coordination, port interface, and marine documentation for smooth maritime operations.",
};

export default function MarineLogisticsPage() {
  const service = SERVICES.find(s => s.id === "marine-logistics")!;
  return <ServiceTemplate service={service} />;
}
