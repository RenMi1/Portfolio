"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  HiDownload,
  HiAcademicCap,
  HiBriefcase,
  HiStar,
  HiCode,
} from "react-icons/hi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBar } from "@/components/ui/SkillBar";
import {
  personalInfo,
  skills,
  education,
  experience,
  achievements,
} from "@/data/personal";
import { cn } from "@/lib/utils";

const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "Languages",
  "Tools",
  "AI/ML",
] as const;

export function ResumePageClient() {
  return (
    <div className="pt-16">
      {/* Header */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div>
              <span className="tag mb-3 inline-flex">📄 Resume</span>
              <h1 className="section-title mb-2">
                My <span className="gradient-text">Resume</span>
              </h1>
              <p className="section-subtitle">
                A summary of my education, experience, and technical skills.
              </p>
            </div>
            <a
              href={personalInfo.resumeUrl}
              download
              className="btn-primary flex-shrink-0"
            >
              <HiDownload className="w-5 h-5" /> Download PDF
            </a>
          </motion.div>
        </div>
      </section>

      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="w-20 h-20 rounded-2xl mx-auto mb-4 overflow-hidden">
  <img src="/Lorenmay.jpeg" alt="Loren May" className="w-full h-full object-cover" />
</div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                {personalInfo.name}
              </h2>
              <p className="text-sm text-primary-600 dark:text-primary-400 mb-3">
                {personalInfo.title}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
                {personalInfo.location}
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-xs text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors block mb-1"
              >
                {personalInfo.email}
              </a>
            </motion.div>

            {/* Skills Summary */}
            {skillCategories.map((cat, catIdx) => {
              const catSkills = skills
                .filter((s) => s.category === cat)
                .slice(0, 5);
              if (!catSkills.length) return null;
              return (
                <motion.div
                  key={cat}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + catIdx * 0.05 }}
                  className="glass-card p-5"
                >
                  <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">
                    {cat}
                  </h3>
                  <div className="space-y-2.5">
                    {catSkills.map((skill, i) => (
                      <SkillBar key={skill.name} skill={skill} index={i} />
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Career Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-3">
                <span className="w-8 h-8 rounded-lg bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center">
                  🎯
                </span>
                Career Objective
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {personalInfo.bio} Seeking opportunities to apply my skills in a
                professional environment while continuing to grow as a developer
                and contribute to meaningful projects.
              </p>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
                <span className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center">
                  <HiAcademicCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </span>
                Education
              </h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.id}
                    className="glass-card p-5 border-l-4 border-primary-500"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {edu.degree} in {edu.field}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                        {edu.startYear} — {edu.current ? "Present" : edu.endYear}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-1">
                      {edu.institution}
                    </p>
                    {edu.gpa && (
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        GPA: {edu.gpa}
                        {edu.honors && ` · ${edu.honors}`}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center">
                  <HiBriefcase className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </span>
                Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp) => (
                  <div
                    key={exp.id}
                    className="glass-card p-5 border-l-4 border-emerald-500"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                      <h3 className="font-bold text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                        {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                      </span>
                    </div>
                    <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">
                      {exp.company}{" "}
                      <span className="text-gray-400 dark:text-gray-600">·</span>{" "}
                      <span className="capitalize text-gray-500 dark:text-gray-400">
                        {exp.type}
                      </span>
                    </p>
                    <ul className="space-y-1.5 mb-3">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-emerald-500 mt-0.5">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((t) => (
                        <span key={t} className="tag text-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white mb-4">
                <span className="w-8 h-8 rounded-lg bg-amber-100 dark:bg-amber-900/40 flex items-center justify-center">
                  <HiStar className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                </span>
                Achievements
              </h2>
              <div className="space-y-3">
                {achievements.map((ach) => (
                  <div
                    key={ach.id}
                    className="glass-card p-4 flex items-start gap-4 border-l-4 border-amber-500"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap justify-between gap-2 mb-1">
                        <h3 className="font-bold text-gray-900 dark:text-white text-sm">
                          {ach.title}
                        </h3>
                        <span className="text-xs text-gray-500 dark:text-gray-400">
                          {ach.date}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Download CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 text-center"
            >
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Want the full details? Download my complete resume.
              </p>
              <a href={personalInfo.resumeUrl} download className="btn-primary">
                <HiDownload className="w-4 h-4" /> Download Full Resume (PDF)
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
