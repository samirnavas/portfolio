export default function Footer() {
  return (
    <footer className="bg-surface dark:bg-surface border-t border-outline-variant dark:border-on-surface-variant mt-auto">
      <div className="w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] mx-auto py-14 md:py-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-3">
          <span className="text-2xl md:text-3xl font-bold text-primary tracking-wide">
            SAMIR NAVAS
          </span>
          <p className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase">
            © {new Date().getFullYear()} SAMIR NAVAS — ALL RIGHTS RESERVED
          </p>
        </div>
        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6 md:gap-12">
          <a
            className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#about"
          >
            About
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#work"
          >
            Work
          </a>
          <a
            className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant hover:text-primary transition-colors duration-200"
            href="#contact"
          >
            Connect
          </a>
        </div>
      </div>
    </footer>
  );
}
