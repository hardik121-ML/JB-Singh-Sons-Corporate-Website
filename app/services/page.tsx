import type { Metadata } from "next";
import ServicesGrid from "@/components/home/ServicesGrid";

export const metadata: Metadata = {
  title: "Services",
  description: "Integrated logistics services including freight forwarding, customs clearance, marine logistics, and more.",
};

export default function ServicesPage() {
  return <ServicesGrid />;
}
