import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for J B Singh & Sons logistics services.",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-neutral-light to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <p className="text-sm text-gray-700">
              <strong>Note:</strong> This is a placeholder page. The actual Terms and Conditions
              content should be provided by the client's legal team.
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <h2 className="text-2xl font-bold text-neutral-dark">1. Introduction</h2>
            <p>
              Welcome to J B Singh & Sons. These terms and conditions outline the rules and
              regulations for the use of our services.
            </p>

            <h2 className="text-2xl font-bold text-neutral-dark">2. Services</h2>
            <p>
              J B Singh & Sons provides logistics services including but not limited to freight
              forwarding, customs clearance, transportation, and warehousing.
            </p>

            <h2 className="text-2xl font-bold text-neutral-dark">3. Liability</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">4. Payment Terms</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">5. Intellectual Property</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">6. Governing Law</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">7. Contact Information</h2>
            <p>
              For any questions regarding these terms and conditions, please contact us at
              jbsinghnhsons2005@hotmail.com
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
