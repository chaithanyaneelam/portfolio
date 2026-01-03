// components/Nav.tsx
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Sun, Moon, Menu } from "lucide-react";
import { motion } from "framer-motion";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    // init theme from localStorage or system
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", next);
  };

  return (
    <nav className="fixed top-6 left-6 right-6 z-40 flex items-center justify-between max-w-6xl mx-auto">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-gradient-to-br from-purple-700 to-pink-500 shadow-lg transform-gpu hover:scale-105 transition">
          <Link href="/" className="font-bold tracking-wide">
            YourName
          </Link>
        </div>
        <div className="hidden md:flex gap-4 ml-4">
          <Link href="#projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white/5 border border-white/6"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        <motion.button
          className="p-2 rounded-lg bg-white/5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          whileTap={{ scale: 0.95 }}
        >
          <Menu size={18} />
        </motion.button>
      </div>
    </nav>
  );
}
