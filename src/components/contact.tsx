"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  const spanVariants = {
    initialColor: { color: "#FFF801" },
    transitionColor: {
      color: "#ffb01e",
      opacity: 1,
      x: 0,
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };

  const textForTransition = " seu site?";

  return (
    <div
      className="flex flex-col md:flex-row md:gap-6 justify-between py-24 md:px-72 items-center bg-dark-gradient h-96"
      id="contact"
    >
      <div className="text-center flex flex-col gap-6 md:gap-14">
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Deseja criar o
          <motion.span
            transition={{ staggerChildren: 0.1, ease: "easeInOut" }}
            initial="initialColor"
            animate="transitionColor"
          >
            {textForTransition.split("").map((char, index) => (
              <motion.span variants={spanVariants} key={index}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h2>
        <h3 className="text-white text-xs md:text-base">
          Entre em contato e faça um orçamento <br />
          do seu espaço digital!
        </h3>
      </div>
      <Link href={"https://t.me/evandrormf"} target="blank">
        <motion.button
          className="text-white border-4 rounded-full p-2 md:p-4"
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Peça já seu orçamento
        </motion.button>
      </Link>
    </div>
  );
}
