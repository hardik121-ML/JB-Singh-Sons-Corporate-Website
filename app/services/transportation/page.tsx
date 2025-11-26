import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import TransportationContent from "./TransportationContent";

const service = SERVICES.find((s) => s.id === "transportation")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function TransportationPage() {
  return <TransportationContent />;
}
