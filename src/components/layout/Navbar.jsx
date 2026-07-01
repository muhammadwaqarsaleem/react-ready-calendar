import React from "react";
import { AvatarStack } from "../ui/Shared";
import logo from "../../assets/logo.svg";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#F5F3EF] border-b border-[#E4E4E7]">
      
      <img src={logo} alt="Company Logo" className="h-5 w-auto" />

      {/* Nav links removed as requested */}

      <div className="flex items-center gap-4">
        {/* Pass your specific avatar paths here */}
        <AvatarStack className="hidden sm:flex" size="w-7 h-7"
          avatars={[
            "/assets/avatars/1.png", 
            "/assets/avatars/5.png", 
            "/assets/avatars/4.png",
            "/assets/avatars/3.png",
            "/assets/avatars/2.png"
          ]} 
        />   
        <a
          href="#"
          className="bg-[#5242FF] hover:bg-[#4232CC] text-white text-sm font-normal rounded-xl px-4 py-1.5 transition-colors"
        >
          Get Ready
        </a>
      </div>
    </header>
  );
}