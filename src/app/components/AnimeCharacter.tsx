// // components/AnimeCharacter.tsx
// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import { motion, useMotionValue, useTransform } from "framer-motion";

// /**
//  * AnimeCharacter
//  * - Inline simplified SVG with headGroup and bodyGroup
//  * - Rotates head and body based on mouse position relative to bounding rect center
//  * - Props: size (px)
//  */
// export default function AnimeCharacter({ size = 380 }: { size?: number }) {
//   const wrapRef = useRef<HTMLDivElement | null>(null);
//   const [rect, setRect] = useState({ cx: 0, cy: 0 });

//   // motion values for smoother transform
//   const rotHead = useMotionValue(0);
//   const rotBody = useMotionValue(0);
//   const tilt = useTransform(rotHead, (v) => `${v}deg`);

//   useEffect(() => {
//     const el = wrapRef.current;
//     if (!el) return;
//     const r = el.getBoundingClientRect();
//     setRect({ cx: r.left + r.width / 2, cy: r.top + r.height / 2 });

//     const onMove = (e: MouseEvent) => {
//       const mx = e.clientX;
//       const my = e.clientY;
//       const dx = mx - (r.left + r.width / 2);
//       const dy = my - (r.top + r.height / 3); // offset to focus on upper part
//       // compute normalized angles
//       const angle = Math.atan2(dy, dx) * (180 / Math.PI); // -180..180
//       // head rotates more aggressively toward cursor, body less
//       const headAngle = Math.max(-18, Math.min(18, angle * 0.35));
//       const bodyAngle = Math.max(-8, Math.min(8, angle * 0.15));
//       // update with spring-like smoothing using set (framer-motion will smooth)
//       rotHead.set(headAngle);
//       rotBody.set(bodyAngle);
//     };

//     window.addEventListener("mousemove", onMove);
//     const onResize = () => {
//       const r2 = el.getBoundingClientRect();
//       setRect({ cx: r2.left + r2.width / 2, cy: r2.top + r2.height / 2 });
//     };
//     window.addEventListener("resize", onResize);

//     return () => {
//       window.removeEventListener("mousemove", onMove);
//       window.removeEventListener("resize", onResize);
//     };
//   }, [rotHead, rotBody]);

//   // subtle breathing animation for bobbing
//   const bob = {
//     animate: { y: [0, -6, 0] },
//     transition: { duration: 4, ease: "easeInOut", repeat: Infinity },
//   };

//   return (
//     <div
//       ref={wrapRef}
//       aria-hidden
//       className="pointer-events-none select-none relative w-full max-w-[420px] mx-auto"
//       style={{ height: size, width: size }}
//     >
//       <motion.div
//         className="absolute inset-0 flex items-center justify-center"
//         {...bob}
//       >
//         {/* Main SVG */}
//         <svg
//           viewBox="0 0 300 300"
//           width={size}
//           height={size}
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <defs>
//             <linearGradient id="hairGrad" x1="0" x2="1">
//               <stop offset="0" stopColor="#6d28d9" />
//               <stop offset="1" stopColor="#ec4899" />
//             </linearGradient>
//             <filter
//               id="softShadow"
//               x="-50%"
//               y="-50%"
//               width="200%"
//               height="200%"
//             >
//               <feDropShadow
//                 dx="0"
//                 dy="8"
//                 stdDeviation="14"
//                 floodOpacity="0.12"
//               />
//             </filter>
//           </defs>

//           {/* shadow under character */}
//           <ellipse
//             cx="150"
//             cy="260"
//             rx="70"
//             ry="12"
//             fill="rgba(2,6,23,0.08)"
//             filter="url(#softShadow)"
//           />

//           {/* torso group (rotates lightly) */}
//           <motion.g
//             style={{ rotate: rotBody }}
//             transform="translate(150,140)"
//             id="bodyGroup"
//           >
//             {/* body */}
//             <g transform="translate(-0,20)">
//               <rect
//                 x="-46"
//                 y="20"
//                 rx="20"
//                 width="92"
//                 height="110"
//                 fill="#fef3c7"
//                 opacity="0.12"
//               />
//               <rect
//                 x="-46"
//                 y="20"
//                 rx="18"
//                 width="92"
//                 height="110"
//                 fill="#ffffff"
//                 stroke="rgba(0,0,0,0.04)"
//                 strokeWidth="1"
//                 opacity="0.06"
//               />
//               {/* jacket */}
//               <path
//                 d="M-40 30 q40 30 80 0 v70 q-40 30 -80 0z"
//                 fill="url(#hairGrad)"
//                 opacity="0.95"
//               />
//             </g>

