"use client";

import Section from "@/components/ui/Section";
import { COMPANY_INFO } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, MapTrifold } from "@phosphor-icons/react";

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

            {/* Addresses */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-4 flex items-center">
                <MapPin size={24} weight="duotone" className="mr-2 text-primary-orange" /> Our Offices
              </h3>

              {/* Head Office */}
              <div className="mb-6">
                <p className="font-semibold text-primary-orange mb-2">{COMPANY_INFO.headOffice.label}</p>
                <address className="not-italic text-gray-700 leading-relaxed">
                  <p className="font-semibold">{COMPANY_INFO.name}</p>
                  <p>{COMPANY_INFO.headOffice.address.line1}</p>
                  <p>{COMPANY_INFO.headOffice.address.line2}</p>
                  <p>
                    {COMPANY_INFO.headOffice.address.city} – {COMPANY_INFO.headOffice.address.postalCode}
                  </p>
                  <p>
                    {COMPANY_INFO.headOffice.address.state}, {COMPANY_INFO.headOffice.address.country}
                  </p>
                </address>
              </div>

              {/* Corporate Office */}
              <div>
                <p className="font-semibold text-primary-orange mb-2">{COMPANY_INFO.corporateOffice.label}</p>
                <address className="not-italic text-gray-700 leading-relaxed">
                  <p className="font-semibold">{COMPANY_INFO.name}</p>
                  <p>{COMPANY_INFO.corporateOffice.address.line1}</p>
                  <p>{COMPANY_INFO.corporateOffice.address.line2}</p>
                  <p>
                    {COMPANY_INFO.corporateOffice.address.city} – {COMPANY_INFO.corporateOffice.address.postalCode}
                  </p>
                  <p>
                    {COMPANY_INFO.corporateOffice.address.state}, {COMPANY_INFO.corporateOffice.address.country}
                  </p>
                </address>
              </div>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-3 flex items-center">
                <Phone size={24} weight="duotone" className="mr-2 text-primary-orange" /> Contact Details
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
                <p>
                  <span className="font-medium">Website:</span>{" "}
                  <a
                    href={`https://${COMPANY_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-orange"
                  >
                    {COMPANY_INFO.website}
                  </a>
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-dark mb-3 flex items-center">
                <MapTrifold size={24} weight="duotone" className="mr-2 text-primary-orange" /> Location
              </h3>
              <div className="aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8851642789523!2d73.01946617418268!3d19.024781253580507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3bebaa6233b%3A0x8c4dd6f417e2dc36!2sJ.B.%20Singh%20%26%20Sons!5e0!3m2!1sen!2sin!4v1763494669191!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="J B Singh & Sons - Corporate Office, Nerul, Navi Mumbai"
                ></iframe>
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
