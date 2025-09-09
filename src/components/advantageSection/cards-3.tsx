"use client";

import { motion } from "framer-motion";
import { GiLaurelsTrophy, GiMoneyStack } from "react-icons/gi";
import { SiTestcafe } from "react-icons/si";

export default function Cards3() {
  const divStyle =
    "bg-gray-800 w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2 border-2 border-gray-700";

  return (
    <motion.div
      className="flex flex-col gap-10 pt-7 lg:pt-14 w-full items-center lg:w-fit"
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className={divStyle}>
        <svg width="0" height="0">
          <linearGradient
            id="yellow-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#d39215" offset="0%" />
            <stop stopColor="#faff92" offset="100%" />
          </linearGradient>
        </svg>
        <GiLaurelsTrophy size={50} style={{ fill: "url(#yellow-gradient)" }} />
        <h4 className="font-bold text-lg pt-4">Fortalecimento da Marca</h4>
        <p className="text-gray-400 text-sm">
          Um site permite que você comunique características da sua empresa,
          criando uma conexão com seu público e uma percepção positiva da sua
          marca
        </p>
      </div>
      <div className={divStyle}>
        <GiMoneyStack size={50} style={{ fill: "url(#yellow-gradient)" }} />
        <h4 className="font-bold text-lg pt-4">Custo x Benefício</h4>
        <p className="text-gray-400 text-sm">
          Ter um site é um bom investimento, pois os custos de manutenção são
          baixos em comparação com as oportunidades de negócio que ele gera
        </p>
      </div>
      <div className={divStyle}>
        <SiTestcafe size={50} style={{ fill: "url(#yellow-gradient)" }} />
        <h4 className="font-bold text-lg pt-4">Sites Personalizados</h4>
        <p className="text-gray-400 text-sm">
          Os projetos refletem a identidade visual e personalidade do seu
          negócio, garantindo uma experiência autêntica e marcante para os
          visitantes
        </p>
      </div>
    </motion.div>
  );
}
