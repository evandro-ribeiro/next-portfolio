"use client";

import {
  FaCss3Alt,
  FaHtml5,
  FaReact,
  FaWordpress,
  FaNode,
  FaDocker,
  FaAws,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "./navbar";
import Stack from "./stacks";
import { GrMysql } from "react-icons/gr";
import { TbBrandTypescript } from "react-icons/tb";
import Image from "next/image";

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
    <section className="relative overflow-hidden w-full h-fit">
      <Image
        src={"/bg-principal.webp"}
        alt="Imagem de fundo da seção inicial com duas cores desfocadas"
        fill
        priority
        className="w-full object-cover"
      />
      <Navbar />
      <div className="flex flex-col justify-center pt-10 pb-6 xs:py-12 xs:mb-1 mt-14 md:pb-6 backdrop-blur-sm">
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
              className="text-2xl md:text-5xl text-[#F0EDCF] pb-2"
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.1 }}
            >
              {title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  className="italic text-orange font-semibold"
                  variants={defaultAnimations}
                >
                  {char}
                </motion.span>
              ))}
            </motion.p>

            <h1 className="text-3xl font-bold bg-text-dark-gradient text-transparent bg-clip-text pb-4 lg:text-5xl">
              Evandro Machado
            </h1>

            <p className="text-gray-300 mx-6 md:mx-0 md:pt-4 pb-4 md:pb-0 text-xs md:text-base">
              Desenvolvimento de aplicações web com responsividade, dinamismo e
              interatividade. Sempre buscando as melhores práticas, evoluindo os
              projetos em cada detalhe!
            </p>
          </div>

          <Link
            href={"https://wa.me/5544999561963"}
            target="blank"
            rel="noopener noreferrer"
            className="border-2 border-gray-400 text-gray-200 rounded-full text-sm md:text-base p-2 md:p-3 md:w-52 hover:scale-110 hover:shadow-lg hover:shadow-blue-500 hover:bg-gray-200 hover:font-bold hover:text-sky-500 duration-300"
          >
            Entre em contato
          </Link>
        </motion.div>

        <ul className="flex justify-center flex-wrap gap-6 my-12 lg:mt-20 md:gap-8 px-6 xl:max-w-[90%] xl:mx-auto">
          <Stack
            Icon={FaReact}
            title="React.js"
            colorItem="shadow-sky-300 text-sky-700 hover:text-sky-700 hover:shadow-sky-300"
          />

          <Stack
            Icon={SiNextdotjs}
            title="Next.js"
            colorItem="shadow-gray-300 text-gray-600 hover:text-gray-500 hover:shadow-gray-500"
          />

          <Stack
            Icon={TbBrandTypescript}
            title="TypeScript"
            colorItem="shadow-blue-300 text-blue-300 hover:text-blue-300 hover:shadow-blue-300"
          />

          <Stack
            Icon={SiJavascript}
            title="JavaScript"
            colorItem="shadow-amber-300 text-amber-300 hover:text-amber-300 hover:shadow-amber-300"
          />

          <Stack
            Icon={FaHtml5}
            title="HTML"
            colorItem="shadow-[#e2542e] text-[#e2542e] hover:text-[#e2542e] hover:shadow-[#e2542e]"
          />

          <Stack
            Icon={FaCss3Alt}
            title="CSS"
            colorItem="shadow-blue-300 text-blue-600 hover:text-blue-600 hover:shadow-blue-300"
          />

          <Stack
            Icon={SiTailwindcss}
            title="Tailwind"
            colorItem="shadow-sky-100 text-sky-300 hover:text-sky-300 hover:shadow-sky-500"
          />

          <Stack
            Icon={FaNode}
            title="Node.js"
            colorItem="shadow-green-400 text-green-400 hover:text-green-400 hover:shadow-green-400"
          />

          <Stack
            Icon={SiNestjs}
            title="NestJS"
            colorItem="shadow-red-400 text-red-400 hover:text-red-400 hover:shadow-red-400"
          />

          <Stack
            Icon={FaDocker}
            title="Docker"
            colorItem="shadow-blue-100 text-blue-400 hover:text-blue-400 hover:shadow-blue-400"
          />

          <Stack
            Icon={GrMysql}
            title="MySQL"
            colorItem="shadow-sky-300 text-sky-700 hover:text-sky-700 hover:shadow-sky-400"
          />

          <Stack
            Icon={SiPostgresql}
            title="PostgreSQL"
            colorItem="shadow-cyan-200 text-cyan-300 hover:text-cyan-300 hover:shadow-cyan-500"
          />

          <Stack
            Icon={FaWordpress}
            title="WordPress"
            colorItem="shadow-cyan-300 text-cyan-600 hover:text-cyan-600 hover:shadow-cyan-500"
          />

          <Stack
            Icon={SiJest}
            title="Jest"
            colorItem="shadow-[#c8421c] text-[#c8421c] hover:text-[#c8421c] hover:shadow-[#c8421c]"
          />

          <Stack
            Icon={FaAws}
            title="AWS"
            colorItem="shadow-[#ff9c08] text-[#ff9c08] hover:text-[#ff9c08] hover:shadow-[#ff9c08]"
          />

          <Stack
            Icon={FaGitAlt}
            title="Git"
            colorItem="shadow-[#f05539] text-[#f05539] hover:text-[#f05539] hover:shadow-[#f05539]"
          />

          <Stack
            Icon={FaGithub}
            title="GitHub"
            colorItem="shadow-neutral-700 text-neutral-500 hover:text-neutral-300 hover:shadow-neutral-500"
          />
        </ul>
      </div>
    </section>
  );
}
