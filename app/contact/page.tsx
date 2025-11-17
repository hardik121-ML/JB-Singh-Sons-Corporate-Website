import type { Metadata } from "next";
import Section from "@/components/ui/Section";
import { COMPANY_INFO } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with J B Singh & Sons for all your logistics needs.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-neutral-light to-white pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-dark mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Get in touch with us for all your logistics needs. We're here to help.
          </p>
        </div>
      </Section>

      {/* Contact Information & Form */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-neutral-dark mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-6">
                Have a question or need assistance? Reach out to us using the contact information
                below or fill out the form.
              </p>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-3 flex items-center">
                <span className="mr-2">📍</span> Address
              </h3>
              <address className="not-italic text-gray-700 leading-relaxed">
                <p className="font-semibold">{COMPANY_INFO.name}</p>
                <p>{COMPANY_INFO.address.line1}</p>
                <p>{COMPANY_INFO.address.line2}</p>
                <p>
                  {COMPANY_INFO.address.city} – {COMPANY_INFO.address.postalCode}
                </p>
                <p>
                  {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                </p>
              </address>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-3 flex items-center">
                <span className="mr-2">📞</span> Contact Details
              </h3>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-medium">Telephone:</span>{" "}
                  <a href={`tel:${COMPANY_INFO.contact.telephone}`} className="hover:text-primary-orange">
                    {COMPANY_INFO.contact.telephone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Mobile:</span>{" "}
                  <a href={`tel:${COMPANY_INFO.contact.mobile}`} className="hover:text-primary-orange">
                    {COMPANY_INFO.contact.mobile}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="hover:text-primary-orange"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Map Embed Placeholder */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-3 flex items-center">
                <span className="mr-2">🗺️</span> Location
              </h3>
              <div className="aspect-video bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">
                <div className="text-center p-4">
                  <svg
                    className="w-16 h-16 mx-auto mb-3 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="text-sm">
                    [Google Maps Embed]
                    <br />
                    Fort, Mumbai, Maharashtra
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold text-neutral-dark mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
