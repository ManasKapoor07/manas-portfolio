"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Terminal,
  Box,
  Layers,
  Zap,
  ShoppingCart,
  Car,
  CloudSun,
  Layout,
  Github,
} from "lucide-react";

const projects = [
  {
    title: "Enterprise E-Commerce Platform",
    category: "Full Stack / Enterprise",
    description:
      "A comprehensive e-commerce system with a layered Spring Boot architecture, handling product catalogs, cart management, and secure checkouts.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JPA"],
    impact: "Supports 1,000+ products with optimized JPA indexing.",
    icon: <ShoppingCart className="text-blue-400" size={22} />,
    status: "Production",
    liveLink: undefined,
    github: {
      frontend: "https://github.com/ManasKapoor07/car-accessories-landing",
      backend: "https://github.com/ManasKapoor07/carVatika",
    },
  },
  {
    title: "Used-Car Lead Management",
    category: "Full Stack / Production System",
    description:
      "A real-world dealership platform that digitized the lead intake process, replacing manual WhatsApp workflows with structured data capture.",
    tech: ["Java", "React","Spring Boot" ],
    impact: "100% digital lead capture for car-selling requests.",
    icon: <Car className="text-emerald-400" size={22} />,
    status: "Live",
    liveLink: "https://www.maabhawanicarbazar.com/",
  },
  {
    title: "AI Article Summarizer",
    category: "AI / Frontend",
    description:
      "High-performance summarization tool utilizing GPT-4. Features Redux-based request lifecycle management for seamless user feedback.",
    tech: ["GPT-4 API", "React", "Redux Toolkit"],
    impact: "Drastically reduced reading time for long-form content.",
    icon: <Zap className="text-yellow-400" size={22} />,
    status: "Live",
    liveLink: "https://lighthearted-maamoul-73995f.netlify.app/",
  },
  {
    title: "Sanitaryware Brand Platform",
    category: "Freelance Client",
    description:
      "Modern, high-conversion business website built with Next.js, focusing on performance, SEO, and responsive architectural detail.",
    tech: ["React.js", "Redux", "Tailwind CSS", "Framer Motion"],
    impact: "Modernized digital presence for hardware distribution.",
    icon: <Layout className="text-purple-400" size={22} />,
    status: "WIP",
    liveLink: "https://m-co-qj1f.vercel.app/",
  },
  {
    title: "Kanban Task Manager",
    category: "Productivity Tool",
    description:
      "Complex state-driven application with drag-and-drop mechanics and Firebase authentication for secure task tracking.",
    tech: ["Firebase Auth", "Firestore", "React-DnD"],
    impact: "Real-time sync across devices with CRUD persistence.",
    icon: <Layers className="text-orange-400" size={22} />,
    status: "WIP",
    liveLink: "https://illustrious-kelpie-eea3b8.netlify.app/",
  },
  {
    title: "Weather Intelligence Dashboard",
    category: "Data Visualization",
    description:
      "Real-time weather monitoring system that fetches and visualizes multi-metric forecast data from global APIs.",
    tech: ["OpenWeather API", "React", "Charts.js"],
    impact: "Data-driven UI rendering with dynamic city lookup.",
    icon: <CloudSun className="text-cyan-400" size={22} />,
    status: "Live",
    liveLink: "https://tangerine-youtiao-d6677d.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 bg-[#05070a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Terminal size={18} className="text-blue-500" />
            <span className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em]">
              Deployments
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Featured <span className="text-blue-500">Projects.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative flex flex-col bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500/50 transition-all overflow-hidden"
            >
              {/* Icon & Status */}
              <div className="flex items-start justify-between mb-8">
                <div className="p-3 rounded-2xl bg-black/40 border border-white/10">
                  {project.icon}
                </div>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-1 rounded-full border ${
                    project.status === "WIP"
                      ? "text-yellow-500 border-yellow-500/20 bg-yellow-500/5"
                      : "text-blue-400 border-blue-400/20 bg-blue-400/5"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Content */}
              <div className="flex-grow">
                <span className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  {project.description}
                </p>
              </div>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-white/5 flex items-center justify-between mt-auto">
                <div className="flex items-center gap-2">
                  <Box size={14} className="text-slate-500" />
                  <span className="text-[11px] font-mono text-slate-500">
                    {project.impact}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {project.github?.frontend && (
                    <a
                      href={project.github.frontend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
                      title="Frontend Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}

                  {project.github?.backend && (
                    <a
                      href={project.github.backend}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 p-2 rounded-full bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition"
                      title="Backend Repository"
                    >
                      <Github size={16} />
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 p-2 rounded-full bg-blue-600/10 text-blue-400 hover:bg-blue-600 hover:text-white transition"
                      title="Live Project"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Glow */}
              <div className="pointer-events-none absolute -bottom-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
