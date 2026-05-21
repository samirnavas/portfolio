import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-grow w-full px-margin-mobile md:px-margin-desktop py-section-gap max-w-container-max mx-auto space-y-section-gap">
        {/* Hero / Bio Section: Asymmetric Grid */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
          {/* Text Content */}
          <div className="md:col-span-7 space-y-8 pr-0 md:pr-12">
            <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary">
              Crafting visual stories as a Graphic Designer & Freelancer.
            </h1>
            <div className="space-y-6 text-on-surface-variant font-body-lg text-body-lg">
              <p>
                Hi, I'm Samir Navas. I specialize in crafting minimalist, high-end visual identities and digital experiences.
                My focus is entirely on the work—letting form and function speak for themselves.
              </p>
            </div>
            {/* Categories/Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm text-primary">
                Brand Systems
              </span>
              <span className="px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm text-primary">
                Digital Art
              </span>
              <span className="px-4 py-2 rounded-full border border-outline-variant font-label-sm text-label-sm text-primary">
                Posters
              </span>
            </div>
          </div>
          {/* Image Container */}
          <div className="md:col-span-5 mt-12 md:mt-0 relative group">
            <div className="absolute inset-0 border border-outline-variant transform translate-x-4 translate-y-4 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
            <div className="relative z-10 w-full aspect-square bg-surface-container-low overflow-hidden">
              <Image
                src="/assets/profile.png"
                alt="Samir Navas"
                fill
                unoptimized
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </section>

        {/* Expertise / Services Section */}
        <section>
          <div className="mb-12 border-b border-outline-variant pb-4">
            <h2 className="font-headline-md text-headline-md text-primary">
              Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Card 1 */}
            <div className="p-8 border border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">
                Brand Systems
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Developing cohesive, scalable visual languages that define a
                brand's essence.
              </p>
            </div>
            {/* Card 2 */}
            <div className="p-8 border border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
              <h3 className="font-label-sm text-label-sm text-primary mb-4 uppercase tracking-widest">
                Poster & Print
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Creating striking layouts and compositions for events, campaigns, and exhibitions.
              </p>
            </div>
            {/* Card 3 */}
            <div className="p-8 border border-outline-variant bg-surface-container-lowest shadow-[0px_4px_20px_rgba(0,0,0,0.02)] hover:-translate-y-1 transition-transform duration-300">
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

        {/* Contact Section */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start" id="contact">
          <div className="md:col-span-5 space-y-6 pr-0 md:pr-12">
            <h2 className="font-headline-md text-headline-md text-primary">
              Let's work together.
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Available for freelance opportunities.
            </p>
            <a
              className="inline-block font-label-sm text-label-sm text-primary underline hover:text-on-surface-variant transition-colors mt-4"
              href="mailto:[EMAIL_ADDRESS]"
            >
              samirnavas7662@gmail.com
            </a>
          </div>
          <div className="md:col-span-7 mt-12 md:mt-0">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-b-2 focus:border-primary px-0 py-4 font-body-md text-body-md text-on-surface placeholder-on-surface-variant transition-colors outline-none"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    type="text"
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-b-2 focus:border-primary px-0 py-4 font-body-md text-body-md text-on-surface placeholder-on-surface-variant transition-colors outline-none"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-b-2 focus:border-primary px-0 py-4 font-body-md text-body-md text-on-surface placeholder-on-surface-variant transition-colors resize-none outline-none"
                  id="message"
                  name="message"
                  placeholder="Project Details"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="bg-primary text-on-primary font-label-sm text-label-sm px-8 py-4 rounded-DEFAULT hover:opacity-80 transition-opacity duration-300 uppercase tracking-widest"
                type="button"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
