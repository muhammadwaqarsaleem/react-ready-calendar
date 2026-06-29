import React from "react";

// Updated to accept real image paths and render them
export function AvatarStack({ avatars = [], className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Avatar ${i + 1}`}
          className="w-8 h-8 rounded-full ring-2 ring-white object-cover -ml-2 first:ml-0"
        />
      ))}
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