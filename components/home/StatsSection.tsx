"use client";

import { useEffect } from "react";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { AirplaneTilt, Boat, Truck } from "@phosphor-icons/react";

export default function StatsSection() {
  // Counter animation
  useEffect(() => {
    const animateCounters = () => {
      const counters = document.querySelectorAll('.stat-counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || '0');
        const duration = 2000;
        const step = target / (duration / 16);

        let current = 0;
        const updateCounter = () => {
          current += step;
          if (current < target) {
            counter.textContent = Math.floor(current).toString();
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = target.toString();
          }
        };
        updateCounter();
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <Section id="stats-section" className="relative overflow-hidden py-20">
      {/* Light Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7fa] via-[#e8f0f8] to-[#f0f4f8]"></div>

      {/* Animated Light Orbs Background */}
      <div className="absolute inset-0 overflow-hidden opacity-60">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/light-orbs-animation.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Description */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#00324B] mb-4">
            Driving Growth Beyond Borders
          </h2>
          <p className="text-sm md:text-base text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
            J B Singh & Sons has operated since 2003 with a clear focus: dependable freight
            movement supported by strong processes, technical skill, and transparent communication.
            We manage complex cargo with disciplined execution and industry-aligned practices
            that help businesses move goods without delays or compliance issues.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div className="bg-white/90 backdrop-blur-xl text-center p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/40">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00324B] mb-3">
              <span className="stat-counter" data-target="20">0</span>+
            </div>
            <div className="text-sm md:text-base text-[#0A0A0A] font-semibold mb-1">
              Years in Operations
            </div>
            <div className="text-xs md:text-sm text-[#4B5563]">
              Serving clients since 2003
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-xl text-center p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/40">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-orange mb-3">
              <span className="stat-counter" data-target="100">0</span>%
            </div>
            <div className="text-sm md:text-base text-[#0A0A0A] font-semibold mb-1">
              Regulatory Accuracy
            </div>
            <div className="text-xs md:text-sm text-[#4B5563]">
              Documentation aligned with customs standards
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-xl text-center p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/40">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#00324B] mb-3">
              <span className="stat-counter" data-target="200">0</span>+
            </div>
            <div className="text-sm md:text-base text-[#0A0A0A] font-semibold mb-1">
              Global Reach
            </div>
            <div className="text-xs md:text-sm text-[#4B5563]">
              Trade lanes across 200+ global markets
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur-xl text-center p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/40">
            <div className="flex justify-center items-center gap-3 md:gap-4 mb-3">
              <AirplaneTilt size={32} weight="duotone" className="text-[#00324B] md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <Boat size={32} weight="duotone" className="text-primary-orange md:w-10 md:h-10 lg:w-12 lg:h-12" />
              <Truck size={32} weight="duotone" className="text-[#00324B] md:w-10 md:h-10 lg:w-12 lg:h-12" />
            </div>
            <div className="text-sm md:text-base text-[#0A0A0A] font-semibold mb-1">
              End-to-End Capabilities
            </div>
            <div className="text-xs md:text-sm text-[#4B5563]">
              Air · Sea · Surface coverage
            </div>
          </div>
        </div>

        {/* Read More CTA */}
        <div className="text-center mt-10">
          <Link href="/about">
            <Button
              size="lg"
              className="bg-primary-orange hover:bg-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Read More
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
