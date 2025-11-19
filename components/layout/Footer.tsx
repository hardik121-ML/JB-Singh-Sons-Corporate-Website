import Link from "next/link";
import Image from "next/image";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/Logo.svg"
                alt="J B Singh & Sons Logo"
                width={72}
                height={72}
                className="w-16 h-16 md:w-18 md:h-18"
              />
              <h3 className="text-xl font-bold text-primary-orange">
                J B Singh & Sons
              </h3>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Delivering seamless movement of goods across borders with accuracy,
              reliability, and a commitment to operational excellence since {COMPANY_INFO.established}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-primary-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

            {/* Head Office */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-primary-orange mb-2">{COMPANY_INFO.headOffice.label}</p>
              <address className="not-italic text-sm text-gray-300 space-y-1">
                <p className="font-semibold text-white">{COMPANY_INFO.name}</p>
                <p>{COMPANY_INFO.headOffice.address.line1}</p>
                <p>{COMPANY_INFO.headOffice.address.line2}</p>
                <p>
                  {COMPANY_INFO.headOffice.address.city} – {COMPANY_INFO.headOffice.address.postalCode}
                </p>
              </address>
            </div>

            {/* Corporate Office */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-primary-orange mb-2">{COMPANY_INFO.corporateOffice.label}</p>
              <address className="not-italic text-sm text-gray-300 space-y-1">
                <p>{COMPANY_INFO.corporateOffice.address.line1}</p>
                <p>{COMPANY_INFO.corporateOffice.address.line2}</p>
                <p>{COMPANY_INFO.corporateOffice.address.city}</p>
              </address>
            </div>

            {/* Contact Info */}
            <div className="pt-2 space-y-1 text-sm text-gray-300">
              <p>
                <span className="font-medium">Tel:</span> {COMPANY_INFO.contact.telephone}
              </p>
              <p>
                <span className="font-medium">Mobile:</span> {COMPANY_INFO.contact.mobile}
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-primary-orange transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </p>
              <p>
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
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {FOOTER_LINKS.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-primary-orange transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
