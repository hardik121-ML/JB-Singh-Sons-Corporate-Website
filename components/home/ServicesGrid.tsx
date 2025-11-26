"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { SERVICES } from "@/lib/constants";
import * as PhosphorIcons from "@phosphor-icons/react";

export default function ServicesGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const partnerRef = useRef<HTMLDivElement>(null);
  const [coreIndex, setCoreIndex] = useState(0);
  const [partnerIndex, setPartnerIndex] = useState(0);

  const coreServices = SERVICES.filter(s => s.serviceType === "core");
  const partnerServices = SERVICES.filter(s => s.serviceType === "partner");

  // Simple animation on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      if (headerRef.current) headerRef.current.classList.add('fade-in');
      if (coreRef.current) coreRef.current.classList.add('fade-in');
      if (partnerRef.current) partnerRef.current.classList.add('fade-in');
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Simple carousel navigation
  const scrollCore = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCoreIndex(prev => (prev - 1 + coreServices.length) % coreServices.length);
    } else {
      setCoreIndex(prev => (prev + 1) % coreServices.length);
    }
  };

  const scrollPartner = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setPartnerIndex(prev => (prev - 1 + partnerServices.length) % partnerServices.length);
    } else {
      setPartnerIndex(prev => (prev + 1) % partnerServices.length);
    }
  };

  // Get Phosphor icon component by name
  const getIcon = (iconName: string) => {
    const Icon = (PhosphorIcons as any)[iconName];
    return Icon || PhosphorIcons.Question;
  };

  // Get visible services for carousel (3 at a time on desktop, 1 on mobile)
  const getVisibleServices = (services: typeof coreServices, currentIndex: number, count: number = 3) => {
    const visible = [];
    for (let i = 0; i < count; i++) {
      visible.push(services[(currentIndex + i) % services.length]);
    }
    return visible;
  };

  return (
    <Section ref={sectionRef} className="gradient-mesh relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 -left-20 w-80 h-80 bg-primary-orange/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 -right-20 w-96 h-96 bg-primary-navy/5 rounded-full blur-3xl"></div>

      <div ref={headerRef} className="text-center mb-16 opacity-0 transition-opacity duration-1000">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
          Integrated Logistics for Every Cargo Requirement
        </h2>
        <p className="text-lg md:text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
          Our services cover freight movement, regulatory clearance, project cargo, marine
          operations, warehousing, and domestic distribution. Each service follows defined
          processes, trained personnel, and strict compliance standards.
        </p>

        {/* Trust Indicators */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-6 text-sm">
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[#4B5563]">Government Approved</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[#4B5563]">Export House Status</span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[#4B5563]">20+ Years Track Record</span>
          </div>
        </div>
      </div>

      {/* Core Services */}
      <div ref={coreRef} className="mb-16 px-6 md:px-8 lg:px-12 py-10 bg-gradient-to-br from-primary-orange/5 via-transparent to-primary-orange/3 rounded-3xl border border-primary-orange/10 opacity-0 transition-opacity duration-1000">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-8 bg-primary-orange rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
            Our Core Services
          </h3>
        </div>
        <p className="text-[#4B5563] mb-8 ml-5">Delivered directly by our operational team.</p>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollCore('left')}
              className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-lg"
              aria-label="Previous core services"
            >
              <svg className="w-6 h-6 text-primary-orange" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 overflow-hidden">
              <div className="flex gap-6 transition-all duration-500">
                {getVisibleServices(coreServices, coreIndex, 3).map((service, idx) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <Card
                      key={`${service.id}-${idx}`}
                      hover
                      className="flex-1 glass-card transition-all duration-500 hover:scale-[1.02]"
                    >
                      <CardHeader>
                        <div className="w-16 h-16 bg-primary-orange/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-orange/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-8 h-8 text-primary-orange" weight="duotone" />
                        </div>
                        <CardTitle className="text-[#0A0A0A] group-hover:text-primary-orange transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {service.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link
                          href={service.slug}
                          className="text-primary-orange font-medium hover:underline inline-flex items-center gap-2 group/link"
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

            <button
              onClick={() => scrollCore('right')}
              className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-lg"
              aria-label="Next core services"
            >
              <svg className="w-6 h-6 text-primary-orange" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {coreServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Card
                key={service.id}
                hover
                className="glass-card transition-all duration-500"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary-orange/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary-orange" weight="duotone" />
                  </div>
                  <CardTitle className="text-[#0A0A0A]">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={service.slug}
                    className="text-primary-orange font-medium hover:underline inline-flex items-center gap-2"
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Partner Network Services */}
      <div ref={partnerRef} className="px-6 md:px-8 lg:px-12 py-10 bg-gradient-to-br from-[#0E287A]/5 via-transparent to-[#0E287A]/3 rounded-3xl border border-[#0E287A]/10 opacity-0 transition-opacity duration-1000">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-1.5 h-8 bg-[#0E287A] rounded-full"></div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
            Third-Party Services
          </h3>
        </div>
        <p className="text-[#4B5563] mb-8 ml-5">Provided through trusted, compliant partner networks.</p>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollPartner('left')}
              className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-lg"
              aria-label="Previous partner services"
            >
              <svg className="w-6 h-6 text-[#0E287A]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 overflow-hidden">
              <div className="flex gap-6 transition-all duration-500">
                {getVisibleServices(partnerServices, partnerIndex, 3).map((service, idx) => {
                  const Icon = getIcon(service.icon);
                  return (
                    <Card
                      key={`${service.id}-${idx}`}
                      hover
                      className="flex-1 glass-card transition-all duration-500 hover:scale-[1.02]"
                    >
                      <CardHeader>
                        <div className="w-16 h-16 bg-[#0E287A]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0E287A]/20 group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-8 h-8 text-[#0E287A]" weight="duotone" />
                        </div>
                        <CardTitle className="text-[#0A0A0A] group-hover:text-[#0E287A] transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="line-clamp-3">
                          {service.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Link
                          href={service.slug}
                          className="text-[#0E287A] font-medium hover:underline inline-flex items-center gap-2 group/link"
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

            <button
              onClick={() => scrollPartner('right')}
              className="p-3 rounded-full bg-white/50 hover:bg-white/80 transition-all duration-300 shadow-lg"
              aria-label="Next partner services"
            >
              <svg className="w-6 h-6 text-[#0E287A]" fill="none" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
          {partnerServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Card
                key={service.id}
                hover
                className="glass-card transition-all duration-500"
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-[#0E287A]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-[#0E287A]" weight="duotone" />
                  </div>
                  <CardTitle className="text-[#0A0A0A]">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={service.slug}
                    className="text-[#0E287A] font-medium hover:underline inline-flex items-center gap-2"
                  >
                    Learn More
                    <span>→</span>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </Section>
  );
}