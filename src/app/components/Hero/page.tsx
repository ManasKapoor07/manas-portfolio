"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-[85vh] flex items-center px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-[0.25]" />

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />

      <div className="relative max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-4 text-sm font-semibold tracking-wide text-teal-600"
        >
        Software Engineer
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight"
        >
          I build{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
            scalable frontends
          </span>
          <br className="hidden sm:block" />
          that don’t feel clunky.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 text-lg text-slate-600 max-w-2xl"
        >
          React, Next.js, Tailwind CSS. I focus on performance, clean state
          management, and UI that actually feels smooth — not just looks good in
          screenshots.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-slate-900 text-white font-medium hover:bg-slate-800 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 font-medium hover:border-slate-900 hover:text-slate-900 transition"
          >
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
