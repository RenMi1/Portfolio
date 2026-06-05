"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedProjects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = getFeaturedProjects();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section-padding">
      <div className="container-max">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <SectionHeader
            badge="Selected Work"
            title="Featured"
            highlight="Projects"
            subtitle="A curated look at my most impactful builds."
          />
          <Link
            href="/projects"
            className="flex-shrink-0 flex items-center gap-1.5 text-sm font-medium
                       transition-all duration-200 hover:gap-2.5 group"
            style={{ color: '#c9847a' }}
          >
            View all
            <span className="p-1.5 rounded-lg transition-colors"
                 style={{ background: 'rgba(201,132,122,0.10)' }}>
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </Link>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
