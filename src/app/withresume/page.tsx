"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimeCharacter from "../components/AnimeCharacter";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
    <ul className="flex justify-center space-x-10 py-4 text-lg font-semibold text-gray-700">
      <li>
        <a href="#home" className="hover:text-blue-500 transition">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-blue-500 transition">
          About
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-blue-500 transition">
          Projects
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-blue-500 transition">
          Skills
        </a>
      </li>
      <li>
        <a href="#languages" className="hover:text-blue-500 transition">
          Languages
        </a>
      </li>
      <li>
        <a href="#resume" className="hover:text-blue-500 transition">
          Resume
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-blue-500 transition">
          Contact
        </a>
      </li>
    </ul>
  </nav>
);

const Section = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="h-screen flex flex-col justify-center items-center text-center px-8"
  >
    {children}
  </section>
);

export default function Portfolio() {
  const [text, setText] = useState("");
  const fullText = "Chaithanya Neelam";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 150);
    return () => clearInterval(typing);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-br from-blue-50 via-white to-purple-100 text-gray-900">
      <Navbar />

      {/* Home Section */}
      <Section id="home">
        <div className="relative w-full h-full flex items-center justify-center">
          <AnimeCharacter />
        </div>
      </Section>

      {/* About Section */}
      <Section id="about">
        <motion.h1
          className="text-5xl font-bold text-blue-600 mb-4"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          {text}
        </motion.h1>
        <motion.p
          className="text-2xl font-semibold text-gray-700"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          MERN Stack & Next.js Developer
        </motion.p>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <motion.h2
          className="text-4xl font-bold mb-6 text-purple-600"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          Projects
        </motion.h2>
        <p className="text-lg text-gray-600">
          🚀 Your projects will appear here with animations & showcase.
        </p>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <motion.h2
          className="text-4xl font-bold mb-6 text-green-600"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          Skills
        </motion.h2>
        <p className="text-lg text-gray-700 max-w-2xl">
          HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS, Node.js,
          Express.js, MySQL, Python
        </p>
      </Section>

      {/* Languages Section */}
      <Section id="languages">
        <motion.h2
          className="text-4xl font-bold mb-6 text-indigo-600"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          Languages
        </motion.h2>
        <p className="text-lg text-gray-700">
          Telugu • English • Tamil • Hindi
        </p>
      </Section>

      {/* Resume Section */}
      <Section id="resume">
        <motion.h2
          className="text-4xl font-bold mb-6 text-pink-600"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          My Resume
        </motion.h2>
        <a
          href="/resume.pdf"
          download
          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full shadow-lg hover:scale-105 transform transition"
        >
          📄 Download Resume
        </a>
      </Section>

      {/* Contact Section */}
      <Section id="contact">
        <motion.h2
          className="text-4xl font-bold mb-6 text-red-600"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
        >
          Contact
        </motion.h2>
        <p className="text-lg text-gray-700">📧 chaithanya7889@gmail.com</p>
      </Section>
    </div>
  );
}
