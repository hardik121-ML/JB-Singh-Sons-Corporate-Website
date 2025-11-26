import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import CustomClearanceContent from "./CustomClearanceContent";

const service = SERVICES.find((s) => s.id === "custom-clearance")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function CustomClearancePage() {
  return <CustomClearanceContent />;
}
