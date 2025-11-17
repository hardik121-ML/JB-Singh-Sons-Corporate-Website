import type { Metadata } from "next";
import Link from "next/link";
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
                {/* Icon Placeholder */}
                <div className="w-full aspect-video bg-gray-200 rounded-xl mb-4 flex items-center justify-center">
                  <div className="text-gray-400 text-sm">[Solution Image {solution.id}]</div>
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
        <div className="max-w-4xl mx-auto text-center bg-primary-navy text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Optimize Your Supply Chain?</h2>
          <p className="text-lg text-gray-200 mb-8">
            Let us help you design a customized logistics solution that fits your business needs.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
