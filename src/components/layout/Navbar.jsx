import React from "react";
import { AvatarStack } from "../ui/Shared";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#F5F3EF] border-b border-[#E4E4E7]">
      <span className="text-[#1A1033] font-bold text-lg">Ready</span>

      {/* Nav links removed as requested */}

      <div className="flex items-center gap-4">
        {/* Pass your specific avatar paths here */}
        <AvatarStack className="hidden sm:flex"
          avatars={[
            "/assets/avatars/1.png", 
            "/assets/avatars/2.png", 
            "/assets/avatars/3.png",
            "/assets/avatars/4.png",
            "/assets/avatars/5.png"
          ]} 
        />
        <a
          href="#"
          className="bg-[#5242FF] hover:bg-[#4232CC] text-white text-sm font-semibold rounded-xl px-5 py-2.5 transition-colors"
        >
          Get Ready
        </a>
      </div>
    </header>
  );
}