import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import WorksGallery, { WorkImage, Category } from "@/components/WorksGallery";
import { supabase } from "@/utils/supabase";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function Home() {
  const { data: works } = await supabase
    .from("works")
    .select("*")
    .order("priority", { ascending: true, nullsFirst: false });

  const imagesWithCategories: WorkImage[] = (works || []).map((work: any) => ({
    src: supabase.storage.from("portfolio-assets").getPublicUrl(work.file_name).data.publicUrl,
    category: work.category as Category,
    title: work.file_name.replace(/\.[^/.]+$/, ""),
  }));

  const CONTACT_LINKS = [
    {
      name: "Email",
      value: "samirnavas7662@gmail.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=samirnavas7662@gmail.com",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
      )
    },
    {
      name: "Phone",
      value: "+91 9446 583 084",
      href: "tel:+919446583084",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
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
      <main className="flex-grow w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto space-y-section-gap">

        {/* Hero / Bio Section: Asymmetric Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center" id="about">
          {/* Text Content */}
          <div className="md:col-span-7 space-y-8 pr-0 md:pr-12">
            <ScrollReveal>
              <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary">
                Crafting visual stories as a Graphic Designer & Freelancer.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
                <p>
                  Hi, I'm Samir Navas. I specialize in crafting minimalist, high-end visual identities and digital experiences.
                  My focus is entirely on the work—letting form and function speak for themselves.
                </p>
              </div>
            </ScrollReveal>
            {/* Categories/Tags */}
            <ScrollReveal delay={400}>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm text-primary">
                  Posters
                </span>
                <span className="px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm text-primary">
                  Logos
                </span>
                <span className="px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm text-primary">
                  Graphic Design
                </span>
              </div>
            </ScrollReveal>
          </div>
          {/* Image Container */}
          <div className="md:col-span-5 mt-12 md:mt-0 relative group">
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src="/logo.png"
                alt="Samir Navas"
                fill
                priority
                unoptimized
                className="object-cover transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Expertise / Services Section */}
        <section>
          <ScrollReveal>
            <div className="mb-12 border-b border-outline-variant pb-4">
              <h2 className="font-headline-md text-headline-md text-primary">
                Capabilities
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="p-8 border rounded-full border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">
                Poster & Print
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Creating striking layouts and compositions for events, campaigns, and exhibitions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 border rounded-full border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">
                Logo Design
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Developing cohesive, scalable visual languages that define a
                brand's essence.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-8 border rounded-full border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">
                Digital Design
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Crafting sophisticated digital experiences focusing on clarity and
                aesthetic quality.
              </p>
            </div>
          </div>
        </section>

        {/* Works Section */}
        <WorksGallery images={imagesWithCategories} />

        {/* Contact Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start" id="contact">
          <div className="md:col-span-4 space-y-6 pr-0 md:pr-12">
            <ScrollReveal>
              <h2 className="font-headline-md text-headline-md text-primary">
                Let's work together.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Available for freelance opportunities. Connect with me directly through any of these platforms.
              </p>
            </ScrollReveal>
          </div>
          <div className="md:col-span-8 mt-12 md:mt-0">
            <div className="flex flex-col">
              {CONTACT_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.name !== "Phone" ? "_blank" : undefined}
                  rel={link.name !== "Phone" ? "noopener noreferrer" : undefined}
                  className="flex items-center justify-between py-6 border-b border-outline-variant group hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="text-primary">{link.icon}</span>
                    <span className="font-headline-sm text-headline-sm md:text-2xl font-bold text-primary tracking-tight">{link.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-on-surface-variant group-hover:text-primary transition-colors">
                    <span className="font-body-md text-body-md hidden sm:block">{link.value}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
