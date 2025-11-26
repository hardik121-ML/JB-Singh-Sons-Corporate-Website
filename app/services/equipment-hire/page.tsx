import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import EquipmentHireContent from "./EquipmentHireContent";

const service = SERVICES.find((s) => s.id === "equipment-hire")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function EquipmentHirePage() {
  return <EquipmentHireContent />;
}
