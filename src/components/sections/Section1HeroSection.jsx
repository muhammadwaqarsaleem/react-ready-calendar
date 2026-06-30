import React from "react";
import Navbar from "../layout/Navbar";
import { PillBadge } from "../ui/Shared";
import { TeamMeetingCard } from "../ui/CalendarAppUI";
import CalendarAppShowcase from "../ui/CalendarAppShowcase";

/* ============================================================
   HERO SPECIFIC AGENDA (Overrides Defaults)
   ============================================================ */
const heroAgenda = [
  {
    label: "Objectives & Metrics",
    done: true,
    icon: "🎯",
    avatar: "/assets/avatars/1.png",
  },
  { label: "The News", done: true, icon: "📰" },
  {
    label: "S",
    done: false,
    icon: "🎉",
    hasHighlight: true,
    badgeText: "Deercember",
  },
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

        {/* ================================================================
            STACKED ASSEMBLY: underlying dark calendar app + floating card
            ----------------------------------------------------------------
            - CalendarAppShowcase now sizes itself intrinsically (it is no
              longer a `h-full`-filling layer), and its own floating date
              badge spills past its bottom edge by design — so this wrapper
              must NOT use overflow-hidden, or that badge gets clipped.
            - Because the calendar app has real intrinsic height, it never
              "disappears" on narrow screens the way an absolutely-
              positioned, height-less layer could; it always reserves its
              own space, and on small screens its side panels collapse via
              their own `hidden md:flex` / `hidden lg:flex` rules instead
              of the whole thing vanishing.
            - The floating Mac window sits in a later (higher z-index)
              layer, intentionally larger than the box beneath it and
              vertically centered with a translate, so its top and bottom
              edges spill past the underlying box's boundary — exactly the
              "floating card" effect from the Figma reference — instead of
              being clipped inside it.
        ================================================================ */}
        <div className="relative mt-16 sm:mt-20 w-full max-w-5xl mx-auto pb-8">
          {/* ---- Layer 1: underlying full calendar app (light theme) ---- */}
          {/* ---- Layer 1: underlying full calendar app (light theme) ---- */}
          {/* Add 'hidden xl:block' to hide it on LG and below */}
          <div className="hidden xl:block">
            <CalendarAppShowcase theme="light" />
          </div>

          {/* ---- Layer 2: floating Isolated Modal, overflowing top/bottom ---- */}
          <div
            className="
              relative xl:absolute left-1/2 top-1/2 z-20
              -translate-x-1/2 -translate-y-1/2
              mt-96 xl:mt-0
              -mb-96
              w-[92%] sm:w-[520px] md:w-[580px]
              scale-[0.86] sm:scale-90
            "
          >
            {/* Replaced Mac Window with just the isolated TeamMeetingCard.
                Added heavy shadows, border, and rounded corners to the card itself.
            */}
            <TeamMeetingCard
              className="flex-1 min-w-0 bg-white shadow-[0_45px_90px_-20px_rgba(26,16,51,0.45)] ring-1 ring-black/5 rounded-2xl overflow-hidden"
              agenda={heroAgenda}
              strikethroughDone={false}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
