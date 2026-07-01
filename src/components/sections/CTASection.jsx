// ==================== FILE 1: CTASection.jsx ====================

import React from "react";

export default function CTASection() {
  return (
    <section className="bg-[#F5F3EF] relative py-32 px-6 overflow-hidden">
      <div className="max-w-3xl mx-auto text-center">
        <div className="relative inline-block text-left py-2 pr-4">
          {/* 1. 'w-full h-full': Allows the SVG to span the entire text container.
          2. viewBox="0 0 100 100": Treats the coordinates as percentages (0% to 100%).
          3. 'overflow-visible': Ensures the curve doesn't clip if it bows out past the left edge.
          */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-visible"
            viewBox="0 0 100 100"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* How to tweak this path (M = Start, C = Control 1, Control 2, End):
      
      M 40 5  -> START (Upper tip): x=40% (slightly left of center), y=5% (near top)
      C -20 5 -> CONTROL 1: Pulls the line horizontally out to the left
        -20 95-> CONTROL 2: Keeps pulling the line left as it travels down
        60 95 -> END (Lower tip): x=60% (further right than the upper tip), y=95% (near bottom)
    */}
            <path
              d="M 40 -5 C -25 5, -25 115, 60 95"
              stroke="#5C6AE4"
              strokeWidth="4"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke" /* CRUCIAL: Keeps stroke exactly 4px thick even when the SVG stretches */
            />
          </svg>

          {/* Added pl-12 (padding-left) to push the text right, making room for the left bulge of the curve */}
          <h2 className="text-6xl md:text-7xl font-bold text-[#333333] leading-[1.1] tracking-tight relative z-10 pl-10 md:pl-12">
            It's time.
            <br />
            Get Ready
          </h2>
        </div>

        <p className="mt-10 text-lg text-[#333333] font-medium max-w-xl mx-auto">
          Your calendar has the power to shape your day. And
          <span className="sm:hidden"> </span>
          <span className="hidden sm:block" aria-hidden="true" />
          life is too damn short for bad meetings.
        </p>
        <p className="mt-6 text-lg text-[#333333] font-medium max-w-xl mx-auto">
          Get Ready, and let's shape the future of meetings and
          <span className="sm:hidden"> </span>
          <span className="hidden sm:block" aria-hidden="true" />
          calendars, together.
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
