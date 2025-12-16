"use client";

const projects = [
  {
    title: "Used-Car Lead Management Platform",
    description:
      "A production website built for a real family-run car dealership, enabling users to submit car-selling requests with vehicle details and images.",
    highlights: [
      "Custom car-selling form capturing vehicle details and photos",
      "Backend API built to handle submissions and image uploads",
      "Leads delivered directly to business owners for follow-up",
      "Actively used in a real business environment",
    ],
    tech: ["React", "Tailwind CSS", "Node.js", "Express", "Image Uploads"],
    impact:
      "Digitized the lead intake process, replacing manual WhatsApp inquiries with structured submissions.",
    liveLink: "https://www.maabhawanicarbazar.com/",
  },
  {
    title: "Business Website for Sanitaryware Brand",
    status: "WIP",
    description:
      "A freelance client project for a sanitaryware and hardware business, focused on building a modern, responsive website aligned with real business requirements.",
    highlights: [
      "Freelance project built for a real business client",
      "Modern UI with structured sections and clear navigation",
      "Responsive layout optimized for desktop and mobile",
      "Iterative development based on client feedback",
    ],
    tech: ["React", "Next.js", "Tailwind CSS"],
    impact:
      "Demonstrates client-facing development, requirement understanding, and iterative UI delivery.",
    liveLink: "https://m-co-qj1f.vercel.app/",
  },
  {
    title: "AI Article Summarizer (GPT-4)",
    description:
      "A frontend-focused web application that generates concise, context-aware summaries of long-form articles using OpenAI’s GPT-4 API.",
    highlights: [
      "Async summarization using GPT-4 API",
      "Redux-based request lifecycle handling",
      "UI optimized for readability and fast feedback",
    ],
    tech: ["React", "Redux", "Tailwind CSS", "OpenAI API"],
    impact: "Reduced reading time for users consuming long-form content.",
    liveLink: "https://lighthearted-maamoul-73995f.netlify.app/",
  },
  {
    title: "Kanban-Style Task Manager",
    status: "WIP",
    description:
      "A feature-rich task management application focused on complex frontend state handling, interaction-heavy UI, and authenticated CRUD workflows.",
    highlights: [
      "Drag-and-drop task management with board and list layouts",
      "Firebase authentication with sign-in and sign-out flows",
      "Full CRUD operations with real-time UI updates",
      "File uploads attached to tasks",
    ],
    tech: [
      "React",
      "Firebase Auth",
      "Firestore",
      "Drag & Drop",
      "Tailwind CSS",
    ],
    impact:
      "Demonstrates handling of complex UI state, interactions, and authenticated workflows.",
    liveLink: "https://illustrious-kelpie-eea3b8.netlify.app/",
  },
  {
    title: "Interactive Weather Dashboard",
    description:
      "A responsive weather dashboard application that fetches and visualizes real-time and forecast weather data using a public weather API.",
    highlights: [
      "External weather API integration for live and forecast data",
      "Search-based city lookup with dynamic UI updates",
      "Dashboard-style layout with key weather metrics",
    ],
    tech: ["React", "Weather API", "Tailwind CSS"],
    impact:
      "Demonstrates real-world API integration and data-driven UI rendering.",
    liveLink: "https://tangerine-youtiao-d6677d.netlify.app/",
  },
  {
    title: "Brainwave UI Landing Page",
    description:
      "A visually polished, responsive landing page focused on layout structure, typography, spacing, and modern UI composition.",
    highlights: [
      "Component-based layout using Tailwind CSS",
      "Strong visual hierarchy and spacing system",
      "Fully responsive across screen sizes",
    ],
    tech: ["React", "Tailwind CSS"],
    impact:
      "Demonstrates frontend UI craftsmanship and attention to visual detail.",
    liveLink: "https://brainwave-page.netlify.app/",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white
                 px-4 sm:px-6 lg:px-10 py-10 sm:py-24 lg:py-2"
    >
      <div className="max-w-7xl mx-auto space-y-10 ">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-teal-600 mb-2">Projects</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Things I’ve{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              built
            </span>
          </h2>
          {/* <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600">
            A mix of production, freelance, and learning projects that showcase
            frontend depth, real-world integration, and system thinking.
          </p> */}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative rounded-2xl bg-white/70 backdrop-blur-md
                         p-5 sm:p-6 lg:p-7 shadow-sm
                         transition-transform duration-300 ease-out
                         hover:-translate-y-1"
            >
              {/* Accent */}
              <span
                className="absolute left-0 top-5 bottom-5 w-0.5
                               bg-gradient-to-b from-teal-500 to-blue-500 rounded-full"
              />

              {/* Title */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3
                    className="text-lg sm:text-xl font-semibold text-slate-900
                                 transition-colors group-hover:text-teal-600"
                  >
                    {project.title}
                  </h3>
                  {project.status === "WIP" && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full
                                     bg-slate-100 text-slate-600"
                    >
                      Work in progress
                    </span>
                  )}
                </div>

                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-500 hover:text-teal-600 transition
                               opacity-100 md:opacity-0 md:group-hover:opacity-100"
                  >
                    Live →
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-4 text-sm text-slate-600">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 rounded-full bg-slate-400" />
                    {h}
                  </li>
                ))}
              </ul>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs bg-slate-50 px-2.5 py-1 rounded-md
                               text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Impact */}
              <p className="text-sm border-l-2 border-teal-500 pl-3">
                <span className="font-medium text-slate-900">Impact:</span>{" "}
                <span className="text-slate-600">{project.impact}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
