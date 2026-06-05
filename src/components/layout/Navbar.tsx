"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// Section IDs that map to home page scroll targets
const homeSections: Record<string, string> = {
  "/":               "home",
  "/about":          "about",
  "/projects":       "projects",
  "/resume":         "resume",
  "/certifications": "certifications",
  "/contact":        "contact",
};

const navLinks = [
  { href: "/",               label: "Home",     sectionId: "home"     },
  { href: "/about",          label: "About",    sectionId: null        },
  { href: "/projects",       label: "Projects", sectionId: "projects" },
  { href: "/resume",         label: "Resume",   sectionId: null        },
  { href: "/certifications", label: "Certs",    sectionId: null        },
  { href: "/blog",           label: "Blog",     sectionId: null        },
  { href: "/contact",        label: "Contact",  sectionId: "contact"  },
];

export function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [mounted,     setMounted]     = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === "/";

  /* ── scroll spy ── */
  useEffect(() => {
    if (!isHome) return;
    const sectionIds = ["home", "stats", "projects", "skills", "contact"];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isHome]);

  useEffect(() => {
    setMounted(true);
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  /* ── click handler: scroll on home, navigate elsewhere ── */
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    link: typeof navLinks[0]
  ) => {
    if (isHome && link.sectionId) {
      e.preventDefault();
      const el = document.getElementById(link.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  /* ── active check ── */
  const isActive = (link: typeof navLinks[0]) => {
    if (isHome) {
      if (link.sectionId === "projects" && activeSection === "projects") return true;
      if (link.sectionId === "contact"  && activeSection === "contact")  return true;
      if (link.href === "/" && (activeSection === "home" || activeSection === "stats" || activeSection === "skills")) return true;
      return false;
    }
    return pathname === link.href;
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl shadow-md border-b border-slate-200/40 dark:border-slate-700/40"
          : "bg-transparent"
      )}
    >
      <nav className="container-max px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link
            href="/"
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group flex items-center gap-2.5"
          >
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center
                         text-[11px] font-bold tracking-wider
                         group-hover:scale-105 transition-transform duration-300"
              style={{
                background: "rgba(201,132,122,0.12)",
                border: "1px solid rgba(201,132,122,0.25)",
                color: "#c9847a",
              }}
            >
              LM
            </div>
            <span className="hidden sm:block font-medium text-sm" style={{ color: "var(--fg)" }}>
              Loren May<span style={{ color: "#c9847a" }}>.</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={cn(
                    "relative px-3.5 py-2 rounded-lg text-sm transition-all duration-200",
                    active ? "font-medium" : "font-normal hover:bg-white/5"
                  )}
                  style={{ color: active ? "#c9847a" : "var(--muted)" }}
                >
                  {link.label}
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg -z-10"
                      style={{
                        background: "rgba(201,132,122,0.08)",
                        border: "1px solid rgba(201,132,122,0.15)",
                      }}
                      transition={{ type: "spring", stiffness: 380, damping: 36 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                aria-label="Toggle theme"
                className="btn-icon"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{ rotate: -30, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate: 30,  opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {theme === "dark"
                      ? <Sun  className="w-4 h-4" />
                      : <Moon className="w-4 h-4" />}
                  </motion.span>
                </AnimatePresence>
              </button>
            )}

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden btn-icon"
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={String(menuOpen)}
                  initial={{ rotate: -20, opacity: 0 }}
                  animate={{ rotate: 0,   opacity: 1 }}
                  exit={{    rotate: 20,  opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{    opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden
                       bg-white/95 dark:bg-slate-950/95 backdrop-blur-2xl
                       border-t border-slate-200/60 dark:border-slate-800/60"
          >
            <div className="px-4 pt-3 pb-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => { handleNavClick(e, link); setMenuOpen(false); }}
                    className={cn(
                      "block px-4 py-3 rounded-xl text-sm transition-all",
                      isActive(link) ? "font-medium" : "font-normal"
                    )}
                    style={{ color: isActive(link) ? "#c9847a" : "var(--muted)" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}