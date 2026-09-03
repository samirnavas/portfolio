"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
}: {
  img: WorkImage;
}) {
  const aspectRatio = `${img.width} / ${img.height}`;

  return (
    <div
      className="w-full overflow-hidden rounded-2xl md:rounded-3xl group bg-surface-container-low border border-outline-variant shadow-xs hover:shadow-md relative transition-shadow duration-300"
      style={{ aspectRatio }}
    >
      <Image
        src={img.src}
        alt={img.title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1600px) 25vw, 400px"
        className="object-cover rounded-2xl md:rounded-3xl transition-transform duration-300 ease-out group-hover:scale-[1.02]"
      />
    </div>
  );
}

export default function WorksGallery({ images }: WorksGalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryFilter>("All works");
  const [numColumns, setNumColumns] = useState(4);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

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
  const columns: WorkImage[][] = Array.from({ length: numColumns }, () => []);
  filteredImages.forEach((img, i) => {
    columns[i % numColumns].push(img);
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
                    className={`relative font-label-sm text-xs sm:text-sm md:text-base pb-2 font-medium transition-colors duration-200 cursor-pointer uppercase tracking-wider ${isActive
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
          className={`w-full overflow-hidden transition-[max-height] duration-700 ease-in-out ${isCollapsed
            ? "max-h-[540px] sm:max-h-[640px] md:max-h-[740px] lg:max-h-[820px]"
            : "max-h-[12000px]"
            }`}
        >
          {/* 4-column column-wise layout with zero vertical gaps */}
          <div className="flex gap-4 sm:gap-6 lg:gap-8 items-start w-full">
            {columns.map((colImages, colIndex) => (
              <div
                key={colIndex}
                className="flex-1 flex flex-col gap-4 sm:gap-6 lg:gap-8"
              >
                {colImages.map((img) => (
                  <WorkCard key={img.id} img={img} />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Feather Gradient Overlay when Collapsed */}
        <div
          className={`absolute bottom-0 inset-x-0 h-48 sm:h-60 md:h-72 bg-gradient-to-t from-background via-background/85 to-transparent flex items-end justify-center pb-6 sm:pb-8 transition-opacity duration-500 ${isCollapsed
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
    </section>
  );
}
