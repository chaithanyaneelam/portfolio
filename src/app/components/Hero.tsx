// components/Hero.tsx
"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center">
      <div className="max-w-5xl px-6 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/6 text-sm glass">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 px-2 py-0.5 rounded">
                Designer + Developer
              </span>
              <span className="text-gray-300">Open to remote work</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              I’m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Your Name
              </span>{" "}
              — crafting delightful web experiences.
            </h1>

            <p className="text-gray-300 max-w-xl">
              Modern UI, optimized performance, delightful animations. I build
              web apps and dashboards for retail businesses and startups —
              simple to use and beautiful by design.
            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="btn-neon px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 font-semibold shadow-lg hover:scale-105 transition"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="px-5 py-3 rounded-lg bg-white/6 border border-white/6 hover:bg-white/8 transition"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center"
          >
            <div className="w-72 h-72 rounded-2xl glass p-6 flex flex-col justify-center items-start animate-float shadow-2xl border border-white/6">
              <h3 className="text-xl font-bold mb-2">Featured Project</h3>
              <p className="text-sm text-gray-300">
                Retail Dashboard — inventory, sales, and analytics with
                lightning-quick interactions.
              </p>
              <div className="mt-4 inline-flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/6">React</span>
                <span className="px-3 py-1 rounded-full bg-white/6">
                  Tailwind
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
