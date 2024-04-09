"use client"

import { motion, stagger } from "framer-motion"
import Link from "next/link"

export default function Navbar() {

    const borderBottom = "backdrop-blur-sm text-zinc-50 hover:bg-blue-gradient hover:duration-75 hover:ease-in p-2 rounded-full"

    return (
        <section>
            <motion.div 
                className="flex justify-between md:mx-6 py-4 md:px-20 px-4 items-center text-xs md:text-base"
                initial={{y: -100, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{type: "spring", stiffness: 40}}
            >
                <div className="text-zinc-400 backdrop-blur-md rounded-lg w-20 md:w-fit md:p-1 text-center">Evandro Machado</div>
                <div 
                    className="text-gray-500 flex md:gap-14 md:pr-20"
                >
                    <Link className={borderBottom} href={"/"}>Home</Link>
                    <Link className={borderBottom} href={"#portfolio"}>Portfolio</Link>
                </div>
                <Link href={"#contact"} className="bg-blue-gradient rounded-md p-2 text-white hover:scale-110 hover:font-semibold">Contato</Link>
            </motion.div>
            <div className="bg-gray-300 w-full h-px" />
        </section>
    )
}