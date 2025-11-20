import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cross Trade Services",
  description: "Coordinated shipments between foreign ports with complete document control and route oversight.",
};

export default function CrossTradeServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
