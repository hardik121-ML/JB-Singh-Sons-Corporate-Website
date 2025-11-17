import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Equipment Hire",
  description: "Access to cranes, forklifts, and other handling assets for controlled cargo operations.",
};

export default function EquipmentHirePage() {
  const service = SERVICES.find(s => s.id === "equipment-hire")!;
  return <ServiceTemplate service={service} />;
}
