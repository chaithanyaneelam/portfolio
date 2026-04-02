// // very well

// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import { motion } from "framer-motion";

// // Anime character component with tilt effect
// const IMAGE_SRC = "/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png";

// const AnimeCharacter = ({ size = 300 }) => {
//   const [tilt, setTilt] = useState({ x: 0, y: 0 });
//   const ref = useRef(null);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const x = (e.clientX / innerWidth) * 2 - 1;
//       const y = (e.clientY / innerHeight) * 2 - 1;
//       const maxTilt = 25;
//       setTilt({ x: x * maxTilt, y: -y * maxTilt });
//     };
//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.img
//       ref={ref}
//       src={IMAGE_SRC}
//       alt="Anime Character"
//       style={{
//         width: size,
//         height: "auto",
//         marginBottom: "2rem",
//         pointerEvents: "none",
//       }}
//       animate={{ rotateX: tilt.y, rotateY: tilt.x }}
//       transition={{ type: "spring", stiffness: 100, damping: 15 }}
//     />
//   );
// };

// // Sidebar sections
// const sections = [
//   { id: "home", label: "🏠 Home" },
//   { id: "about", label: "🙋 About" },
//   { id: "projects", label: "📂 Projects" },
//   { id: "skills", label: "🛠 Skills" },
//   { id: "education", label: "🎓 Education" },
//   { id: "languages", label: "🌍 Languages" },
//   { id: "contact", label: "📞 Contact" },
// ];

// export default function Portfolio() {
//   return (
//     <div className="w-full bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white font-sans relative flex">
//       {/* 📌 Sidebar */}
//       <aside className="fixed top-0 left-0 h-full w-48 bg-black/50 backdrop-blur-lg border-r border-gray-800 flex flex-col items-center py-10 space-y-8 z-50">
//         <motion.h1
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="text-xl font-bold text-purple-400"
//         ></motion.h1>
//         <ul className="flex flex-col space-y-6 text-sm md:text-base font-medium text-gray-300">
//           {sections.map((section) => (
//             <motion.li
//               key={section.id}
//               whileHover={{ scale: 1.15, color: "#a78bfa", x: 5 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               <a
//                 href={`#${section.id}`}
//                 className="hover:text-purple-400 transition flex items-center gap-2"
//               >
//                 {section.label}
//               </a>
//             </motion.li>
//           ))}
//         </ul>
//       </aside>

//       {/* 📄 Content shifted to right */}
//       <main className="ml-48 w-full">
//         {/* 🏠 Home Section */}
//         <section
//           id="home"
//           className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
//         >
//           {/* Floating glowing bubbles */}
//           <div className="absolute inset-0 overflow-hidden">
//             {[...Array(20)].map((_, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
//                 initial={{
//                   y: "100vh",
//                   x: Math.random() * window.innerWidth,
//                   scale: Math.random() * 0.8 + 0.4,
//                 }}
//                 animate={{ y: -100 }}
//                 transition={{
//                   duration: Math.random() * 10 + 8,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//                 style={{ left: `${Math.random() * 100}%` }}
//               />
//             ))}
//           </div>

//           {/* Anime Character ABOVE the name */}
//           <AnimeCharacter size={280} />

//           <motion.h1
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1 }}
//             className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center leading-tight z-10"
//           >
//             Hi, I’m{" "}
//             <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
//               Chaithanya
//             </span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//             className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10"
//           >
//             Full Stack Developer
//           </motion.p>
//         </section>

//         {/* 👨‍💻 About Section */}
//         <section
//           id="about"
//           className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
//         >
//           <motion.h2 className="text-6xl font-bold mb-6 text-purple-400">
//             About Me
//           </motion.h2>
//           <motion.p className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed">
//             I am a passionate{" "}
//             <span className="text-purple-400">Full Stack Developer</span>{" "}
//             skilled in{" "}
//             <span className="text-pink-400">
//               React.js, Next.js, Node.js, Express.js
//             </span>{" "}
//             and <span className="text-blue-400">MySQL, Python</span>. I love
//             creating scalable apps and modern UIs.
//           </motion.p>
//         </section>

