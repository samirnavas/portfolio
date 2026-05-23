"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-surface dark:bg-surface w-full top-0 sticky z-50 border-b border-outline-variant dark:border-on-surface-variant">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        {/* Brand */}
        <Link
          className="font-headline-md text-headline-md font-bold text-primary dark:text-on-surface tracking-tighter hover:opacity-80 transition-opacity duration-300 z-50"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          SAMIR NAVAS
        </Link>
        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-surface transition-colors duration-200 font-label-sm text-label-sm hover:opacity-80"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-surface transition-colors duration-200 font-label-sm text-label-sm hover:opacity-80"
            href="#work"
          >
            Works
          </a>
        </nav>
        {/* Trailing Action (Desktop) */}
        <a
          className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded-none font-label-sm text-label-sm hover:opacity-80 transition-opacity duration-300"
          href="#contact"
        >
          Let's Talk
        </a>
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-primary p-2 z-50 relative" onClick={toggleMenu} aria-label="Toggle Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform duration-300"
          >
            {isOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-surface dark:bg-surface border-b border-outline-variant shadow-lg md:hidden flex flex-col items-center py-8 gap-6 z-40"
          >
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-headline-sm text-headline-sm"
              href="#about"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-headline-sm text-headline-sm"
              href="#work"
              onClick={() => setIsOpen(false)}
            >
              Works
            </a>
            <a
              className="bg-primary text-on-primary px-8 py-3 rounded-none font-label-sm text-label-sm hover:opacity-80 transition-opacity duration-300 mt-4"
              href="#contact"
              onClick={() => setIsOpen(false)}
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
