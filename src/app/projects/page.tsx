"use client";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Retail Shop Management System",
    desc: "A full-stack system with authentication, product management, and sales tracking.",
  },
  {
    title: "Travel Planning Platform",
    desc: "Trip selection, budgeting, weather integration, and maps with Leaflet.",
  },
  {
    title: "Task Management System",
    desc: "Team and solo task manager with assignment, deadlines, and reminders.",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="relative border-l-4 border-yellow-500 pl-6 space-y-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold text-yellow-500">{p.title}</h3>
            <p className="text-gray-600 dark:text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
