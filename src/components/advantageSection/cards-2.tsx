"use client"

import { motion } from "framer-motion";
import { BsGraphUpArrow } from "react-icons/bs";
import { GiMeshNetwork } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";

export default function Cards2() {
    return (
        <motion.div 
            className="flex flex-col gap-10"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
        >
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <svg width="0" height="0">
                    <linearGradient id="blue-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#8babff" offset="0%" />
                        <stop stopColor="#591885" offset="100%" />
                    </linearGradient>
                </svg>
                <BsGraphUpArrow size={50} style={{ fill: "url(#blue-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Aumento das Vendas</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <TbDeviceDesktopAnalytics size={50} style={{ fill: "url(#blue-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Mensuração</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <GiMeshNetwork size={50} style={{ fill: "url(#blue-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Estratégias de Marketing</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
        </motion.div>
    )
}