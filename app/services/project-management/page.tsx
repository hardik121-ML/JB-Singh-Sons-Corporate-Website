import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Project Management & Custom Clearance",
  description: "End-to-end project cargo management with break bulk handling and full customs clearance support for regulatory compliance.",
};

export default function ProjectManagementPage() {
  const service = SERVICES.find(s => s.id === "project-management")!;
  return <ServiceTemplate service={service} />;
}
