import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-neutral-light to-white py-20 md:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-72 h-72 bg-primary-orange rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-navy rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-dark mb-6 leading-tight">
            {HERO_CONTENT.headline}
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            {HERO_CONTENT.subheadline}
          </p>

          {/* Supporting Line */}
          <p className="text-sm md:text-base text-gray-500 mb-8">
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

        {/* Logistics illustration */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <Image
              src="/images/placeholders/Logistics Illustration Placeholder - ContainersCranesShips.png"
              alt="Logistics operations showing containers, cranes, and ships"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
