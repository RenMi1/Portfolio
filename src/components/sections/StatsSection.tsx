"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";
import { Rocket, Layers, FlaskConical, Monitor } from "lucide-react";

function CountUp({ to, duration = 1.6 }: { to: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const steps = 40;
    const inc = to / steps;
    const interval = (duration * 1000) / steps;
    const timer = setInterval(() => {
      start += inc;
      if (start >= to) { setCount(to); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, interval);
    return () => clearInterval(timer);
  }, [inView, to, duration]);

  return <span ref={ref}>{count}</span>;
}

const stats = [
  { label: "Projects Built",         value: 6,  suffix: "+", icon: <Rocket       className="w-9 h-9 text-white" />, color: "from-primary-500 to-primary-400" },
  { label: "Technologies Used",      value: 20, suffix: "+", icon: <Layers       className="w-9 h-9 text-white" />, color: "from-primary-500 to-accent-gold" },
  { label: "Research Contributions", value: 1,  suffix: "",  icon: <FlaskConical className="w-9 h-9 text-white" />, color: "from-accent-gold to-primary-500" },
  { label: "Years Coding",           value: 2,  suffix: "+", icon: <Monitor      className="w-9 h-9 text-white" />, color: "from-primary-600 to-accent-gold" },
];

export function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="relative py-16 overflow-hidden">
      {/* gradient strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-500 to-accent-gold" />
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="absolute inset-0 noise-overlay" />

      <div ref={ref} className="container-max section-padding py-0 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="inline-flex flex-col items-center"
              >
                <span className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {s.icon}
                </span>
                <span className="text-4xl sm:text-5xl font-black text-white leading-none mb-2">
                  <CountUp to={s.value} />
                  {s.suffix}
                </span>
                <span className="text-sm text-white/70 font-medium">{s.label}</span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
