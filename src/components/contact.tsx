"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Contact() {
  return (
    <section className="relative overflow-hidden py-24" id="contact">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1e] via-[#0a1a3a] to-[#050810] pointer-events-none" />
      <div className="absolute inset-0 tech-grid-bg opacity-25 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(255,131,0,0.08),transparent)] pointer-events-none" />

      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[rgba(76,0,255,0.06)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[rgba(255,131,0,0.06)] blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        <SectionHeading
          overline="Vamos conversar"
          title="Tem interesse e"
          highlightedTitle="quer saber mais?"
          subtitle="Entre em contato para conversarmos sobre seu projeto. Estou disponível para novas oportunidades e colaborações!"
        />

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
        >
          {/* WhatsApp Primary */}
          <Link
            href={"https://wa.me/5544999561963"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              id="contact-whatsapp-btn"
              className="relative group overflow-hidden flex items-center gap-3 font-bold rounded-full px-8 py-4 text-white transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.3)]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="absolute inset-0 bg-[#25D366] transition-all duration-300 group-hover:bg-[#1dbd5a]" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#25D366] to-[#1dbd5a] via-[#2eeb74] transition-all duration-500" />
              <FaWhatsapp className="relative z-10" size={22} />
              <span className="relative z-10">Me chame no WhatsApp</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Availability Badge */}
        <motion.div
          className="flex items-center gap-2 text-xs text-gray-200 font-semibold mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Disponível para novos projetos
        </motion.div>
      </div>
    </section>
  );
}
