import type { Metadata } from "next";
import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { ABOUT_CONTENT, WHY_CHOOSE_US } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description: "J B Singh & Sons is a licensed Customs House Agent and logistics partner since 2003.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-[#F8F9FC] pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6">
            {ABOUT_CONTENT.title}
          </h1>
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed">
            {ABOUT_CONTENT.intro}
          </p>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-white">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-[#F8F9FC] rounded-2xl">
            <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4">Mission</h2>
            <p className="text-[#4B5563] leading-relaxed">{ABOUT_CONTENT.mission}</p>
          </div>
          <div className="p-8 bg-[#F8F9FC] rounded-2xl">
            <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4">Vision</h2>
            <p className="text-[#4B5563] leading-relaxed">{ABOUT_CONTENT.vision}</p>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-[#F2F4F7]">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-12">
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
                <p className="text-[#4B5563] font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0A0A] mb-4">
            {ABOUT_CONTENT.teamHeading}
          </h2>
          <p className="text-xl text-[#9CA3AF] mb-6">{ABOUT_CONTENT.teamSubheading}</p>
          <p className="text-lg text-[#4B5563] max-w-4xl mx-auto leading-relaxed">
            {ABOUT_CONTENT.teamDescription}
          </p>
        </div>
      </Section>

      {/* Footer CTA */}
      <Section className="bg-[#F8F9FC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-4">
            Need tailored logistics solutions for your business?
          </h2>
          <Link href="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
