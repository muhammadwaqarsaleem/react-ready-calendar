import React from "react";

/* ============================================================
   DYNAMIC TEAM MEETING CARD (REUSABLE)
   ============================================================ */

export const defaultHeroAvatars = [
  "/assets/avatars/1.png", "/assets/avatars/2.png", 
  "/assets/avatars/3.png", "/assets/avatars/4.png", "/assets/avatars/5.png"
];

export const defaultHeroAgenda = [
  { label: "Objectives & Metrics", done: true, icon: "🎯", avatar: "/assets/avatars/1.png" },
  { label: "The News", done: true, icon: "📰", hasHighlight: true, badgeText: "Shoutouts" },
  { label: "Shoutouts", done: false, icon: "🎉" },
  { label: "", done: false, icon: "" },
];

export const DefaultHeroBottom = () => {
  const metrics = [
    { label: "Newsletter Open Rate", last: "31%", current: "32%" },
    { label: "CAC", last: "$195", current: "$201" },
    { label: "LTV:CAC", last: "4:1", current: "3:1" },
    { label: "New Users", last: "4,338", current: "5,915" },
  ];
  return (
    <>
      <div className="rounded-xl bg-[#0E0B20] px-4 py-3 flex flex-col gap-3 mb-5 w-full">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-md overflow-hidden shrink-0 bg-gradient-to-tr from-[#E1513D] to-[#3B2080]">
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-[11px] text-white font-semibold">A Soundtrack to Marketing 🔥</p>
              <p className="text-[10px] text-white/60">Ready</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/60 shrink-0">
            <svg className="w-3.5 h-3.5 hover:text-white cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            <svg className="w-4 h-4 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.5 18.66 12.72c.42.24.54.84.3 1.32zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.239.54-.959.72-1.56.3z" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2 w-full mt-0.5">
          <svg className="w-3.5 h-3.5 text-white/60 hover:text-white cursor-pointer shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
          <div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden mx-1"><div className="h-full w-1/3 bg-white" /></div>
          <svg className="w-3.5 h-3.5 text-white/60 hover:text-white cursor-pointer shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
        </div>
      </div>

      <h4 className="text-sm font-bold text-[#1A1033] mb-2">🎯 Objectives & Metrics</h4>
      <div className="rounded-lg border border-[#E4E4E7] overflow-hidden text-[11px]">
        <div className="grid grid-cols-3 bg-[#F7F6F8] text-[#71717A] font-semibold px-3 py-1.5">
          <span></span><span>Last Month</span><span>This Month</span>
        </div>
        {metrics.map((m) => (
          <div key={m.label} className="grid grid-cols-3 px-3 py-1.5 border-t border-[#E4E4E7] text-[#1A1033]">
            <span className="font-medium">{m.label}</span><span>{m.last}</span><span>{m.current}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export function TeamMeetingCard({
  className = "flex-1 min-w-0 bg-white",
  headerGradient = "from-[#AD6B89] to-[#5416AB]",
  title = "👋 Team Meeting",
  time = "Nov 15th at 10 — 11am",
  schedule = "Weekly on Tuesday",
  joinButtonText = "Join Zoom",
  joinButtonIcon = "zoom", 
  avatars = defaultHeroAvatars,
  agenda = defaultHeroAgenda,
  bottomContent,
  strikethroughDone = true 
}) {
  const contentToRender = bottomContent !== undefined ? bottomContent : <DefaultHeroBottom />;

  // Smart Avatar wrapping logic for dynamic grids (handles 1, 2, 4, and 5)
  let topAvatars = [];
  let bottomAvatars = [];
  if (avatars.length >= 4) {
    topAvatars = avatars.slice(0, 2);
    bottomAvatars = avatars.slice(2, 5);
  } else {
    topAvatars = avatars;
  }

  return (
    <div className={className}>
      {/* Header */}
      <div className={`bg-gradient-to-br ${headerGradient} pt-2 px-4 sm:px-5 text-white`}>
        <div className="relative mb-4 flex min-h-[32px] items-center">
          <div className="absolute left-1/2 -translate-x-1/2">
            <button className="text-[11px] bg-transparent border border-white/30 rounded-full px-2.5 py-1 inline-flex items-center gap-1.5 hover:bg-white/10 transition-colors">
              ✓ Going
              <svg width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L4 4L7 1" /></svg>
            </button>
          </div>
          <div className="ml-auto flex items-center gap-2 text-white/70 text-xs">
            <span>‹</span><span>›</span><span>⤢</span><span>•••</span><span>✕</span>
          </div>
        </div>
        
        <div className="flex items-start justify-between gap-4">
          <div className="text-left">
            <h3 className="text-lg font-bold leading-tight">{title}</h3>
            <div className="mt-1.5 flex flex-wrap items-center text-[11px] text-white/80">
              <span>{time}</span>
              {schedule && (
                <span className="mt-1 flex w-full items-center gap-1.5 sm:mt-0 sm:ml-2 sm:w-auto">
                  <svg className="w-3 h-3 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" /><path d="M3 3v5h5" />
                  </svg>
                  <span>{schedule}</span>
                </span>
              )}
            </div>
            
            <div className="mt-3 inline-flex items-center bg-transparent border border-white/30 rounded-full overflow-hidden hover:bg-white/10 transition-colors">
              <button className="flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold text-white">
                {joinButtonIcon === 'meet' ? (
                  <svg className="w-3.5 h-3.5 text-[#00B14F]" viewBox="0 0 24 24" fill="currentColor"><path d="M18 10.48V7c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3.48l4 3.98v-11l-4 3.98z" /></svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-[#2D8CFF]" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" /></svg>
                )}
                {joinButtonText}
              </button>
              <div className="w-px h-4 bg-white/30"></div>
              <button className="px-2 py-1.5 text-white flex items-center justify-center">
                 <svg width="8" height="5" viewBox="0 0 8 5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L4 4L7 1" /></svg>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col items-center shrink-0 gap-2">
            <div className="flex flex-col items-center gap-1">
              <div className="flex justify-center gap-1">
                {topAvatars.map((src, idx) => (
                  <img key={`top-${idx}`} src={src} alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover" />
                ))}
              </div>
              {bottomAvatars.length > 0 && (
                <div className="flex justify-center gap-1">
                  {bottomAvatars.map((src, idx) => (
                    <img key={`bot-${idx}`} src={src} alt="" className="w-6 h-6 sm:w-7 sm:h-7 rounded-full object-cover" />
                  ))}
                </div>
              )}
            </div>
            <button className="bg-transparent border border-white/30 rounded-full px-3 py-1 text-[10px] text-white hover:bg-white/10 transition-colors">
              + Invite people
            </button>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-5 text-[11px] font-semibold">
          <div className="relative pb-2 text-white">
            Shared
            <div className="absolute bottom-0 left-0 w-full h-[2.5px] bg-white rounded-t-full"></div>
          </div>
          <div className="pb-2 text-white/60 flex items-center gap-1.5">
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
            Private
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 sm:px-5 sm:py-5 text-left flex-1">
        <h4 className="text-sm font-bold text-[#1A1033] mb-2">Agenda</h4>
        <ul className="divide-y divide-[#F0EFF0] mb-4">
          {agenda.map((item, i) => (
            <li key={i} className="flex items-center gap-2 py-1.5 text-[12px]">
              <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center text-[8px] shrink-0 ${item.done ? "bg-[#6C47FF] border-[#6C47FF] text-white" : "border-[#D4D4D8]"}`}>
                {item.done ? "✓" : ""}
              </span>

              {/* Dynamic Strikethrough Logic */}
              <span className={`flex flex-wrap sm:flex-nowrap items-center gap-2 ${item.done && strikethroughDone ? "line-through text-[#71717A]" : "text-[#1A1033]"}`}>
                {item.icon}
                {item.hasHighlight ? (
                  <span className="relative inline-flex items-center mt-3 mb-1">
                    <span className="bg-[#DDEBFF] px-2 py-0.5 rounded-l-md rounded-r-sm text-[#1A1033] leading-none no-underline">{item.label}</span>
                    <span className="absolute right-0 bottom-0 h-[calc(100%+0.5rem)] w-[2px] bg-[#2D8CFF]" />
                    <span className="absolute bottom-[calc(100%)] left-full -ml-[2px] translate-y-[1px] flex z-10">
                      <span className="px-2 py-[3px] text-[9px] font-bold rounded bg-[#2D8CFF] text-white shadow-sm leading-none">{item.badgeText}</span>
                    </span>
                  </span>
                ) : (
                  <span>{item.label}</span>
                )}
              </span>

              {item.avatar && (
                <img src={item.avatar} alt="Avatar" className="ml-auto w-6 h-6 rounded-full object-cover shrink-0" />
              )}
            </li>
          ))}
        </ul>
        
        {/* Dynamic Lower Section */}
        {contentToRender}
        
      </div>
    </div>
  );
}