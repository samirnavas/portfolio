import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import WorksGallery from "@/components/WorksGallery";
import CapabilitiesMarquee from "@/components/CapabilitiesMarquee";
import { getWorkImages } from "@/data/works";

export default function Home() {
  const imagesWithCategories = getWorkImages();

  const CONTACT_LINKS = [
    {
      name: "Email",
      value: "samirnavas7662@gmail.com",
      href: "mailto:samirnavas7662@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
      )
    },
    {
      name: "WhatsApp",
      value: "+91 9446 583 084",
      href: "https://wa.me/919446583084",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M9.5 9.5a1.2 1.2 0 0 1 1.2-.2l.6 1.4c.1.3 0 .6-.2.8l-.3.3a4.8 4.8 0 0 0 2.2 2.2l.3-.3c.2-.2.5-.3.8-.2l1.4.6c.3.1.4.4.3.7a1.6 1.6 0 0 1-1.6 1.2c-2.4 0-4.7-2.3-4.7-4.7 0-.7.3-1.4 1-1.8z" fill="currentColor" stroke="none" /></svg>
      )
    },
    {
      name: "Twitter",
      value: "@samirnavas",
      href: "https://x.com/SamirNavas24938",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
      )
    },
    {
      name: "Instagram",
      value: "@samirnavas",
      href: "https://instagram.com/_samirnavas_",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
      )
    }
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow w-full px-6 sm:px-10 md:px-14 lg:px-16 xl:px-20 max-w-[1600px] mx-auto pt-8 pb-16 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28 space-y-24 md:space-y-32 lg:space-y-40">

        {/* SVG Filter for Distressed / Grunge Brush Borders */}
        <svg className="absolute w-0 h-0 pointer-events-none opacity-0" aria-hidden="true" style={{ position: 'absolute', width: 0, height: 0 }}>
          <defs>
            <filter id="grunge-filter-1" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.04 0.18" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5.5" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="grunge-filter-2" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.045 0.16" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="grunge-filter-3" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.038 0.17" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
            </filter>
            <filter id="grunge-filter-4" x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.048 0.19" numOctaves="4" result="noise" />
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="5.8" xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </defs>
        </svg>

        {/* Hero / Bio Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center scroll-mt-28 pt-2 sm:pt-4" id="about">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 pr-0 lg:pr-2">
            <ScrollReveal>
              {/* Header area: On mobile (< lg), heading and small logo are side-by-side */}
              <div className="flex items-center justify-between gap-3 min-[400px]:gap-5 sm:gap-8">
                <h1 className="flex flex-col items-start select-none text-[1.1rem] min-[360px]:text-[1.22rem] min-[400px]:text-[1.38rem] min-[480px]:text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-semibold tracking-tight shrink-0">
                  {/* Line 1 */}
                  <div className="relative inline-flex items-center -rotate-[2.75deg] origin-left z-10 translate-x-[16px] min-[400px]:translate-x-[26px] sm:translate-x-[48px] lg:translate-x-[90px] translate-y-0">
                    <span
                      className="absolute -inset-x-2.5 sm:-inset-x-5 -inset-y-0.5 sm:-inset-y-1.5 bg-black"
                      style={{ filter: "url(#grunge-filter-1)" }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                      Crafting visual
                    </span>
                  </div>

                  {/* Line 2 */}
                  <div className="relative inline-flex items-center -rotate-[-3.27deg] origin-left z-20 translate-x-0 translate-y-0">
                    <span
                      className="absolute -inset-x-2.5 sm:-inset-x-5 -inset-y-0.5 sm:-inset-y-1.5 bg-black"
                      style={{ filter: "url(#grunge-filter-2)" }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                      stories as a Graphic
                    </span>
                  </div>

                  {/* Line 3 */}
                  <div className="relative inline-flex items-center -rotate-[1.65deg] origin-left z-30 translate-x-[12px] min-[400px]:translate-x-[18px] sm:translate-x-[30px] lg:translate-x-[50px] translate-y-[8px] min-[400px]:translate-y-[12px] sm:translate-y-[18px] lg:translate-y-[25px]">
                    <span
                      className="absolute -inset-x-2.5 sm:-inset-x-5 -inset-y-0.5 sm:-inset-y-1.5 bg-black"
                      style={{ filter: "url(#grunge-filter-3)" }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                      Designer &
                    </span>
                  </div>

                  {/* Line 4 */}
                  <div className="relative inline-flex items-center -rotate-[-3.94deg] origin-left z-20 translate-x-[20px] min-[400px]:translate-x-[32px] sm:translate-x-[55px] lg:translate-x-[100px] translate-y-[6px] min-[400px]:translate-y-[10px] sm:translate-y-[15px] lg:translate-y-[22px]">
                    <span
                      className="absolute -inset-x-2.5 sm:-inset-x-5 -inset-y-0.5 sm:-inset-y-1.5 bg-black"
                      style={{ filter: "url(#grunge-filter-4)" }}
                      aria-hidden="true"
                    />
                    <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                      Freelancer
                    </span>
                  </div>
                </h1>

                {/* Small SN Monogram Logo on Mobile/Tablet (to the side of heading text) */}
                <div className="lg:hidden flex items-center justify-center shrink-0">
                  <div className="relative w-20 h-20 min-[360px]:w-[90px] min-[360px]:h-[90px] min-[400px]:w-[105px] min-[400px]:h-[105px] min-[480px]:w-[125px] min-[480px]:h-[125px] sm:w-[155px] sm:h-[155px] md:w-[185px] md:h-[185px]">
                    <Image
                      src="/logo.png"
                      alt="Samir Navas Monogram"
                      fill
                      priority
                      sizes="(max-width: 480px) 110px, (max-width: 768px) 160px, (max-width: 1024px) 190px, 0px"
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="pt-2 sm:pt-4 text-neutral-800 text-[15px] sm:text-lg lg:text-[1.12rem] text-justify translate-y-[12px] sm:translate-y-[20px] lg:translate-y-[30px] font-medium leading-[1.65] max-w-xl">
                <p>
                  Hi, I&apos;m Samir Navas. I design clean, identity-focused logos and striking posters that bridge the gap between creative concept and functional design. No fluff—just sharp visuals that do the talking.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Large SN Monogram Logo on Right (Desktop lg+ only) */}
          <div className="hidden lg:flex justify-end items-center lg:col-span-5">
            <ScrollReveal delay={150}>
              <div className="relative w-[440px] h-[440px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px]">
                <Image
                  src="/logo.png"
                  alt="Samir Navas Monogram"
                  fill
                  priority
                  sizes="(min-width: 1024px) 520px, 0px"
                  className="object-contain"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="overflow-hidden">
          <ScrollReveal>
            <div className="mb-6 md:mb-10 border-b border-outline-variant pb-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
                Capabilities
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <CapabilitiesMarquee />
          </ScrollReveal>
        </section>

        {/* Works Section */}
        <WorksGallery images={imagesWithCategories} />

        {/* Contact Section */}
        <section className="scroll-mt-28" id="contact">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl md:text-[2.25rem] font-bold text-primary tracking-tight mb-8 sm:mb-10">
              Let&apos;s work together.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col border-t border-outline-variant">
            {CONTACT_LINKS.map((link, index) => (
              <ScrollReveal key={link.name} delay={index * 60}>
                <a
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-5 sm:py-6 md:py-7 border-b border-outline-variant group hover:bg-neutral-50/50 transition-colors duration-200"
                >
                  {/* Left: Icon + Name */}
                  <div className="flex items-center gap-3.5 sm:gap-4.5">
                    <span className="text-primary/90 flex items-center justify-center shrink-0">
                      {link.icon}
                    </span>
                    <span className="text-lg sm:text-xl md:text-[1.35rem] font-bold text-primary tracking-tight">
                      {link.name}
                    </span>
                  </div>

                  {/* Right: Value + Diagonal Arrow */}
                  <div className="flex items-center gap-1.5 sm:gap-2 text-neutral-600 group-hover:text-primary transition-colors duration-200">
                    <span className="text-xs sm:text-sm md:text-[15px] font-medium tracking-tight">
                      {link.value}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
