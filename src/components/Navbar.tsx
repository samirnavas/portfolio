import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-surface dark:bg-surface w-full top-0 sticky z-50 border-b border-outline-variant dark:border-on-surface-variant">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-6 max-w-container-max mx-auto">
        {/* Brand */}
        <Link
          className="font-headline-md text-headline-md font-bold text-primary dark:text-on-surface tracking-tighter hover:opacity-80 transition-opacity duration-300"
          href="/"
        >
          SAMIR NAVAS
        </Link>
        {/* Navigation Links */}
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
        {/* Trailing Action */}
        <a
          className="hidden md:inline-flex items-center justify-center bg-primary text-on-primary px-6 py-3 rounded-none font-label-sm text-label-sm hover:opacity-80 transition-opacity duration-300"
          href="#contact"
        >
          Let's Talk
        </a>
        {/* Mobile Menu Toggle (Minimal) */}
        <button className="md:hidden text-primary p-2">
          {/* We can use a simple SVG for the menu icon instead of Material Symbols to reduce deps */}
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
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}
