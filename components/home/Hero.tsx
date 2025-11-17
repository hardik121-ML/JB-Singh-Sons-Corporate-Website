import Link from "next/link";
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

        {/* Placeholder for logistics illustration */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
            <div className="text-center">
              <svg
                className="w-24 h-24 mx-auto mb-4 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
              <p className="text-sm">
                [Logistics Illustration Placeholder - Containers/Cranes/Ships]
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
