// ==================== FILE 1: CTASection.jsx ====================

import React from "react";

export default function CTASection() {
  return (
    <section className="bg-[#F5F3EF] relative py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block text-left">
          <svg
            className="absolute -left-7 md:-left-8 top-0 w-6 md:w-7 h-full pointer-events-none"
            viewBox="0 0 30 200"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Tall parenthesis arc spanning from near the top of
        "It's time." to near the bottom of "Get Ready" */}
            <path
              d="M 26 12 C 2 35, 2 165, 26 188"
              stroke="#5C6AE4"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          <h2 className="text-6xl md:text-7xl font-bold text-[#1A1033] leading-[1.1] tracking-tight relative z-10">
            It's time.
            <br />
            Get Ready
          </h2>
        </div>

        <p className="mt-10 text-lg text-[#1A1033]/80 font-medium max-w-xl mx-auto">
          Your calendar has the power to shape your day. And life is too damn
          short for bad meetings.
        </p>
        <p className="mt-6 text-lg text-[#1A1033]/80 font-medium max-w-xl mx-auto">
          Get Ready, and let's shape the future of meetings and calendars,
          together.
        </p>

        <div className="relative mt-12 max-w-md mx-auto p-1 rounded-full flex items-center gap-1.5 bg-gradient-to-r from-[#DF6D77] via-[#9154B9] to-[#69429A] shadow-xl shadow-purple-900/20">
          <input
            type="email"
            placeholder="Enter your email"
            className="min-w-0 flex-1 bg-transparent border-none outline-none text-white placeholder-white/70 px-3 py-2 text-sm sm:text-base"
          />
          <button className="bg-[#533876] hover:bg-[#422A60] transition-colors text-white font-medium rounded-full px-3 py-2 text-sm sm:px-7 sm:py-3 sm:text-base shrink-0 whitespace-nowrap">
            Get Ready
          </button>
        </div>
      </div>
    </section>
  );
}
