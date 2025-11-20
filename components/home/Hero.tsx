import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-[#F8F9FC] py-20 md:py-32 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/3309765-uhd_3840_2160_30fps.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[#F8F9FC]/80"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 leading-tight">
            {HERO_CONTENT.headline}
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-[#4B5563] mb-4 max-w-3xl mx-auto">
            {HERO_CONTENT.subheadline}
          </p>

          {/* Supporting Line */}
          <p className="text-sm md:text-base text-[#9CA3AF] mb-8">
            {HERO_CONTENT.supportingLine}
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/contact">
              <Button size="lg">{HERO_CONTENT.ctaText}</Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

      </Container>
    </section>
  );
}
