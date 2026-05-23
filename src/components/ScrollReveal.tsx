"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms (will convert to seconds for framer)
}

export default function ScrollReveal({ children, className = "", delay = 0 }: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
        animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 30, filter: "blur(5px)" }}
        transition={{ 
          duration: 0.8, 
          delay: delay / 1000, 
          ease: [0.21, 0.47, 0.32, 0.98] // Custom smooth cubic bezier
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
