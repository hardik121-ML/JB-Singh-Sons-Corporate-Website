import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Cross Trade Services",
  description: "Coordinated shipments between foreign ports with complete document control and route oversight.",
};

export default function CrossTradeServicesPage() {
  const service = SERVICES.find(s => s.id === "cross-trade-services")!;
  return <ServiceTemplate service={service} />;
}