//         {/* 📂 Projects */}
//         <section
//           id="projects"
//           className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 relative"
//         >
//           <motion.h2 className="text-5xl font-bold mb-16 text-purple-400">
//             My Projects
//           </motion.h2>
//           <div className="relative w-full max-w-3xl">
//             <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-dotted border-purple-500"></div>
//             <div className="flex flex-col gap-16">
//               {[
//                 {
//                   title: "Retail Shop Management",
//                   link: "https://retail-shop-management-kbx5.vercel.app/login",
//                   repo: "https://github.com/chatithanya66/retail-shop-management",
//                   desc: "A shop management system with authentication, inventory tracking, and sales reports.",
//                 },
//                 {
//                   title: "Travel Planning Platform",
//                   link: "https://routaviva.onrender.com/modules/signup/signup.html",
//                   repo: "https://github.com/chatithanya66/routaviva",
//                   desc: "A web app for trip planning, routing, budget management, and weather integration.",
//                 },
//                 {
//                   title: "URL Shortener",
//                   link: "https://shorturl-826q.onrender.com/",
//                   repo: "https://github.com/chatithanya66/url-shortener",
//                   desc: "A simple and fast URL shortener for quick sharing.",
//                 },
//               ].map((project, idx) => (
//                 <motion.div
//                   key={idx}
//                   initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.8 }}
//                   className={`relative w-5/6 md:w-2/3 bg-gray-900 border border-gray-700 rounded-2xl shadow-lg p-6 ${
//                     idx % 2 === 0 ? "ml-auto" : "mr-auto"
//                   }`}
//                 >
//                   <h3 className="text-2xl font-bold text-purple-300">
//                     {project.title}
//                   </h3>
//                   <p className="text-gray-400 mt-2">{project.desc}</p>
//                   <div className="flex gap-4 mt-4">
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//                     >
//                       View Project
//                     </a>
//                     <a
//                       href={project.repo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-gray-800 text-purple-300 border border-purple-500 rounded-lg hover:bg-gray-700 transition"
//                     >
//                       View Code
//                     </a>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* 🛠 Skills */}
//         <section
//           id="skills"
//           className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//         >
//           <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//             Tech Stack
//           </motion.h2>
//           <div className="flex flex-wrap gap-6 justify-center max-w-3xl">
//             {[
//               "HTML",
//               "CSS",
//               "JavaScript",
//               "React.js",
//               "Next.js",
//               "Node.js",
//               "Express.js",
//               "MySQL",
//               "Tailwind CSS",
//               "Python",
//             ].map((skill) => (
//               <motion.span
//                 key={skill}
//                 whileHover={{
//                   scale: 1.2,
//                   backgroundColor: "#6d28d9",
//                   color: "#fff",
//                 }}
//                 className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
//               >
//                 {skill}
//               </motion.span>
//             ))}
//           </div>
//         </section>

//         {/* 🎓 Education */}
//         <section
//           id="education"
//           className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//         >
//           <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//             Education
//           </motion.h2>
//           <div className="flex flex-col gap-6 text-center">
//             <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
//               <h3 className="text-2xl font-bold text-purple-300">
//                 B.Tech - Saveetha School of Engineering
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 Computer Science & Engineering | 2023 - 2027
//               </p>
//               <p className="text-gray-500">Current Percentage: 85%</p>
//             </motion.div>
//             <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
//               <h3 className="text-2xl font-bold text-purple-300">
//                 Intermediate - Sri Chaitanya Jr. College
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 MPC (Maths, Physics, Chemistry)
//               </p>
//               <p className="text-gray-500">2021 - 2023 | Percentage: 90%</p>
//             </motion.div>
//             <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
//               <h3 className="text-2xl font-bold text-purple-300">
//                 School - Vedvyasa Vidyanikethan
//               </h3>
//               <p className="text-gray-400 mt-2">Secondary School Certificate</p>
//               <p className="text-gray-500">2020 - 2021 | CGPA: 10</p>
//             </motion.div>
//           </div>
//         </section>

