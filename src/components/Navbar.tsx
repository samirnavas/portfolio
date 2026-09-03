"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-surface/95 backdrop-blur-md w-full top-0 sticky z-50 border-b border-outline-variant transition-colors">
      <div className="flex justify-between items-center w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] mx-auto py-5 md:py-6">
        {/* Brand */}
        <Link
          className="text-2xl sm:text-[1.75rem] font-bold text-primary tracking-wide hover:opacity-80 transition-opacity duration-200 z-50 uppercase"
          href="/"
          onClick={() => setIsOpen(false)}
        >
          SAMIR NAVAS
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-12">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em]"
            href="#about"
          >
            About
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.18em]"
            href="#work"
          >
            Works
          </a>
        </nav>

        {/* Action Button (Desktop) */}
        <a
          className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary px-8 py-3.5 text-xs sm:text-[13px] font-bold uppercase tracking-[0.18em] hover:bg-neutral-800 transition-all duration-200 active:scale-95"
          href="#contact"
        >
          Let&apos;s Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-primary p-2 z-50 relative cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
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
            className="transition-transform duration-200"
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
      <div
        className={`absolute top-full left-0 w-full bg-surface/98 backdrop-blur-lg border-b border-outline-variant shadow-lg md:hidden flex flex-col items-center py-8 gap-6 z-40 transition-all duration-200 ease-out ${isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
      >
        <a
          className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-lg font-semibold uppercase tracking-wider"
          href="#about"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-lg font-semibold uppercase tracking-wider"
          href="#work"
          onClick={() => setIsOpen(false)}
        >
          Works
        </a>
        <a
          className="bg-primary text-on-primary px-8 py-3.5 text-xs font-bold uppercase tracking-[0.18em] hover:bg-neutral-800 transition-colors duration-200 mt-2"
          href="#contact"
          onClick={() => setIsOpen(false)}
        >
          Let&apos;s Talk
        </a>
      </div>
    </header>
  );
}

