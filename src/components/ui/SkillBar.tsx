"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Skill } from "@/types";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  skill: Skill;
  index?: number;
}

export function SkillBar({ skill, index = 0 }: SkillBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">
          {skill.name}
        </span>
        <span className="text-xs font-bold text-accent-gold dark:text-accent-gold font-mono bg-primary-50/50 dark:bg-primary-900/30 px-2 py-1 rounded">
          {skill.level}%
        </span>
      </div>
      <div className="h-2.5 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.05, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-accent-gold shadow-lg shadow-primary-500/50"
          style={skill.color ? { background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})` } : undefined}
        />
      </div>
    </div>
  );
}

interface SkillBadgeProps {
  name: string;
  index?: number;
  color?: string;
}

export function SkillBadge({ name, index = 0, color }: SkillBadgeProps) {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-semibold border transition-all hover:scale-110 cursor-default shadow-sm",
        "bg-gradient-to-r from-primary-50 to-amber-50/50 dark:from-primary-900/40 dark:to-amber-900/30",
        "border-primary-200/60 dark:border-primary-700/60",
        "text-primary-700 dark:text-primary-300 hover:border-accent-gold dark:hover:border-accent-gold hover:shadow-lg"
      )}
    >
      {name}
    </motion.div>
  );
}
