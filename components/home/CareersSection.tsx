"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { COMPANY_INFO } from "@/lib/constants";
import { UsersFour } from "@phosphor-icons/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CareersSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from(".careers-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Card animation
      gsap.from(cardRef.current, {
        opacity: 0,
        y: 40,
        scale: 0.98,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28 bg-white">
      {/* Floating Orbs */}
      <div className="absolute top-1/3 -right-20 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary-navy/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="careers-header text-center mb-12">
          <p className="text-primary-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Careers
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4">
            Join Our Team
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
            We hire professionals who value structured work, accuracy in execution, and clear
            communication across teams and partners.
          </p>
        </div>

        {/* No Current Openings Card */}
        <div className="max-w-4xl mx-auto">
          <div ref={cardRef} className="glass-card rounded-2xl p-10 md:p-12 relative overflow-hidden min-h-[350px]">
            {/* Background Image */}
            <Image
              src="/images/placeholders/Hiring.avif"
              alt="Hiring background"
              fill
              className="object-cover"
            />
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A]/85 to-[#0A0A0A]/70" />

            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="bg-white/20 backdrop-blur-xl p-5 rounded-2xl inline-block hover:scale-110 transition-transform duration-300">
                  <UsersFour size={56} weight="duotone" className="text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                No Current Openings
              </h3>
              <p className="text-lg text-gray-200 mb-6 max-w-2xl mx-auto">
                Currently, there are no vacancies. However, if you'd like to be considered for
                future roles, you're welcome to send your resume to our team.
              </p>
              <p className="text-gray-300 mb-3">
                Send your resume to:
              </p>
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="text-primary-orange font-semibold hover:underline text-lg inline-block mb-6"
              >
                {COMPANY_INFO.contact.email}
              </a>
              <div>
                <Link href="/careers">
                  <Button
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    View Careers Page
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