//         {/* 🌍 Languages */}
//         <section
//           id="languages"
//           className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
//         >
//           <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//             Languages I Speak
//           </motion.h2>
//           <div className="flex flex-wrap gap-6 text-lg">
//             {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
//               <motion.span
//                 key={lang}
//                 className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
//               >
//                 {lang}
//               </motion.span>
//             ))}
//           </div>
//         </section>

//         {/* 📞 Contact */}
//         <section
//           id="contact"
//           className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
//         >
//           <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
//             Contact Me
//           </motion.h2>
//           <form
//             className="flex flex-col gap-4 w-full max-w-md"
//             action="mailto:neelamchaithanya6@gmail.com"
//             method="post"
//             encType="text/plain"
//           >
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               rows={4}
//               className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
//             />
//             <motion.button
//               whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
//             >
//               Send Message
//             </motion.button>
//           </form>

//           {/* Social Links */}
//           <div className="flex gap-6 mt-10">
//             <a
//               href="https://github.com/chatithanya66"
//               target="_blank"
//               className="text-gray-400 hover:text-purple-400 transition text-xl"
//             >
//               GitHub
//             </a>
//             <a
//               href="https://linkedin.com/in/chatithanya66"
//               target="_blank"
//               className="text-gray-400 hover:text-purple-400 transition text-xl"
//             >
//               LinkedIn
//             </a>
//           </div>

//           {/* ✅ Footer Email */}
//           <p className="mt-8 text-gray-400 text-sm">
//             📧 Email:{" "}
//             <a
//               href="mailto:neelamchaithanya6@gmail.com"
//               className="text-purple-400 hover:underline"
//             >
//               neelamchaithanya6@gmail.com
//             </a>
//           </p>
//         </section>
//       </main>
//     </div>
//   );
// }

"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // ✅ icons

// Anime character component
const IMAGE_SRC = "/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png";

const AnimeCharacter = ({ size = 280 }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      const maxTilt = 25;
      setTilt({ x: x * maxTilt, y: -y * maxTilt });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.img
      ref={ref}
      src={IMAGE_SRC}
      alt="Anime Character"
      style={{
        width: size,
        height: "auto",
        marginBottom: "2rem",
        pointerEvents: "none",
      }}
      animate={{ rotateX: tilt.y, rotateY: tilt.x }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
    />
  );
};

// Sidebar sections
const sections = [
  { id: "home", label: "🏠 Home" },
  { id: "about", label: "🙋 About" },
  { id: "projects", label: "📂 Projects" },
  { id: "skills", label: "🛠 Skills" },
  { id: "education", label: "🎓 Education" },
  { id: "languages", label: "🌍 Languages" },
  { id: "contact", label: "📞 Contact" },
];

