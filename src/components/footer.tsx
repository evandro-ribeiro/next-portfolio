"use client";

import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "@/data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[rgba(76,0,255,0.15)] bg-[#050810]">
      {/* Accent top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#4C00FF] to-transparent opacity-50" />

      <div className="relative z-10 flex flex-col items-center gap-6 py-8 px-6 md:flex-row md:justify-between md:max-w-5xl md:mx-auto">
        {/* Social Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {SOCIAL_LINKS.map((link, i) => (
            <motion.div
              key={link.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
            >
              <Link
                id={link.id}
                className={`
                  flex items-center justify-center
                  w-10 h-10 rounded-full
                  border border-gray-600
                  text-gray-200
                  glass
                  transition-all duration-300
                  hover:scale-110
                  ${link.hoverColor}
                `}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <link.icon size={16} />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Brand */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-[#F5DD61] font-bold text-sm drop-shadow-[0_0_8px_rgba(245,221,97,0.3)]">
            Evandro Machado
          </span>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="flex gap-1.5 items-center text-xs text-gray-300 font-normal"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FaRegCopyright size={11} />
          {new Date().getFullYear()} Desenvolvido por{" "}
          <span className="text-white font-bold">Evandro Machado</span>
        </motion.p>
      </div>
    </footer>
  );
}
