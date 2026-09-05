"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CgClose, CgMenuRight } from "react-icons/cg";
import { NAV_LINKS } from "@/data/portfolioData";

const MOBILE_LINKS = [
  {
    href: "#portfolio",
    label: "Portfólio",
    icon: (
      <svg className="w-5 h-5 text-[#4C00FF] group-hover:text-[#F5DD61] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    href: "#certificacoes",
    label: "Certificações",
    icon: (
      <svg className="w-5 h-5 text-[#4C00FF] group-hover:text-[#F5DD61] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    href: "#contact",
    label: "Contato",
    isCta: true,
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const linkVariants = {
    initial: { opacity: 0, y: -10 },
    animate: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 * i + 0.4, duration: 0.4 },
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0f1e]/90 backdrop-blur-xl border-b border-[rgba(76,0,255,0.2)] shadow-[0_4px_30px_rgba(76,0,255,0.15)]"
            : "bg-transparent backdrop-blur-sm"
        }`}
      >
        <motion.div
          className="flex justify-between lg:mx-6 py-3 xl:px-20 px-4 items-center text-xs md:text-base max-w-7xl mx-auto"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50, damping: 15, delay: 0.1 }}
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link href={"/"} aria-label="Ir para a página inicial">
              <Image
                src="/logo.svg"
                alt="Logo Evandro Machado"
                width={160}
                height={50}
                style={{ width: "160px", height: "auto" }}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Menu principal">
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="initial"
                animate="animate"
              >
                <Link
                  href={link.href}
                  className="relative text-white hover:text-[#F5DD61] font-semibold transition-colors duration-200 group py-1 tracking-wide drop-shadow-sm"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4C00FF] via-[#F5DD61] to-[#ff8300] group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              custom={NAV_LINKS.length}
              variants={linkVariants}
              initial="initial"
              animate="animate"
            >
              <Link
                href={"#contact"}
                className="relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-bold text-white group shadow-[0_0_15px_rgba(255,131,0,0.3)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#4C00FF] to-[#ff8300] transition-all duration-300 group-hover:opacity-90" />
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#ff8300] to-[#4C00FF] transition-all duration-500" />
                <span className="relative z-10">Contato</span>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Hamburger Toggle */}
          <motion.button
            className="lg:hidden text-white hover:text-[#F5DD61] transition-colors z-50 p-1 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? <CgClose size={28} /> : <CgMenuRight size={28} />}
            </motion.div>
          </motion.button>
        </motion.div>
      </header>

      {/* Mobile Drawer & Backdrop Portaled to Body to avoid header containment */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <>
                {/* Dark Backdrop Overlay */}
                <motion.div
                  key="mobile-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-md z-[998]"
                />

                {/* Slide-out Menu Panel */}
                <motion.div
                  key="mobile-drawer"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", stiffness: 350, damping: 32 }}
                  className="lg:hidden fixed top-0 right-0 w-[300px] max-w-[85vw] h-full bg-[#0a0f1e] border-l border-[rgba(76,0,255,0.3)] shadow-[0_0_50px_rgba(0,0,0,0.9)] z-[999] flex flex-col justify-between p-6 overflow-y-auto"
                >
                  {/* Top Bar inside Drawer */}
                  <div>
                    <div className="flex items-center justify-between pb-5 border-b border-[rgba(76,0,255,0.2)]">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#F5DD61] animate-pulse" />
                        <span className="text-xs font-extrabold uppercase tracking-widest text-[#F5DD61]">
                          Navegação
                        </span>
                      </div>
                      <button
                        onClick={() => setIsMenuOpen(false)}
                        className="p-1 text-gray-300 hover:text-[#F5DD61] transition-colors focus:outline-none"
                        aria-label="Fechar menu"
                      >
                        <CgClose size={26} />
                      </button>
                    </div>

                    {/* Navigation Links mapped with STANDARDIZED gap */}
                    <nav className="flex flex-col gap-3 mt-6" aria-label="Menu móvel">
                      {MOBILE_LINKS.map((link, i) => (
                        <motion.div
                          key={link.href}
                          initial={{ x: 30, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: 0.08 * i + 0.1 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center justify-between px-4 py-3.5 rounded-xl text-base transition-all group ${
                              link.isCta
                                ? "bg-gradient-to-r from-[#4C00FF] to-[#ff8300] text-white font-bold shadow-[0_0_20px_rgba(76,0,255,0.35)] hover:opacity-95"
                                : "bg-[rgba(10,46,101,0.25)] border border-[rgba(76,0,255,0.2)] text-white font-semibold hover:bg-[rgba(76,0,255,0.2)] hover:border-[#F5DD61] hover:text-[#F5DD61]"
                            }`}
                          >
                            <span className="flex items-center gap-3">
                              {link.icon}
                              {link.label}
                            </span>
                            <svg
                              className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                                link.isCta ? "text-white" : "text-gray-400 group-hover:text-[#F5DD61]"
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M9 5l7 7-7 7"
                              />
                            </svg>
                          </Link>
                        </motion.div>
                      ))}
                    </nav>
                  </div>

                  {/* Drawer Footer */}
                  <div className="pt-6 border-t border-[rgba(76,0,255,0.2)] text-center">
                    <p className="text-xs text-gray-400 font-medium">
                      Evandro Machado &copy; 2026
                    </p>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
