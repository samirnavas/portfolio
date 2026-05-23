"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export type Category = "All works" | "Posters" | "Logos" | "Digital Art";

export interface WorkImage {
  src: string;
  category: Category;
  title?: string;
}

interface WorksGalleryProps {
  images: WorkImage[];
}

export default function WorksGallery({ images }: WorksGalleryProps) {
  const [activeCategory, setActiveCategory] = useState<Category>("All works");

  const filteredImages = activeCategory === "All works"
    ? images
    : images.filter(img => img.category === activeCategory);

  return (
    <section id="work" className="scroll-mt-32">
      {/* Navigation Categories */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-8 mb-12 border-b border-outline-variant pb-4 items-end">
          <h2 className="font-headline-md text-headline-md text-primary mr-auto">
            Selected Works
          </h2>
          <nav className="flex gap-8">
            {["All works", "Posters", "Logos"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as Category)}
                className={`font-label-sm text-label-sm pb-4 transition-colors ${activeCategory === category
                  ? "text-primary font-bold border-b-2 border-primary -mb-4.5"
                  : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </div>
      </ScrollReveal>

      {/* Image Gallery */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="aspect-[3/4] overflow-hidden rounded-2xl group bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md relative"
            >
              <Image
                src={img.src}
                alt={img.title || "Portfolio Work"}
                fill
                priority={true}
                unoptimized
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
