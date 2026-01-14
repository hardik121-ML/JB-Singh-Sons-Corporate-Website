"use client";

import Button from "@/components/ui/Button";
import { Phone, Envelope, DeviceMobileSpeaker, WhatsappLogo } from "@phosphor-icons/react";

const WHATSAPP_NUMBER = "919833278188"; // Include country code without + sign

// Contact details
const contactDetails = [
  {
    icon: Phone,
    label: "Telephone",
    value: "2773 2400",
    href: "tel:27732400",
  },
  {
    icon: DeviceMobileSpeaker,
    label: "Mobile",
    value: "+91 98204 56539",
    href: "tel:+919820456539",
  },
  {
    icon: Envelope,
    label: "Email",
    value: "jbsinghnsons2005@hotmail.com",
    href: "mailto:jbsinghnsons2005@hotmail.com",
  },
];

export default function ContactForm() {
  const handleWhatsAppClick = () => {
    // Professional prefilled message
    const message = "Good day, I would like to discuss my logistics requirements with your team. Let's connect.";

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);

    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Contact Details Cards */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>

        {contactDetails.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <a
              key={index}
              href={contact.href}
              className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-orange hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-primary-orange/10 transition-colors">
                <Icon size={24} className="text-primary-orange" weight="duotone" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-500">{contact.label}</p>
                <p className="text-base font-semibold text-gray-900 truncate">{contact.value}</p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-neutral-light text-gray-500 font-medium">Quick Connect</span>
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="space-y-4">
        <div className="text-center space-y-2">
          <h4 className="text-lg font-semibold text-gray-900">
            Connect with Us Instantly
          </h4>
          <p className="text-sm text-gray-600">
            Start a conversation on WhatsApp and we'll get back to you promptly
          </p>
        </div>

        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          className="w-full group relative overflow-hidden"
        >
          <span className="flex items-center justify-center gap-3">
            <WhatsappLogo size={24} weight="fill" />
            <span>Chat on WhatsApp</span>
          </span>
        </Button>
      </div>
    </div>
  );
}
