// components/Contact.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({ name: "", email: "", message: "" });

  const submit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // simulate or call your API
    try {
      // await axios.post('/api/contact', data);
      await new Promise((r) => setTimeout(r, 800));
      alert("Message sent — I'll get back to you!");
      setData({ name: "", email: "", message: "" });
    } catch (e) {
      alert("Oops. Try again.");
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="py-16">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-3xl font-bold mb-6"
        >
          Get in touch
        </motion.h2>
        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="glass p-6 rounded-2xl border border-white/6"
        >
          <label className="text-sm text-gray-300">Name</label>
          <input
            required
            value={data.name}
            onChange={(e) =>
              setData((prev) => ({ ...prev, name: e.target.value }))
            }
            className="w-full p-3 rounded-lg bg-transparent border border-white/6 mb-4"
          />
          <label className="text-sm text-gray-300">Email</label>
          <input
            required
            value={data.email}
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            className="w-full p-3 rounded-lg bg-transparent border border-white/6 mb-4"
          />
          <label className="text-sm text-gray-300">Message</label>
          <textarea
            required
            value={data.message}
            onChange={(e) =>
              setData((prev) => ({ ...prev, message: e.target.value }))
            }
            rows={5}
            className="w-full p-3 rounded-lg bg-transparent border border-white/6 mb-4"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-500 shadow-lg"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
