"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const spanVariants = {
    initialColor: { color: "#fefe9c" },
    transitionColor: {
      color: "var(--orange)",
      opacity: 1,
      x: 0,
      transition: {
        repeat: Infinity,
        duration: 2,
      },
    },
  };

  const textForTransition = " quer saber mais?";

  return (
    <div
      className="flex flex-col lg:flex-row gap-6 lg:gap-32 justify-center py-24 items-center bg-dark-gradient-top h-96"
      id="contact"
    >
      <div className="text-center flex flex-col gap-6 md:gap-14">
        <h2 className="text-gray-200 text-2xl md:text-3xl font-bold">
          Tem interesse e
          <motion.span
            initial="initialColor"
            animate="transitionColor"
            transition={{ staggerChildren: 0.1, ease: "easeInOut" }}
          >
            {textForTransition.split("").map((char, index) => (
              <motion.span variants={spanVariants} key={index}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h2>
        <h3 className="text-gray-200 text-xs md:text-base">
          Entre em contato para conversarmos!
        </h3>
      </div>
      <Link
        href={"https://wa.me/5544999561963"}
        target="blank"
        rel="noopener noreferrer"
      >
        <motion.button
          className="flex items-center gap-2 text-green-300 border-4 border-green-300 rounded-full p-2 md:p-4"
          whileHover={{
            scale: 1.2,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          Me chame no WhatsApp <FaWhatsapp size={20} />
        </motion.button>
      </Link>
    </div>
  );
}
