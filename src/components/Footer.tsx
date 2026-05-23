import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-surface border-t border-outline-variant dark:border-on-surface-variant mt-auto">
      <div className="w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-start gap-gutter">
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-4">
          <span className="font-headline-md text-headline-md font-bold text-primary">
            SAMIR NAVAS
          </span>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            © {new Date().getFullYear()} SAMIR NAVAS — ALL RIGHTS RESERVED
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-surface transition-colors duration-200"
            href="#about"
          >
            About
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-surface transition-colors duration-200"
            href="#work"
          >
            Work
          </a>
          <a
            className="font-label-sm text-label-sm text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-on-surface transition-colors duration-200"
            href="#contact"
          >
            Connect
          </a>
        </div>
      </div>
    </footer>
  );
}
