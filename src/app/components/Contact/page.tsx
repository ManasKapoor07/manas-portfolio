"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  Terminal,
  ArrowUpRight,
} from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={20} />,
      link: "https://www.linkedin.com/in/manas-kapoor-51b5a7215/",
      label: "Connect professionally",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: <Github size={20} />,
      link: "https://github.com/ManasKapoor07",
      label: "View my repositories",
      color: "hover:text-slate-100",
    },
    // {
    //   name: "Email",
    //   icon: <Mail size={20} />,
    //   link: "mailto:kapoormanas00@gmail.com",
    //   label: "Send a direct message",
    //   color: "hover:text-emerald-400",
    // },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 bg-[#05070a] px-6 overflow-hidden"
    >
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Header & Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Terminal size={18} className="text-blue-500" />
                <span className="text-sm font-mono text-blue-500 uppercase tracking-[0.3em]">
                  Communication Hub
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                Let’s <span className="text-blue-500">Connect.</span>
              </h2>
            </div>

            <p className="text-xl text-slate-400 leading-relaxed max-w-md">
              Whether it’s a production-scale project, a freelance opportunity,
              or just a tech discussion, my inbox is always open.
            </p>

            {/* <div className="pt-4">
              <a
                href="mailto:kapoormanas00@gmail.com"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full font-bold overflow-hidden transition-all hover:bg-blue-700 active:scale-95"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Drop an Email <Send size={18} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div> */}
          </motion.div>

          {/* Right Side: Social Cards */}
          <div className="grid gap-4">
            {socialLinks.map((social, idx) => (
              <motion.a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.08] transition-all"
              >
                <div className="flex items-center gap-5">
                  <div
                    className={`p-4 rounded-xl bg-black/40 border border-white/10 text-slate-400 group-hover:border-blue-500/30 ${social.color} transition-all`}
                  >
                    {social.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                      {social.name}
                    </h4>
                    <p className="text-sm text-slate-500 font-mono italic">
                      {social.label}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Footer Minimalist Credit */}
        <div className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm font-mono tracking-tighter">
            © {new Date().getFullYear()} MANAS KAPOOR // SOFTWARE ENGINEER
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-[10px] font-mono text-emerald-500 uppercase tracking-widest animate-pulse">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              Available for opportunity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
