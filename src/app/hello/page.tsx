"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

export default function PortfolioPage() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Animated Cursor
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen font-sans relative overflow-x-hidden">
      {/* Animated Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-purple-500/40 pointer-events-none z-50"
        animate={{ x: cursorPos.x - 16, y: cursorPos.y - 16 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed w-full bg-black/50 backdrop-blur-md py-5 px-10 flex justify-between items-center z-40"
      >
        <h1 className="text-2xl font-bold tracking-wide">🚀 Chaithanya</h1>
        <div className="flex space-x-8 text-lg">
          <a href="#about" className="hover:text-purple-400 transition">
            About
          </a>
          <a href="#education" className="hover:text-purple-400 transition">
            Education
          </a>
          <a href="#projects" className="hover:text-purple-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-purple-400 transition">
            Contact
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
        >
          Hi, I’m Chaithanya 👋
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="text-lg md:text-2xl text-gray-300 max-w-2xl"
        >
          A passionate <span className="text-purple-400">Web Developer</span>{" "}
          crafting modern, responsive, and animated experiences that stand out.
        </motion.p>
      </section>

      {/* About Section */}
      <motion.section
        id="about"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-10 text-purple-400"
        >
          About Me
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          I am a developer who loves building interactive web applications with
          beautiful UI, smooth animations, and efficient functionality.
        </motion.p>
      </motion.section>

      {/* Education */}
      <motion.section
        id="education"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-10 text-green-400 text-center"
        >
          🎓 Education
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-semibold">Bachelor’s Degree</h3>
          <p className="text-gray-400">Computer Science (2020 - 2024)</p>
        </motion.div>
      </motion.section>

      {/* Certifications */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-10 text-pink-400 text-center"
        >
          🏆 Certifications
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold">
            Oracle Certified SQL Developer
          </h3>
          <p className="text-gray-400">Issued by Oracle</p>
        </motion.div>
      </motion.section>

      {/* Projects with Timeline */}
      <motion.section
        id="projects"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-10 text-blue-400 text-center"
        >
          💻 Projects
        </motion.h2>
        <div className="relative max-w-3xl mx-auto">
          {/* Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-purple-600 h-full"></div>
          {/* Project Items */}
          {[
            {
              title: "Retail Shop Management System",
              desc: "Built with Next.js, Node.js, and MySQL. Includes authentication, products, and dashboard.",
            },
            {
              title: "Travel Planner",
              desc: "Web app with trip selection, mapping routes, and weather integration using APIs.",
            },
            {
              title: "Task Manager",
              desc: "Responsive task manager with animations, deadlines, and reminders.",
            },
          ].map((project, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className={`relative mb-12 w-1/2 ${
                i % 2 === 0 ? "ml-auto pl-8" : "mr-auto pr-8 text-right"
              }`}
            >
              <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
              </div>
              <div className="absolute top-4 w-6 h-6 bg-purple-500 rounded-full left-[-14px] right-[-14px] mx-auto"></div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact */}
      <motion.section
        id="contact"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 md:px-20 text-center"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-4xl font-bold mb-10 text-yellow-400"
        >
          📬 Contact
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="text-gray-300 mb-6 max-w-xl mx-auto"
        >
          Let’s connect! You can reach me via email or LinkedIn.
        </motion.p>
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href="mailto:chaithanya@example.com"
          className="bg-purple-600 px-6 py-3 rounded-lg shadow-lg hover:bg-purple-500 transition text-lg font-semibold"
        >
          ✉ Email Me
        </motion.a>
      </motion.section>
    </div>
  );
}
