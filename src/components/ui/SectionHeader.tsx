"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
// import { GeometricPattern } from "./GeometricPattern";

interface SectionHeaderProps {
  badge?:     string;
  title:      string;
  highlight?: string;
  subtitle?:  string;
  centered?:  boolean;
  className?: string;
  showPattern?: boolean;
  patternType?: "hexagons" | "grid" | "circuit" | "dots" | "lines";
}

export function SectionHeader({
  badge,
  title,
  highlight,
  subtitle,
  centered = false,
  className,
  showPattern = false,
  patternType = "hexagons",
}: SectionHeaderProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={cn(centered && "text-center", "relative", className)}
    >
      {showPattern && (
        <div className="absolute -inset-6 pointer-events-none">
          {/* Geometric pattern - to be added */}
        </div>
      )}

      <div className="relative z-10">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-block text-xs font-medium tracking-[0.15em] uppercase mb-4"
            style={{ color: '#c9847a' }}
          >
            {badge}
          </motion.span>
        )}

        <h2 className="section-title mb-4">
          {title}{" "}
          {highlight && <span className="gradient-text">{highlight}</span>}
        </h2>

        {subtitle && (
          <p className={cn("section-subtitle mt-3", centered && "mx-auto")}>
            {subtitle}
          </p>
        )}
      </div>

      {/* thin accent line */}
      <div className={cn(
        "mt-5 h-px w-10 rounded-full",
        centered && "mx-auto"
      )} style={{ background: 'linear-gradient(90deg, #c9847a, #9b8cba)' }} />
    </motion.div>
  );
}
