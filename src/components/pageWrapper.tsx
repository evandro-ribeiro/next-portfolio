"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence>
      <motion.main
        className="bg-background text-gray-100 min-h-screen overflow-x-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}
