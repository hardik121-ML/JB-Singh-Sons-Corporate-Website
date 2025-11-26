import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import WarehousingContent from "./WarehousingContent";

const service = SERVICES.find((s) => s.id === "warehousing-distribution")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function WarehousingDistributionPage() {
  return <WarehousingContent />;
}
