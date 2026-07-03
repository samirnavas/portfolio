"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import {
  type GalleryFilter,
  type WorkImage,
  getGalleryFilters,
} from "@/data/works";

interface WorksGalleryProps {
  images: WorkImage[];
}

const GALLERY_FILTERS = getGalleryFilters();

export default function WorksGallery({ images }: WorksGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>("All works");

  const filteredImages =
    activeCategory === "All works"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="work" className="scroll-mt-32">
      <ScrollReveal>
        <div className="flex flex-wrap gap-8 mb-12 border-b border-outline-variant pb-4 items-end">
          <h2 className="font-headline-md text-headline-md text-primary mr-auto">
            Selected Works
          </h2>
          <nav className="flex flex-wrap gap-8">
            {GALLERY_FILTERS.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-label-sm text-label-sm pb-4 transition-colors ${
                  activeCategory === category
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

      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {filteredImages.map((img, index) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="aspect-[3/4] overflow-hidden rounded-2xl group bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md relative"
            >
              <Image
                src={img.src}
                alt={img.title}
                fill
                priority={index < 4}
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-contain rounded-2xl transition-transform duration-500 ease-out group-hover:scale-[1.02]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
