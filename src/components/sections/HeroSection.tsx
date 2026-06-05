"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Download, ArrowRight, MapPin, Wifi, GraduationCap, Atom } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { personalInfo } from "@/data/personal";

/* ── tiny particle canvas ──────────────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width  = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const count = Math.floor((w * h) / 14000);
    type Dot = { x: number; y: number; r: number; vx: number; vy: number; a: number };

    const dots: Dot[] = Array.from({ length: count }, () => ({
      x:  Math.random() * w,
      y:  Math.random() * h,
      r:  Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      a:  Math.random() * 0.5 + 0.2,
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0) d.x = w;
        if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h;
        if (d.y > h) d.y = 0;

        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(75,125,201,${d.a})`;
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(75,125,201,${0.08 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", onResize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 dark:opacity-40"
    />
  );
}

/* ── stagger animation helper ──────────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial:  { opacity: 0, y: 28 },
  animate:  { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

/* ── component ──────────────────────────────────────────────────────────────── */
export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-slate-950">

      {/* ── backgrounds ── */}
      <div className="absolute inset-0 bg-mesh opacity-60 dark:opacity-100" />
      <div className="absolute inset-0 bg-dots dark:bg-dots-dark" />
      <ParticleCanvas />

      {/* soft orbs */}
      <div className="absolute top-1/3 -left-40 w-[28rem] h-[28rem] rounded-full bg-primary-400/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[24rem] h-[24rem] rounded-full bg-accent-gold/10 blur-[100px] pointer-events-none" />

      {/* ── content ── */}
      <div className="container-max section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* ─ left ─ */}
          <div className="order-2 lg:order-1 space-y-6">

            <motion.div {...fadeUp(0.1)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                               bg-emerald-50 dark:bg-emerald-900/25
                               border border-emerald-200/70 dark:border-emerald-700/50
                               text-emerald-700 dark:text-emerald-400 text-sm font-semibold">
                <span className="status-dot" />
                Open to Opportunities
              </span>
            </motion.div>

            <div className="space-y-1">
              <motion.p
                {...fadeUp(0.18)}
                className="font-mono text-sm text-primary-600 dark:text-primary-400 tracking-widest uppercase"
              >
                &lt;Hello, WORLD! /&gt;
              </motion.p>

              <motion.h1
                {...fadeUp(0.26)}
                className="text-5xl sm:text-6xl xl:text-7xl font-light text-slate-900 dark:text-white leading-[1.05]"
              >
                Loren May
                <br />
                <span className="gradient-text">Florentino</span>
              </motion.h1>
            </div>

            <motion.div {...fadeUp(0.34)} className="flex items-center gap-3">
              <div className="flex-shrink-0 w-1 h-6 rounded-full bg-gradient-to-b from-primary-500 to-accent-gold" />
              <span className="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-300">
                <TypeAnimation
                  sequence={[
                    "IT Graduating Student",    2200,
                    "IoT Research Contributor", 2200,
                    "Full-Stack Web Developer", 2200,
                    "UI / UX Enthusiast",       2200,
                    "Healthcare Tech Advocate", 2200,
                  ]}
                  wrapper="span"
                  speed={52}
                  repeat={Infinity}
                />
              </span>
            </motion.div>

            <motion.p
              {...fadeUp(0.42)}
              className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-[520px]"
            >
              Graduating IT student who co-researched{" "}
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                MediWear
              </span>{" "}
              — an IoT-based wearable device for pill reminders &amp; medication
              storage. Passionate about tech that genuinely helps people.
            </motion.p>

            <motion.div {...fadeUp(0.50)} className="flex flex-wrap gap-3 pt-1">
              <Link href="/projects" className="btn-primary">
                View Projects <ArrowRight className="w-4 h-4" />
              </Link>
              <a href={personalInfo.resumeUrl} download className="btn-secondary">
                Download CV <Download className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div {...fadeUp(0.58)} className="flex items-center gap-3 pt-1">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn-icon">
                <FaGithub className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn-icon">
                <FaLinkedin className="w-4 h-4" />
              </a>
              <div className="h-4 w-px mx-1" style={{ background: 'var(--border)' }} />
              <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                <MapPin className="w-3.5 h-3.5" />
                Philippines
              </span>
            </motion.div>
          </div>
          {/* ─ end left ─ */}

       {/* ─ right — profile ─ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center items-end relative"
          >
            {/* glow behind the figure */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-72
                            rounded-full bg-primary-500/20 blur-[80px] pointer-events-none" />

            <div className="relative">

              {/* the portrait — no circle clip */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-72 sm:w-80 lg:w-[420px]"
              >
                <Image
                  src="/Loren.png"
                  alt="Loren May Florentino"
                  width={420}
                  height={560}
                  className="object-contain object-bottom w-full h-auto drop-shadow-2xl"
                  priority
                />

                {/* soft fade at the bottom so it blends into the bg */}
                <div className="absolute bottom-0 left-0 right-0 h-24
                                bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />
              </motion.div>

              {/* floating chips */}
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-16 -left-10 chip shadow-md">
  <Wifi className="w-3.5 h-3.5 text-primary-500" /> MediWear — IoT
</motion.div>

              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-8 -right-6 chip shadow-md">
  <GraduationCap className="w-3.5 h-3.5 text-primary-500" /> IT — 2025
</motion.div>

              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }} className="absolute top-1/2 -right-14 -translate-y-1/2 chip shadow-md">
  <Atom className="w-3.5 h-3.5 text-cyan-400" /> React
</motion.div>

            </div>
          </motion.div>
          {/* ─ end right ─ */}

        </div>
        {/* ─ end grid ─ */}

        {/* ─ scroll cue ─ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600 font-mono">
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-[18px] h-[30px] rounded-full border-2 border-slate-300 dark:border-slate-700
                       flex items-start justify-center pt-[5px]"
          >
            <div className="w-[3px] h-[7px] rounded-full bg-primary-400" />
          </motion.div>
        </motion.div>

      </div>
      {/* ─ end container ─ */}

    </section>
  );
}