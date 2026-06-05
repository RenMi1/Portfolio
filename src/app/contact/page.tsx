import type { Metadata } from "next";
import { ContactPageClient } from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch — I'm open to internships, freelance work, and collaborations.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
