import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Transportation Service",
  description: "Reliable multimodal movement supported by route planning, trained drivers, and monitored handovers.",
};

export default function TransportationServicePage() {
  const service = SERVICES.find(s => s.id === "transportation-service")!;
  return <ServiceTemplate service={service} />;
}
