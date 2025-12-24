"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { SOLUTIONS } from "@/lib/constants";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SolutionsContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('Solutions page mounted, SOLUTIONS count:', SOLUTIONS.length);

    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Solution cards stagger reveal - ensure all cards become visible
      if (gridRef.current) {
        gsap.fromTo(
          ".solution-card",
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: gridRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  // Map solution IDs to images
  const getImageForSolution = (id: number) => {
    const imageMap: Record<number, { src: string; alt: string }> = {
      1: { src: "/images/placeholders/Solution Image 1.webp", alt: "Integrated Project Management" },
      2: { src: "/images/placeholders/Solution Image 2.avif", alt: "Door-to-Door Solutions" },
      3: { src: "/images/placeholders/Solution Image 3.avif", alt: "4PL Solutions" },
      4: { src: "/images/placeholders/Solution Image 4.avif", alt: "Value-Added Services" },
      5: { src: "/images/placeholders/Solution Image 5.webp", alt: "Custom Consultancy & Advisory" },
      6: { src: "/images/placeholders/Solution Image 6.avif", alt: "Solution 6" },
      7: { src: "/images/placeholders/Solution Image 7.avif", alt: "Solution 7" },
      8: { src: "/images/placeholders/Solution Image 8.avif", alt: "Solution 8" },
      9: { src: "/images/placeholders/Solution Image 9.avif", alt: "Solution 9" },
    };
    return imageMap[id];
  };

  return (
    <>
      {/* Hero Section with Gradient Mesh Background */}
      <div ref={heroRef} className="relative overflow-hidden pt-32 pb-20">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh" />

        {/* Floating Orbs */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-orange/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-primary-navy/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />

        <Section className="relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
              Our Solutions
            </h1>
            <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed mb-8 max-w-3xl mx-auto">
              We design logistics solutions for sectors that need precise execution, regulatory
              alignment, and cost control across manufacturing, engineering, trade, and distribution.
            </p>
            <Link href="/contact">
              <Button size="lg">Contact Us</Button>
            </Link>
          </div>
        </Section>
      </div>

      {/* Solutions Grid */}
      <Section className="relative overflow-hidden py-16 md:py-24">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#F8F9FC]/80" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-navy/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />

        <div className="relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
              Industry Solutions Built for Operational Certainty
            </h2>
          </div>

          <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((solution) => {
              const image = getImageForSolution(solution.id);
              return (
                <div
                  key={solution.id}
                  className="solution-card glass-card p-6 group hover:shadow-xl transition-all duration-300"
                >
                  {/* Solution Image */}
                  <div className="w-full aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                    {image ? (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        onError={(e) => {
                          console.error(`Failed to load image: ${image.src}`);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-gray-400 text-sm">[Solution Image {solution.id}]</div>
                      </div>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-2 group-hover:text-primary-navy transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-[#4B5563] text-sm leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
