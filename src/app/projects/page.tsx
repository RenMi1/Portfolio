import type { Metadata } from "next";
import { ProjectsPageClient } from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development, AI, IoT, and academic projects.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
