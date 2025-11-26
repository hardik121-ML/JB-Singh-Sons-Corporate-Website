"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import VideoHero from "@/components/ui/VideoHero";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";
import * as PhosphorIcons from "@phosphor-icons/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const coreRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const coreServices = SERVICES.filter(s => s.serviceType === "core");
  const partnerServices = SERVICES.filter(s => s.serviceType === "partner");

  // Get Phosphor icon component by name
  const getIcon = (iconName: string) => {
    const Icon = (PhosphorIcons as any)[iconName];
    return Icon || PhosphorIcons.Question;
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Core services cards stagger reveal
      gsap.from(".core-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: coreRef.current,
          start: "top 80%",
        },
      });

      // Partner services cards stagger reveal
      gsap.from(".partner-card", {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: partnerRef.current,
          start: "top 80%",
        },
      });

      // CTA section reveal
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
        title="Integrated Logistics for Every Cargo Requirement"
        subtitle="We manage customs, transportation, equipment operations, and specialised cargo through defined processes and trained teams. Our partner network extends these capabilities across additional freight solutions."
        badge="8+ Core Services"
        height="large"
        overlay="dark"
        ctaText="Get Quote"
        ctaHref="/contact"
      />

      {/* Section A — Core Services */}
      <Section className="gradient-mesh relative overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 -left-20 w-80 h-80 bg-primary-orange/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div ref={coreRef} className="relative z-10">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4 bg-primary-orange/10 px-4 py-2 rounded-full">
              <span className="text-primary-orange font-semibold text-sm">DIRECT OPERATIONS</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-3">Our Core Services</h2>
            <p className="text-lg text-[#4B5563]">Operated directly by J B Singh & Sons with full control and accountability</p>
          </div>

          {/* 3-Card Grid Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreServices.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Card key={service.id} hover className="core-card group glass-card">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary-orange/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-orange/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-primary-orange" weight="duotone" />
                    </div>
                    <CardTitle className="text-[#0A0A0A] group-hover:text-primary-orange transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={service.slug}
                      className="text-primary-orange font-semibold hover:underline inline-flex items-center gap-2 group/link"
                    >
                      Learn More
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Section B — Third-Party Services */}
      <Section className="bg-white relative overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-1/4 -right-20 w-72 h-72 bg-[#0E287A]/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary-navy/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div ref={partnerRef} className="relative z-10">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 mb-4 bg-[#0E287A]/10 px-4 py-2 rounded-full">
              <span className="text-[#0E287A] font-semibold text-sm">PARTNER NETWORK</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-3">Third-Party Services</h2>
            <p className="text-lg text-[#4B5563]">Managed through our trusted partner network with rigorous quality standards</p>
          </div>

          {/* 5-Card Grid (2-3 layout) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerServices.map((service) => {
              const Icon = getIcon(service.icon);
              return (
                <Card key={service.id} hover className="partner-card group glass-card">
                  <CardHeader>
                    <div className="w-16 h-16 bg-[#0E287A]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0E287A]/20 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-8 h-8 text-[#0E287A]" weight="duotone" />
                    </div>
                    <CardTitle className="text-[#0A0A0A] group-hover:text-[#0E287A] transition-colors duration-300">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={service.slug}
                      className="text-[#0E287A] font-semibold hover:underline inline-flex items-center gap-2 group/link"
                    >
                      Learn More
                      <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-primary-orange via-red-600 to-primary-orange text-white relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div ref={ctaRef} className="cta-content text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Logistics Solution?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Our team can design integrated solutions for your specific cargo requirements
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-primary-orange hover:bg-gray-100 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Request Consultation
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
