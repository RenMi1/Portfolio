import { LucideIcon } from "lucide-react";

// ─── Project Types ───────────────────────────────────────────────────────────

export type ProjectCategory =
  | "Web Development"
  | "AI Projects"
  | "IoT Projects"
  | "Academic Projects";

export type ProjectStatus = "completed" | "in-progress" | "planned";

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean;
  image: string;
  images: string[];
  icon?: LucideIcon;  // ← added this
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  startDate: string;
  endDate?: string;
  highlights: string[];
  challenges?: string;
  outcome?: string;
}

// ─── Certification Types ─────────────────────────────────────────────────────

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issuerLogo?: string;
  date: string;
  expiryDate?: string;
  credentialId?: string;
  verificationUrl?: string;
  image?: string;
  category: string;
  skills: string[];
}

// ─── Skill Types ──────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  icon?: string;
  level: number; // 0-100
  category: SkillCategory;
  color?: string;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps"
  | "Mobile"
  | "AI/ML"
  | "Tools"
  | "Languages";

// ─── Experience Types ────────────────────────────────────────────────────────

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: "internship" | "part-time" | "full-time" | "freelance" | "volunteer";
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies: string[];
  logo?: string;
}

// ─── Education Types ─────────────────────────────────────────────────────────

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startYear: number;
  endYear?: number;
  current: boolean;
  gpa?: string;
  honors?: string;
  logo?: string;
  relevantCourses?: string[];
}

// ─── Contact Types ────────────────────────────────────────────────────────────

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Social Types ────────────────────────────────────────────────────────────

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  username?: string;
}

// ─── Blog Types ───────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  tags: string[];
  coverImage?: string;
  readTime: number;
}

// ─── Achievement Types ───────────────────────────────────────────────────────

export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
  icon?: string;
  category: "award" | "recognition" | "competition" | "publication";
}
