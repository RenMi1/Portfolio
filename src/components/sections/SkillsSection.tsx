"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { skills } from "@/data/personal";
import { Palette, Server, Database, Code2, Cpu, Wrench } from "lucide-react";

const categories = ["Frontend", "Backend", "Database", "Languages", "AI/ML", "Tools"];

const catIcons: Record<string, React.ReactNode> = {
  Frontend:  <Palette   className="w-5 h-5 text-violet-400" />,
  Backend:   <Server    className="w-5 h-5 text-emerald-400" />,
  Database:  <Database  className="w-5 h-5 text-amber-400" />,
  Languages: <Code2     className="w-5 h-5 text-blue-400" />,
  "AI/ML":   <Cpu       className="w-5 h-5 text-rose-400" />,
  Tools:     <Wrench    className="w-5 h-5 text-orange-400" />,
};

export function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container-max">
        <SectionHeader
          badge="Tech Stack"
          title="Skills &"
          highlight="Technologies"
          subtitle="The tools and technologies I work with, from frontend to IoT."
          centered
          className="mb-14"
        />

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, ci) => {
            const catSkills = skills.filter((s) => s.category === cat);
            if (!catSkills.length) return null;
            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: ci * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="glass-card-hover p-6 group"
              >
                {/* header */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="flex-shrink-0">{catIcons[cat]}</div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    {cat}
                  </h3>
                </div>

                {/* skill badges with mini bars */}
                <div className="space-y-3">
                  {catSkills.map((skill, si) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: ci * 0.08 + si * 0.04 + 0.2 }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.1, delay: ci * 0.08 + si * 0.04 + 0.3, ease: "easeOut" }}
                          className="h-full rounded-full relative overflow-hidden"
                          style={{
                            background: skill.color
                              ? `linear-gradient(90deg, ${skill.color}bb, ${skill.color})`
                              : "linear-gradient(90deg, #4b7dc9, #d4af37)",
                          }}
                        >
                          <div className="absolute inset-0 shimmer-bar" />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
