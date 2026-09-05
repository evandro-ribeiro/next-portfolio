"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  overline: string;
  title: string;
  highlightedTitle?: string;
  subtitle?: string;
  align?: "center" | "left";
  overlineColor?: string;
}

export default function SectionHeading({
  overline,
  title,
  highlightedTitle,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div className={`flex flex-col gap-4 mb-12 px-6 ${isLeft ? "items-start text-left" : "items-center text-center"}`}>
      <motion.p
        className="text-xs font-bold tracking-widest uppercase text-[#F5DD61] drop-shadow-[0_0_8px_rgba(245,221,97,0.3)]"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {overline}
      </motion.p>

      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-white leading-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}{" "}
        {highlightedTitle && (
          <span className="text-[#F5DD61] drop-shadow-[0_0_12px_rgba(245,221,97,0.4)]">
            {highlightedTitle}
          </span>
        )}
      </motion.h2>

      <motion.div
        className="w-20 h-1 rounded-full bg-gradient-to-r from-[#ff8300] to-[#F5DD61]"
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 80, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />

      {subtitle && (
        <motion.p
          className="text-gray-100 text-sm max-w-md font-normal leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
