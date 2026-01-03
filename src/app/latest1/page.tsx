"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  useEffect(() => {
    const links = document.querySelectorAll("nav a");
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.replace("#", "");
        const target = document.getElementById(targetId!);
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 min-h-screen text-gray-800">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/70 shadow-md z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-3">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl font-bold text-purple-600"
          >
            MyPortfolio
          </motion.h1>
          <div className="space-x-6">
            {["home", "about", "projects", "skills", "contact"].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                whileHover={{ scale: 1.1 }}
                className="text-gray-700 hover:text-purple-600 font-medium transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </motion.a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sections */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-purple-700"
        >
          Hi, I’m Chaithanya 👋
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg text-gray-600 max-w-xl"
        >
          A passionate Frontend Developer crafting modern, interactive, and
          visually stunning websites.
        </motion.p>
      </section>

      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center px-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-purple-700 mb-4"
        >
          About Me
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg text-gray-700 max-w-2xl text-center"
        >
          I’m a developer who loves building intuitive user interfaces with
          React, Next.js, and TailwindCSS. I focus on performance, design, and
          user-friendly experiences.
        </motion.p>
      </section>

      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-purple-700 mb-8"
        >
          Projects
        </motion.h3>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
          {["Retail Shop Management", "Travel Planner", "Task Manager"].map(
            (project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="p-6 rounded-xl shadow-lg bg-white hover:shadow-2xl transition"
              >
                <h4 className="text-xl font-bold text-purple-600 mb-2">
                  {project}
                </h4>
                <p className="text-gray-600">
                  A detailed description about {project} project goes here.
                </p>
              </motion.div>
            )
          )}
        </div>
      </section>

      <section
        id="skills"
        className="min-h-screen flex flex-col justify-center items-center px-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-purple-700 mb-8"
        >
          Tech Stack
        </motion.h3>
        <div className="flex flex-wrap gap-6 justify-center">
          {["HTML", "CSS", "JavaScript", "React", "Next.js", "TailwindCSS"].map(
            (skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-200 to-pink-200 shadow-md font-medium text-gray-800"
              >
                {skill}
              </motion.div>
            )
          )}
        </div>
      </section>

      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl font-semibold text-purple-700 mb-4"
        >
          Contact Me
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg text-gray-700 max-w-xl mb-6"
        >
          Let’s collaborate and build something amazing together. Feel free to
          reach out!
        </motion.p>
        <motion.a
          href="mailto:chaithanya7889@gmail.com"
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          Say Hello
        </motion.a>
      </section>

      <footer className="py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Chaithanya | All Rights Reserved
      </footer>
    </div>
  );
}
