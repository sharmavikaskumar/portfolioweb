"use client";

import { motion } from "framer-motion";

export default function TopBar() {
  return (
    <motion.div
      className="flex items-center justify-between px-5 sm:px-10 py-5"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center text-paper text-sm font-display font-bold">
          V
        </div>
        <span className="font-display font-semibold tracking-tight">Vikas</span>
      </div>
      <span className="text-sm text-muted font-medium tracking-wide">
        Full-Stack Dev Portfolio
      </span>
    </motion.div>
  );
}
