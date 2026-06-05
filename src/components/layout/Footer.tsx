import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { personalInfo } from "@/data/personal";

const quickLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Resume", "/resume"],
  ["Certifications", "/certifications"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
];

const socials = [
  { icon: FaGithub,   href: personalInfo.github,                   label: "GitHub"   },
  { icon: FaLinkedin, href: personalInfo.linkedin,                  label: "LinkedIn" },
  { icon: FaFacebook, href: "https://facebook.com/yourusername",    label: "Facebook" },
  { icon: Mail,       href: `mailto:${personalInfo.email}`,         label: "Email"    },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: 'var(--border)', background: 'var(--bg)' }}>
      <div className="container-max section-padding py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 mb-4 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-[11px] font-bold
                              group-hover:scale-105 transition-transform"
                   style={{ background: 'rgba(201,132,122,0.12)', border: '1px solid rgba(201,132,122,0.25)', color: '#c9847a' }}>
                LM
              </div>
              <span className="font-medium text-sm" style={{ color: 'var(--fg)' }}>
                Loren May<span style={{ color: '#c9847a' }}>.</span>
              </span>
            </Link>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              IT graduating student &amp; IoT research contributor.
              Building tech that matters.
            </p>
            <div className="flex gap-2.5 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="btn-icon"
                >
                  <s.icon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-slate-600 dark:text-slate-400
                               hover:text-accent-gold dark:hover:text-accent-gold
                               transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-0 group-hover:w-2.5 h-px bg-accent-gold transition-all duration-200 rounded-full" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-4">
              Get In Touch
            </h3>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 transition-colors hover:text-[#c9847a]"
                style={{ color: 'var(--muted)' }}
              >
                <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                {personalInfo.email}
              </a>
              <p className="flex items-center gap-2" style={{ color: 'var(--muted)' }}>
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {personalInfo.location}
              </p>
              {personalInfo.availableForWork && (
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                                bg-emerald-50 dark:bg-emerald-900/20
                                border border-emerald-200/60 dark:border-emerald-800/60
                                text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                  <span className="status-dot" />
                  Available for work
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 dark:text-slate-600">
          <span>© {year} Loren May Florentino. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Built with{" "}
            <span className="text-rose-400 mx-0.5">♥</span>
            using Next.js · TypeScript · Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
}
