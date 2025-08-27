"use client";

import { motion } from "framer-motion";
import { BsPersonFillCheck } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

export default function Cards1() {
  const divStyle =
    "bg-gray-800 w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2 border-2 border-gray-700";

  return (
    <motion.div
      className="flex flex-col gap-10 pt-14 md:pt-2 lg:pt-14 w-full items-center lg:w-fit pb-8"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className={divStyle}>
        <svg width="0" height="0">
          <linearGradient
            id="green-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#00562c" offset="0%" />
            <stop stopColor="#00e575" offset="100%" />
          </linearGradient>
        </svg>
        <BsPersonFillCheck size={50} style={{ fill: "url(#green-gradient)" }} />
        <h4 className="font-bold text-lg pt-4">Credibilidade</h4>
        <p className="text-gray-400 text-sm">
          Ter um site bem estruturado é o seu cartão de visitas digital. Ele
          transmite a seriedade e o profissionalismo do seu negócio
        </p>
      </div>
      <div className={divStyle}>
        <MdVisibility size={50} style={{ fill: "url(#green-gradient)" }} />
        <h4 className="font-bold text-lg pt-4">Visibilidade</h4>
        <p className="text-gray-400 text-sm">
          Com um site, você rompe as barreiras geográficas e passa a ser visível
          para milhares de pessoas que buscam por seus produtos ou serviços na
          internet
        </p>
      </div>
      <div className={divStyle}>
        <FaHandshake size={50} style={{ fill: "url(#green-gradient)" }} />
        <h4 className="font-bold text-lg pt-4">Contato com clientes</h4>
        <p className="text-gray-400 text-sm">
          Um site oferece diversos canais de contato, permitindo que os clientes
          tirem dúvidas e se conectem com sua marca de forma rápida e eficiente
        </p>
      </div>
    </motion.div>
  );
}
