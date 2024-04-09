"use client"

import { FaCss3Alt, FaHtml5, FaReact, FaWordpress } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InitialBanner() {
    const defaultAnimations = {
        hidden: {
            opacity: 0,
            y:20
        },
        visible: {
            opacity: 1,
            y: 0,
        }
    }

    const title = " seu Site Profissional";
    const logoStyle = "md:size-16 size-9";
    
    return (
        <section>
            <video src="/teste1.mp4" autoPlay loop muted className="absolute top-0 -z-10" />
            <div className="flex justify-center pt-10 pb-6 xs:py-14 xs:mb-1 md:pt-10 md:pb-6 backdrop-blur-sm">
                <motion.div 
                    className="flex md:flex-col text-center gap-2 md:gap-14 md:py-0 md:pt-16 justify-center items-center"
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        ease: "easeIn"
                    }}
                >
                    <div className="w-1/2">
                        <motion.h1 
                            className="md:text-5xl text-[#F0EDCF] pb-2 md:pb-10"
                            initial="hidden"
                            animate="visible"
                            transition={{staggerChildren: 0.1}}
                        >
                            Crie sua presença online com  
                            {title.split('').map((char, index) => (
                                <motion.span key={index} className="italic text-amber-400 font-semibold" variants={defaultAnimations}>{char}</motion.span>
                            ))}
                        </motion.h1>
                        <p className="text-zinc-50 text-xs md:text-base hidden md:block">Deixe sua marca na web e crie seu próprio site personalizado para mostrar seu produto ou serviço.</p>
                    </div>
                    <Link
                        href={"https://wa.me/5544999561963"} target="blank"
                        className= "border-2 text-blue-200 rounded-full text-sm md:text-base p-1 md:p-3 md:w-52 hover:scale-110 hover:shadow-lg hover:shadow-blue-500 hover:bg-sky-50 hover:font-bold duration-300"
                    >
                        Entre em contato
                    </Link>
                </motion.div>
            </div>
            <div className="md:mt-14 flex flex-col md:gap-8 md:mb-16">
                <div className="bg-gray-300 w-full h-0.5" />
                <div className="flex flex-wrap md:gap-28 gap-4 py-2 justify-center">
                    <span className="text-xs md:text-base backdrop-blur-lg flex font-semibold gap-2 items-center p-1 md:p-4 rounded-full shadow-md shadow-sky-700 md:shadow-white md:text-gray-100 text-sky-700 duration-200 hover:text-sky-700 hover:shadow-sky-300 hover:scale-110"><FaReact className={logoStyle} />ReactJS</span>
                    <span className="text-xs md:text-base backdrop-blur-lg flex font-semibold gap-2 items-center p-1 md:p-4 rounded-full shadow-md shadow-amber-300  md:shadow-white md:text-gray-100 text-amber-300 duration-200 hover:text-amber-300 hover:shadow-amber-300 hover:scale-110"><SiJavascript className={logoStyle} />JavaScript</span>
                    <span className="text-xs md:text-base backdrop-blur-lg flex font-semibold gap-2 items-center p-1 md:p-4 rounded-full shadow-md shadow-orange-600  md:shadow-white md:text-gray-100 text-orange-600 duration-200 hover:text-orange-600 hover:shadow-orange-300 hover:scale-110"><FaHtml5 className={logoStyle} />HTML</span>
                    <span className="text-xs md:text-base backdrop-blur-lg flex font-semibold gap-2 items-center p-1 md:p-4 rounded-full shadow-md shadow-blue-600  md:shadow-white md:text-gray-100 text-blue-600 duration-200 hover:text-blue-600 hover:shadow-blue-300 hover:scale-110"><FaCss3Alt className={logoStyle} />CSS</span>
                    <span className="text-xs md:text-base backdrop-blur-lg flex font-semibold gap-2 items-center p-1 md:p-4 rounded-full shadow-md shadow-cyan-600  md:shadow-white md:text-gray-100 text-cyan-600 duration-200 hover:text-cyan-600 hover:shadow-cyan-300 hover:scale-110"><FaWordpress className={logoStyle} />WordPress</span>
                </div>
                <div className="bg-gray-300 w-full h-0.5" />
            </div>
        </section>
    )
}