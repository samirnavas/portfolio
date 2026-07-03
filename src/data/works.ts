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
}

/**
 * Display order is top-to-bottom. Reorder entries to change gallery order.
 */
export const WORKS: WorkEntry[] = [
  { file: "match day.webp", category: "Posters", title: "Match Day" },
  { file: "WC Fans Show.webp", category: "Posters", title: "WC Fans Show" },
  { file: "WC Fans Show 2.webp", category: "Posters", title: "WC Fans Show 2" },
  { file: "ISL S2.webp", category: "Posters", title: "ISL Season 2" },
  { file: "Tiki Taka CS.webp", category: "Posters", title: "Tiki Taka CS" },
  { file: "SOE Day.webp", category: "Posters", title: "SOE Day" },
  { file: "Lumier.webp", category: "Logos", title: "Lumier" },
  { file: "livinn.webp", category: "Logos", title: "Livinn" },
  { file: "Swaraj Poster.webp", category: "Posters", title: "Swaraj Poster" },
  { file: "SSB Final.webp", category: "Posters", title: "SSB Final" },
  { file: "Qasr.webp", category: "Posters", title: "Qasr" },
  { file: "Suggest Name.webp", category: "Posters", title: "Suggest Name" },
  { file: "kombu.webp", category: "Posters", title: "Kombu" },
  { file: "nintendo2 .webp", category: "Posters", title: "Nintendo" },
  { file: "EKMH.webp", category: "Logos", title: "EKMH" },
  { file: "forkin.webp", category: "Logos", title: "Forkin" },
  { file: "OHS Logo.webp", category: "Logos", title: "OHS Logo" },
  { file: "padipy.webp", category: "Logos", title: "Padipy" },
];

export interface WorkImage {
  id: string;
  src: string;
  category: WorkCategory;
  title: string;
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
  }));
}

export function getGalleryFilters(): GalleryFilter[] {
  const categories = new Set<WorkCategory>();
  for (const work of WORKS) {
    categories.add(work.category);
  }
  return ["All works", ...Array.from(categories)];
}
