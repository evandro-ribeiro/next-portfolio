"use client"

import { motion } from "framer-motion";
import { BsPersonFillCheck } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

export default function Cards1() {
    return (
        <motion.div 
            className="flex flex-col gap-10 pt-14"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
        >
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <svg width="0" height="0">
                    <linearGradient id="green-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
                        <stop stopColor="#00562c" offset="0%" />
                        <stop stopColor="#00e575" offset="100%" />
                    </linearGradient>
                </svg>
                <BsPersonFillCheck size={50} style={{ fill: "url(#green-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Credibilidade</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <MdVisibility size={50} style={{ fill: "url(#green-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Visibilidade</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
            <div className="bg-white w-80 rounded-xl p-5 h-56 shadow-xl flex flex-col gap-2">
                <FaHandshake size={50} style={{ fill: "url(#green-gradient)" }} />
                <h4 className="font-bold text-lg pt-4">Contato com clientes</h4>
                <p className="text-gray-400 text-sm font-semibold">Com um site de qualidade, você pode transmitir maior profissionalismo e confiança aos clientes e fornecedores</p>
            </div>
        </motion.div>
    )
}