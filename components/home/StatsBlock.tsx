"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/ui/Container";
import { STATS } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { Trophy, Package, Globe, ChartLineUp } from "@phosphor-icons/react";

export default function StatsBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  // Map icons to each stat
  const statIcons = [
    <Trophy key="trophy" size={32} weight="duotone" />,
    <Package key="package" size={32} weight="duotone" />,
    <Globe key="globe" size={32} weight="duotone" />,
    <ChartLineUp key="chart" size={32} weight="duotone" />
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate each stat item
      const statItems = statsRef.current?.querySelectorAll(".stat-item");

      if (statItems) {
        // Initial reveal animation
        gsap.from(statItems, {
          opacity: 0,
          y: 40,
          filter: "blur(8px)",
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        });

        // Counter animation for each stat value
        statItems.forEach((item) => {
          const valueEl = item.querySelector(".stat-value");
          if (!valueEl) return;

          const text = valueEl.textContent || "";
          // Extract numeric value and suffix (e.g., "20+" -> 20, "+")
          const match = text.match(/^(\d+)(.*)$/);
          if (!match) return;

          const endValue = parseInt(match[1], 10);
          const suffix = match[2];

          // Set initial value
          valueEl.textContent = "0" + suffix;

          // Animate counter
          gsap.to(
            { value: 0 },
            {
              value: endValue,
              duration: 2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
              },
              onUpdate: function () {
                valueEl.textContent = Math.round(this.targets()[0].value) + suffix;
              },
            }
          );
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="gradient-mesh-dark py-20 md:py-24 relative overflow-hidden">
      {/* Decorative glass orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary-orange/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>

      <Container>
        {/* Section heading for accessibility and identification */}
        <h2 className="sr-only">Our Performance Metrics</h2>
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, index) => (
            <div
              key={index}
              className="stat-item text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:scale-105 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 text-primary-orange group-hover:scale-110 transition-transform duration-300">
                {statIcons[index]}
              </div>
              <div className="stat-value text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-white font-medium">
                {stat.label}
              </div>
              {stat.subtext && (
                <div className="text-xs text-white/60 mt-2">
                  {stat.subtext}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
