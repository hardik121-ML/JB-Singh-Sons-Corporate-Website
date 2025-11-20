import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import CustomClearanceFlowchart from "@/components/services/CustomClearanceFlowchart";
import AnimatedCapabilities from "@/components/services/AnimatedCapabilities";
import { SERVICES } from "@/lib/constants";

const service = SERVICES.find((s) => s.id === "custom-clearance")!;

export const metadata: Metadata = {
  title: service.title,
  description: service.description,
};

export default function CustomClearancePage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3057963.jpg"
            alt="Port operations background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-[#0A0A0A]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Service Flowchart Section */}
      <Section className="bg-[#F2F4F7]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8 text-center">
            Our Services
          </h2>
          <CustomClearanceFlowchart />
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8 text-center">Capabilities</h2>
          <AnimatedCapabilities capabilities={service.capabilities} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
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
