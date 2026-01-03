"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="max-w-6xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-lg border dark:bg-gray-800"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-lg border dark:bg-gray-800"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 rounded-lg border dark:bg-gray-800"
        ></textarea>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-yellow-500 text-black rounded-lg shadow-lg font-semibold"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}