export default function Portfolio() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [bubbles, setBubbles] = useState<
    { scale: number; duration: number; left: string }[]
  >([]);

  useEffect(() => {
    setBubbles(
      [...Array(20)].map(() => ({
        scale: Math.random() * 0.8 + 0.4,
        duration: Math.random() * 10 + 8,
        left: `${Math.random() * 100}%`,
      })),
    );
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white relative">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: "-100%" }}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
        className="fixed top-0 left-0 h-full w-64 bg-black/80 backdrop-blur-xl border-r border-gray-800 z-50 shadow-2xl"
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-800">
          <h2 className="text-lg font-bold text-purple-400">Chaithu 🚀</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="text-gray-400 hover:text-white transition" />
          </button>
        </div>
        <nav className="p-6 space-y-4">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setIsSidebarOpen(false)}
              className="block px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
            >
              {s.label}
            </a>
          ))}
        </nav>
      </motion.aside>

      {/* Sidebar toggle button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-40 p-2 rounded-xl bg-gray-900/80 hover:bg-gray-800 transition border border-gray-700"
      >
        <Menu className="text-white" />
      </button>

      {/* Main content */}
      <main className="flex-1 w-full">
        {/* 🏠 Home */}
        <section
          id="home"
          className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
        >
          {/* Bubble background */}
          <div className="absolute inset-0 overflow-hidden">
            {bubbles.map((bubble, i) => (
              <motion.div
                key={i}
                className="absolute w-6 h-6 bg-purple-500 rounded-full opacity-20 blur-xl"
                initial={{
                  y: "100vh",
                  scale: bubble.scale,
                }}
                animate={{ y: -100 }}
                transition={{
                  duration: bubble.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ left: bubble.left }}
              />
            ))}
          </div>

          {/* Anime + Name */}
          <AnimeCharacter />
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-center z-10"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Chaithanya
            </span>
          </motion.h1>
          <p className="mt-6 text-2xl md:text-3xl text-gray-300 font-medium z-10">
            Full Stack Developer
          </p>
        </section>
        {/* 👨‍💻 About */}
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black"
        >
          <motion.h2 className="text-6xl font-bold mb-6 text-purple-400">
            About Me
          </motion.h2>
          <motion.p className="text-2xl text-gray-300 max-w-2xl text-center leading-relaxed">
            I am a passionate{" "}
            <span className="text-purple-400">Full Stack Developer</span>{" "}
            skilled in{" "}
            <span className="text-pink-400">
              React.js, Next.js, Node.js, Express.js
            </span>{" "}
            and <span className="text-blue-400">MySQL, Python</span>. I love
            creating scalable apps and modern UIs.
          </motion.p>
        </section>
        {/* 📂 Projects */}
        <section
          id="projects"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800 py-20 px-4"
        >
          <h2 className="text-5xl font-bold mb-16 text-purple-400">
            My Projects
          </h2>
          <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Retail Core Services",
                link: "https://github.com/chaithanyaneelam/retail-core-service",
                repo: "https://github.com/chaithanyaneelam/retail-core-service",
                desc: "Scalable backend architecture using Node.js, TypeScript, PostgreSQL. Strict Controller-Service-Repository pattern, secured with Zod & Argon2 + JWT. complex inventory modules using PostGIS. (Currently Building)",
              },
              {
                title: "Nexus Upskill",
                link: "https://nexskill.vercel.app",
                repo: "https://github.com/chaithanyaneelam/Nexus-Platform/tree/main/nexus-upskill",
                desc: "Full-stack SaaS platform using Node.js, TypeScript, MongoDB. High-performance Vanilla JS frontend with RBAC. Architected Google API 'Media Bridge' to automate classroom scheduling.",
              },
              {
                title: "Retail Shop Management",
                link: "https://drive.google.com/file/d/13ndqBHiiRqYeVWDkiNRJp3G5dkAm8rHU/view",
                repo: "https://github.com/chaithanyaneelam/retail-shop-management",
                desc: "A shop system with authentication, inventory tracking, and sales reports.",
              },
              {
                title: "Travel Planning Platform",
                link: "https://drive.google.com/file/d/19Df_rnYDCmKzNCHA_3iY8WqC65iGydsT/view",
                repo: "https://github.com/chaithanyaneelam/routaviva",
                desc: "Trip planning app with routing, budget management, and weather integration.",
              },
              {
                title: "URL Shortener",
                link: "https://shorturl-826q.onrender.com/",
                repo: "https://github.com/chaithanyaneelam/url-shortener",
                desc: "A simple and fast URL shortener for quick sharing.",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-900 border border-gray-700 rounded-2xl shadow-lg flex flex-col p-6 hover:shadow-purple-500/20 hover:border-purple-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold text-purple-300">
                  {p.title}
                </h3>
                <p className="text-gray-400 mt-3 flex-grow">{p.desc}</p>
                <div className="flex gap-4 mt-6">
                  <a
                    href={p.link}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 font-medium transition"
                  >
                    View Project
                  </a>
                  <a
                    href={p.repo}
                    target="_blank"
                    className="flex-1 text-center px-4 py-2 bg-gray-800 border border-purple-500 text-purple-300 rounded-lg hover:bg-gray-700 font-medium transition"
                  >
                    View Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        {/* 🛠 Skills */}
        <section
          id="skills"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black py-20 px-8"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Tech Stack
          </motion.h2>
          <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Express.js",
              "PostgreSQL",
              "MySQL",
              "MongoDB",
              "Tailwind CSS",
              "Python",
              "Zod",
              "Argon2",
              "JWT",
              "PostGIS",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#6d28d9",
                  color: "#fff",
                }}
                className="px-6 py-3 bg-gray-800 text-purple-300 font-medium rounded-xl shadow border border-gray-700"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </section>
        {/* 🎓 Education */}
        <section
          id="education"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Education
          </motion.h2>
          <div className="flex flex-col gap-6 text-center">
            <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-300">
                B.Tech - Saveetha School of Engineering
              </h3>
              <p className="text-gray-400 mt-2">
                Computer Science & Engineering | 2023 - 2027
              </p>
              <p className="text-gray-500">Current Percentage: 85%</p>
            </motion.div>
            <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-300">
                Intermediate - Sri Chaitanya Jr. College
              </h3>
              <p className="text-gray-400 mt-2">
                MPC (Maths, Physics, Chemistry)
              </p>
              <p className="text-gray-500">2021 - 2023 | Percentage: 90%</p>
            </motion.div>
            <motion.div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg">
              <h3 className="text-2xl font-bold text-purple-300">
                School - Vedvyasa Vidyanikethan
              </h3>
              <p className="text-gray-400 mt-2">Secondary School Certificate</p>
              <p className="text-gray-500">2020 - 2021 | CGPA: 10</p>
            </motion.div>
          </div>
        </section>
        {/* 🌍 Languages */}
        <section
          id="languages"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black to-gray-800"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Languages I Speak
          </motion.h2>
          <div className="flex flex-wrap gap-6 text-lg">
            {["Telugu", "English", "Tamil", "Hindi"].map((lang) => (
              <motion.span
                key={lang}
                className="px-6 py-3 bg-gray-900 text-purple-300 rounded-xl shadow border border-gray-700"
              >
                {lang}
              </motion.span>
            ))}
          </div>
        </section>
        {/* 📞 Contact */}
        <section
          id="contact"
          className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-900 to-black"
        >
          <motion.h2 className="text-5xl font-bold mb-8 text-purple-400">
            Contact Me
          </motion.h2>
          <form
            className="flex flex-col gap-4 w-full max-w-md"
            action="mailto:neelamchaithanya6@gmail.com"
            method="post"
            encType="text/plain"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="p-3 border border-gray-700 bg-gray-900 text-white rounded-lg"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#a855f7" }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white py-3 rounded-lg shadow hover:bg-purple-700 transition"
            >
              Send Message
            </motion.button>
          </form>

          {/* Social Links */}
          <div className="flex gap-6 mt-10">
            <a
              href="https://github.com/chaithanyaneelam"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition text-xl"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/chaithanyaneelam"
              target="_blank"
              className="text-gray-400 hover:text-purple-400 transition text-xl"
            >
              LinkedIn
            </a>
          </div>

          {/* ✅ Footer Email */}
          <p className="mt-8 text-gray-400 text-sm">
            📧 Email:{" "}
            <a
              href="mailto:neelamchaithanya6@gmail.com"
              className="text-purple-400 hover:underline"
            >
              neelamchaithanya6@gmail.com
            </a>
          </p>
        </section>{" "}
      </main>
    </div>
  );
}
