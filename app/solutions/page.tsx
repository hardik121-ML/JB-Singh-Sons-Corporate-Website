import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { SOLUTIONS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Comprehensive logistics solutions including 4PL, door-to-door delivery, and supply chain technology.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-neutral-light to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Our Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            We support sectors that require precise logistics, consistent compliance, and controlled
            costs. Our workflows align with the needs of manufacturing, engineering, trade, and
            distribution, ensuring stable supply and predictable delivery.
          </p>
          <Link href="/contact">
            <Button size="lg">Get in Touch</Button>
          </Link>
        </div>
      </Section>

      {/* Solutions Grid */}
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            Industry Solutions Built for Operational Certainty
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SOLUTIONS.map((solution) => (
            <Card key={solution.id} hover>
              <CardHeader>
                {/* Solution Image */}
                <div className="w-full aspect-video bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
                  {solution.id === 1 ? (
                    <Image
                      src="/images/placeholders/Solution Image 1.webp"
                      alt="Integrated Project Management - Customized logistics planning"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 2 ? (
                    <Image
                      src="/images/placeholders/Solution Image 2.avif"
                      alt="Door-to-Door Solutions - End-to-end logistics delivery"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 3 ? (
                    <Image
                      src="/images/placeholders/Solution Image 3.avif"
                      alt="4PL Solutions - Supply chain integration and optimization"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 4 ? (
                    <Image
                      src="/images/placeholders/Solution Image 4.avif"
                      alt="Value-Added Services - Industry specialist assistance"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 5 ? (
                    <Image
                      src="/images/placeholders/Solution Image 5.webp"
                      alt="Custom Consultancy & Advisory - Expert customs guidance"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 6 ? (
                    <Image
                      src="/images/placeholders/Solution Image 6.avif"
                      alt="Solution 6 - Professional logistics service"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 7 ? (
                    <Image
                      src="/images/placeholders/Solution Image 7.avif"
                      alt="Solution 7 - Professional logistics service"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 8 ? (
                    <Image
                      src="/images/placeholders/Solution Image 8.avif"
                      alt="Solution 8 - Professional logistics service"
                      fill
                      className="object-cover"
                    />
                  ) : solution.id === 9 ? (
                    <Image
                      src="/images/placeholders/Solution Image 9.avif"
                      alt="Solution 9 - Professional logistics service"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-gray-400 text-sm">[Solution Image {solution.id}]</div>
                    </div>
                  )}
                </div>
                <CardTitle>{solution.title}</CardTitle>
                <CardDescription>{solution.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center rounded-2xl p-12 relative overflow-hidden">
          {/* Background Image */}
          <Image
            src="/images/placeholders/Supply Chain Optimization.jpeg"
            alt="Supply chain optimization background"
            fill
            className="object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/90 to-primary-navy/70"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-white">Ready to Optimize Your Supply Chain?</h2>
            <p className="text-lg text-gray-200 mb-8">
              Let us help you design a customized logistics solution that fits your business needs.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
