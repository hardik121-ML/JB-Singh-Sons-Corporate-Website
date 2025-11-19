import Hero from "@/components/home/Hero";
import StatsBlock from "@/components/home/StatsBlock";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesGrid from "@/components/home/ServicesGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBlock />
      <AboutPreview />
      <ServicesGrid />
    </>
  );
}
