import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Domestic Express",
  description: "Time-bound parcel movement across India with predictable delivery windows.",
};

export default function DomesticExpressPage() {
  const service = SERVICES.find(s => s.id === "domestic-express")!;
  return <ServiceTemplate service={service} />;
}
