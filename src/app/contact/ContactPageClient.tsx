"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiUser,
  HiChatAlt2,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { personalInfo } from "@/data/personal";
import { ContactFormData } from "@/types";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: HiPhone,
    label: "Phone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: HiLocationMarker,
    label: "Location",
    value: personalInfo.location,
    href: null,
    color: "text-rose-500",
    bg: "bg-rose-100 dark:bg-rose-900/30",
  },
];

const socials = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/RenMi1",
    username: "RenMi1",
    color: "hover:bg-gray-100 dark:hover:bg-gray-800",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lorenmay-florentino-3611412b2/",
    username: "Loren May Florentino",
    color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    href: "https://www.facebook.com/lorenmay.florentino.1",
    username: "Lorenmay Florentino",
    color: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
  },
];

const subjectOptions = [
  "Internship Opportunity",
  "Freelance Project",
  "Collaboration",
  "Job Offer",
  "General Inquiry",
  "Other",
];

export function ContactPageClient() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setLoading(true);
    // Simulate sending — replace with your actual API call (e.g. Resend, EmailJS, Formspree)
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    toast.success("Message sent! I'll get back to you soon. 🎉");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="section-padding bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 grid-overlay" />
        <div className="container-max relative z-10 text-center max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-4 inline-flex">💬 Contact</span>
            <h1 className="section-title mb-4">
              Let&apos;s <span className="gradient-text">Work Together</span>
            </h1>
            <p className="section-subtitle mx-auto">
              I&apos;m open to freelance projects, and collaborations.
              Drop me a message and I&apos;ll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left — Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Availability */}
              {personalInfo.availableForWork && (
                <div className="glass-card p-5 border border-emerald-200 dark:border-emerald-800/50">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white text-sm">
                        Available for Work
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Actively looking for opportunities
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Contact Details */}
              <div className="glass-card p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((item) => (
                    <div key={item.label} className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{item.label}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm font-medium text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-gray-900 dark:text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Socials */}
              <div className="glass-card p-6">
                <h3 className="font-bold text-gray-900 dark:text-white mb-4">
                  Social Profiles
                </h3>
                <div className="space-y-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all ${s.color}`}
                    >
                      <s.icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {s.label}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {s.username}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time */}
              <div className="glass-card p-5 text-center">
                <p className="text-3xl mb-2">⚡</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Quick Response
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  I typically respond within 24 hours.
                </p>
              </div>
            </motion.div>

            {/* Right — Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="glass-card p-8">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <HiUser className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your Name"
                          required
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                        Email Address <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <HiMail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                          className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                    >
                      <option value="">Select a subject...</option>
                      {subjectOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                      Message <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <HiChatAlt2 className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project, opportunity, or just say hello..."
                        required
                        rows={6}
                        className="w-full pl-9 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                      />
                    </div>
                    <p className="text-xs text-gray-400 dark:text-gray-600 mt-1 text-right">
                      {form.message.length} characters
                    </p>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-gray-400 dark:text-gray-600">
                    Your information is kept private and will never be shared.
                  </p>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