//             {/* left arm */}
//             <motion.g transform="translate(-46,60)">
//               <rect
//                 x="-10"
//                 y="0"
//                 width="12"
//                 height="54"
//                 rx="6"
//                 fill="#ffd9d9"
//               />
//             </motion.g>

//             {/* right arm */}
//             <motion.g transform="translate(46,60)">
//               <rect x="-2" y="0" width="12" height="54" rx="6" fill="#ffd9d9" />
//             </motion.g>
//           </motion.g>

//           {/* head group (rotates more) */}
//           <motion.g
//             id="headGroup"
//             style={{ rotate: rotHead }}
//             transform="translate(150,80)"
//           >
//             {/* hair back */}
//             <path
//               d="M-60 0 q40 -70 120 0 q-40 40 -120 0z"
//               fill="url(#hairGrad)"
//               stroke="rgba(0,0,0,0.02)"
//             />
//             {/* face */}
//             <g transform="translate(0,10)">
//               <ellipse
//                 cx="0"
//                 cy="18"
//                 rx="44"
//                 ry="46"
//                 fill="#fff6e6"
//                 stroke="rgba(0,0,0,0.03)"
//               />
//               {/* eyes */}
//               <g transform="translate(-12,6)">
//                 <ellipse
//                   cx="0"
//                   cy="2"
//                   rx="6"
//                   ry="4"
//                   fill="#1f2937"
//                   opacity="0.9"
//                 />
//               </g>
//               <g transform="translate(12,6)">
//                 <ellipse
//                   cx="0"
//                   cy="2"
//                   rx="6"
//                   ry="4"
//                   fill="#1f2937"
//                   opacity="0.9"
//                 />
//               </g>

//               {/* mouth */}
//               <path
//                 d="M-8 28 q8 8 16 0"
//                 stroke="#a16207"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeLinecap="round"
//               />

//               {/* small blush */}
//               <ellipse
//                 cx="-20"
//                 cy="22"
//                 rx="4"
//                 ry="2.5"
//                 fill="#fecaca"
//                 opacity="0.6"
//               />
//               <ellipse
//                 cx="20"
//                 cy="22"
//                 rx="4"
//                 ry="2.5"
//                 fill="#fecaca"
//                 opacity="0.6"
//               />
//             </g>

//             {/* hair front */}
//             <path
//               d="M-48 -8 q36 -30 96 0 q-36 -18 -96 0z"
//               fill="url(#hairGrad)"
//               opacity="0.95"
//             />
//           </motion.g>
//         </svg>
//       </motion.div>
//     </div>
//   );
// }

// "use client";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";

// export default function AnimeCharacter() {
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       const { innerWidth, innerHeight } = window;
//       const x = (e.clientX / innerWidth - 0.5) * 30; // left-right
//       const y = (e.clientY / innerHeight - 0.5) * 20; // up-down
//       setRotation({ x, y });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <motion.div
//       className="flex items-center justify-center w-full h-screen absolute top-0 left-0 z-10"
//       style={{ perspective: 1000 }}
//     >
//       <motion.div
//         animate={{ rotateY: rotation.x, rotateX: -rotation.y }}
//         transition={{ type: "spring", stiffness: 50, damping: 10 }}
//         className="w-[300px] h-[400px] md:w-[420px] md:h-[520px] lg:w-[500px] lg:h-[600px] flex items-center justify-center"
//       >
//         <Image
//           src="/Roronoa_Zoro__One_Piece_-removebg-preview.png" // place your Zoro image inside public/zoro.png
//           alt=""
//           width={380}
//           height={100}
//           priority
//           className="object-contain drop-shadow-2xl"
//         />
//       </motion.div>
//     </motion.div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function AnimeCharacter() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 60; // rotation X → stronger
      const y = (e.clientY / innerHeight - 0.5) * 40; // rotation Y → stronger

      const offsetX = (e.clientX / innerWidth - 0.5) * 40; // move left/right
      const offsetY = (e.clientY / innerHeight - 0.5) * 30; // move up/down

      setRotation({ x, y });
      setOffset({ x: offsetX, y: offsetY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="flex items-center justify-center w-full h-screen absolute top-0 left-0 z-10"
      style={{ perspective: 1200 }}
    >
      <motion.div
        animate={{
          rotateY: rotation.x,
          rotateX: -rotation.y,
          x: offset.x,
          y: offset.y,
        }}
        transition={{ type: "spring", stiffness: 60, damping: 12 }}
        className="w-[340px] h-[460px] md:w-[460px] md:h-[600px] flex items-center justify-center"
      >
        <Image
          src="/ChatGPT Image Sep 14, 2025, 07_46_23 PM.png" // 👉 put zoro.png inside /public
          alt="Zoro Character"
          width={350}
          height={600}
          priority
          className="object-contain drop-shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
