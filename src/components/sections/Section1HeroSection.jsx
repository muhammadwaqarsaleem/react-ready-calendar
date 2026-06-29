import React from "react";
import Navbar from "../layout/Navbar";
import { PillBadge } from "../ui/Shared";
import { MacWindowFrame, LeftSidebar, RightSidebar, TeamMeetingCard } from "../ui/CalendarAppUI";

/* ============================================================
   HERO SPECIFIC AGENDA (Overrides Defaults)
   ============================================================ */
const heroAgenda = [
  { label: "Objectives & Metrics", done: true, icon: "🎯", avatar: "/assets/avatars/1.png" },
  { label: "The News", done: true, icon: "📰" },
  // PillBadge moved to 3rd item, text changed to "S"
  { label: "S", done: false, icon: "🎉", hasHighlight: true, badgeText: "Deercember" },
  { label: "", done: false, icon: "" },
];

/* ============================================================
   HERO ASSEMBLY
   ============================================================ */

export default function HeroSection() {
  return (
    <div className="bg-[#F5F3EF] min-h-screen w-full font-[Inter]">
      <Navbar />
      
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <p className="text-xs font-semibold tracking-widest text-[#6C47FF] uppercase mb-5">
          Your New Calendar
        </p>

        <h1 className="font-bold tracking-tight text-[#1A1033] leading-[1.1] text-5xl sm:text-6xl">
          <span className="block">The Calendar</span>
          <span className="block text-center mt-4 sm:mt-2">
            
            {/* ================= MOBILE VIEW ================= */}
            <span className="block sm:hidden">you need</span>
            <span className="block sm:hidden mt-3">
              <span className="relative inline-flex items-center">
                <span className="bg-[#DDEBFF] px-3 py-1 rounded-l-xl rounded-r-sm">
                  to meet
                </span>
                <span className="absolute right-0 bottom-0 h-[calc(100%+0.25rem)] w-[2.5px] bg-[#7366FE]" />
                <span className="absolute bottom-[calc(80%)] left-full -ml-[2.5px] translate-y-[1px] flex">
                  <PillBadge>Febby</PillBadge>
                </span>
              </span>
            </span>

            {/* ================= DESKTOP VIEW ================= */}
            <span className="hidden sm:inline-flex items-start justify-center gap-3">
              <span className="self-center mt-1">you</span>
              <span className="relative inline-flex items-center">
                <span className="bg-[#DDEBFF] px-3 py-1 rounded-l-xl rounded-r-sm">
                  need to meet
                </span>
                <span className="absolute right-0 bottom-0 h-[calc(100%+0.5rem)] w-[2.5px] bg-[#7366FE]" />
                <span className="absolute bottom-[calc(100%)] left-full -ml-[2.5px] translate-y-[1px] flex">
                  <PillBadge>Febby</PillBadge>
                </span>
              </span>
            </span>

          </span>
        </h1>

        {/* Formatted 3-line paragraph */}
        <p className="text-[#71717A] text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed">
          Ready evolves your calendar into a living,
          <span className="hidden sm:block" aria-hidden="true" />
          breathing multiplayer workspace for teams
          <span className="hidden sm:block" aria-hidden="true" />
          to instantly make your meetings better.
        </p>

        {/* ================= MAC WINDOW ASSEMBLY ================= */}
        <div className="mt-12 w-full max-w-5xl mx-auto">
          <MacWindowFrame>
            <div className="flex">
              <LeftSidebar />
              {/* Passed the custom agenda and the new strikethrough flag */}
              <TeamMeetingCard agenda={heroAgenda} strikethroughDone={false} />
              <RightSidebar />
            </div>
          </MacWindowFrame>
        </div>
      </section>
    </div>
  );
}