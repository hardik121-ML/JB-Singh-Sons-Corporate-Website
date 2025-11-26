"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import { SOLUTIONS } from "@/lib/constants";
import { ArrowRight } from "@phosphor-icons/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Featured solutions with their styling
const FEATURED_SOLUTIONS = [
  { id: 1, bg: "bg-white", text: "text-[#0A0A0A]", subtext: "text-[#0A0A0A]/80", number: "text-primary-orange", border: "border-black/10" },
  { id: 2, bg: "bg-primary-orange", text: "text-white", subtext: "text-white/90", number: "text-white", border: "border-white/20" },
  { id: 5, bg: "bg-primary-navy", text: "text-white", subtext: "text-white/80", number: "text-white/70", border: "border-white/20" },
  { id: 3, bg: "bg-white", text: "text-[#0A0A0A]", subtext: "text-[#0A0A0A]/80", number: "text-primary-orange", border: "border-black/10" },
];

// Map solution IDs to images
const getImageForSolution = (id: number) => {
  const imageMap: Record<number, { src: string; alt: string }> = {
    1: { src: "/images/placeholders/Solution Image 1.webp", alt: "Integrated Project Management" },
    2: { src: "/images/placeholders/Solution Image 2.avif", alt: "Door-to-Door Solutions" },
    3: { src: "/images/placeholders/Solution Image 3.avif", alt: "4PL Solutions" },
    5: { src: "/images/placeholders/Solution Image 5.webp", alt: "Custom Consultancy & Advisory" },
  };
  return imageMap[id];
};

// Sticky positioning - account for fixed header
const STICKY_TOP = "clamp(100px, calc(80px + 2vmax), 140px)";
// Padding increment per card for cascade peek effect (shows only title strip of previous cards)
const CARD_PEEK_HEIGHT = "4.5rem";

export default function SolutionsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headerRef.current) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          ".solutions-header > *",
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: headerRef.current,
              start: "top 80%",
            },
          }
        );
      }, sectionRef);

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Section ref={sectionRef} className="relative pt-20 md:pt-28 pb-8 bg-[#F8F9FC]">
      {/* Section Header */}
      <div ref={headerRef} className="solutions-header text-center mb-12 md:mb-16 px-[6vw]">
        <p className="text-primary-orange font-semibold text-sm uppercase tracking-wider mb-3">
          Solutions
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4">
          Industry Solutions Built for<br className="hidden md:block" /> Operational Certainty
        </h2>
        <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
          We design logistics solutions for sectors that need precise execution, regulatory
          alignment, and cost control across manufacturing, engineering, trade, and distribution.
        </p>
      </div>

      {/* Stacking Cards - BlinkPath style with padding-top for peek effect */}
      <div className="relative px-[6vw]" id="solutions-cards">
        {FEATURED_SOLUTIONS.map((config, index) => {
          const solution = SOLUTIONS.find((s) => s.id === config.id);
          const image = getImageForSolution(config.id);

          if (!solution) return null;

          // BlinkPath approach: each card has increasing padding-top
          // This creates space above the card where previous card's title peeks
          const paddingTopValue = `calc(${index} * ${CARD_PEEK_HEIGHT})`;

          return (
            <div
              key={config.id}
              data-solution-card
              className="sticky"
              style={{
                top: STICKY_TOP,
                paddingTop: paddingTopValue,
              }}
            >
              <div
                className={`rounded-[1.5rem] md:rounded-[2rem] ${config.bg} shadow-2xl overflow-hidden`}
              >
                {/* Title Strip - Only this peeks above the next card */}
                <div className={`px-6 md:px-8 lg:px-10 py-4 md:py-5 border-b ${config.border}`}>
                  <p className={`text-xl md:text-2xl lg:text-3xl font-semibold uppercase leading-tight tracking-tight ${config.text}`}>
                    <span className={`text-sm md:text-base font-medium mr-3 ${config.number}`}>
                      ({String(index + 1).padStart(2, "0")})
                    </span>
                    {solution.title}
                  </p>
                </div>

                {/* Content Area */}
                <div className="px-6 md:px-8 lg:px-10 py-6 md:py-8 flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Description */}
                  <div className="w-full md:w-[50%]">
                    <p className={`text-base md:text-lg leading-relaxed ${config.subtext}`}>
                      {solution.description}
                    </p>
                  </div>

                  {/* Image */}
                  <div className="w-full md:w-[50%] flex justify-center md:justify-end">
                    <div className="relative w-full max-w-md aspect-[4/3] rounded-xl overflow-hidden">
                      {image ? (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-400">Solution Image</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Solutions Link */}
      <div className="text-center mt-16 md:mt-20 px-[6vw]">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary-navy text-white font-semibold rounded-full hover:bg-primary-navy/90 transition-all duration-300 hover:gap-4 group"
        >
          View All Solutions
          <ArrowRight
            size={20}
            weight="bold"
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </Section>
  );
}
