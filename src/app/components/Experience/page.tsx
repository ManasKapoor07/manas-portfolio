"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Database,
  ShieldCheck,
  Zap,
  BarChart3,
  Globe,
} from "lucide-react";

const experiences = [
  {
    company: "Datopic Technologies",
    role: "Software Engineer",
    duration: "Feb 2024 – Present",
    location: "Noida, UP",
    summary:
      "Designing and delivering production-grade frontend systems and secure backend architectures for 1,000+ daily active users.",
    systems: [
      {
        title: "CRM & Core Modules",
        icon: <Globe size={20} className="text-blue-400" />,
        description:
          "Built dashboards and filters using React.js/Redux, reducing feature development turnaround by 20%.",
        tech: ["React", "Redux", "Jira"],
        impact: "Reduced dev time by 20%",
      },
      {
        title: "Blockchain Pipelines",
        icon: <Zap size={20} className="text-yellow-400" />,
        description:
          "Processed 10,000+ daily transactions with WebSockets, reducing manual review effort by 30%.",
        tech: ["WebSockets", "Real-time Data"],
        impact: "30% less manual effort",
      },
      {
        title: "Security & Auth",
        icon: <ShieldCheck size={20} className="text-emerald-400" />,
        description:
          "Implemented Spring Security reducing unauthorized access incidents to zero.",
        tech: ["Java","Spring Security"],
        impact: "Zero security incidents",
      },
      {
        title: "Database Optimization",
        icon: <Database size={20} className="text-purple-400" />,
        description:
          "Integrated JPA/MySQL for audit trails, reducing query response times by 25% via optimized indexing.",
        tech: ["JPA", "MySQL", "Hibernate" , "MongoDB"],
        impact: "25% faster queries",
      },
    ],
  },
  {
    company: "Celebal Technologies",
    role: "React.js Trainee",
    duration: "June 2023 – Aug 2023",
    location: "Remote",
    summary:
      "Focused on interactive frontend features and API-driven dynamic UI rendering.",
    systems: [
      {
        title: "Streaming Platform",
        icon: <BarChart3 size={20} className="text-rose-400" />,
        description:
          "Developed a Netflix-style application integrating TMDB API for real-time data fetching.",
        tech: ["React", "Redux", "TMDB API"],
        impact: "Dynamic UI Rendering",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-24 bg-[#05070a] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
          <h2 className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em] mb-4">
            Professional History
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Work <span className="text-blue-500">Experience.</span>
          </h3>
        </div>

        <div className="space-y-32">
          {experiences.map((exp, idx) => (
            <div key={exp.company} className="relative">
              {/* Timeline Line */}
              {idx !== experiences.length - 1 && (
                <div className="absolute left-0 top-10 bottom-[-8rem] w-px bg-gradient-to-b from-blue-500/50 to-transparent hidden lg:block" />
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left: Company Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-4"
                >
                  <div className="sticky top-32">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-3 rounded-2xl bg-blue-600/10 border border-blue-500/20 text-blue-400">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white leading-none">
                          {exp.company}
                        </h4>
                        <p className="text-blue-500 font-mono text-sm mt-2">
                          {exp.role}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 text-slate-400 text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-slate-500" />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-slate-500" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-400 leading-relaxed border-l-2 border-white/5 pl-4 italic">
                      {exp.summary}
                    </p>
                  </div>
                </motion.div>

                {/* Right: Systems Bento Grid */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {exp.systems.map((sys, sysIdx) => (
                    <motion.div
                      key={sys.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: sysIdx * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/40 hover:bg-white/[0.07] transition-all relative overflow-hidden"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-2.5 rounded-xl bg-black/40 border border-white/10 group-hover:border-blue-500/30 transition-colors">
                          {sys.icon}
                        </div>
                        <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-mono font-bold text-blue-400 uppercase tracking-widest">
                          Production
                        </div>
                      </div>

                      <h5 className="text-lg font-bold text-white mb-2">
                        {sys.title}
                      </h5>
                      <p className="text-sm text-slate-400 leading-relaxed mb-6">
                        {sys.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {sys.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded text-slate-300 border border-white/5"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tighter">
                          Impact
                        </span>
                        <span className="text-[11px] font-mono text-blue-400 font-bold">
                          {sys.impact}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
