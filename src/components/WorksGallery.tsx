"use client";

import { useState } from "react";
import Image from "next/image";
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
    <section id="work">
      {/* Navigation Categories */}
      <ScrollReveal>
        <div className="flex flex-wrap gap-8 mb-12 border-b border-outline-variant pb-4 items-end">
          <h2 className="font-headline-md text-headline-md text-primary mr-auto">
            Selected Works
          </h2>
          <nav className="flex gap-8">
            {["All works", "Posters", "Logo"].map((category) => (
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((img) => (
          <div key={img.src} className="aspect-[3/4] overflow-hidden rounded-2xl group bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md transition-shadow relative">
            <Image
              src={img.src}
              alt={img.title || "Portfolio Work"}
              fill
              unoptimized
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain rounded-2xl transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
