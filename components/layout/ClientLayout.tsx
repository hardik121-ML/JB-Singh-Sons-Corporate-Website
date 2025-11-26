"use client";

import { ReactNode } from "react";
import { ScrollProvider } from "@/lib/ScrollContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <ScrollProvider>
      <Header />
      <main>{children}</main>
      <Footer />
    </ScrollProvider>
  );
}
