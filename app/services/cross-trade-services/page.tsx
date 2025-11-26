"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Truck, Airplane, Anchor, ArrowsClockwise } from "@phosphor-icons/react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import AnimatedCapabilities from "@/components/services/AnimatedCapabilities";
import { SERVICES } from "@/lib/constants";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    });

    return () => ctx.revert();
  }, []);

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
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Logistics-20251119T135955Z-1-001/Cargo-Logistics/pexels-tomfisk-3063470.jpg"
            alt="Global cross trade logistics"
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

      {/* Our Process Section */}
      <Section className="relative overflow-hidden bg-[#F2F4F7]">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-[#0E287A]/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -right-20 w-80 h-80 bg-primary-navy/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto">
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
                  <div className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-[#0E287A]/10 rounded-xl flex items-center justify-center group-hover:bg-[#0E287A]/20 group-hover:scale-110 transition-all duration-300">
                          <Icon size={28} weight="duotone" className="text-[#0E287A]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-[#0A0A0A] mb-2 group-hover:text-[#0E287A] transition-colors">
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
      <Section className="relative overflow-hidden gradient-mesh">
        <div className="absolute top-20 -right-20 w-72 h-72 bg-[#0E287A]/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -left-20 w-80 h-80 bg-primary-navy/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-8 text-center">Capabilities</h2>
          <AnimatedCapabilities capabilities={service.capabilities} />
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-gradient-to-br from-[#0E287A] via-primary-navy to-[#0E287A] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need tailored logistics solutions for your business?
          </h2>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-white text-[#0E287A] hover:bg-gray-100 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
