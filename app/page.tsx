import Hero from "@/components/home/Hero";
import StatsBlock from "@/components/home/StatsBlock";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";
import CSRPreview from "@/components/home/CSRPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBlock />
      <AboutPreview />
      <ServicesGrid />
      <CSRPreview />
    </>
  );
}
