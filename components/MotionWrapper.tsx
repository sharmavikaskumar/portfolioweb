"use client";

import { motion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";

const variants: Record<AnimationType, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-up": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

interface MotionWrapperProps {
  children: ReactNode;
  type?: AnimationType;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
  className?: string;
}

export default function MotionWrapper({
  children,
  type = "fade-up",
  delay = 0,
  duration = 0.6,
  once = true,
  amount = 0.2,
  className,
}: MotionWrapperProps) {
  return (
    <motion.div
      variants={variants[type]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
