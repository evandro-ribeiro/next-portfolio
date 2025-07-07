"use client";

import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaWordpress,
  FaNode,
  FaDocker,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./navbar";
import Stack from "./stacks";
import { GrMysql } from "react-icons/gr";

export default function InitialBanner() {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        repeat: Infinity,
        duration: 10,
      },
    },
  };

  const title = "Desenvolvedor Full Stack";

  return (
    <section className="relative overflow-hidden w-full">
      <video
        src="/bg-video.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 -z-10 object-cover h-full w-full"
      />
      <Navbar />
      <div className="flex flex-col justify-center pt-10 pb-6 xs:py-14 xs:mb-1 md:pt-10 md:pb-6 backdrop-blur-sm">
        <motion.div
          className="flex flex-col text-center gap-2 md:gap-14 md:py-0 md:pt-16 justify-center items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ease: "easeInOut",
          }}
        >
          <div className="md:w-1/2">
            <motion.p
              className="text-lg md:text-5xl text-[#F0EDCF] pb-2"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="italic text-amber-400 font-semibold"
                  variants={defaultAnimations}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            <h1 className="text-3xl font-bold bg-text-dark-gradient text-transparent bg-clip-text pb-4  lg:text-5xl">
              Evandro Machado
            </h1>

            <p className="text-zinc-50 mx-6 md:mx-0 md:pt-4 pb-4 md:pb-0 text-xs md:text-base md:block">
              Desenvolvimento de aplicações web com responsividade, dinamismo e
              interatividade. Sempre buscando as melhores práticas, evoluindo os
              projetos em cada detalhe!
            </p>
          </div>

          <Link
            href={"https://wa.me/5544998132956"}
            target="blank"
            rel="noopener noreferrer"
            className="border-2 text-blue-200 rounded-full text-sm md:text-base p-1 md:p-3 md:w-52 hover:scale-110 hover:shadow-lg hover:shadow-blue-500 hover:bg-sky-50 hover:font-bold duration-300"
          >
            Entre em contato
          </Link>
        </motion.div>

        <ul className="flex justify-center flex-wrap gap-4 md:gap-8 mt-14">
          <Stack
            Icon={FaNode}
            title="Node.js"
            colorItem="shadow-green-400 text-green-400 hover:text-green-400 hover:shadow-green-400"
          />

          <Stack
            Icon={SiJavascript}
            title="JavaScript"
            colorItem="shadow-amber-300 text-amber-300 hover:text-amber-300 hover:shadow-amber-300"
          />

          <Stack
            Icon={FaHtml5}
            title="HTML"
            colorItem="shadow-orange-300 text-orange-600 hover:text-orange-600 hover:shadow-orange-300"
          />

          <Stack
            Icon={FaCss3Alt}
            title="CSS"
            colorItem="shadow-blue-300 text-blue-600 hover:text-blue-600 hover:shadow-blue-300"
          />

          <Stack
            Icon={FaWordpress}
            title="WordPress"
            colorItem="shadow-cyan-300 text-cyan-600 hover:text-cyan-600 hover:shadow-cyan-300"
          />

          <Stack
            Icon={FaReact}
            title="React.js"
            colorItem="shadow-sky-300 text-sky-700 hover:text-sky-700 hover:shadow-sky-300"
          />

          <Stack
            Icon={SiNextdotjs}
            title="Next.js"
            colorItem="shadow-gray-300 text-gray-600 hover:text-gray-600 hover:shadow-gray-300"
          />

          <Stack
            Icon={SiTailwindcss}
            title="Tailwind"
            colorItem="shadow-blue-100 text-blue-300 hover:text-blue-300 hover:shadow-blue-100"
          />

          <Stack
            Icon={FaDocker}
            title="Docker"
            colorItem="shadow-blue-100 text-blue-400 hover:text-blue-400 hover:shadow-blue-100"
          />

          <Stack
            Icon={GrMysql}
            title="MySQL"
            colorItem="shadow-sky-300 text-sky-700 hover:text-sky-700 hover:shadow-sky-300"
          />

          <Stack
            Icon={SiPostgresql}
            title="PostgreSQL"
            colorItem="shadow-cyan-200 text-cyan-300 hover:text-cyan-300 hover:shadow-cyan-200"
          />

          <Stack
            Icon={SiJest}
            title="Jest.js"
            colorItem="shadow-orange-300 text-orange-700 hover:text-orange-700 hover:shadow-orange-300"
          />
        </ul>
      </div>
    </section>
  );
}
