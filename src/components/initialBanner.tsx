"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Navbar from "./navbar";
import Stack from "./stacks";
import { useEffect, useState, useSyncExternalStore } from "react";
import { FiArrowRight } from "react-icons/fi";
import { STACKS } from "@/data/portfolioData";

const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(emptySubscribe, () => true, () => false);
}

// ─── Typing effect hook ──────────────────────────────
function useTypingEffect(text: string, speed = 60) {
  const [state, setState] = useState({ displayed: "", done: false });

  useEffect(() => {
    let i = -1;
    const timer = setInterval(() => {
      i++;
      if (i < text.length) {
        setState({ displayed: text.slice(0, i + 1), done: false });
      } else {
        setState({ displayed: text, done: true });
        clearInterval(timer);
      }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayed: state.displayed, done: state.done };
}

// ─── Floating Particle ───────────────────────────────
function FloatingParticle({
  size,
  left,
  delay,
  duration,
  color,
}: {
  size: number;
  left: string;
  delay: number;
  duration: number;
  color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        left,
        background: color,
        filter: `blur(${size > 6 ? 2 : 1}px)`,
        bottom: -20,
      }}
      animate={{
        y: [0, -900],
        opacity: [0, 0.8, 0.5, 0],
        rotate: [0, 360],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

const particles = [
  { size: 4, left: "8%", delay: 0, duration: 12, color: "rgba(76,0,255,0.6)" },
  { size: 6, left: "15%", delay: 2, duration: 15, color: "rgba(255,131,0,0.5)" },
  { size: 3, left: "25%", delay: 4, duration: 10, color: "rgba(245,221,97,0.6)" },
  { size: 8, left: "35%", delay: 1, duration: 18, color: "rgba(76,0,255,0.4)" },
  { size: 4, left: "45%", delay: 6, duration: 13, color: "rgba(255,131,0,0.4)" },
  { size: 5, left: "55%", delay: 3, duration: 16, color: "rgba(76,0,255,0.5)" },
  { size: 3, left: "65%", delay: 8, duration: 11, color: "rgba(245,221,97,0.5)" },
  { size: 7, left: "75%", delay: 2, duration: 14, color: "rgba(255,131,0,0.6)" },
  { size: 4, left: "85%", delay: 5, duration: 17, color: "rgba(76,0,255,0.5)" },
  { size: 3, left: "92%", delay: 7, duration: 12, color: "rgba(245,221,97,0.4)" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const stackItemVariants = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 15 },
  },
};

export default function InitialBanner() {
  const mounted = useIsMounted();
  const { displayed, done } = useTypingEffect("Desenvolvedor Full Stack", 70);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden w-full min-h-screen flex flex-col">
      {/* ── Background layers ─────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810] via-[#0a0f1e] to-[#0a0f1e]" />
      <div className="absolute inset-0 tech-grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(76,0,255,0.18),transparent)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-[radial-gradient(ellipse_80%_100%_at_50%_100%,rgba(255,131,0,0.12),transparent)] pointer-events-none" />

      {/* Floating particles */}
      {mounted && !shouldReduceMotion &&
        particles.map((p, i) => <FloatingParticle key={i} {...p} />)
      }

      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#4C00FF] to-transparent opacity-50" />

      {/* Navbar */}
      <Navbar />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 pt-24 pb-10">
        <motion.div
          className="flex flex-col text-center gap-4 md:gap-8 justify-center items-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(76,0,255,0.25)] border border-[#4C00FF] text-xs font-bold tracking-widest uppercase text-[#F5DD61] shadow-[0_0_15px_rgba(76,0,255,0.3)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#F5DD61] animate-pulse inline-block" />
            Disponível para projetos
          </motion.div>

          {/* Typing Title & Main Name */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="md:w-3/4 lg:w-1/2"
          >
            <p className={`text-xl md:text-3xl font-extrabold text-[#F5DD61] drop-shadow-[0_0_10px_rgba(245,221,97,0.3)] mb-3 min-h-[2rem] ${done ? "typing-cursor" : ""}`}>
              {displayed}
            </p>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none">
              <span className="text-white drop-shadow-[0_2px_10px_rgba(255,255,255,0.4)]">
                Evandro
              </span>{" "}
              <span className="text-[#ff8300] drop-shadow-[0_0_20px_rgba(255,131,0,0.6)]">
                Machado
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-100 mx-6 md:mx-0 text-sm md:text-base max-w-xl leading-relaxed font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            Desenvolvimento de aplicações web com responsividade, dinamismo e
            interatividade. Sempre buscando as melhores práticas, evoluindo os
            projetos em cada detalhe!
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.5 }}
          >
            <Link
              href={"https://wa.me/5544999561963"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                id="hero-cta-btn"
                className="relative group overflow-hidden flex items-center gap-2 font-bold rounded-full px-8 py-3.5 text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,131,0,0.4)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4C00FF] via-[#0b397d] to-[#ff8300] transition-all duration-300 group-hover:opacity-90" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-500 translate-x-[-100%] group-hover:translate-x-[100%]" />
                <span className="relative z-10 text-white font-bold">Entre em contato</span>
                <FiArrowRight className="relative z-10 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          className="mt-12 lg:mt-16 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <motion.p
            className="text-center text-xs font-bold tracking-widest uppercase text-[#F5DD61] drop-shadow-[0_0_8px_rgba(245,221,97,0.3)] mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
          >
            Tecnologias & Ferramentas
          </motion.p>

          <motion.ul
            className="flex justify-center flex-wrap gap-3 md:gap-4 xl:max-w-5xl xl:mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {STACKS.map((stack) => (
              <motion.li key={stack.title} variants={stackItemVariants}>
                <Stack
                  Icon={stack.Icon}
                  title={stack.title}
                  colorItem={stack.colorItem}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
