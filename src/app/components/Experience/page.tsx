"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Datopic Technologies",
    role: "Software Engineer",
    duration: "Feb 2024 – Present",
    location: "Noida, Uttar Pradesh",
    summary:
      "Worked on multiple production-grade monitoring and analytics systems, focusing on scalable frontend architecture, real-time data visualization, and performance-critical UI.",
    systems: [
      {
        title: "CRM Platform",
        description: (
          <>
            Built and maintained core frontend modules using{" "}
            <span className="text-teal-600 font-medium">React</span>,{" "}
            <span className="text-teal-600 font-medium">Next.js</span> and{" "}
            <span className="text-teal-600 font-medium">Redux</span>, focusing
            on reusable components, predictable state management, and consistent
            UX across the application.
          </>
        ),
        tech: ["React", "Next.js", "Tailwind CSS", "Redux"],
        impact:
          "Improved feature delivery speed by ~20% through reusable UI patterns.",
      },
      {
        title: "AWS Monitoring Dashboard",
        description: (
          <>
            Developed a real-time dashboard to visualize{" "}
            <span className="text-teal-600 font-medium">AWS</span>{" "}
            infrastructure metrics by integrating frontend components with{" "}
            <span className="text-teal-600 font-medium">
              Express-based APIs
            </span>
            .
          </>
        ),
        tech: ["React", "Express.js", "AWS APIs"],
        impact:
          "Enabled real-time visibility into cloud infrastructure health.",
      },
      {
        title: "Blockchain Monitoring System",
        description: (
          <>
            Worked on a blockchain monitoring solution to track{" "}
            <span className="text-teal-600 font-medium">on-chain activity</span>
            , security signals, and anomalous behavior while handling
            high-frequency UI updates.
          </>
        ),
        tech: ["React", "WebSockets", "APIs"],
        impact: "Improved observability of blockchain transactions and events.",
      },
      {
        title: "Quantum Attack Monitoring Software",
        description: (
          <>
            Contributed to a security-focused monitoring platform aimed at
            visualizing early indicators of{" "}
            <span className="text-teal-600 font-medium">
              quantum-era cryptographic threats
            </span>
            .
          </>
        ),
        tech: ["React", "Data Visualization", "Security Dashboards"],
        impact: "Provided early visibility into cryptographic risk indicators.",
      },
    ],
  },
  {
    company: "Celebal Technologies",
    role: "React.js Trainee",
    duration: "Jun 2023 – Aug 2023",
    location: "Remote",
    summary:
      "Focused on strengthening frontend fundamentals through hands-on React projects and real-world API integrations.",
    systems: [
      {
        title: "Netflix-Style Streaming App",
        description: (
          <>
            Developed a Netflix-style application using the{" "}
            <span className="text-teal-600 font-medium">TMDB API</span>,
            focusing on component-based architecture, responsive layouts, and
            API-driven UI rendering.
          </>
        ),
        tech: ["React", "Redux", "TMDB API"],
        impact: "Strengthened fundamentals of scalable frontend development.",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative px-4 sm:px-6 md:px-10 py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-teal-600 mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Professional{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              experience
            </span>
          </h2>

          <p className="mt-4 text-slate-600">
            Production systems and internal platforms I’ve helped design, build,
            and scale in real-world environments.
          </p>
        </motion.div>

        {/* Experience Blocks */}
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="space-y-10 md:space-y-12"
          >
            {/* Company Meta */}
            <div className="max-w-3xl">
              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                {exp.role}
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                <span className="font-medium text-slate-800">
                  {exp.company}
                </span>{" "}
                · {exp.duration} · {exp.location}
              </p>
              <p className="mt-4 text-slate-700">{exp.summary}</p>
            </div>

            {/* Systems Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
              {exp.systems.map((sys) => (
                <motion.div
                  key={sys.title}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="relative rounded-2xl bg-white/70 backdrop-blur-md p-5 sm:p-6 md:p-7 shadow-sm"
                >
                  {/* Accent */}
                  <span className="absolute left-0 top-5 bottom-5 w-0.5 bg-gradient-to-b from-teal-500 to-blue-500 rounded-full" />

                  <h4 className="text-base sm:text-lg font-semibold text-slate-900 mb-3">
                    <span className="text-teal-600">
                      {sys.title.split(" ")[0]}
                    </span>{" "}
                    {sys.title.split(" ").slice(1).join(" ")}
                  </h4>

                  <p className="text-sm text-slate-700 leading-relaxed mb-4">
                    {sys.description}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {sys.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs bg-slate-50 px-2.5 py-1 rounded-md text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Impact */}
                  <p className="text-sm border-l-2 border-teal-500 pl-3">
                    <span className="font-medium text-slate-900">Impact:</span>{" "}
                    <span className="text-slate-600">{sys.impact}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
