import type { Metadata } from "next";
import SolutionsContent from "./SolutionsContent";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Comprehensive logistics solutions including 4PL, door-to-door delivery, and supply chain technology.",
};

export default function SolutionsPage() {
  return <SolutionsContent />;
}
