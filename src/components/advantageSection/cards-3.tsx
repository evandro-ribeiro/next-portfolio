"use client"

import { motion } from "framer-motion";
import { GiLaurelsTrophy, GiMoneyStack } from "react-icons/gi";
import { SiTestcafe } from "react-icons/si";

export default function Cards3() {
    return (
        <motion.div 
            className="flex flex-col gap-10 md:pt-14"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
        >
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <svg width="0" height="0">
                    <linearGradient id="yellow-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#d39215" offset="0%" />
                        <stop stopColor="#faff92" offset="100%" />
                    </linearGradient>
                </svg>
                <GiLaurelsTrophy size={50} style={{ fill: "url(#yellow-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Fortalecimento da Marca</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <GiMoneyStack size={50} style={{ fill: "url(#yellow-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Custo x Benefício</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <SiTestcafe size={50} style={{ fill: "url(#yellow-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Personalizado com o seu estilo</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
        </motion.div>
    )
}