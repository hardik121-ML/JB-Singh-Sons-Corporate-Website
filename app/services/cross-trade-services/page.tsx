"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, Airplane, Anchor, ArrowsClockwise } from "@phosphor-icons/react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import AnimatedCapabilities from "@/components/services/AnimatedCapabilities";
import { SERVICES } from "@/lib/constants";

const freightModes = [
  {
    title: "Road Freight",
    description: "Efficient and convenient, road freight is the preferred choice for direct transportation, minimising loading and unloading times.",
    icon: Truck,
  },
  {
    title: "Air Freight",
    description: "Swift and reliable, our air freight services guarantee on-time delivery, space allocation, and 100% safety measures.",
    icon: Airplane,
  },
  {
    title: "Ocean Freight",
    description: "For cost-effective shipping of heavy consignments, our ocean freight services provide an eco-friendly and economical option with longer transit times.",
    icon: Anchor,
  },
  {
    title: "Multi Modal Freight",
    description: "Unlocking trade opportunities, we seamlessly move goods across regions by leveraging multiple modes of transportation.",
    icon: ArrowsClockwise,
  },
];

const service = SERVICES.find((s) => s.id === "cross-trade-services")!;

export default function CrossTradeServicesPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3063470.jpg"
            alt="Global cross trade logistics"
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

      {/* Our Process Section */}
      <Section className="bg-[#F2F4F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
              Our Process
            </h2>
            <p className="text-lg text-[#4B5563] max-w-2xl mx-auto">
              Seamlessly connecting global trade with expert cross trade solutions
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {freightModes.map((mode, index) => {
              const Icon = mode.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-lg hover:border-primary-orange/30 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-primary-orange/10 rounded-xl flex items-center justify-center group-hover:bg-primary-orange/20 transition-colors">
                          <Icon size={28} weight="duotone" className="text-primary-orange" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2 group-hover:text-primary-orange transition-colors">
                          {mode.title}
                        </h3>
                        <p className="text-[#4B5563] leading-relaxed">
                          {mode.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
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
