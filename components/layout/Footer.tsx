"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { COMPANY_INFO, FOOTER_LINKS } from "@/lib/constants";
import { useScroll } from "@/lib/ScrollContext";
import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const { scrollToSection } = useScroll();

  // Handle smooth scroll for anchor links
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");

      if (pathname === "/") {
        // Already on home page - use GSAP smooth scroll
        scrollToSection(targetId);
      } else {
        // Navigate to home page with hash - browser will handle scroll
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="bg-black text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-start">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white flex items-center space-x-3">
              <span>J B Singh & Sons</span>
              <div className="bg-white rounded-full p-0.5 flex items-center justify-center">
                <Image
                  src="/Logo.svg"
                  alt="J B Singh & Sons Logo"
                  width={80}
                  height={80}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
            </h3>
            <p className="text-sm text-[#D1D5DB] leading-relaxed">
              Delivering seamless movement of goods across borders through disciplined
              operations and reliable execution since {COMPANY_INFO.established}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-sm text-[#D1D5DB] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contact Us</h4>

            {/* Head Office */}
            <div className="mb-4">
              <p className="text-sm font-semibold text-white mb-2">{COMPANY_INFO.headOffice.label}</p>
              <address className="not-italic text-sm text-[#D1D5DB] space-y-1">
                <p className="font-semibold text-white">{COMPANY_INFO.name}</p>
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
            <div className="mb-4">
              <p className="text-sm font-semibold text-white mb-2">{COMPANY_INFO.corporateOffice.label}</p>
              <address className="not-italic text-sm text-[#D1D5DB] space-y-1">
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

            {/* Contact Info */}
            <div className="pt-2 space-y-1 text-sm text-[#D1D5DB]">
              <p>
                <span className="font-medium">Tel:</span> {COMPANY_INFO.contact.telephone}
              </p>
              <p>
                <span className="font-medium">Mobile:</span> {COMPANY_INFO.contact.mobile}
              </p>
              <p>
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </p>
              <p>
                <a
                  href={`https://${COMPANY_INFO.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_INFO.website}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-[#9CA3AF]">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-sm text-[#9CA3AF]">
              Website made by{" "}
              <a
                href="https://www.materiallab.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-orange hover:text-white transition-colors"
              >
                Material Lab
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
