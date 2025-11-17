import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import StatsBlock from "@/components/home/StatsBlock";
import { ABOUT_CONTENT, WHY_CHOOSE_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "J B Singh & Sons provides freight forwarding, customs clearance, transportation, and specialised cargo management since 2003.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-neutral-light to-white pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            {ABOUT_CONTENT.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            {ABOUT_CONTENT.intro}
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-neutral-light rounded-2xl">
            <h2 className="text-2xl font-bold text-primary-orange mb-4">Mission</h2>
            <p className="text-gray-700 leading-relaxed">{ABOUT_CONTENT.mission}</p>
          </div>
          <div className="p-8 bg-neutral-light rounded-2xl">
            <h2 className="text-2xl font-bold text-primary-orange mb-4">Vision</h2>
            <p className="text-gray-700 leading-relaxed">{ABOUT_CONTENT.vision}</p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section background="light">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((reason, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">✓</span>
                </div>
                <p className="text-gray-700 font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-4">
            {ABOUT_CONTENT.teamHeading}
          </h2>
          <p className="text-xl text-gray-600">{ABOUT_CONTENT.teamSubheading}</p>
        </div>

        {/* Team Grid Placeholder */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="text-center">
              <div className="aspect-square bg-gray-200 rounded-2xl mb-4 flex items-center justify-center text-gray-400">
                <div className="text-center">
                  <div className="text-4xl mb-2">👤</div>
                  <p className="text-sm">Team Photo {i}</p>
                </div>
              </div>
              <h3 className="font-semibold text-neutral-dark">Team Member {i}</h3>
              <p className="text-sm text-gray-500">Role / Position</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-gray-400 text-center mt-8">
          [Team photos pending from client]
        </p>
      </Section>

      {/* Stats Section */}
      <StatsBlock />
    </>
  );
}
