"use client";

import { motion, stagger } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const borderBottom =
    "backdrop-blur-sm text-zinc-50 hover:bg-blue-gradient hover:duration-75 hover:ease-in p-2 rounded-full";

  return (
    <section>
      <motion.div
        className="flex justify-center md:mx-6 py-4 md:px-20 px-4 items-center text-xs md:text-base"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        <div className="text-gray-500 flex md:gap-14 md:pr-20">
          <Link className={borderBottom} href={"/"}>
            Home
          </Link>
          <Link className={borderBottom} href={"#portfolio"}>
            Portfolio
          </Link>
          <Link className={borderBottom} href={"#advantages"}>
            Vantagens
          </Link>
          <Link className={borderBottom} href={"#faq"}>
            Dúvidas
          </Link>
        </div>
        <Link
          href={"#contact"}
          className="bg-dark-blue-gradient rounded-md p-2 text-white hover:scale-110 hover:font-semibold ml-2"
        >
          Contato
        </Link>
      </motion.div>
      <div className="bg-gray-300 w-full h-px" />
    </section>
  );
}
