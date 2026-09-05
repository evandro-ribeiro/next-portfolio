"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  alignment?: "left" | "right";
}

export default function ProjectCard({ project, alignment = "left" }: ProjectCardProps) {
  const isRight = alignment === "right";

  const cardVariants = {
    hidden: { opacity: 0, x: isRight ? 60 : -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const gradientBorder = isRight
    ? "from-[#ff8300] via-[#F5DD61] to-[#4C00FF]"
    : "from-[#4C00FF] via-[#ff8300] to-[#F5DD61]";

  const iconBorder = isRight
    ? "border-[rgba(255,131,0,0.4)] hover:border-[#ff8300]"
    : "border-[rgba(76,0,255,0.4)] hover:border-[#4C00FF]";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={cardVariants}
    >
      <Link href={project.link} target="_blank" rel="noopener noreferrer">
        <motion.div
          className="relative group flex flex-col items-center gap-6 p-1 rounded-2xl overflow-hidden cursor-pointer"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Animated gradient border wrapper */}
          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradientBorder} opacity-25 group-hover:opacity-50 transition-opacity duration-500`} />
          <div className="absolute inset-[1px] rounded-[14px] bg-[#0d1526]" />

          {/* Content Container */}
          <div className="relative w-full flex flex-col lg:flex-row items-center gap-6 p-6">
            {/* Image Block */}
            <motion.div
              className={`relative overflow-hidden rounded-xl w-full lg:w-1/2 flex-shrink-0 ${
                isRight ? "order-1 lg:order-2" : ""
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                className="w-full object-cover rounded-xl transition-all duration-500 group-hover:brightness-110"
                src={project.imgPath}
                alt={`Preview do projeto ${project.title}`}
                width={600}
                height={400}
                style={{ width: "100%", height: "auto" }}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(10,15,30,0.8)] via-[rgba(10,15,30,0.4)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end justify-center pb-4">
                <span className="flex items-center gap-2 text-white text-sm font-bold bg-[#4C00FF] px-4 py-2 rounded-full shadow-lg">
                  Ver projeto <FiExternalLink size={14} />
                </span>
              </div>
            </motion.div>

            {/* Text Block */}
            <article className={`flex flex-col gap-4 lg:w-1/2 ${isRight ? "order-2 lg:order-1" : ""}`}>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-[#F5DD61] transition-colors duration-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {project.title}
              </h3>

              <p className="text-sm md:text-base text-gray-100 leading-relaxed font-normal">
                {project.description}
              </p>

              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-xs font-bold tracking-wider uppercase text-[#F5DD61]">
                  Desenvolvido com:
                </span>
                {project.icons.map((Icon, index) => (
                  <motion.div
                    key={index}
                    className={`p-2 rounded-lg glass border ${iconBorder} text-white transition-all duration-200`}
                    whileHover={{ scale: 1.2, rotate: isRight ? -5 : 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={18} />
                  </motion.div>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F5DD61] group-hover:translate-x-1 transition-transform duration-300">
                Acessar projeto <FiExternalLink size={13} />
              </span>
            </article>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
}
