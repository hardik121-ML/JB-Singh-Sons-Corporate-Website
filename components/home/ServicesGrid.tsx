"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";
import * as PhosphorIcons from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export default function ServicesGrid() {
  const coreServices = SERVICES.filter(s => s.serviceType === "core");
  const partnerServices = SERVICES.filter(s => s.serviceType === "partner");

  // State to track if we're on desktop (for infinite scroll with duplicates)
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if screen is desktop size (xl breakpoint = 1280px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1280);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  // Use duplicates for desktop infinite scroll, single set for mobile/tablet
  const displayCoreServices = isDesktop
    ? [...coreServices, ...coreServices, ...coreServices]
    : coreServices;
  const displayPartnerServices = isDesktop
    ? [...partnerServices, ...partnerServices, ...partnerServices]
    : partnerServices;

  // Get Phosphor icon component by name
  const getIcon = (iconName: string) => {
    const Icon = (PhosphorIcons as any)[iconName];
    return Icon || PhosphorIcons.Question;
  };

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
          Integrated Logistics for Every Cargo Requirement
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our services cover freight movement, regulatory clearance, project cargo, marine
          operations, warehousing, and domestic distribution. Each service follows defined
          processes, trained personnel, and strict compliance standards.
        </p>
      </div>

      {/* Core Services */}
      <div className="mb-12 -mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12 py-8 bg-gradient-to-br from-primary-orange/5 to-transparent rounded-2xl border-l-4 border-primary-orange">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-8 bg-primary-orange rounded-full"></div>
          <h3 className="text-2xl font-bold text-neutral-dark">
            Our Core Services
          </h3>
        </div>
        {/* Mobile/Tablet: Manual scroll, Desktop (1280px+): Auto-scroll animation */}
        <div className="relative -mx-6 md:-mx-8 xl:-mx-12 overflow-x-auto xl:overflow-hidden scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-6 pb-4 px-6 md:px-8 xl:px-0 xl:animate-scroll-core xl:hover:animation-pause">
            {displayCoreServices.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <Card key={`${service.id}-${index}`} hover className="group flex-shrink-0 w-80 bg-white snap-start">
                  <CardHeader>
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-primary-orange/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-orange/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary-orange" weight="duotone" />
                    </div>
                    <CardTitle className="text-neutral-dark group-hover:text-primary-orange transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={service.slug}
                      className="text-primary-orange font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Partner Network Services */}
      <div className="-mx-6 md:-mx-8 lg:-mx-12 px-6 md:px-8 lg:px-12 py-8 bg-gradient-to-br from-primary-navy/5 to-transparent rounded-2xl border-l-4 border-primary-navy">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-1.5 h-8 bg-primary-navy rounded-full"></div>
          <h3 className="text-2xl font-bold text-neutral-dark">
            Through Our Partner Network
          </h3>
        </div>
        {/* Mobile/Tablet: Manual scroll, Desktop (1280px+): Auto-scroll animation */}
        <div className="relative -mx-6 md:-mx-8 xl:-mx-12 overflow-x-auto xl:overflow-hidden scrollbar-hide snap-x snap-mandatory">
          <div className="flex gap-6 pb-4 px-6 md:px-8 xl:px-0 xl:animate-scroll-partner xl:hover:animation-pause">
            {displayPartnerServices.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <Card key={`${service.id}-${index}`} hover className="group flex-shrink-0 w-80 bg-white snap-start">
                  <CardHeader>
                    {/* Service Icon */}
                    <div className="w-16 h-16 bg-primary-navy/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-navy/20 transition-colors">
                      <Icon className="w-8 h-8 text-primary-navy" weight="duotone" />
                    </div>
                    <CardTitle className="text-neutral-dark group-hover:text-primary-navy transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {service.shortDescription}
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Link
                      href={service.slug}
                      className="text-primary-navy font-medium hover:underline"
                    >
                      Learn More →
                    </Link>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
