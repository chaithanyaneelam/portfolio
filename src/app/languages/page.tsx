"use client";
import { motion } from "framer-motion";

const langs = ["English", "Telugu", "Tamil", "Hindi"];

export default function Languages() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Languages</h2>
      <div className="flex gap-6 justify-center">
        {langs.map((lang, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg"
          >
            {lang}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
