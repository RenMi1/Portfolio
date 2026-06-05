import type { Metadata } from "next";
import { AboutPageClient } from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about my background, education, and technical interests.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
