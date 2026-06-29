import React from "react";
import Navbar from "../layout/Navbar";
import { AvatarStack, PillBadge } from "../ui/Shared";

/* ============================================================
   SMALL HELPERS SPECIFIC TO THE PRODUCT SCREENSHOT
   ============================================================ */

export function MacWindowFrame({ children, dark = false }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden border border-[#E4E4E7] shadow-2xl shadow-black/10 ${dark ? "bg-[#0E0B20]" : "bg-white"}`}
    >
      <div className="h-10 bg-[#F0EFF0] flex items-center px-4 gap-1.5 shrink-0">
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FF5F56" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#FFBD2E" }} />
        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#27C93F" }} />
      </div>
      {children}
    </div>
  );
}

function CalendarMiniGrid() {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const weeks = [
    [30, 31, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 1, 2, 3],
  ];
  return (
    <div className="rounded-xl border border-[#E4E4E7] bg-white p-2.5">
      <div className="flex items-center justify-between mb-2 px-0.5">
        <span className="text-[10px] text-[#71717A]">‹</span>
        <span className="text-[11px] font-semibold text-[#1A1033]">November, 2022</span>
        <span className="text-[10px] text-[#71717A]">›</span>
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {days.map((d, i) => (
          <span key={`d-${i}`} className="text-[9px] text-[#A1A1AA] font-medium">
            {d}
          </span>
        ))}
        {weeks.flat().map((n, i) => {
          const isToday = n === 15 && i > 7 && i < 21;
          return (
            <span
              key={`n-${i}`}
              className={`text-[9px] rounded-full w-4 h-4 mx-auto flex items-center justify-center ${
                isToday ? "bg-[#6C47FF] text-white font-semibold" : "text-[#52525B]"
              }`}
            >
              {n}
            </span>
          );
        })}
      </div>
    </div>
  );
}

