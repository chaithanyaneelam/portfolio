// components/Projects.tsx
"use client";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Retail Dashboard",
    desc: "Inventory + sales analytics",
    tech: ["React", "Tailwind"],
    link: "#",
  },
  {
    id: 2,
    title: "POS App",
    desc: "Fast mobile-first POS",
    tech: ["Next", "RTK"],
    link: "#",
  },
  {
    id: 3,
    title: "E-commerce UI",
    desc: "Design system + components",
    tech: ["React", "Storybook"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-8"
        >
          Projects
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {projects.map((p, i) => (
            <motion.article
              key={p.id}
              whileHover={{ scale: 1.03, translateY: -6 }}
              className="glass p-5 rounded-2xl border border-white/6 shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2 text-purple-300">
                {p.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{p.desc}</p>
              <div className="flex gap-2 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-white/6 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/90"
              >
                View Project →
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
