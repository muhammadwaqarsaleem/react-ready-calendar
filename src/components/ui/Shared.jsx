import React from "react";

/* ============================================================
   AVATAR STACK (now fully dynamic)
   ------------------------------------------------------------
   Props:
   - avatars: string[]  — array of image paths, e.g. ['/assets/avatars/1.png', ...]
   - max: number         — how many circles to render before collapsing
                            the rest into a "+N" overflow chip (default 4)
   - size: string         — Tailwind size classes for each circle (default "w-6 h-6")
   - ringColor: string    — CSS color for the cutout border around each
                             avatar. Pass the background color of whatever
                             it's sitting on (a card, an event chip, etc.)
                             so the avatars look "cut out" of that surface
                             instead of always having a white ring.
   ============================================================ */

// Updated to accept real image paths and render them
export function AvatarStack({ avatars = [], max = 5, size = "w-6 h-6", ringColor = "#FFFFFF" }) {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - visible.length;

  return (
    <div className="flex items-center -space-x-2">
      {visible.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt=""
          className={`${size} rounded-full object-cover`}
          style={{ border: `2px solid ${ringColor}`, zIndex: visible.length - i }}
        />
      ))}
      {overflow > 0 && (
        <span
          className={`${size} rounded-full flex items-center justify-center text-[9px] font-semibold bg-[#E4E4E7] text-[#52525B]`}
          style={{ border: `2px solid ${ringColor}`, zIndex: 0 }}
        >
          +{overflow}
        </span>
      )}
    </div>
  );
}


// Updated with your exact hex codes and rounded-rectangle shape
export function PillBadge({ children }) {
  return (
    <span className="px-3 py-2 text-[12px] tracking-[0.08em] font-medium rounded-lg inline-flex items-center bg-[#7366FE] text-white shadow-sm">
      {children}
    </span>
  );
}