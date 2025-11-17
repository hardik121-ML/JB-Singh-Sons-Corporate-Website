import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Custom Clearance",
  description: "Accurate handling of customs processes with full regulatory compliance and minimal dwell time.",
};

export default function CustomClearancePage() {
  const service = SERVICES.find(s => s.id === "custom-clearance")!;
  return <ServiceTemplate service={service} />;
}
