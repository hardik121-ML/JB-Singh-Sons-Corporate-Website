"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/contact/ContactForm";
import { COMPANY_INFO } from "@/lib/constants";
import { MapPin, Phone, Envelope } from "@phosphor-icons/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from(".contact-header > *", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // Cards animation
      gsap.from(".contact-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef} className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-b from-[#F8F9FC] to-white">
      {/* Floating Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary-orange/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 -right-20 w-80 h-80 bg-primary-navy/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="contact-header text-center mb-12 md:mb-16">
          <p className="text-primary-orange font-semibold text-sm uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A0A0A] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[#4B5563] max-w-3xl mx-auto">
            For enquiries, quotations, or support, contact us using the details below or submit
            the form. Our team will respond promptly.
          </p>
        </div>

        {/* Contact Content */}
        <div ref={contentRef} className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information Card */}
          <div className="contact-card glass-card p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-[#0A0A0A] mb-2">Contact Information</h3>
              <p className="text-[#4B5563] text-sm">
                Have a question or need assistance? Reach out to us.
              </p>
            </div>

            {/* Offices */}
            <div>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-primary-navy/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} weight="duotone" className="text-primary-navy" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0A0A0A]">Our Offices</h4>
                </div>
              </div>

              {/* Head Office */}
              <div className="ml-13 mb-4">
                <p className="font-semibold text-primary-orange text-sm mb-1">{COMPANY_INFO.headOffice.label}</p>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  <p>{COMPANY_INFO.headOffice.address.line1}</p>
                  <p>{COMPANY_INFO.headOffice.address.line2}</p>
                  <p>{COMPANY_INFO.headOffice.address.city} – {COMPANY_INFO.headOffice.address.postalCode}</p>
                </address>
              </div>

              {/* Corporate Office */}
              <div className="ml-13">
                <p className="font-semibold text-primary-orange text-sm mb-1">{COMPANY_INFO.corporateOffice.label}</p>
                <address className="not-italic text-gray-600 text-sm leading-relaxed">
                  <p>{COMPANY_INFO.corporateOffice.address.line1}</p>
                  <p>{COMPANY_INFO.corporateOffice.address.line2}</p>
                  <p>{COMPANY_INFO.corporateOffice.address.city} – {COMPANY_INFO.corporateOffice.address.postalCode}</p>
                </address>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-primary-orange/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone size={20} weight="duotone" className="text-primary-orange" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A0A0A] mb-1">Phone</h4>
                <div className="text-sm text-gray-600 space-y-1">
                  <p>
                    <a href={`tel:${COMPANY_INFO.contact.telephone}`} className="hover:text-primary-orange transition-colors">
                      Tel: {COMPANY_INFO.contact.telephone}
                    </a>
                  </p>
                  <p>
                    <a href={`tel:${COMPANY_INFO.contact.mobile}`} className="hover:text-primary-orange transition-colors">
                      Mobile: {COMPANY_INFO.contact.mobile}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Envelope size={20} weight="duotone" className="text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-[#0A0A0A] mb-1">Email</h4>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="text-sm text-gray-600 hover:text-primary-orange transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="pt-4">
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
            <h3 className="text-xl font-bold text-[#0A0A0A] mb-6">Send us a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
