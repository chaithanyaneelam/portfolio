"use client";
import { motion } from "framer-motion";

const stack = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "MySQL",
  "Python",
];

export default function TechStack() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {stack.map((tech, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg font-semibold"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
