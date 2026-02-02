"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  Layout,
  Code2,
  FolderOpen,
  Send,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "About", href: "#about", icon: Layout },
  { label: "Experience", href: "#experience", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderOpen },
  { label: "Contact", href: "#contact", icon: Send },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-6">
      {/* Main Dock Container */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="relative flex items-center gap-2  px-4 py-3 rounded-2xl 
                   bg-[#0a0f1a]/80 backdrop-blur-2xl border border-white/10 
                   shadow-[0_0_40px_rgba(0,0,0,0.7)]"
      >
        {/* Brand Section */}
        <div className="flex items-center gap-3 pr-4 border-r border-white/10">
          <div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 
                        flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            <Terminal size={20} className="text-white" />
          </div>
          <div className="hidden sm:block">
            <p className="text-xs font-bold text-white tracking-tighter leading-none">
              MANAS KAPOOR
            </p>
            <p className="text-[10px] font-mono text-blue-400 mt-1">Software Engineer</p>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 pl-2 ">
          {navItems.map((item) => {
            const isActive = active === item.href;
            const Icon = item.icon;

            return (
              <button
                key={item.href}
                onClick={() => {
                  setActive(item.href);
                  document
                    .querySelector(item.href)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative group flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all
                           ${isActive ? "text-white" : "text-slate-400 hover:text-slate-200"}`}
              >
                <Icon
                  size={16}
                  className={
                    isActive
                      ? "text-blue-400"
                      : "text-slate-500 group-hover:text-slate-300"
                  }
                />
                <span className="text-sm font-bold tracking-wide">
                  {item.label}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="dock-bg"
                    className="absolute inset-0 bg-white/5 border border-white/10 rounded-xl -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                {/* Hover Glow Effect */}
                <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden ml-2 p-2 rounded-lg text-slate-300 hover:bg-white/5"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Active Line (Bottom Glow) */}
        <div className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-24 left-6 right-6 md:hidden p-4 rounded-3xl 
                       bg-[#0a0f1a]/95 backdrop-blur-3xl border border-white/10 shadow-2xl"
          >
            <div className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/50 transition-all"
                >
                  <item.icon size={24} className="text-blue-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-widest">
                    {item.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
