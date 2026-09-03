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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
      )
    },
    {
      name: "WhatsApp",
      value: "+91 9446 583 084",
      href: "https://wa.me/919446583084",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="black" stroke="currentColor" strokeWidth="0" strokeLinecap="round" strokeLinejoin="round"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" /></svg>
      )
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/samirnavas",
      href: "https://www.linkedin.com/in/samir-navas-a6128633b",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
      )
    },
    {
      name: "Twitter",
      value: "@samirnavas",
      href: "https://x.com/SamirNavas24938",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
      )
    },
    {
      name: "Instagram",
      value: "@samirnavas",
      href: "https://instagram.com/_samirnavas_",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
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
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center scroll-mt-28 pt-2 sm:pt-4" id="about">
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-8 pr-0 lg:pr-2">
            <ScrollReveal>
              <h1 className="flex flex-col items-start select-none text-xl min-[400px]:text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] xl:text-[3rem] font-semibold tracking-tight">
                {/* Line 1 */}
                <div className="relative inline-flex items-center -rotate-[2.75deg] origin-left z-10 translate-x-[90px] translate-y-[0px]">
                  <span
                    className="absolute -inset-x-3.5 sm:-inset-x-5 -inset-y-1 sm:-inset-y-1.5 bg-black"
                    style={{ filter: "url(#grunge-filter-1)" }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                    Crafting visual
                  </span>
                </div>

                {/* Line 2 */}
                <div className="relative inline-flex items-center -rotate-[-3.27deg] origin-left z-20 translate-x-[0px] translate-y-[0px]">
                  <span
                    className="absolute -inset-x-3.5 sm:-inset-x-5 -inset-y-1 sm:-inset-y-1.5 bg-black"
                    style={{ filter: "url(#grunge-filter-2)" }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                    stories as a Graphic
                  </span>
                </div>

                {/* Line 3 */}
                <div className="relative inline-flex items-center -rotate-[1.65deg] origin-left z-30 translate-x-[50px] translate-y-[25px]">
                  <span
                    className="absolute -inset-x-3.5 sm:-inset-x-5 -inset-y-1 sm:-inset-y-1.5 bg-black"
                    style={{ filter: "url(#grunge-filter-3)" }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                    Designer &
                  </span>
                </div>

                {/* Line 4 */}
                <div className="relative inline-flex items-center -rotate-[-3.94deg] origin-left z-20 translate-x-[100px] translate-y-[22px]">
                  <span
                    className="absolute -inset-x-3.5 sm:-inset-x-5 -inset-y-1 sm:-inset-y-1.5 bg-black"
                    style={{ filter: "url(#grunge-filter-4)" }}
                    aria-hidden="true"
                  />
                  <span className="relative z-10 text-white font-semibold tracking-[0px] leading-tight whitespace-nowrap px-1">
                    Freelancer
                  </span>
                </div>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <div className="pt-2 text-neutral-800 text-base justify sm:text-lg lg:text-[1.12rem] translate-y-[30px] font-medium leading-[1.65] max-w-xl">
                <p>
                  Hi, I&apos;m Samir Navas. I design clean, identity-focused logos and striking posters that bridge the gap between creative concept and functional design. No fluff—just sharp visuals that do the talking.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Large SN Monogram Logo on Right */}
          <div className="flex justify-center lg:justify-end items-center lg:col-span-5 mt-8 lg:mt-0">
            <ScrollReveal delay={150}>
              <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] lg:w-[480px] lg:h-[480px] xl:w-[520px] xl:h-[520px] transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  src="/logo.png"
                  alt="Samir Navas Monogram"
                  fill
                  priority
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 440px, 520px"
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
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start scroll-mt-28" id="contact">
          <div className="lg:col-span-4 space-y-6 pr-0 lg:pr-6">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
                Let&apos;s work together.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <p className="text-base lg:text-lg text-on-surface-variant leading-relaxed">
                Available for freelance opportunities. Connect with me directly through any of these platforms.
              </p>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-8 mt-6 lg:mt-0">
            <div className="flex flex-col">
              {CONTACT_LINKS.map((link, index) => (
                <ScrollReveal key={link.name} delay={index * 80}>
                  <a
                    href={link.href}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex items-center justify-between py-6 lg:py-8 border-b border-outline-variant group hover:border-primary transition-colors duration-200"
                  >
                    <div className="flex items-center gap-6">
                      <span className="text-primary group-hover:scale-110 transition-transform duration-200">
                        {link.icon}
                      </span>
                      <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary tracking-tight">
                        {link.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-on-surface-variant group-hover:text-primary transition-colors duration-200">
                      <span className="text-sm sm:text-base lg:text-lg hidden sm:block font-medium">
                        {link.value}
                      </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-200 transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
