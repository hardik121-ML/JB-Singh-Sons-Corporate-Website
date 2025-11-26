"use client";

import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default function CertificationsSection() {
  return (
    <Section className="relative py-16 md:py-20 bg-gradient-to-b from-[#00324B] to-[#001a2e]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quality Certifications & Standards
            </h3>
            <p className="text-white/80 text-lg">
              Our operations and partner network comply with international standards
            </p>
          </div>

          {/* Certification Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
            {/* ISO 9001:2015 */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-orange to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">ISO</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">ISO 9001:2015</h4>
              <p className="text-white/70 text-sm">Quality Management System</p>
            </div>

            {/* AEO Certification */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-primary-navy to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">AEO</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">AEO Certified</h4>
              <p className="text-white/70 text-sm">Authorized Economic Operator</p>
            </div>

            {/* FIEO Membership */}
            <div className="text-center group">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#0E287A] to-primary-navy rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">FIEO</span>
              </div>
              <h4 className="font-bold text-white text-lg mb-1">FIEO Member</h4>
              <p className="text-white/70 text-sm">Federation of Indian Export Organisations</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Government Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Export House Status</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>20+ Years Track Record</span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
