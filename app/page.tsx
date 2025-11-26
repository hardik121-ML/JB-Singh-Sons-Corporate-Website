"use client";

import { useEffect } from "react";
import { refreshScrollTrigger } from "@/lib/gsap";
import Hero from "@/components/home/Hero";
import StatsSection from "@/components/home/StatsSection";
import ClientsSection from "@/components/home/ClientsSection";
import ServicesHorizontalScroll from "@/components/home/ServicesHorizontalScroll";
import SolutionsSection from "@/components/home/SolutionsSection";
import AboutStackedSection from "@/components/about/AboutStackedSection";
import CareersSection from "@/components/home/CareersSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  // Refresh ScrollTrigger after all sections mount
  useEffect(() => {
    const timer = setTimeout(() => {
      refreshScrollTrigger();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Home Section: Hero + Stats + Clients */}
      <section id="home">
        <Hero />
        <StatsSection />
        <ClientsSection />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesHorizontalScroll />
      </section>

      {/* Solutions Section */}
      <section id="solutions">
        <SolutionsSection />
      </section>

      {/* About Section */}
      <section id="about">
        <AboutStackedSection />
      </section>

      {/* Careers Section */}
      <section id="careers">
        <CareersSection />
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
    </>
  );
}
