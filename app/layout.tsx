import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: "J B Singh & Sons - Reliable Logistics for Cross-Border Trade",
    template: "%s | J B Singh & Sons"
  },
  description: "Delivering seamless movement of goods across borders with accuracy, reliability, and a commitment to operational excellence since 2003.",
  keywords: ["logistics", "freight forwarding", "customs clearance", "marine logistics", "transportation", "warehousing", "Mumbai", "India"],
  authors: [{ name: "J B Singh & Sons" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jbsingh.com",
    siteName: "J B Singh & Sons",
    title: "J B Singh & Sons - Reliable Logistics for Cross-Border Trade",
    description: "Delivering seamless movement of goods across borders with accuracy, reliability, and a commitment to operational excellence since 2003.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
