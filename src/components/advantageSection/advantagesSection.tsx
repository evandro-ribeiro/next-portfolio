"use client"

import Cards1 from "./cards-1";
import Cards3 from "./cards-3";
import Cards2 from "./cards-2";
import { motion } from "framer-motion";

export default function AdvantagesSection() {
    return (
        <section className="bg-cyan-50 h-fit flex items-center flex-col py-10 md:gap-2">
            <motion.h2 
                className="text-2xl md:text-3xl font-bold"
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                Benefícios de criar o <span className="text-sky-600">seu site</span>
            </motion.h2>
            <div className="flex justify-center md:py-14 gap-10 md:gap-14 flex-wrap">
                {/* First Column */}
                <Cards1 />
                {/* Second Column */}
                <Cards2 />
                {/* Third Column */}
                <Cards3 />
            </div>
        </section>
    )
}

/** VANTAGENS DE CRIAÇÃO DE SITE:
 * CREDIBILIDADE
 * VISIBILIDADE --- MdVisibility
 * CONTATO COM CLIENTES --- FaHandshake
 * AUMENTO NAS VENDAS --- BsGraphUpArrow
 * MENSURAÇÃO --- TbDeviceDesktopAnalytics
 * CUSTO X BENEFÍCIO --- GiMoneyStack
 * FORTALECIMENTO DA MARCA --- GiLaurelsTrophy
 * ESTRATÉGIAS DE MARKETING --- GiMeshNetwork
 */