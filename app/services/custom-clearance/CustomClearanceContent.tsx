"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CustomClearanceFlowchart from "@/components/services/CustomClearanceFlowchart";
import AnimatedCapabilities from "@/components/services/AnimatedCapabilities";
import { SERVICES } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const service = SERVICES.find((s) => s.id === "custom-clearance")!;

export default function CustomClearanceContent() {
  const heroRef = useRef<HTMLElement>(null);
  const flowchartRef = useRef<HTMLDivElement>(null);
  const capabilitiesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(".flowchart-section", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: flowchartRef.current,
          start: "top 80%",
        },
      });

      gsap.from(".capability-section", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: capabilitiesRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3057963.webp"
            alt="Port operations background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/70 to-[#0A0A0A]/80" />
        </div>

        <div className="hero-content relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 uppercase tracking-tight">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Flowchart Section */}
      <Section className="relative overflow-hidden bg-[#F2F4F7]">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-primary-navy/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div ref={flowchartRef} className="flowchart-section relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8 text-center">
            Our Services
          </h2>
          <CustomClearanceFlowchart />
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section className="relative overflow-hidden gradient-mesh">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-primary-orange/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -left-20 w-80 h-80 bg-primary-navy/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div ref={capabilitiesRef} className="capability-section relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8 text-center">Capabilities</h2>
          <AnimatedCapabilities capabilities={service.capabilities} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-orange via-red-600 to-primary-orange text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need tailored logistics solutions for your business?
          </h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary-orange hover:bg-gray-100 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
