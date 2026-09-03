"use client";

import React from "react";

const ROW_1 = [
  "Posters",
  "Logos",
  "Banners",
  "Flyers",
  "Roll-Up Standees",
];

const ROW_2 = [
  "Certificates",
  "Cover Headers",
  "Envelopes",
  "Letterheads",
  "Story Templates",
];

const ROW_3 = [
  "YouTube Thumbnails",
  "Social Media Posts",
  "Web Banners",
  "Event Passes & Badges",
];

const ROW_4 = [
  "Flex Boards",
  "Billboards",
  "Stickers & Decals",
  "Packaging & Labels",
  "Pamphlets",
];

interface MarqueeRowProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // duration in seconds
}

function MarqueeRow({ items, direction = "left", speed = 200 }: MarqueeRowProps) {
  // Repeat items 4 times (2 times per half) to ensure smooth seamless looping across all viewport widths
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-1.5 sm:py-2.5 md:py-3 select-none">
      <div
        className={`flex w-max will-change-transform ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
          } hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* First Half */}
        <div className="flex shrink-0 items-center gap-10 sm:gap-14 md:gap-18 lg:gap-22 pr-10 sm:pr-14 md:pr-18 lg:pr-22">
          {repeated.map((item, idx) => (
            <span
              key={`first-${idx}`}
              className="text-lg min-[450px]:text-xl sm:text-2xl md:text-[1.75rem] lg:text-[1.95rem] font-medium text-[#2A2A2A] tracking-[-0.01em] whitespace-nowrap transition-colors duration-200 hover:text-neutral-500 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
        {/* Second Half (duplicate for seamless loop) */}
        <div
          className="flex shrink-0 items-center gap-10 sm:gap-14 md:gap-18 lg:gap-22 pr-10 sm:pr-14 md:pr-18 lg:pr-22"
          aria-hidden="true"
        >
          {repeated.map((item, idx) => (
            <span
              key={`second-${idx}`}
              className="text-lg min-[450px]:text-xl sm:text-2xl md:text-[1.75rem] lg:text-[1.95rem] font-medium text-[#2A2A2A] tracking-[-0.01em] whitespace-nowrap transition-colors duration-200 hover:text-neutral-500 cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CapabilitiesMarquee() {
  return (
    <div className="relative w-full flex flex-col space-y-1 sm:space-y-1.5 md:space-y-2 overflow-hidden">
      <MarqueeRow items={ROW_1} direction="left" speed={210} />
      <MarqueeRow items={ROW_2} direction="right" speed={190} />
      <MarqueeRow items={ROW_3} direction="left" speed={230} />
      <MarqueeRow items={ROW_4} direction="right" speed={200} />
    </div>
  );
}
