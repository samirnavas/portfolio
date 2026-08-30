"use client";

import { useState, useEffect } from "react";
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

function WorkCard({
  img,
  index,
}: {
  img: WorkImage;
  index: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const aspectRatio = `${img.width} / ${img.height}`;

  return (
    <motion.div
      layout="position"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="w-full overflow-hidden rounded-2xl md:rounded-3xl group bg-surface-container-low border border-outline-variant shadow-sm hover:shadow-md relative transform-gpu will-change-[transform,opacity]"
      style={{ aspectRatio }}
    >
      {/* Skeleton Pulse matching aspect ratio */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-surface-container animate-pulse rounded-2xl md:rounded-3xl" />
      )}

      <Image
        src={img.src}
        alt={img.title}
        fill
        loading={index < 4 ? "eager" : "lazy"}
        priority={index < 2}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1600px) 25vw, 400px"
        onLoad={() => setIsLoaded(true)}
        className={`object-cover rounded-2xl md:rounded-3xl transition-all duration-500 ease-out transform-gpu will-change-transform group-hover:scale-[1.03] backface-hidden ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.div>
  );
}

export default function WorksGallery({ images }: WorksGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>("All works");
  const [numColumns, setNumColumns] = useState(4);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth < 640) {
        setNumColumns(2);
      } else if (window.innerWidth < 1024) {
        setNumColumns(3);
      } else {
        setNumColumns(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const filteredImages =
    activeCategory === "All works"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Distribute items into columns round-robin to preserve exact left-to-right reading order
  const columns: WorkImage[][] = Array.from({ length: numColumns }, () => []);
  filteredImages.forEach((img, i) => {
    columns[i % numColumns].push(img);
  });

  return (
    <section id="work" className="scroll-mt-28">
      <ScrollReveal>
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-10 md:mb-14 border-b border-outline-variant pb-4 items-end justify-between">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
            Selected Works
          </h2>
          <nav className="flex flex-wrap gap-8" role="tablist">
            {GALLERY_FILTERS.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`relative font-label-sm text-sm md:text-base pb-3 font-medium transition-colors duration-200 cursor-pointer uppercase tracking-wider ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {category}
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 35,
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </ScrollReveal>

      {/* 4-column column-wise layout with zero vertical gaps and preserved left-to-right order */}
      <div className="flex gap-4 sm:gap-6 lg:gap-8 items-start w-full transform-gpu">
        {columns.map((colImages, colIndex) => (
          <div
            key={colIndex}
            className="flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-8"
          >
            <AnimatePresence mode="sync">
              {colImages.map((img, index) => (
                <WorkCard key={img.id} img={img} index={index} />
              ))}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
