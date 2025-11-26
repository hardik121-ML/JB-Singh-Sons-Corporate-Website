"use client";

import { useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SERVICES } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

interface ServiceWithNumber {
  id: string;
  title: string;
  shortDescription: string;
  slug: string;
  serviceType: "core" | "partner";
  number: string;
}

export default function ServicesHorizontalScroll() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Combine all services with numbering (01-08)
  const allServices: ServiceWithNumber[] = SERVICES.map((service, index) => ({
    ...service,
    number: String(index + 1).padStart(2, "0"),
  }));

  useGSAP(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    // Only apply horizontal scroll on desktop
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      // Calculate total scroll distance
      const totalWidth = container.scrollWidth;
      const viewportWidth = window.innerWidth;
      const scrollDistance = totalWidth - viewportWidth + 100;

      gsap.to(container, {
        x: -scrollDistance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${scrollDistance}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#1a1a1a]">
      {/* Desktop: Horizontal scroll */}
      <div className="hidden lg:block">
        <div className="sticky top-0 h-[100dvh] flex items-center pl-[6vw] overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-[2vmax] items-center"
            style={{ width: "fit-content" }}
          >
            {/* Section Header */}
            <div className="flex-shrink-0 w-[max(24rem,36vmax)] h-[clamp(28rem,55vmax,38vmax)] flex flex-col justify-center pr-[4vmax]">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Our Services
              </h2>
              <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-lg">
                End-to-end logistics solutions for complex cargo movements across domestic and international routes.
              </p>
              <div className="flex gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary-orange"></div>
                  <span className="text-white/70">01-03 Core Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                  <span className="text-white/70">04-08 Partner Services</span>
                </div>
              </div>
            </div>

            {/* Service Cards */}
            {allServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile: Vertical scroll */}
      <div className="lg:hidden relative">
        <div className="relative px-4 py-16">
          {/* Mobile Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-base text-white/80 max-w-md mx-auto">
              End-to-end logistics solutions for complex cargo movements.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-xs">
              <span className="text-primary-orange font-medium">01-03 Core</span>
              <span className="text-blue-400 font-medium">04-08 Partner</span>
            </div>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 max-w-md mx-auto">
            {allServices.map((service) => (
              <MobileServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceWithNumber }) {
  const isCore = service.serviceType === "core";
  const titleColor = isCore ? "text-primary-orange" : "text-blue-400";

  return (
    <div className="flex-shrink-0 w-[max(20rem,26vmax)]">
      <div className="h-[clamp(28rem,50vmax,36vmax)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-[max(1.6rem,2vmax)] p-[2.5vmax] flex flex-col gap-6 shadow-2xl hover:bg-white/15 transition-all duration-300">
        <div>
          <span className="text-[max(1rem,1.2vmax)] text-white/50 font-medium">
            ({service.number})
          </span>
          <p
            className={`text-[max(1.6rem,2.2vmax)] font-bold ${titleColor} uppercase mt-[1vmax] leading-[115%] break-words hyphens-auto`}
            lang="en"
          >
            {service.title}
          </p>
        </div>
        <div className="flex-1 flex flex-col justify-end">
          <p className="text-[max(1rem,1.3vmax)] text-white/80 leading-[160%] mb-6">
            {service.shortDescription}
          </p>
          <Link
            href={service.slug}
            className="inline-flex items-center gap-2 text-[max(1rem,1.1vmax)] font-semibold text-white bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl transition-all duration-300 w-fit group"
          >
            Learn More
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function MobileServiceCard({ service }: { service: ServiceWithNumber }) {
  const isCore = service.serviceType === "core";
  const titleColor = isCore ? "text-primary-orange" : "text-blue-400";
  const borderColor = isCore ? "border-primary-orange/30" : "border-blue-400/30";

  return (
    <Link href={service.slug}>
      <div
        className={`bg-white/10 backdrop-blur-xl border ${borderColor} rounded-2xl p-5 hover:bg-white/15 transition-all duration-300`}
      >
        <div className="flex items-start justify-between mb-2">
          <span className="text-sm text-white/50 font-medium">
            ({service.number})
          </span>
        </div>
        <h3 className={`text-xl font-bold ${titleColor} uppercase mb-2`}>
          {service.title}
        </h3>
        <p className="text-sm text-white/70 leading-relaxed line-clamp-2 mb-3">
          {service.shortDescription}
        </p>
        <span className="text-white/80 text-sm font-medium inline-flex items-center gap-1">
          Learn More <span>→</span>
        </span>
      </div>
    </Link>
  );
}
