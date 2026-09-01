/**
 * Portfolio works manifest — no database required.
 *
 * HOW TO ADD A NEW WORK:
 * 1. Compress your image to WebP manually, then drop it into `public/works/`.
 * 2. Add an entry to the WORKS array below (order = display order).
 * 3. Set `category` to "Posters", "Logos", or "Digital Art".
 *
 * Only .webp files are supported.
 */

export type WorkCategory = "Posters" | "Logos" | "Digital Art";

export type GalleryFilter = "All works" | WorkCategory;

export interface WorkEntry {
  /** Filename in public/works/ (must match exactly, including spaces). WebP only. */
  file: string;
  category: WorkCategory;
  /** Optional display title. Defaults to filename without extension. */
  title?: string;
  width?: number;
  height?: number;
}

/**
 * Display order is top-to-bottom. Reorder entries to change gallery order.
 */
export const WORKS: WorkEntry[] = [
  { file: "match day.webp", category: "Posters", title: "Match Day", width: 1280, height: 1600 },
  { file: "WC Fans Show 2.webp", category: "Posters", title: "WC Fans Show 2", width: 1200, height: 1600 },
  { file: "ISL S2.webp", category: "Posters", title: "ISL Season 2", width: 1280, height: 1600 },
  { file: "Tiki Taka CS.webp", category: "Posters", title: "Tiki Taka CS", width: 1280, height: 1600 },
  { file: "SOE Day.webp", category: "Posters", title: "SOE Day", width: 1131, height: 1600 },
  { file: "kalika.webp", category: "Posters", title: "Kalika", width: 900, height: 1600 },
  { file: "Spiderman.webp", category: "Posters", title: "Spider-Man", width: 1195, height: 1600 },
  { file: "ely8fx.jpg", category: "Logos", title: "ELY8FX", width: 1200, height: 564 },
  { file: "Lumier.webp", category: "Logos", title: "Lumier", width: 1200, height: 754 },
  { file: "livinn.webp", category: "Logos", title: "Livinn", width: 361, height: 361 },
  { file: "Swaraj Poster.webp", category: "Posters", title: "Swaraj Poster", width: 1200, height: 1600 },
  { file: "SSB Final.webp", category: "Posters", title: "SSB Final", width: 1212, height: 1600 },
  { file: "Qasr.webp", category: "Posters", title: "Qasr", width: 1600, height: 989 },
  { file: "forkin.webp", category: "Logos", title: "Forkin", width: 461, height: 454 },
  { file: "WC Fans Show.webp", category: "Posters", title: "WC Fans Show", width: 1080, height: 1440 },
  { file: "Suggest Name.webp", category: "Posters", title: "Suggest Name", width: 1131, height: 1600 },
  { file: "kombu.webp", category: "Posters", title: "Kombu", width: 1600, height: 910 },
  { file: "nintendo2 .webp", category: "Posters", title: "Nintendo", width: 1128, height: 1600 },
  { file: "EKMH.webp", category: "Logos", title: "EKMH", width: 1080, height: 1080 },
  { file: "OHS Logo.webp", category: "Logos", title: "OHS Logo", width: 1200, height: 777 },
  { file: "padipy.webp", category: "Logos", title: "Padipy", width: 1024, height: 1024 },
];

export interface WorkImage {
  id: string;
  src: string;
  category: WorkCategory;
  title: string;
  width: number;
  height: number;
}

function workSrc(file: string): string {
  return `/works/${file.split("/").map(encodeURIComponent).join("/")}`;
}

function defaultTitle(file: string): string {
  return file.replace(/\.[^/.]+$/, "");
}

export function getWorkImages(): WorkImage[] {
  return WORKS.map((work) => ({
    id: work.file,
    src: workSrc(work.file),
    category: work.category,
    title: work.title ?? defaultTitle(work.file),
    width: work.width ?? 1200,
    height: work.height ?? 1500,
  }));
}

export function getGalleryFilters(): GalleryFilter[] {
  const categories = new Set<WorkCategory>();
  for (const work of WORKS) {
    categories.add(work.category);
  }
  return ["All works", ...Array.from(categories)];
}
