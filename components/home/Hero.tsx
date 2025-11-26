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

      // Add Ken Burns effect to video (slow zoom)
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          scale: 1.15,
          duration: 30,
          ease: "none",
          repeat: -1,
          yoyo: true,
        });
      }

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

            // Logo moves to top-left corner (header logo position)
            if (logoRef.current) {
              const targetX = -(window.innerWidth / 2) + 120;
              const targetY = -window.innerHeight / 2 + 100;
              const targetScale = 0.35;

              gsap.set(logoRef.current, {
                x: progress * targetX,
                y: progress * targetY,
                scale: 1 - (progress * (1 - targetScale)),
                opacity: progress < 0.95 ? 1 : 1 - ((progress - 0.95) / 0.05),
                zIndex: 60
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
      </div>

      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div
            ref={logoRef}
            className="flex justify-center mb-8"
          >
            <div className="relative w-[180px] h-[180px] md:w-[216px] md:h-[216px] rounded-full bg-white flex items-center justify-center shadow-2xl overflow-hidden">
              <div className="relative w-[180px] h-[180px] md:w-[216px] md:h-[216px] flex items-center justify-center" style={{ marginTop: '50px', marginLeft: '5px', transform: 'scale(1.3)' }}>
                <Image
                  src="/Logo.svg"
                  alt="J B Singh & Sons Logo"
                  width={240}
                  height={240}
                  className="w-full h-full"
                  priority
                />
              </div>
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
            className="text-base md:text-lg lg:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            style={{
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
            }}
          >
            {HERO_CONTENT.subheadline}
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
