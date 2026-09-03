"use client";

import { useState, useEffect, useRef } from "react";
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
  index = 0,
  onSelect,
}: {
  img: WorkImage;
  index?: number;
  onSelect: (img: WorkImage) => void;
}) {
  const aspectRatio = `${img.width} / ${img.height}`;
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      layoutId={`card-${img.id}`}
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        delay: Math.min(index * 0.03, 0.3),
      }}
      onClick={() => onSelect(img)}
      className="w-full overflow-hidden rounded-2xl md:rounded-3xl group bg-surface-container-low border border-outline-variant shadow-xs hover:shadow-lg relative transition-all duration-300 will-change-transform cursor-pointer active:scale-[0.98]"
      style={{ aspectRatio }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(img);
        }
      }}
      aria-label={`View ${img.title}`}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1600px) 25vw, 400px"
        className={`object-cover rounded-2xl md:rounded-3xl transition-all duration-500 ease-out group-hover:scale-[1.03] ${
          isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.02] blur-xs"
        }`}
        onLoad={() => setIsLoaded(true)}
      />
    </motion.div>
  );
}

export default function WorksGallery({ images }: WorksGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>("All works");
  const [numColumns, setNumColumns] = useState(4);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [selectedImage, setSelectedImage] = useState<WorkImage | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Lock body scroll and handle Escape key when modal is open
  useEffect(() => {
    if (selectedImage) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setSelectedImage(null);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [selectedImage]);

  useEffect(() => {
    const updateColumns = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setNumColumns(2);
      } else if (width < 1024) {
        setNumColumns(3);
      } else {
        setNumColumns(4);
      }
    };

    updateColumns();
    window.addEventListener("resize", updateColumns, { passive: true });
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev;
      if (next && sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        if (rect.top < 80) {
          sectionRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }
      return next;
    });
  };

  const filteredImages =
    activeCategory === "All works"
      ? images
      : images.filter((img) => img.category === activeCategory);

  // Distribute items into columns round-robin to preserve exact left-to-right reading order
  const columns: { img: WorkImage; index: number }[][] = Array.from(
    { length: numColumns },
    () => []
  );
  filteredImages.forEach((img, i) => {
    columns[i % numColumns].push({ img, index: i });
  });

  return (
    <section ref={sectionRef} id="work" className="scroll-mt-28">
      <ScrollReveal>
        <div className="flex flex-wrap gap-4 sm:gap-8 mb-8 md:mb-12 border-b border-outline-variant pb-4 items-end justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary tracking-tight">
              Works
            </h2>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            <nav className="flex flex-wrap gap-5 sm:gap-8" role="tablist">
              {GALLERY_FILTERS.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`relative font-label-sm text-xs sm:text-sm md:text-base pb-2 font-medium transition-colors duration-200 cursor-pointer uppercase tracking-wider ${
                      isActive
                        ? "text-primary font-semibold border-b-2 border-primary -mb-[2px]"
                        : "text-on-surface-variant hover:text-primary"
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      </ScrollReveal>

      {/* Gallery Container with Smooth Height Transition and Feather Overlay */}
      <div className="relative">
        <div
          className={`w-full overflow-hidden transition-[max-height] duration-700 ease-in-out ${
            isCollapsed
              ? "max-h-[540px] sm:max-h-[640px] md:max-h-[740px] lg:max-h-[820px]"
              : "max-h-[12000px]"
          }`}
        >
          {/* Column-wise layout with smooth card animations */}
          <div className="flex gap-4 sm:gap-6 lg:gap-8 items-start w-full">
            {columns.map((colItems, colIndex) => (
              <div
                key={colIndex}
                className="flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {colItems.map(({ img, index }) => (
                    <WorkCard
                      key={`${activeCategory}-${img.id}`}
                      img={img}
                      index={index}
                      onSelect={(selected) => setSelectedImage(selected)}
                    />
                  ))}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feather Gradient Overlay when Collapsed */}
        <div
          className={`absolute bottom-0 inset-x-0 h-48 sm:h-60 md:h-72 bg-gradient-to-t from-background via-background/85 to-transparent flex items-end justify-center pb-6 sm:pb-8 transition-opacity duration-500 ${
            isCollapsed
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {isCollapsed && (
            <button
              onClick={() => setIsCollapsed(false)}
              className="group cursor-pointer inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 rounded-full bg-primary text-on-primary text-xs sm:text-[13px] font-bold uppercase tracking-[0.16em] shadow-xl hover:bg-neutral-800 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>Show More Works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Show Less Button at Bottom when Expanded */}
      {!isCollapsed && (
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={toggleCollapse}
            className="group cursor-pointer inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-outline-variant bg-surface-container-low text-primary text-xs sm:text-[13px] font-semibold uppercase tracking-[0.16em] hover:bg-surface-container-high transition-all duration-200 active:scale-95"
          >
            <span>Show Less</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            >
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>
      )}

      {/* Expanded Card Modal with Smooth Spring Transition & Blurred Background */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/65 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ delay: 0.08, duration: 0.25 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
              aria-label="Close expanded view"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 z-50 p-2.5 sm:p-3 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-md border border-white/20 transition-all duration-200 cursor-pointer shadow-xl hover:scale-110 active:scale-90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>

            {/* Expanded Card Container */}
            <motion.div
              initial={{ scale: 0.82, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 10 }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 300,
                mass: 0.7,
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-surface-container-low border border-white/25 shadow-2xl shrink-0"
              style={{
                aspectRatio: `${selectedImage.width} / ${selectedImage.height}`,
                width: `min(88vw, calc(80vh * (${selectedImage.width} / ${selectedImage.height})))`,
                maxHeight: "82vh",
              }}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                fill
                priority
                sizes="(max-width: 768px) 88vw, (max-width: 1200px) 70vw, 55vw"
                className="object-cover rounded-2xl sm:rounded-3xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

