"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";
import { HiDownload, HiLocationMarker, HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBar } from "@/components/ui/SkillBar";
import { GraduationCap, Briefcase } from "lucide-react";
import {
  personalInfo,
  skills,
  education,
  experience,
  interests,
  techStack,
} from "@/data/personal";

const skillsByCategory = skills.reduce(
  (acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<string, typeof skills>
);

export function AboutPageClient() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-max relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="tag mb-4 inline-flex">👋 About Me</span>
              <h1 className="section-title mb-4">
                Passionate Developer,{" "}
                <span className="gradient-text">Lifelong Learner</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {personalInfo.bio}
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                I believe in writing clean, maintainable code and creating user
                experiences that genuinely make a difference. I&apos;m always
                looking for new challenges that push my skills further.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={personalInfo.resumeUrl} download className="btn-primary">
                  <HiDownload className="w-4 h-4" /> Download CV
                </a>
                <Link href="/contact" className="btn-secondary">
                  <HiMail className="w-4 h-4" /> Get In Touch
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              {/* Profile image placeholder */}
             <div className="w-32 h-32 rounded-2xl mx-auto mb-6 overflow-hidden shadow-lg">
  <img src="/Lorenmay.jpeg" alt="Loren May" className="w-full h-full object-cover" />
</div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center mb-1">
                {personalInfo.name}
              </h2>
              <p className="text-primary-600 dark:text-primary-400 text-center text-sm mb-4">
                {personalInfo.title}
              </p>
              <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-3">
                  <HiLocationMarker className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiMail className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <span>{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGithub className="w-4 h-4 text-primary-500 flex-shrink-0" />
                  <a
                    href={personalInfo.github}
                    className="hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
              <div className="flex gap-3 mt-6 justify-center">
                <a
                  href={personalInfo.github}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Academic Background"
            title="Education"
            className="mb-10"
          />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-violet flex items-center justify-center flex-shrink-0">
  <GraduationCap className="w-7 h-7 text-white" />
</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {edu.degree} in {edu.field}
                    </h3>
                    <span className="tag">
                      {edu.startYear} — {edu.current ? "Present" : edu.endYear}
                    </span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  {edu.gpa && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      GPA: {edu.gpa} {edu.honors && `• ${edu.honors}`}
                    </p>
                  )}
                  {edu.relevantCourses && (
                    <div>
                      <p className="text-xs font-semibold text-gray-500 dark:text-gray-500 uppercase tracking-wide mb-2">
                        Relevant Courses
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {edu.relevantCourses.map((course) => (
                          <span key={course} className="tag text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <SectionHeader
            badge="Work History"
            title="Experience"
            className="mb-10"
          />
          <div className="space-y-6">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-6 flex flex-col sm:flex-row gap-6 items-start"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent-emerald to-primary-500 flex items-center justify-center flex-shrink-0">
  <Briefcase className="w-7 h-7 text-white" />
</div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 dark:text-white text-lg">
                      {exp.role}
                    </h3>
                    <span className="tag capitalize">{exp.type}</span>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    {exp.startDate} — {exp.current ? "Present" : exp.endDate}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {exp.description.map((item, j) => (
                      <li
                        key={j}
                        className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <span className="text-primary-500 mt-0.5">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding">
        <div className="container-max">
          <SectionHeader
            badge="Technical Expertise"
            title="Skills &"
            highlight="Technologies"
            className="mb-10"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skillsByCategory).map(([category, catSkills]) => (
              <div key={category} className="glass-card p-6">
                <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">
                  {category}
                </h3>
                <div className="space-y-3">
                  {catSkills.map((skill, i) => (
                    <SkillBar key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50">
        <div className="container-max">
          <SectionHeader
            badge="Passions"
            title="Technical"
            highlight="Interests"
            centered
            className="mb-10"
          />
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {interests.map((interest, i) => (
              <motion.div
                key={interest}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-5 py-2.5 glass-card rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 cursor-default"
              >
                {interest}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
