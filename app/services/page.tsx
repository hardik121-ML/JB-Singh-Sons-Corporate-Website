"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/Card";
import { SERVICES } from "@/lib/constants";
import * as PhosphorIcons from "@phosphor-icons/react";

export default function ServicesPage() {
  const coreServices = SERVICES.filter(s => s.serviceType === "core");
  const partnerServices = SERVICES.filter(s => s.serviceType === "partner");

  // Get Phosphor icon component by name
  const getIcon = (iconName: string) => {
    const Icon = (PhosphorIcons as any)[iconName];
    return Icon || PhosphorIcons.Question;
  };

  return (
    <>
      {/* Hero Section */}
      <Section className="bg-[#F8F9FC] pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
            Integrated Logistics for Every Cargo Requirement
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed">
            We manage customs, transportation, equipment operations, and specialised cargo through
            defined processes and trained teams. Our partner network extends these capabilities
            across additional freight solutions, giving clients a single point of coordination
            for every stage of logistics.
          </p>
        </div>
      </Section>

      {/* Section A — Core Services */}
      <Section className="bg-white">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-2">Our Core Services</h2>
          <p className="text-[#4B5563]">Operated directly by J B Singh & Sons</p>
        </div>

        {/* 3-Card Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {coreServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Card key={service.id} hover className="group bg-white">
                <CardHeader>
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-primary-orange/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary-orange/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary-orange" weight="duotone" />
                  </div>
                  <CardTitle className="text-[#0A0A0A] group-hover:text-primary-orange transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
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
      </Section>

      {/* Section B — Third-Party Services */}
      <Section className="bg-[#F2F4F7]">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-2">Third-Party Services</h2>
          <p className="text-[#4B5563]">Coordinated by J B Singh & Sons through vetted partner networks</p>
        </div>

        {/* 5-Card Grid (responsive: 3 + 2 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerServices.map((service) => {
            const Icon = getIcon(service.icon);
            return (
              <Card key={service.id} hover className="group bg-white">
                <CardHeader>
                  {/* Service Icon */}
                  <div className="w-16 h-16 bg-[#0E287A]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#0E287A]/20 transition-colors">
                    <Icon className="w-8 h-8 text-[#0E287A]" weight="duotone" />
                  </div>
                  <CardTitle className="text-[#0A0A0A] group-hover:text-[#0E287A] transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription>
                    {service.shortDescription}
                  </CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link
                    href={service.slug}
                    className="text-[#0E287A] font-medium hover:underline"
                  >
                    Learn More →
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>

      {/* Footer CTA */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto text-center bg-[#F8F9FC] rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">
            Need tailored logistics solutions for your business?
          </h2>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
