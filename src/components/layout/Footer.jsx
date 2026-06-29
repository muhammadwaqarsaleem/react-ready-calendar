// ==================== FILE 2: Footer.jsx ====================

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#F5F3EF] w-full px-6 pb-12 pt-12 border-t border-gray-200/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-end gap-6">
        {/* Left Column */}
        <div>
          <p className="text-sm font-medium text-[#1A1033]">
            Ready — Made remotely 🌍
          </p>
          <div className="text-sm text-[#71717A] hover:text-[#1A1033] transition-colors flex gap-4 mt-2">
            <a href="#" className="hover:text-[#1A1033] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#1A1033] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

        {/* Right Column - Social Icons */}
        <div className="flex items-center gap-5">
          {/* Twitter / X */}
          <svg
            className="w-5 h-5 fill-current text-[#71717A] hover:text-[#1A1033] transition-colors cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>

          {/* LinkedIn */}
          <svg
            className="w-5 h-5 fill-current text-[#71717A] hover:text-[#1A1033] transition-colors cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
          </svg>
        </div>
      </div>
    </footer>
  );
}