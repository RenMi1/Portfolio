import type { Metadata } from "next";
import { BlogPageClient } from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts, tutorials, and insights on web development, AI, and tech.",
};

export default function BlogPage() {
  return <BlogPageClient />;
}
