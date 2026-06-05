"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HiArrowRight, HiClock, HiTag } from "react-icons/hi";

const placeholderPosts = [
  {
    id: "1",
    title: "Building a Full-Stack Portfolio with Next.js 15",
    excerpt: "A deep dive into how I built this portfolio using Next.js App Router, Tailwind CSS, and Framer Motion.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    readTime: 8,
    date: "Coming Soon",
    emoji: "🚀",
  },
  {
    id: "2",
    title: "Getting Started with IoT: Arduino & ESP32",
    excerpt: "My journey from zero to building a working IoT health monitor — tools, challenges, and lessons learned.",
    tags: ["IoT", "Arduino", "ESP32"],
    readTime: 12,
    date: "Coming Soon",
    emoji: "📡",
  },
  {
    id: "3",
    title: "AI in Surveillance: Building SecureSight",
    excerpt: "How I used OpenCV and TensorFlow to build an intelligent, real-time security camera system.",
    tags: ["AI", "OpenCV", "Python"],
    readTime: 10,
    date: "Coming Soon",
    emoji: "🤖",
  },
  {
    id: "4",
    title: "React vs Vue: My Honest Take as a Student Dev",
    excerpt: "After building projects in both frameworks, here's what I actually think about each one.",
    tags: ["React", "Vue", "Opinion"],
    readTime: 6,
    date: "Coming Soon",
    emoji: "⚛️",
  },
  {
    id: "5",
    title: "How I Aced My BSIT Internship",
    excerpt: "Practical tips on making the most of your IT internship from someone who just finished theirs.",
    tags: ["Career", "Internship", "Tips"],
    readTime: 7,
    date: "Coming Soon",
    emoji: "💼",
  },
  {
    id: "6",
    title: "Tailwind CSS: Why I'll Never Write Plain CSS Again",
    excerpt: "Utility-first CSS changed the way I build UIs. Here's why I think every dev should try it.",
    tags: ["CSS", "Tailwind", "Frontend"],
    readTime: 5,
    date: "Coming Soon",
    emoji: "🎨",
  },
];

export function BlogPageClient() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-4 inline-flex">✍️ Blog</span>
            <h1 className="section-title mb-4">
              Thoughts &amp; <span className="gradient-text">Insights</span>
            </h1>
            <p className="section-subtitle mx-auto">
              I write about web development, AI, IoT, and my journey as an IT student.
              Articles are coming soon — stay tuned!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass-card p-10 text-center mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-primary-500 to-accent-violet rounded-b-full" />
            <p className="text-5xl mb-4">🔜</p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Blog Posts Coming Soon
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              I&apos;m working on quality articles about my projects and tech experiences.
              Below are some planned topics — check back soon!
            </p>
          </motion.div>

          {/* Placeholder Posts Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholderPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="glass-card p-6 flex flex-col group relative overflow-hidden"
              >
                {/* Coming soon overlay */}
                <div className="absolute inset-0 bg-white/60 dark:bg-gray-950/60 backdrop-blur-[1px] flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl">
                  <span className="px-4 py-2 rounded-full bg-primary-600 text-white text-sm font-semibold">
                    Coming Soon
                  </span>
                </div>

                <div className="text-4xl mb-4">{post.emoji}</div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="tag text-xs">{tag}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-600 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <span className="flex items-center gap-1">
                    <HiClock className="w-3.5 h-3.5" />
                    {post.readTime} min read
                  </span>
                  <span>{post.date}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Subscribe CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 glass-card p-8 text-center"
          >
            <p className="text-3xl mb-3">📬</p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Want to Know When I Publish?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm mx-auto">
              Follow me on GitHub or connect on LinkedIn to get notified when new articles drop.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://github.com/yourusername`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Follow on GitHub
              </a>
              <Link href="/contact" className="btn-secondary">
                Get In Touch <HiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
