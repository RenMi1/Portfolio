"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HiExternalLink, HiBadgeCheck, HiCalendar, HiSearch } from "react-icons/hi";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certifications } from "@/data/certifications";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import { Award, Search } from "lucide-react";

const allCategories = ["All", ...Array.from(new Set(certifications.map((c) => c.category)))];

const categoryColors: Record<string, string> = {
  "Web Development": "from-blue-500 to-cyan-400",
  Cloud: "from-sky-500 to-indigo-500",
  "AI/ML": "from-violet-500 to-purple-400",
  Security: "from-red-500 to-rose-400",
  Database: "from-amber-500 to-orange-400",
  DevOps: "from-emerald-500 to-teal-400",
  Default: "from-primary-500 to-accent-violet",
};

const categoryEmoji: Record<string, string> = {
  "Web Development": "🌐",
  Cloud: "☁️",
  "AI/ML": "🤖",
  Security: "🔒",
  Database: "🗄️",
  DevOps: "⚙️",
  Default: "🏆",
};

export function CertificationsPageClient() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = certifications.filter((c) => {
    const matchCat = active === "All" || c.category === active;
    const matchSearch =
      search.trim() === "" ||
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.issuer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-4 inline-flex">🏆 Credentials</span>
            <h1 className="section-title mb-4">
              My <span className="gradient-text">Certifications</span>
            </h1>
            <p className="section-subtitle mx-auto">
              Professional certifications and credentials that validate my technical expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-16 z-30 bg-white/80 dark:bg-gray-950/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800">
        <div className="container-max section-padding py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 w-full sm:w-auto">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={cn(
                    "px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all",
                    active === cat
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="section-padding">
        <div className="container-max">
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={active + search}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((cert, i) => {
                  const gradient = categoryColors[cert.category] || categoryColors.Default;
                  const emoji = categoryEmoji[cert.category] || categoryEmoji.Default;

                  // 👇 Replace these with your actual image paths later e.g. "/certs/aws.png"
                  const certImage = cert.image ?? "/certs/cert1.png";

                  return (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="glass-card overflow-hidden card-hover group flex flex-col"
                    >
                      {/* Top banner — shows image if available, fallback to gradient+emoji */}
                      <div className={cn(
                        "h-40 relative overflow-hidden",
                        !cert.image && `bg-gradient-to-r ${gradient}`
                      )}>
                        {cert.image ? (
                          <Image
                            src={cert.image}
                            alt={cert.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <span className="text-5xl">{emoji}</span>
                          </div>
                        )}

                        {/* badge icon overlay */}
                        <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-sm rounded-full p-1">
                          <HiBadgeCheck className="w-5 h-5 text-white" />
                        </div>

                        {/* category label overlay */}
                        <div className="absolute bottom-3 left-3">
                          <span className="text-xs font-semibold bg-black/40 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                            {cert.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <h3 className="font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
                          {cert.issuer}
                        </p>

                        <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mb-3">
                          <HiCalendar className="w-3.5 h-3.5" />
                          <span>Issued {formatDate(cert.date)}</span>
                          {cert.expiryDate && (
                            <span className="text-gray-400 dark:text-gray-600">
                              · Expires {formatDate(cert.expiryDate)}
                            </span>
                          )}
                        </div>

                        {cert.credentialId && (
                          <p className="text-xs text-gray-400 dark:text-gray-500 font-mono mb-3">
                            ID: {cert.credentialId}
                          </p>
                        )}

                        {cert.skills.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 mb-4 flex-1">
                            {cert.skills.map((skill) => (
                              <span key={skill} className="tag text-xs">{skill}</span>
                            ))}
                          </div>
                        )}

                        {cert.verificationUrl ? (
                          
                        <a    href={cert.verificationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline mt-auto"
                          >
                            <HiExternalLink className="w-4 h-4" />
                            Verify Credential
                          </a>
                        ) : (
                          <span className="text-xs text-gray-400 dark:text-gray-600 mt-auto">
                            Verification link coming soon
                          </span>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-24"
              >
                <div className="text-6xl mb-4">🏅</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No certifications found</h3>
                <p className="text-gray-500 dark:text-gray-400">Try a different search or category.</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Coming Soon Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 glass-card p-8 text-center"
          >
            <p className="text-3xl mb-3">📚</p>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              More Certifications Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
              I&apos;m continuously learning and earning new certifications. Check back regularly for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}