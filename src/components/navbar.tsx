"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { CgClose, CgMenuRight } from "react-icons/cg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#portfolio", label: "Portfolio" },
    { href: "#certificacoes", label: "Certificações" },
    { href: "#advantages", label: "Vantagens" },
    { href: "#faq", label: "Dúvidas" },
  ];

  const borderBottom =
    "backdrop-blur-sm text-zinc-50 hover:bg-dark-blue-gradient hover:duration-75 hover:ease-in p-2 rounded-full";

  return (
    <section className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-sm">
      <motion.div
        className="flex justify-center lg:mx-6 py-1 xl:px-20 px-4 items-center text-xs md:text-base"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 40 }}
      >
        <section className="flex items-center justify-between lg:justify-center w-full mr-4 text-gray-500 md:pr-20">
          <Link href={"/"}>
            <Image src="./logo.svg" alt="Logo" width={180} height={180} />
          </Link>

          <nav className="hidden lg:flex items-center gap-12 text-gray-500">
            {navLinks.map((link) => (
              <Link key={link.href} className={borderBottom} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Link
              href={"#contact"}
              className="bg-dark-blue-gradient rounded-xl p-2 text-gray-200 hover:scale-110 hover:font-semibold ml-6"
            >
              Contato
            </Link>
          </nav>

          <button
            className="lg:hidden text-gray-50 z-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <CgClose size={30} /> : <CgMenuRight size={30} />}
          </button>

          <div
            className={`lg:hidden fixed top-0 right-0 w-fit p-2 bg-black/50 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "-translate-x-0" : "translate-x-full"
            }`}
          >
            <nav className="flex flex-col gap-2 items-end justify-center text-base text-zinc-50 pt-16">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={"#contact"}
                onClick={() => setIsMenuOpen(false)}
                className="bg-dark-blue-gradient rounded-md py-2 px-6 text-gray-200 hover:scale-110 hover:font-semibold mt-4"
              >
                Contato
              </Link>
            </nav>
          </div>
        </section>
      </motion.div>
      <div className="bg-gray-300 w-full h-px" />
    </section>
  );
}
