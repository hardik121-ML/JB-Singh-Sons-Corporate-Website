import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integrated Logistics for Every Cargo Requirement",
  description: "We manage customs, transportation, equipment operations, and specialised cargo through defined processes and trained teams.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
