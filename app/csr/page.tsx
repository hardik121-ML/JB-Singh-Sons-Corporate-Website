import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/Card";
import { CSR_CATEGORIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CSR - Responsible Operations",
  description: "Our commitment to health, safety, environment, social impact, and governance.",
};

export default function CSRPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-neutral-light to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Responsible Operations
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            We follow industry safety norms, support local communities where possible, and maintain
            transparent governance practices that align with operational standards.
          </p>
        </div>
      </Section>

      {/* CSR Categories */}
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {CSR_CATEGORIES.map((category) => (
            <Card key={category.id} hover>
              <CardHeader>
                <div className="w-16 h-16 bg-primary-orange rounded-2xl flex items-center justify-center mb-4">
                  <span className="text-white text-2xl font-bold">
                    {category.id === "health-safety" && "🛡️"}
                    {category.id === "environment" && "🌱"}
                    {category.id === "social" && "🤝"}
                    {category.id === "governance" && "⚖️"}
                  </span>
                </div>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </Section>

      {/* Photo Placeholders */}
      <Section background="light">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-dark mb-4">Our Initiatives</h2>
          <p className="text-gray-600">
            Photos and details of our CSR initiatives will be added here
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center">
              <div className="text-gray-400 text-center">
                <div className="text-4xl mb-2">📸</div>
                <p className="text-sm">CSR Initiative Photo {i}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 text-center mt-8">
          [CSR photos and content pending from client - Safety programs, ESG framework, community
          initiatives]
        </p>
      </Section>
    </>
  );
}
