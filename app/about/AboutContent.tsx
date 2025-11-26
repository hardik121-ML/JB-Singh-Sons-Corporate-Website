"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Section from "@/components/ui/Section";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import Button from "@/components/ui/Button";
import VideoHero from "@/components/ui/VideoHero";
import AboutStackedSection from "@/components/about/AboutStackedSection";
import { ABOUT_CONTENT } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutContent() {
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Team stats animation
      gsap.from(".team-stat", {
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
        },
      });

      // CTA animation
      gsap.from(".cta-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section with Video Background */}
      <VideoHero
        title={ABOUT_CONTENT.title}
        subtitle={ABOUT_CONTENT.intro}
        badge="Est. 2003"
        height="large"
        overlay="dark"
      />

      {/* Stacked About Section */}
      <AboutStackedSection />

      {/* Team Section */}
      <Section className="bg-white relative overflow-hidden">
        <FloatingOrbs variant="section" />

        <div ref={teamRef} className="relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-6">Our Team</h2>
            <p className="text-lg text-[#4B5563] leading-relaxed">
              {ABOUT_CONTENT.teamDescription}
            </p>
          </div>

          {/* Key Capabilities */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="team-stat glass-card text-center p-8">
              <div className="text-5xl font-bold text-primary-orange mb-2">18+</div>
              <div className="text-lg font-semibold text-[#0A0A0A] mb-1">Years Experience</div>
              <div className="text-sm text-[#4B5563]">In customs clearance</div>
            </div>
            <div className="team-stat glass-card text-center p-8">
              <div className="text-5xl font-bold text-primary-orange mb-2">150+</div>
              <div className="text-lg font-semibold text-[#0A0A0A] mb-1">Expert Team</div>
              <div className="text-sm text-[#4B5563]">Trained professionals</div>
            </div>
            <div className="team-stat glass-card text-center p-8">
              <div className="text-5xl font-bold text-primary-orange mb-2">24/7</div>
              <div className="text-lg font-semibold text-[#0A0A0A] mb-1">Support</div>
              <div className="text-sm text-[#4B5563]">Always available</div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-orange via-red-600 to-primary-orange text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div ref={ctaRef} className="cta-content text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Optimize Your Logistics?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's discuss how we can help streamline your cargo operations
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary-orange hover:bg-gray-100 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Get Started Today
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
