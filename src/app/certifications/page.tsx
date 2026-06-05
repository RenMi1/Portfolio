import type { Metadata } from "next";
import { CertificationsPageClient } from "./CertificationsPageClient";

export const metadata: Metadata = {
  title: "Certifications",
  description: "My professional certifications and credentials.",
};

export default function CertificationsPage() {
  return <CertificationsPageClient />;
}
