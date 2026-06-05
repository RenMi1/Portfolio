"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, ArrowRight } from "lucide-react";

export function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900/40">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl p-10 sm:p-16 text-center"
          style={{ background: 'linear-gradient(135deg, #b86e64 0%, #c9847a 50%, #9b8cba 100%)' }}
        >
          {/* decorations */}
          <div className="absolute inset-0 bg-dots opacity-20" />
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-white/5 blur-3xl" />

          <div className="relative z-10">
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-white/15 border border-white/25
                         text-white/90 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to opportunities
            </motion.span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              Let&apos;s Build Something{" "}
              <span className="text-primary-100">Amazing</span>
            </h2>
            <p className="text-white/75 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              I&apos;m actively looking for internship opportunities, freelance
              projects, and collaborative work. Let&apos;s connect and create
              something impactful.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                           bg-white font-medium rounded-xl text-sm
                           transition-all duration-300 hover:scale-105 hover:shadow-xl
                           hover:shadow-black/20 active:scale-95"
                style={{ color: '#b86e64' }}
              >
                <Mail className="w-4 h-4" /> Get In Touch
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5
                           border border-white/30 text-white font-medium rounded-xl text-sm
                           transition-all duration-300 hover:bg-white/10
                           hover:scale-105 active:scale-95"
              >
                View My Work <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
