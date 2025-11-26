"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CLIENTS } from "@/lib/constants";

// Register ScrollTrigger plugin (SSR-safe)
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Constants for ticker positioning
const ITEM_WIDTH_ESTIMATE = 500;
const SINGLE_LOOP_WIDTH = CLIENTS.length * ITEM_WIDTH_ESTIMATE;
const ROW1_INITIAL_OFFSET = -SINGLE_LOOP_WIDTH;

export default function ClientsSection() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Scroll-triggered reveal animation for center content
  useEffect(() => {
    if (!contentRef.current || !sectionRef.current) return;

    if (prefersReducedMotion) {
      gsap.set(contentRef.current, { opacity: 1, scale: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, {
        opacity: 0,
        scale: 0.95,
        y: 30,
      });

      gsap.to(contentRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: 0.5,
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // Scroll position tracking with RAF throttling
  useEffect(() => {
    if (prefersReducedMotion) return;

    let rafId: number;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const deltaScroll = currentScrollY - lastScrollY;
        lastScrollY = currentScrollY;
        setScrollPosition((prev) => prev + deltaScroll);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, [prefersReducedMotion]);

  // GSAP ticker movement
  useEffect(() => {
    if (!row1Ref.current || !row2Ref.current) return;
    if (prefersReducedMotion) return;

    const speed = 0.5;
    const offset = scrollPosition * speed;

    // Row 1: moves RIGHT when scrolling down
    const row1Position = ROW1_INITIAL_OFFSET + offset;
    // Row 2: moves LEFT when scrolling down
    const row2Position = -offset;

    gsap.to(row1Ref.current, {
      x: row1Position,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });

    gsap.to(row2Ref.current, {
      x: row2Position,
      duration: 0.3,
      ease: "power2.out",
      overwrite: true,
    });
  }, [scrollPosition, prefersReducedMotion]);

  return (
    <section
      ref={sectionRef}
      aria-label="Our trusted clients"
      className="relative overflow-hidden"
    >
      {/* Top Black Band with Ticker */}
      <div className="relative bg-black py-3">
        <div className="overflow-hidden" style={{ contain: "layout style paint" }}>
          <div
            ref={row1Ref}
            className="flex gap-8"
            style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
            aria-hidden="true"
          >
            {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, index) => (
              <div
                key={`row1-${client.name}-${index}`}
                className="flex items-center gap-8 flex-shrink-0"
              >
                <span className="text-white/95 text-2xl md:text-3xl font-black uppercase whitespace-nowrap tracking-wider font-sans">
                  {client.name}
                </span>
                <span className="text-primary-orange text-2xl md:text-3xl">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section with Content */}
      <div className="relative">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="/videos/trusted-section-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Center Content */}
        <div
          ref={contentRef}
          className="relative z-10 text-center py-28 md:py-40 lg:py-48 px-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight drop-shadow-lg">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base md:text-lg text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            Serving established manufacturers and traders in the steel, alloys,
            and metal industries since 2003.
          </p>

          {/* Certification Badges */}
          <div className="flex justify-center gap-4 mt-8">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-orange to-red-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">ISO</span>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-primary-navy to-blue-600 rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">AEO</span>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-[#0E287A] to-primary-navy rounded-xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
              <span className="text-white font-bold text-sm">FIEO</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Black Band with Ticker */}
      <div className="relative bg-black py-3">
        <div className="overflow-hidden" style={{ contain: "layout style paint" }}>
          <div
            ref={row2Ref}
            className="flex gap-8"
            style={{ willChange: prefersReducedMotion ? "auto" : "transform" }}
            aria-hidden="true"
          >
            {[
              ...CLIENTS.slice(4),
              ...CLIENTS,
              ...CLIENTS,
              ...CLIENTS.slice(0, 4),
            ].map((client, index) => (
              <div
                key={`row2-${client.name}-${index}`}
                className="flex items-center gap-8 flex-shrink-0"
              >
                <span className="text-white/95 text-2xl md:text-3xl font-black uppercase whitespace-nowrap tracking-wider font-sans">
                  {client.name}
                </span>
                <span className="text-primary-orange text-2xl md:text-3xl">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
