"use client";

import Link from "next/link";
import Image from "next/image";
import { Shield, Leaf } from "@phosphor-icons/react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function CSRPreview() {
  return (
    <Section>
      <div className="text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
          Our CSR – Caring Beyond Business
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We follow industry safety norms, support local communities where possible, and maintain
          transparent governance practices that align with operational standards.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* HSE Safety Card with Background Image */}
          <div className="relative p-6 rounded-2xl overflow-hidden min-h-[250px] flex flex-col justify-center">
            <Image
              src="/images/placeholders/hse safety bg.webp"
              alt="HSE Safety Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-white" weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">HSE Safety</h3>
              <p className="text-gray-100">
                Comprehensive health, safety, and environmental programs
              </p>
            </div>
          </div>

          {/* ESG Card with Background Image */}
          <div className="relative p-6 rounded-2xl overflow-hidden min-h-[250px] flex flex-col justify-center">
            <Image
              src="/images/placeholders/esg bg.jpg"
              alt="ESG Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/50"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-10 h-10 text-white" weight="duotone" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">ESG</h3>
              <p className="text-gray-100">
                Environmental, Social, and Governance commitments
              </p>
            </div>
          </div>
        </div>

        <Link href="/csr">
          <Button variant="outline">Learn More About Our CSR</Button>
        </Link>
      </div>
    </Section>
  );
}
