"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiSearch, HiFilter, HiX } from "react-icons/hi";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projects } from "@/data/projects";
import { ProjectCategory } from "@/types";
import { cn } from "@/lib/utils";
import { FolderOpen, Globe, Bot, Wifi, GraduationCap, Search } from "lucide-react";

const categories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Development",
  "AI Projects",
  "IoT Projects",
  "Academic Projects",
];

const categoryIcons: Record<string, React.ReactNode> = {
  All:               <FolderOpen     className="w-3.5 h-3.5" />,
  "Web Development": <Globe          className="w-3.5 h-3.5" />,
  "AI Projects":     <Bot            className="w-3.5 h-3.5" />,
  "IoT Projects":    <Wifi           className="w-3.5 h-3.5" />,
  "Academic Projects": <GraduationCap className="w-3.5 h-3.5" />,
};

export function ProjectsPageClient() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category === activeCategory;
      const matchSearch =
        search.trim() === "" ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        p.technologies.some((t) =>
          t.toLowerCase().includes(search.toLowerCase())
        );
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="tag mb-4 inline-flex">My Work</span>
            <h1 className="section-title mb-4">
              Project <span className="gradient-text">Portfolio</span>
            </h1>
            <p className="section-subtitle mx-auto">
              A collection of projects spanning web development, AI, IoT, and
              academic work. Each one built with purpose and passion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="sticky top-16 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="container-max section-padding py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-9 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
                >
                  <HiX className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all",
                    activeCategory === cat
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  <span>{categoryIcons[cat]}</span>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="flex items-center justify-between mb-8">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Showing{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                {filtered.length}
              </span>{" "}
              project{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" && (
                <span>
                  {" "}
                  in{" "}
                  <span className="text-primary-600 dark:text-primary-400">
                    {activeCategory}
                  </span>
                </span>
              )}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory + search}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((project, i) => (
                  <ProjectCard key={project.id} project={project} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
              >
                <Search className="w-16 h-16 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  No projects found
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-6">
                  Try adjusting your search or filter.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="btn-primary"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
