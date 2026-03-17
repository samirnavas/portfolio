"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, useTransform } from "framer-motion";

const FRAME_COUNT = 41; // 0 to 40 inclusive
const FRAME_FORMAT = (index: number) =>
  `/sequence/frame_${index.toString().padStart(2, "0")}_delay-0.055s.webp`;

export default function Scene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_FORMAT(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount === FRAME_COUNT) {
          drawFrame(loadedImages, 0);
        }
      };
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (imgs: HTMLImageElement[], frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const img = imgs[frameIndex];
    if (!img) return;

    // object-fit: cover logic, scaled up to hide watermark
    const zoom = 1.1;
    const imgRatio = img.width / img.height;
    const canvasRatio = canvas.width / canvas.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width * zoom;
      drawHeight = (canvas.width / imgRatio) * zoom;
    } else {
      drawWidth = (canvas.height * imgRatio) * zoom;
      drawHeight = canvas.height * zoom;
    }

    offsetX = (canvas.width - drawWidth) / 2;
    offsetY = (canvas.height - drawHeight) / 2;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (images.length > 0) {
        const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.max(0, Math.floor(scrollYProgress.get() * (FRAME_COUNT - 1)))
        );
        drawFrame(images, frameIndex);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length > 0) {
      const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.max(0, Math.floor(latest * (FRAME_COUNT - 1)))
      );
      requestAnimationFrame(() => drawFrame(images, frameIndex));
    }
  });

  // Parallax overlays
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -100]);

  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], [100, -100]);

  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], [100, -100]);

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />

        <div className="absolute inset-0 pointer-events-none z-10 text-white font-sans">
          {/* Section 1 */}
          <motion.div
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-4 mix-blend-difference">Samir Navas</h1>
            <p className="text-xl md:text-3xl font-normal text-neutral-300 mix-blend-difference">Creative Developer.</p>
          </motion.div>

          {/* Section 2 */}
          <motion.div
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-24"
          >
            <h2 className="text-5xl md:text-7xl font-semibold max-w-3xl leading-tight mix-blend-difference">I build digital experiences.</h2>
          </motion.div>

          {/* Section 3 */}
          <motion.div
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex flex-col items-end justify-center p-8 md:p-24 text-right"
          >
            <h2 className="text-5xl md:text-7xl font-semibold max-w-3xl leading-tight mix-blend-difference">Bridging design<br />and engineering.</h2>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
