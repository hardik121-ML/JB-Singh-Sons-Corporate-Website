import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "J B Singh & Sons is a licensed Customs House Agent and logistics partner since 2003.",
};

export default function AboutPage() {
  return <AboutContent />;
}
