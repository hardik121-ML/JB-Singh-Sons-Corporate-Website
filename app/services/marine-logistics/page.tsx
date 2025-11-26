import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import MarineLogisticsContent from "./MarineLogisticsContent";

const service = SERVICES.find((s) => s.id === "marine-logistics")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function MarineLogisticsPage() {
  return <MarineLogisticsContent />;
}
