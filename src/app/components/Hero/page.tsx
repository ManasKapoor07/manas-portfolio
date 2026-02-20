"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Layout,
  Database,
  ArrowRight,
  Github,
  Linkedin,
  ShieldCheck,
  FileDown,
} from "lucide-react";

const TechPill = ({ name }: { name: string }) => (
  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
    <div className="w-1 h-1 rounded-full bg-blue-400" />
    <span className="text-[11px] sm:text-[12px] font-mono text-slate-300">
      {name}
    </span>
  </div>
);

const Hero = () => {
  return (
    <section
      id="about"
      className="relative min-h-[85vh] pt-30 lg:min-h-screen flex items-center bg-[#05070a] overflow-hidden px-6"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              I build <span className="text-blue-500">reliable apps</span>
              <br className="hidden sm:block" />
              that work at scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0"
            >
              Hi, I’m Manas Kapoor — a Software Engineer focused on building
              fast, secure, and scalable web systems. I’ve shipped tools used by
              1,000+ users daily and pipelines processing 10,000+ updates per
              day.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition transform hover:-translate-y-0.5"
              >
                See My Work <ArrowRight size={16} />
              </a>

              <a
                href="/Manas-kapoor_SDE.pdf"
                download
                className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-semibold border border-white/10 transition"
              >
                <FileDown size={16} className="text-blue-400" />
                Resume
              </a>

              {/* Socials */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/in/manas-kapoor-51b5a7215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://github.com/ManasKapoor07"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition"
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-5 bg-[#0a0f1a]/60 border border-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <div className="space-y-7">
              {/* UI */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-blue-400">
                  <Layout size={16} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    User Interface
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <TechPill name="React" />
                  <TechPill name="Next.js" />
                  <TechPill name="TypeScript" />
                  <TechPill name="Tailwind" />
                </div>
              </div>

              {/* Backend */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-emerald-400">
                  <Cpu size={16} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    Backend
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <TechPill name="Java" />
                  <TechPill name="Spring Boot" />
                  <TechPill name="Spring Security" />
                  <TechPill name="REST APIs" />
                </div>
              </div>

              {/* Data */}
              <div>
                <div className="flex items-center gap-2 mb-3 text-purple-400">
                  <Database size={16} />
                  <h3 className="text-xs font-bold uppercase tracking-widest">
                    Data & Auth
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  <TechPill name="MySQL" />
                  <TechPill name="JPA / Hibernate" />
                  <TechPill name="JWT" />
                  <TechPill name="WebSockets" />
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono text-slate-500">
                <ShieldCheck size={14} className="text-emerald-500" />
                <span>PRODUCTION-READY SYSTEMS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
