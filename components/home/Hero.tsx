"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { HERO_CONTENT } from "@/lib/constants";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const companyNameRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Cinematic intro animation (time-based, not scroll-tied)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states - everything hidden
      gsap.set([logoRef.current, companyNameRef.current, headlineRef.current, subheadlineRef.current, ctaRef.current], {
        opacity: 0,
      });

      gsap.set(logoRef.current, {
        y: 20,
      });

      gsap.set(companyNameRef.current, {
        y: 15,
      });

      gsap.set(headlineRef.current, {
        y: 15,
      });

      gsap.set(subheadlineRef.current, {
        y: 10,
      });

      gsap.set(ctaRef.current, {
        y: 10,
      });

      // Create intro timeline that plays automatically
      const introTl = gsap.timeline({
        defaults: { ease: "power2.out" },
        delay: 0.5, // Small delay to let page load
      });

      // Cinematic reveal sequence
      introTl
        // Logo fades up from bottom
        .to(logoRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        })
        // Company name fades up
        .to(companyNameRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.3")
        // Headline appears
        .to(headlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        }, "-=0.2")
        // Subheadline fades in
        .to(subheadlineRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        }, "-=0.2")
        // CTA button fades in
        .to(ctaRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        }, "-=0.2");

      // Add scroll exit animations after intro completes
      introTl.eventCallback("onComplete", () => {
        // Set up scroll-triggered exit animations
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: "+=300",
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;

            // Logo fades out on scroll (no position change)
            if (logoRef.current) {
              gsap.set(logoRef.current, {
                opacity: 1 - progress * 1.5,
                y: progress * -100,
              });
            }

            // Company name moves
            if (companyNameRef.current) {
              gsap.set(companyNameRef.current, {
                opacity: 1 - progress * 1.2,
                y: progress * -150,
              });
            }

            // Parallax fade for other content
            if (headlineRef.current) {
              gsap.set(headlineRef.current, {
                opacity: 1 - progress * 1.5,
                y: progress * -80,
              });
            }

            if (subheadlineRef.current) {
              gsap.set(subheadlineRef.current, {
                opacity: 1 - progress * 1.8,
                y: progress * -60,
              });
            }

            if (ctaRef.current) {
              gsap.set(ctaRef.current, {
                opacity: 1 - progress * 2,
                y: progress * -40,
              });
            }

            // Scale video slightly as user scrolls
            if (videoRef.current) {
              gsap.set(videoRef.current, {
                scale: 1 + progress * 0.08,
              });
            }
          }
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden min-h-screen flex items-center"
    >
      {/* Background Video with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover will-change-transform"
          style={{ objectPosition: 'center 35%' }}
        >
          <source
            src="/videos/hero-video.mp4"
            type="video/mp4"
          />
        </video>
        {/* Radial vignette effect for text prominence - darkens center, lightens edges */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 50% at center, rgba(0, 0, 0, 0.4) 0%, transparent 100%)'
          }}
        ></div>
        {/* Mobile-only darker overlay for better text readability */}
        <div className="absolute inset-0 bg-black/25 md:bg-transparent"></div>
      </div>

      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div
            ref={logoRef}
            className="flex justify-center mb-8"
          >
            <div className="relative w-[140px] h-[140px] md:w-[180px] md:h-[180px]">
              <Image
                src="/Logo.svg"
                alt="J B Singh & Sons Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Company Name */}
          <div
            ref={companyNameRef}
            className="mb-6 flex justify-center"
          >
            <div className="bg-primary-orange/90 px-4 py-2 rounded-sm">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-white font-[family-name:var(--font-merriweather)]">
                J.B. Singh & Sons
              </h2>
            </div>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight tracking-tight title-3d"
          >
            {HERO_CONTENT.headline}
          </h1>

          {/* Sub-headline */}
          <p
            ref={subheadlineRef}
            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.3)'
            }}
          >
            {HERO_CONTENT.subheadline} {HERO_CONTENT.supportingLine}
          </p>

          {/* CTA Button */}
          <div
            ref={ctaRef}
            className="flex justify-center items-center"
          >
            <Link href="/services">
              <Button
                size="lg"
                className="bg-primary-navy hover:bg-primary-navy/90 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {HERO_CONTENT.ctaText}
              </Button>
            </Link>
          </div>

        </div>
      </Container>
    </section>
  );
}
