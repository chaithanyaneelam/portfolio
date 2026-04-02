"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Retail Core Services",
    desc: "Scalable backend architecture using Node.js, TypeScript, PostgreSQL. Strict Controller-Service-Repository pattern, secured with Zod & Argon2 + JWT.",
  },
  {
    title: "Nexus Upskill",
    desc: "Full-stack SaaS platform using Node.js, TypeScript, MongoDB. High-performance Vanilla JS frontend with RBAC.",
  },
  {
    title: "Retail Shop Management System",
    desc: "A full-stack system with authentication, product management, and sales tracking.",
  },
  {
    title: "Travel Planning Platform",
    desc: "Trip selection, budgeting, weather integration, and maps with Leaflet.",
  },
  {
    title: "URL Shortener",
    desc: "A simple and fast URL shortener for quick sharing.",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-lg flex flex-col hover:shadow-purple-500/20 transition-all"
          >
            <h3 className="text-xl font-bold text-yellow-500 mb-3">
              {p.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 flex-grow">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
