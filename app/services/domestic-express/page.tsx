import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import DomesticExpressContent from "./DomesticExpressContent";

const service = SERVICES.find((s) => s.id === "domestic-express")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function DomesticExpressPage() {
  return <DomesticExpressContent />;
}
