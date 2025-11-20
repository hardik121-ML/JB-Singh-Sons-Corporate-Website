import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Freight Forwarding",
  description: "Structured coordination of global cargo routes with clear documentation and controlled transit.",
};

export default function FreightForwardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
