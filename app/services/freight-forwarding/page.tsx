import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Freight Forwarding",
  description: "Structured coordination of global cargo routes with clear documentation and controlled transit.",
};

export default function FreightForwardingPage() {
  const service = SERVICES.find(s => s.id === "freight-forwarding")!;
  return <ServiceTemplate service={service} />;
}
