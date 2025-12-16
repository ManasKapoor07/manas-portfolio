"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  // 🔑 SCROLL SPY
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section!));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <motion.div
        className="mx-auto max-w-7xl rounded-md bg-white/70 backdrop-blur-md
                   border border-slate-200 shadow-sm"
      >
        <div className="flex items-center justify-between px-6 py-3">
          {/* Brand */}
          <a
            href="#about"
            className="text-base font-semibold tracking-tight text-slate-900"
          >
            Manas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              Kapoor
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() =>
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="relative text-sm font-medium text-slate-600
                           hover:text-slate-900 transition"
              >
                {item.label}

                {active === item.href && (
                  <motion.span
                    layoutId="nav-indicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute -bottom-1 left-0 h-[2px] w-full
                               bg-gradient-to-r from-teal-500 to-blue-500
                               rounded-full"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((p) => !p)}
            className="md:hidden text-slate-700"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="md:hidden border-t border-slate-200"
            >
              <div className="flex flex-col px-6 py-4 space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`text-sm font-medium transition ${
                      active === item.href
                        ? "text-teal-600"
                        : "text-slate-700 hover:text-teal-600"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
