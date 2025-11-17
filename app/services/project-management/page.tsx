import type { Metadata } from "next";
import ServiceTemplate from "@/components/services/ServiceTemplate";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Project Management / Break Bulk Movement",
  description: "End-to-end management of oversized and non-containerised cargo with engineered routing and safe lift planning.",
};

export default function ProjectManagementPage() {
  const service = SERVICES.find(s => s.id === "project-management")!;
  return <ServiceTemplate service={service} />;
}
