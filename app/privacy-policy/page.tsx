import type { Metadata } from "next";
import Section from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for J B Singh & Sons - How we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Section className="bg-gradient-to-br from-neutral-light to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Privacy Policy
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
              <strong>Note:</strong> This is a placeholder page. The actual Privacy Policy content
              should be provided by the client's legal team in compliance with applicable data
              protection laws (GDPR, Indian IT Act, etc.).
            </p>
          </div>

          <div className="space-y-6 text-gray-700">
            <h2 className="text-2xl font-bold text-neutral-dark">1. Introduction</h2>
            <p>
              J B Singh & Sons ("we," "our," or "us") is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>

            <h2 className="text-2xl font-bold text-neutral-dark">2. Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personal identification information (Name, email address, phone number)</li>
              <li>Business information (Company name, address)</li>
              <li>Shipment and logistics information</li>
              <li>Website usage data (cookies, analytics)</li>
            </ul>

            <h2 className="text-2xl font-bold text-neutral-dark">3. How We Use Your Information</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">4. Data Security</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">5. Third-Party Disclosure</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">6. Your Rights</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">7. Cookies Policy</h2>
            <p>[Content to be provided by client's legal team]</p>

            <h2 className="text-2xl font-bold text-neutral-dark">8. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at:
              <br />
              Email:{" "}
              <a href="mailto:enquiry@jbsinghnsons.com" className="text-primary-orange hover:underline">
                enquiry@jbsinghnsons.com
              </a>
              <br />
              Telephone: 2773 2400
              <br />
              Mobile: +91 98204 56539
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
