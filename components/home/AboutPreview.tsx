"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Simple fade in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Section ref={sectionRef} className="relative overflow-hidden py-16 md:py-20">
      {/* Background Video - Full vibrancy, no overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/videos/trusted-section-video.webm"
            type="video/webm"
          />
          <source
            src="/videos/trusted-section-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Text Content with enhanced shadows for readability */}
          <div ref={textRef} className="text-center opacity-0 transition-all duration-1000">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
              Driving Growth Beyond Borders
            </h2>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-8 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
              J B Singh & Sons has operated since 2003 with a clear focus: dependable freight
              movement supported by strong processes, technical skill, and transparent communication.
              We manage complex cargo with disciplined execution and industry-aligned practices
              that help businesses move goods without delays or compliance issues.
            </p>
            <Link href="/about">
              <Button
                size="lg"
                className="bg-primary-orange hover:bg-red-600 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Discover Our Story
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}