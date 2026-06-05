"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { TechBadgeGroup } from "./TechBadge";

const categoryConfig: Record<string, { color: string; bg: string; emoji: string }> = {
  "Web Development":  { color: "text-sky-600 dark:text-sky-400",     bg: "bg-sky-50 dark:bg-sky-900/30 border-sky-200/60 dark:border-sky-800/60",     emoji: "🌐" },
  "AI Projects":      { color: "text-violet-600 dark:text-violet-400", bg: "bg-violet-50 dark:bg-violet-900/30 border-violet-200/60 dark:border-violet-800/60", emoji: "🤖" },
  "IoT Projects":     { color: "text-primary-600 dark:text-primary-400", bg: "bg-primary-50 dark:bg-primary-900/30 border-primary-200/60 dark:border-primary-800/60", emoji: "📡" },
  "Academic Projects":{ color: "text-amber-600 dark:text-amber-400",   bg: "bg-amber-50 dark:bg-amber-900/30 border-amber-200/60 dark:border-amber-800/60",   emoji: "🎓" },
};

const bannerGradients: Record<string, string> = {
  "Web Development":   "from-primary-600 to-cyan-500",
  "AI Projects":       "from-violet-500 to-purple-600",
  "IoT Projects":      "from-primary-500 to-cyan-600",
  "Academic Projects": "from-amber-400 to-orange-500",
};

const statusConfig: Record<string, { dot: string; label: string }> = {
  completed:    { dot: "bg-emerald-400", label: "Completed"   },
  "in-progress":{ dot: "bg-amber-400",   label: "In Progress" },
  planned:      { dot: "bg-slate-400",   label: "Planned"     },
};

interface ProjectCardProps { project: Project; index?: number; }

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const cat    = categoryConfig[project.category] ?? categoryConfig["Web Development"];
  const banner = bannerGradients[project.category] ?? "from-primary-500 to-accent-indigo";
  const status = statusConfig[project.status] ?? statusConfig["planned"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1,  y: 0  }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="glass-card-hover flex flex-col overflow-hidden group"
    >
      {/* banner image / placeholder */}
      <div className={cn("relative h-44 bg-gradient-to-br overflow-hidden", banner)}>
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-7xl opacity-40 group-hover:scale-110 transition-transform duration-500">
              {cat.emoji}
            </span>
          </div>
        )}

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* featured badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 px-3 py-1.5 rounded-full
                          bg-gradient-to-r from-amber-400 to-amber-300 dark:from-amber-500 dark:to-amber-400
                          text-[11px] font-bold text-slate-900
                          border border-amber-200/80 shadow-lg
                          flex items-center gap-1.5">
            <span>✨</span> Featured
          </div>
        )}

        {/* status */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5
                        px-3 py-1.5 rounded-full
                        bg-gradient-to-r from-slate-900/95 to-slate-800/90 dark:from-white/95 dark:to-white/90 backdrop-blur-sm
                        text-[11px] font-bold text-white dark:text-slate-900 shadow-lg">
          <span className={cn("w-2 h-2 rounded-full", status.dot)} />
          {status.label}
        </div>
      </div>

      {/* body */}
      <div className="p-5 flex flex-col flex-1">
        {/* category */}
        <span className={cn(
          "self-start inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold border mb-3",
          cat.bg, cat.color
        )}>
          {cat.emoji} {project.category}
        </span>

        <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug mb-2
                       group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1 line-clamp-2 mb-4">
          {project.shortDescription}
        </p>

        {/* tech tags */}
        <div className="mb-4">
          <TechBadgeGroup badges={project.technologies.slice(0, 5)} variant="minimal" size="sm" />
          {project.technologies.length > 5 && (
            <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-2 inline-block">+{project.technologies.length - 5} more</span>
          )}
        </div>

        {/* divider */}
        <div className="divider mb-4" />

        {/* actions */}
        <div className="flex items-center justify-between">
          <Link
            href={`/projects/${project.slug}`}
            className="flex items-center gap-1.5 text-sm font-semibold
                       text-primary-600 dark:text-primary-400
                       hover:gap-2.5 transition-all duration-200 group/link"
          >
            Details
            <HiArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
          </Link>

          <div className="flex gap-1.5">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon p-2"
                aria-label="GitHub"
              >
                <FaGithub className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-icon p-2"
                aria-label="Live demo"
              >
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
