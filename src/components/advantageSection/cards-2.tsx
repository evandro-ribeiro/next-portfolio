"use client";

import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiMeshNetwork } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

export default function Cards2() {
  const divStyle =
    "bg-gray-800 w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2 border-2 border-gray-700";

  return (
    <motion.div
      className="flex flex-col gap-10 w-full items-center lg:w-fit"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 2 }}
    >
      <div className={divStyle}>
        <svg width="0" height="0">
          <linearGradient
            id="dark-blue-gradient"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="0%"
          >
            <stop stopColor="#8babff" offset="0%" />
            <stop stopColor="#591885" offset="100%" />
          </linearGradient>
        </svg>
        <BsGraphUpArrow
          size={50}
          style={{ fill: "url(#dark-blue-gradient)" }}
        />
        <h4 className="font-bold text-lg pt-4">Aumento das Vendas</h4>
        <p className="text-gray-400 text-sm">
          Um site é uma poderosa ferramenta de vendas, apresentando seus
          produtos e serviços de forma atrativa e direcionando os usuários para
          a ação
        </p>
      </div>
      <div className={divStyle}>
        <TbDeviceDesktopAnalytics
          size={50}
          style={{ fill: "url(#dark-blue-gradient)" }}
        />
        <h4 className="font-bold text-lg pt-4">Mensuração</h4>
        <p className="text-gray-400 text-sm">
          Com um site, você tem acesso a dados sobre o comportamento dos seus
          visitantes, permitindo entender o que funciona, otimizar suas
          estratégias e tomar decisões mais assertivas
        </p>
      </div>
      <div className={divStyle}>
        <GiMeshNetwork size={50} style={{ fill: "url(#dark-blue-gradient)" }} />
        <h4 className="font-bold text-lg pt-4">Estratégias de Marketing</h4>
        <p className="text-gray-400 text-sm">
          Um site é a base para a maioria das estratégias de marketing digital.
          Com ele, você pode potencializar o alcance da sua marca e atrair mais
          clientes
        </p>
      </div>
    </motion.div>
  );
}
