"use client";

import { motion } from "framer-motion";
import React from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  yOffset?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  yOffset = 24,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.16, 1, 0.3, 1], // Ultra-smooth ease-out
      }}
      className={`transform-gpu will-change-[transform,opacity] ${className}`}
    >
      {children}
    </motion.div>
  );
}
