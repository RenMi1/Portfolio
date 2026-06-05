"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa";
import { HiCalendar, HiTag, HiChip } from "react-icons/hi";
import { Project } from "@/types";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

const categoryColors: Record<string, string> = {
  "Web Development": "from-blue-500 to-cyan-500",
  "AI Projects": "from-violet-500 to-purple-500",
  "IoT Projects": "from-emerald-500 to-teal-500",
  "Academic Projects": "from-amber-500 to-orange-500",
};

const categoryEmoji: Record<string, string> = {
  "Web Development": "🌐",
  "AI Projects": "🤖",
  "IoT Projects": "📡",
  "Academic Projects": "🎓",
};

export function ProjectDetailClient({ project }: { project: Project }) {
  return (
    <div className="pt-16">
      {/* Back Button */}
      <div className="container-max section-padding py-6">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
        >
          <FaArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="section-padding pt-0 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Category badge */}
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white mb-4 bg-gradient-to-r",
                  categoryColors[project.category]
                )}
              >
                {categoryEmoji[project.category]} {project.category}
              </span>

              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-4 mb-8 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-1.5">
                  <HiCalendar className="w-4 h-4 text-primary-500" />
                  <span>
                    {formatDate(project.startDate)}
                    {project.endDate ? ` — ${formatDate(project.endDate)}` : " — Present"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HiChip className="w-4 h-4 text-primary-500" />
                  <span>{project.technologies.length} technologies</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    <FaGithub className="w-4 h-4" /> View on GitHub
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn-primary opacity-50 cursor-not-allowed"
                  >
                    <FaGithub className="w-4 h-4" /> GitHub (Coming Soon)
                  </button>
                )}
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                  </a>
                ) : (
                  <button
                    disabled
                    className="btn-secondary opacity-50 cursor-not-allowed"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" /> Demo (Coming Soon)
                  </button>
                )}
              </div>
            </motion.div>

            {/* Project Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div
                className={cn(
                  "relative h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br",
                  categoryColors[project.category]
                )}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-9xl opacity-50">
                      {categoryEmoji[project.category]}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-card p-6"
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  ✨ Key Highlights
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                      className="flex items-start gap-3 text-gray-600 dark:text-gray-400"
                    >
                      <FaCheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Challenges */}
              {project.challenges && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-card p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    🧩 Challenges
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.challenges}
                  </p>
                </motion.div>
              )}

              {/* Outcome */}
              {project.outcome && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-card p-6"
                >
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    🎯 Outcome
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.outcome}
                  </p>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                  Project Info
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Category</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {project.category}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Status</span>
                    <span className="font-medium text-gray-900 dark:text-white capitalize">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 dark:text-gray-400">Started</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {formatDate(project.startDate)}
                    </span>
                  </div>
                  {project.endDate && (
                    <div className="flex justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Completed</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {formatDate(project.endDate)}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Links */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-6"
              >
                <h3 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                  Links
                </h3>
                <div className="space-y-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaGithub className="w-4 h-4" /> GitHub Repository
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-600">
                      <FaGithub className="w-4 h-4" /> GitHub (Not available)
                    </span>
                  )}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" /> Live Demo
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-gray-400 dark:text-gray-600">
                      <FaExternalLinkAlt className="w-4 h-4" /> Demo (Not available)
                    </span>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
