"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/ui/Section";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import { COMPANY_INFO } from "@/lib/constants";
import ContactForm from "@/components/contact/ContactForm";
import { MapPin, Phone, MapTrifold } from "@phosphor-icons/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current || !contentRef.current) return;

    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.from(".hero-content > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Content section reveal
      gsap.from(".contact-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero Section with Gradient Mesh Background */}
      <div ref={heroRef} className="relative overflow-hidden pt-32 pb-20">
        {/* Gradient Mesh Background */}
        <div className="absolute inset-0 gradient-mesh" />

        <FloatingOrbs variant="hero" />

        <Section className="relative z-10">
          <div className="hero-content max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0A0A0A] mb-6 tracking-tight">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto">
              For enquiries, quotations, or support, contact us using the details below or submit
              the form. Our team will respond promptly.
            </p>
          </div>
        </Section>
      </div>

      {/* Contact Information & Form */}
      <Section className="relative overflow-hidden py-16 md:py-24">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F8F9FC]/50 to-[#F8F9FC]" />

        <div ref={contentRef} className="relative z-10 grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Card */}
          <div className="contact-card glass-card p-8 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-[#0A0A0A] mb-4">Contact Information</h2>
              <p className="text-[#4B5563]">
                Have a question or need assistance? Reach out to us using the contact information
                below or fill out the form.
              </p>
            </div>

            {/* Addresses */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0A0A] mb-4 flex items-center">
                <div className="w-10 h-10 bg-primary-navy/10 rounded-xl flex items-center justify-center mr-3">
                  <MapPin size={22} weight="duotone" className="text-primary-navy" />
                </div>
                Our Offices
              </h3>

              {/* Head Office */}
              <div className="mb-6 pl-13">
                <p className="font-semibold text-primary-orange mb-2">{COMPANY_INFO.headOffice.label}</p>
                <address className="not-italic text-gray-600 leading-relaxed text-sm">
                  <p className="font-semibold text-gray-700">{COMPANY_INFO.name}</p>
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
              <div className="pl-13">
                <p className="font-semibold text-primary-orange mb-2">{COMPANY_INFO.corporateOffice.label}</p>
                <address className="not-italic text-gray-600 leading-relaxed text-sm">
                  <p className="font-semibold text-gray-700">{COMPANY_INFO.name}</p>
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
              <h3 className="text-lg font-semibold text-[#0A0A0A] mb-4 flex items-center">
                <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center mr-3">
                  <Phone size={22} weight="duotone" className="text-primary-orange" />
                </div>
                Contact Details
              </h3>
              <div className="space-y-2 text-gray-600 pl-13 text-sm">
                <p>
                  <span className="font-medium text-gray-700">Telephone:</span>{" "}
                  <a href={`tel:${COMPANY_INFO.contact.telephone}`} className="hover:text-primary-orange transition-colors">
                    {COMPANY_INFO.contact.telephone}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Mobile:</span>{" "}
                  <a href={`tel:${COMPANY_INFO.contact.mobile}`} className="hover:text-primary-orange transition-colors">
                    {COMPANY_INFO.contact.mobile}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Email:</span>{" "}
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="hover:text-primary-orange transition-colors"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-gray-700">Website:</span>{" "}
                  <a
                    href={`https://${COMPANY_INFO.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-orange transition-colors"
                  >
                    {COMPANY_INFO.website}
                  </a>
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div>
              <h3 className="text-lg font-semibold text-[#0A0A0A] mb-4 flex items-center">
                <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center mr-3">
                  <MapTrifold size={22} weight="duotone" className="text-blue-600" />
                </div>
                Location
              </h3>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-inner">
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

          {/* Contact Form Card */}
          <div className="contact-card glass-card p-8">
            <h2 className="text-2xl font-bold text-[#0A0A0A] mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </Section>
    </>
  );
}
