"use client";

import { Mail, Linkedin, Github, GithubIcon } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative px-4 sm:px-6 md:px-10 py-24 bg-gradient-to-b from-white via-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl space-y-6">
          {/* Label */}
          <p className="text-lg font-medium text-teal-600">Contact</p>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Let’s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500">
              connect
            </span>
          </h2>

          {/* Description */}
          <p className="text-lg text-slate-600">
            Whether it’s about work, a project, or just a quick discussion, I’m
            always open to a conversation.
          </p>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4">
           
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/manas-kapoor-51b5a7215/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         px-4 py-2 rounded-md
                         text-sm font-medium text-slate-700
                         border border-slate-300
                         hover:border-teal-500 hover:text-teal-600
                         transition"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/ManasKapoor07"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2
                         px-4 py-2 rounded-md
                         text-sm font-medium text-slate-700
                         border border-slate-300
                         hover:border-teal-500 hover:text-teal-600
                         transition"
            >
              <GithubIcon size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