function LeftSidebar() {
  return (
    <div className="hidden md:flex md:flex-col w-[210px] shrink-0 bg-[#F7F6F8] border-r border-[#E4E4E7] p-3 gap-4">
      <div>
        <p className="text-[10px] font-semibold text-[#A1A1AA] uppercase tracking-wide mb-2 px-1">
          Calendars
        </p>
        <ul className="space-y-1.5">
          {[
            { label: "Work", dot: "#6C47FF", active: true },
            { label: "Personal", dot: "transparent" },
            { label: "Team", dot: "transparent" },
          ].map((item) => (
            <li
              key={item.label}
              className={`flex items-center gap-2 px-2 py-1 rounded-md text-[11px] ${
                item.active ? "text-[#1A1033] font-semibold" : "text-[#71717A]"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full border border-[#D4D4D8]"
                style={{ backgroundColor: item.dot }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="text-[10px] font-semibold text-[#A1A1AA] uppercase tracking-wide mb-2 px-1">
          People
        </p>
        <div className="rounded-md bg-white border border-[#E4E4E7] px-2 py-1 text-[10px] text-[#A1A1AA] mb-2">
          Search for someone
        </div>
        <ul className="space-y-1.5">
          {[
            { label: "Deercember", dot: "#6C47FF" },
            { label: "Augustine", dot: "#FF6B47" },
            { label: "Junnie", dot: "transparent" },
          ].map((item) => (
            <li key={item.label} className="flex items-center gap-2 px-2 py-1 text-[11px] text-[#52525B]">
              <span
                className="w-2 h-2 rounded-full border border-[#D4D4D8]"
                style={{ backgroundColor: item.dot }}
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto">
        <CalendarMiniGrid />
      </div>
    </div>
  );
}

function TeamMeetingCard() {
  const agenda = [
    { label: "Objectives & Metrics", done: true, icon: "🎯" },
    { label: "The News", done: true, icon: "📰" },
    { label: "Shoutouts", done: false, icon: "🎉" },
    { label: "", done: false, icon: "" },
  ];

  const metrics = [
    { label: "Newsletter Open Rate", last: "31%", current: "32%" },
    { label: "CAC", last: "$195", current: "$201" },
    { label: "LTV:CAC", last: "4:1", current: "3:1" },
    { label: "New Users", last: "4,338", current: "5,915" },
  ];

  return (
    <div className="flex-1 min-w-0 bg-white">
      {/* Updated Gradient Header */}
      <div className="bg-gradient-to-br from-[#AD6B89] to-[#5416AB] pt-5 px-5 text-white">
        
        {/* Top Controls Navbar */}
        <div className="flex items-center justify-between mb-4">
          <button className="text-[11px] bg-transparent border border-white/30 rounded-full px-2.5 py-1 inline-flex items-center gap-1.5 hover:bg-white/10 transition-colors">
            ✓ Going
            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 1L4 4L7 1" />
            </svg>
          </button>
          <div className="flex items-center gap-2 text-white/70 text-xs">
            <span>‹</span>
            <span>›</span>
            <span>⤢</span>
            <span>•••</span>
            <span>✕</span>
          </div>
        </div>
        
        <div className="flex items-start justify-between gap-4">
          
          {/* Left Text Block */}
          <div className="text-left">
            <h3 className="text-lg font-bold leading-tight">👋 Team Meeting</h3>
            
            {/* Split Time/Date Line */}
            <div className="text-[11px] text-white/80 mt-1.5 flex items-center gap-1.5">
              <span>Nov 15th at 10 — 11am</span>
              {/* Refresh Icon */}
              <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                <path d="M3 3v5h5" />
              </svg>
              <span>Weekly on Tuesday</span>
            </div>
            
            {/* Fancy Join Zoom Button Block */}
            <div className="mt-3 inline-flex items-center bg-transparent border border-white/30 rounded-full overflow-hidden hover:bg-white/10 transition-colors">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white">
                <svg className="w-3.5 h-3.5 text-[#2D8CFF]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
                </svg>
                Join Zoom
              </button>
              {/* Vertical separator */}
              <div className="w-px h-4 bg-white/30"></div>
              <button className="px-2 py-1.5 text-white flex items-center justify-center">
                 <svg width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 1L4 4L7 1" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Avatar & Invite Block */}
          <div className="flex flex-col items-center shrink-0 gap-2">
            <div className="flex flex-col items-center gap-1">
              {/* Top Row: 2 Avatars */}
              <div className="flex justify-center gap-1">
                <img src="/assets/avatars/1.png" alt="" className="w-7 h-7 rounded-full object-cover" />
                <img src="/assets/avatars/2.png" alt="" className="w-7 h-7 rounded-full object-cover" />
              </div>
              {/* Bottom Row: 3 Avatars */}
              <div className="flex justify-center gap-1">
                <img src="/assets/avatars/3.png" alt="" className="w-7 h-7 rounded-full object-cover" />
                <img src="/assets/avatars/4.png" alt="" className="w-7 h-7 rounded-full object-cover" />
                <img src="/assets/avatars/5.png" alt="" className="w-7 h-7 rounded-full object-cover" />
              </div>
            </div>
            {/* Centered Invite Button */}
            <button className="bg-transparent border border-white/30 rounded-full px-3 py-1 text-[10px] text-white hover:bg-white/10 transition-colors">
              + Invite people
            </button>
          </div>
        </div>

        {/* Tabs Block (Shared / Private) */}
        <div className="mt-5 flex items-center gap-5 text-[11px] font-semibold">
          <div className="relative pb-2 text-white">
            Shared
            <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white rounded-t-full"></div>
          </div>
          <div className="pb-2 text-white/60 flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            Private
          </div>
        </div>
      </div>

      <div className="px-5 py-5">
        <h4 className="text-sm font-bold text-[#1A1033] mb-2">Agenda</h4>
        <ul className="divide-y divide-[#F0EFF0] mb-4">
          {agenda.map((item, i) => (
            <li key={i} className="flex items-center gap-2 py-1.5 text-[12px] text-[#1A1033]">
              <span
                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[8px] ${
                  item.done ? "bg-[#6C47FF] border-[#6C47FF] text-white" : "border-[#D4D4D8]"
                }`}
              >
                {item.done ? "✓" : ""}
              </span>
              <span>{item.icon} {item.label}</span>
            </li>
          ))}
        </ul>

        <div className="rounded-xl bg-[#0E0B20] px-4 py-3 flex items-center gap-3 mb-5">
          <span className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white text-xs">▶</span>
          <div className="flex-1">
            <p className="text-[11px] text-white font-semibold">A Soundtrack to Marketing 🔥</p>
            <div className="h-1 bg-white/20 rounded-full mt-1.5 overflow-hidden">
              <div className="h-full w-1/3 bg-[#6C47FF]" />
            </div>
          </div>
        </div>

        <h4 className="text-sm font-bold text-[#1A1033] mb-2">🎯 Objectives & Metrics</h4>
        <div className="rounded-lg border border-[#E4E4E7] overflow-hidden text-[11px]">
          <div className="grid grid-cols-3 bg-[#F7F6F8] text-[#71717A] font-semibold px-3 py-1.5">
            <span></span>
            <span>Last Month</span>
            <span>This Month</span>
          </div>
          {metrics.map((m) => (
            <div
              key={m.label}
              className="grid grid-cols-3 px-3 py-1.5 border-t border-[#E4E4E7] text-[#1A1033]"
            >
              <span className="font-medium">{m.label}</span>
              <span>{m.last}</span>
              <span>{m.current}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RightSidebar() {
  const tasks = [
    { title: "Follow up on newsletter", sub: "Proj Kickoff" },
    { title: "Finalize OKRs document", sub: "👋 Team Meeting" },
    { title: "Follow up on compensation", sub: "Febby <> Junnie" },
    { title: "Finalize Q4 Objectives", sub: "Augustine <> Febby" },
    { title: "Update team meeting", sub: "⟲ Weekly Retro" },
  ];
  return (
    <div className="hidden lg:flex lg:flex-col w-[220px] shrink-0 bg-white border-l border-[#E4E4E7] p-4">
      <p className="text-[11px] font-semibold text-[#1A1033] mb-3">Inbox Complete</p>
      <ul className="space-y-3">
        {tasks.map((t) => (
          <li key={t.title}>
            <p className="text-[11px] font-semibold text-[#1A1033] leading-tight">{t.title}</p>
            <p className="text-[10px] text-[#71717A] mt-0.5">{t.sub}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

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
                {/* Highlight Background */}
                <span className="bg-[#DDEBFF] px-3 py-1 rounded-l-xl rounded-r-sm">
                  to meet
                </span>
                {/* Line anchored to bottom-right, extending upward */}
                <span className="absolute right-0 bottom-0 h-[calc(100%+0.25rem)] w-[2.5px] bg-[#7366FE]" />
                {/* Badge anchored to the top of the line */}
                <span className="absolute bottom-[calc(80%)] left-full -ml-[2.5px] translate-y-[1px] flex">
                  <PillBadge>Febby</PillBadge>
                </span>
              </span>
            </span>

            {/* ================= DESKTOP VIEW ================= */}
            <span className="hidden sm:inline-flex items-start justify-center gap-3">
              <span className="self-center mt-1">you</span>
              <span className="relative inline-flex items-center">
                {/* Highlight Background */}
                <span className="bg-[#DDEBFF] px-3 py-1 rounded-l-xl rounded-r-sm">
                  need to meet
                </span>
                {/* Line anchored to bottom-right, extending upward */}
                <span className="absolute right-0 bottom-0 h-[calc(100%+0.5rem)] w-[2.5px] bg-[#7366FE]" />
                {/* Badge anchored to the top of the line */}
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
          <br />
          breathing multiplayer workspace for teams
          <br />
          to instantly make your meetings better.
        </p>

        <div className="mt-12 w-full max-w-5xl mx-auto">
          <MacWindowFrame>
            <div className="flex">
              <LeftSidebar />
              <TeamMeetingCard />
              <RightSidebar />
            </div>
          </MacWindowFrame>
        </div>
      </section>
    </div>
  );
}