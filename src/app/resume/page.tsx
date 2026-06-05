import type { Metadata } from "next";
import { ResumePageClient } from "./ResumePageClient";

export const metadata: Metadata = {
  title: "Resume",
  description: "My professional resume — skills, education, and experience.",
};

export default function ResumePage() {
  return <ResumePageClient />;
}
