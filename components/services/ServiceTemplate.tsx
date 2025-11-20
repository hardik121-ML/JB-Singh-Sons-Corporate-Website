import Link from "next/link";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Service } from "@/lib/types";

interface ServiceTemplateProps {
  service: Service;
}

export default function ServiceTemplate({ service }: ServiceTemplateProps) {
  return (
    <>
      {/* Hero Banner */}
      <Section className="bg-[#F8F9FC] pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A0A0A] mb-6 uppercase">{service.title}</h1>
          <p className="text-lg md:text-xl text-[#4B5563] leading-relaxed">
            {service.description}
          </p>
        </div>
      </Section>

      {/* Capabilities Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-neutral-light rounded-lg">
                <div className="flex-shrink-0 w-6 h-6 bg-primary-orange rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs font-bold">✓</span>
                </div>
                <p className="text-gray-700">{capability}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Workflow Diagram Placeholder */}
      <Section className="bg-[#F2F4F7]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#0A0A0A] mb-8">Our Process</h2>
          <div className="aspect-video bg-white rounded-2xl shadow-md flex items-center justify-center">
            <div className="text-gray-400">
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
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
              <p>[Workflow Diagram Placeholder]</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="max-w-4xl mx-auto text-center bg-[#F8F9FC] rounded-2xl p-12">
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
