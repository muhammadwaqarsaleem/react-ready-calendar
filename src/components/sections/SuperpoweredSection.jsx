import React from 'react';
import { TeamMeetingCard } from '../ui/CalendarAppUI';

/* ============================================================
   CUSTOM INLINE HIGHLIGHT BADGE (Figma Precision)
   ============================================================ */
export function HighlightBadge({ text, badgeText, theme = "blue" }) {
  const themes = {
    green: { bg: "bg-[#E6F4EA]", line: "bg-[#27C93F]", badge: "bg-[#27C93F]" },
    blue: { bg: "bg-[#DDEBFF]", line: "bg-[#5242FF]", badge: "bg-[#5242FF]" },
    orange: { bg: "bg-[#FFE8E0]", line: "bg-[#FF6B47]", badge: "bg-[#FF6B47]" },
  };
  const t = themes[theme] || themes.blue;

  return (
    <span className="relative inline-flex items-center mt-3 mb-1">
      <span className={`${t.bg} px-1.5 py-0.5 rounded-l-md rounded-r-sm text-[#1A1033] leading-none no-underline`}>
        {text}
      </span>
      <span className={`absolute right-0 bottom-0 h-[calc(100%+0.25rem)] w-[2px] ${t.line}`} />
      <span className="absolute bottom-[calc(100%)] left-full -ml-[2px] translate-y-[1px] flex z-10">
        <span className={`px-2 py-[3px] text-[9px] font-bold rounded ${t.badge} text-white shadow-sm leading-none whitespace-nowrap`}>
          {badgeText}
        </span>
      </span>
    </span>
  );
}

/* ============================================================
   CUSTOM BOTTOM CONTENT SLOTS (From Figma Screenshots)
   ============================================================ */

const Card1Bottom = () => (
  <div className="mt-4 pt-4 border-t border-[#E4E4E7]">
    <h4 className="text-sm font-bold text-[#1A1033] mb-2 flex items-center gap-1">👋 Check-in</h4>
    <div className="space-y-3 text-[11px] leading-relaxed text-[#1A1033]">
      <p>
        <span className="font-bold">Team:</span> Feeling great about the upcoming launch! All systems go.
      </p>
    </div>
    
    <h4 className="text-sm font-bold text-[#1A1033] mb-2 mt-4 flex items-center gap-1">🤔 Blockers</h4>
    <div className="space-y-3 text-[11px] leading-relaxed text-[#1A1033]">
      <p>
        <span className="font-bold">Design:</span> Waiting on final copy for the landing page before we can ship the final assets.
      </p>
    </div>
  </div>
);

const Card2Bottom = () => (
  <>
    {/* Media Player */}
    <div className="rounded-xl bg-[#0E0B20] px-4 py-3 flex flex-col gap-3 mb-5 w-full mt-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative w-9 h-9 rounded-md overflow-hidden shrink-0 bg-gradient-to-tr from-[#E1513D] to-[#3B2080]">
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-2.5 h-2.5 text-white fill-current" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></svg>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[11px] text-white font-semibold">A Soundtrack to Marketing 🔥</p>
            <p className="text-[10px] text-white/60">Ready</p>
          </div>
        </div>
        <div className="flex items-center gap-3 text-white/60 shrink-0">
          <svg className="w-3.5 h-3.5 hover:text-white cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/></svg>
          <svg className="w-4 h-4 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.24 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.001 10.5 18.66 12.72c.42.24.54.84.3 1.32zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.6.18-1.2.72-1.38 4.2-1.26 11.28-1.02 15.721 1.62.539.3.719 1.02.419 1.56-.239.54-.959.72-1.56.3z" /></svg>
        </div>
      </div>
      <div className="flex items-center gap-2 w-full mt-0.5">
        <svg className="w-3.5 h-3.5 text-white/60 hover:text-white cursor-pointer shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
        <div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden mx-1"><div className="h-full w-1/3 bg-white" /></div>
        <svg className="w-3.5 h-3.5 text-white/60 hover:text-white cursor-pointer shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
      </div>
    </div>
    
    {/* Metrics Table with Overlapping Badges */}
    <h4 className="text-sm font-bold text-[#1A1033] mb-2 flex items-center gap-1">🎯 Objectives & Metrics</h4>
    <div className="rounded-lg border border-[#E4E4E7] overflow-hidden text-[11px]">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#F7F6F8] text-[#71717A] border-b border-[#E4E4E7]">
            <th className="px-3 py-1.5 font-semibold"></th>
            <th className="px-3 py-1.5 font-semibold">Last Month</th>
            <th className="px-3 py-1.5 font-semibold">This Month</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#E4E4E7]">
            <td className="px-3 py-1.5 font-medium text-[#1A1033]">Newsletter Open Rate</td>
            <td className="px-3 py-1.5 text-[#71717A]">
              <HighlightBadge text="34%" badgeText="Julia" theme="green" />
            </td>
            <td className="px-3 py-1.5 text-[#1A1033]">49%</td>
          </tr>
          <tr className="border-b border-[#E4E4E7]">
            <td className="px-3 py-1.5 font-medium text-[#1A1033]">CAC</td>
            <td className="px-3 py-1.5 text-[#71717A]">$195</td>
            <td className="px-3 py-1.5 text-[#1A1033]">
              <HighlightBadge text="$201" badgeText="Augustine" theme="blue" />
            </td>
          </tr>
          <tr className="border-b border-[#E4E4E7]">
            <td className="px-3 py-1.5 font-medium text-[#1A1033]">LTV:CAC</td>
            <td className="px-3 py-1.5 text-[#71717A]">4:1</td>
            <td className="px-3 py-1.5 text-[#1A1033]">3:1</td>
          </tr>
          <tr>
            <td className="px-3 py-1.5 font-medium text-[#1A1033]">New Users</td>
            <td className="px-3 py-1.5 text-[#71717A]">4,338</td>
            <td className="px-3 py-1.5 text-[#1A1033]">5,915</td>
          </tr>
        </tbody>
      </table>
    </div>
  </>
);

const Card3Bottom = () => (
  <div className="mt-4 pt-4 border-t border-[#E4E4E7]">
    <h4 className="text-sm font-bold text-[#1A1033] mb-2 flex items-center gap-1">👋 Check-in</h4>
    <div className="space-y-3 text-[11px] leading-relaxed text-[#1A1033]">
      <p>
        <span className="font-bold">Febby:</span> Feeling green. <HighlightBadge text="Glad the webinar is finished." badgeText="Febby" theme="orange" />
      </p>
      <p>
        <span className="font-bold">Augustine:</span> Yellow. Falling behind on the compensation overhaul.
      </p>
    </div>
    
    <h4 className="text-sm font-bold text-[#1A1033] mb-2 mt-4 flex items-center gap-1">🤔 What's top of mind?</h4>
    <div className="space-y-3 text-[11px] leading-relaxed text-[#1A1033]">
      <p>
        <span className="font-bold">Febby:</span> Pretty excited about tackling the new holiday campaign. Feels like we've got more time this year. I've got some initial ideas I already start on:
      </p>
      
      {/* Figma blocks representing files */}
      <div className="w-full h-10 bg-white rounded border border-[#E4E4E7] mt-2 flex items-center px-3 relative overflow-hidden shadow-sm">
        <span className="text-[#1A1033]/60 text-[10px] font-bold mr-3 z-10">Figma</span>
        <div className="flex items-center gap-1.5 opacity-90">
          <div className="w-6 h-5 rounded bg-gradient-to-br from-[#1FA37A] to-[#0E6B57]"></div>
          <div className="w-6 h-5 rounded bg-gradient-to-br from-[#FC7064] to-[#4F4FBA]"></div>
          <div className="w-6 h-5 rounded bg-gradient-to-br from-[#1F8FD9] to-[#3A3A9E]"></div>
          <div className="w-6 h-5 rounded bg-gradient-to-br from-[#6B4FD9] to-[#A23ED9]"></div>
          <div className="w-6 h-5 rounded bg-gradient-to-br from-[#F27121] to-[#E94057]"></div>
        </div>
      </div>
    </div>
  </div>
);

const Card4Bottom = () => (
  <div className="mt-4">
    <div className="rounded-lg border border-[#E4E4E7] overflow-hidden text-[11px]">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#F7F6F8] text-[#71717A] border-b border-[#E4E4E7]">
            <th className="px-3 py-1.5 font-semibold"></th>
            <th className="px-3 py-1.5 font-semibold">Last Quarter</th>
            <th className="px-3 py-1.5 font-semibold">This Quarter</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[#E4E4E7]">
            <td className="px-3 py-1.5 font-medium text-[#1A1033]">ARPU</td>
            <td className="px-3 py-1.5 text-[#71717A]">
              <HighlightBadge text="$210" badgeText="Febby" theme="orange" />
            </td>
            <td className="px-3 py-1.5 text-[#1A1033]">$225</td>
          </tr>
          <tr className="border-b border-[#E4E4E7]">
            <td className="px-3 py-1.5 font-medium text-[#1A1033]">Churn</td>
            <td className="px-3 py-1.5 text-[#71717A]">2.7%</td>
            <td className="px-3 py-1.5 text-[#1A1033]">
              <HighlightBadge text="2.8%" badgeText="Augustine" theme="blue" />
            </td>
          </tr>
          <tr>
            <td className="px-3 py-1.5 font-medium text-[#1A1033]">Total Users</td>
            <td className="px-3 py-1.5 text-[#71717A]">32,599</td>
            <td className="px-3 py-1.5 text-[#1A1033]">68,402</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <h4 className="text-sm font-bold text-[#1A1033] mt-4 flex items-center gap-1">🚀 Team Spotlight (Marketing)</h4>
    {/* Geometric Abstract Shapes */}
    <div className="relative w-full h-20 bg-[#2B0E44] rounded-lg mt-2 overflow-hidden shadow-inner flex items-center justify-center">
      <div className="absolute top-0 left-0 w-3/4 h-full bg-gradient-to-r from-[#8A2387] to-[#E94057] transform origin-bottom-left -skew-x-[25deg]"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-[#5242FF] to-[#A23ED9] transform origin-top-right skew-x-[35deg] mix-blend-screen opacity-90"></div>
      <div className="absolute -bottom-6 -right-2 w-20 h-20 bg-[#FF6B47] rotate-45 opacity-80"></div>
    </div>
  </div>
);

/* ============================================================
   THE 4 DYNAMIC CARDS CONFIGURATION
   ============================================================ */

const CARD_DATA = [
  {
    id: 'standup',
    headerGradient: 'from-[#085f7d] to-[#179363]',
    title: 'Daily Standup',
    time: 'Nov 14th at 9 — 9:30am',
    schedule: 'Every Mon, Wed, Fri',
    joinButtonText: 'Join Zoom',
    joinButtonIcon: 'zoom',
    avatars: ["/assets/avatars/1.png", "/assets/avatars/2.png", "/assets/avatars/3.png", "/assets/avatars/4.png"],
    agenda: [
      { label: 'Yesterday', done: true, icon: '🗓️' },
      { label: "Today's plan", done: true, icon: '🎯' },
      { label: 'Blockers', done: false, icon: '🛑' },
    ],
    bottomContent: <Card1Bottom />
  },
  {
    id: 'team-meeting',
    headerGradient: 'from-[#AD6B89] to-[#5416AB]',
    title: '👋 Team Meeting',
    time: 'Nov 15th at 10 — 11am',
    schedule: 'Weekly on Tuesday',
    joinButtonText: 'Join Zoom',
    joinButtonIcon: 'zoom',
    avatars: ["/assets/avatars/1.png", "/assets/avatars/2.png", "/assets/avatars/3.png", "/assets/avatars/4.png", "/assets/avatars/5.png"],
    agenda: [
      { label: 'Objectives & Metrics', done: true, icon: '🎯' },
      { label: "Roundtable Updates + What's Next", done: true, icon: '💬', hasHighlight: true, badgeText: "Deercember" },
      { label: 'Blockers', done: false, icon: '🛑' },
      { label: 'Shout-outs', done: false, icon: '🎉' },
      { label: 'Next steps', done: false, icon: '🚶' },
    ],
    bottomContent: <Card2Bottom />
  },
  {
    id: 'one-on-one',
    headerGradient: 'from-[#52A597] to-[#3a3494]',
    title: 'Febby <> Augustine',
    time: 'Nov 15th at 1 — 2pm',
    schedule: 'Weekly on Thursday',
    joinButtonText: 'Join Meet',
    joinButtonIcon: 'meet',
    avatars: ["/assets/avatars/1.png", "/assets/avatars/2.png"],
    agenda: [
      { label: 'Check-in', done: true, icon: '👋' },
      { label: "What's top-of-mind?", done: true, icon: '🤔' },
      { label: 'Progress on your goals', done: false, icon: '📊', hasHighlight: true, badgeText: 'Deercember' },
      { label: 'Feedback', done: false, icon: '💬' },
      { label: 'Next steps', done: false, icon: '🚶' },
    ],
    bottomContent: <Card3Bottom />
  },
  {
    id: 'all-hands',
    headerGradient: 'from-[#57279b] to-[#57279b]',
    title: 'All Hands 👋',
    time: 'Nov 17th at 1 — 2pm',
    schedule: 'Monthly on Thursday',
    joinButtonText: 'Join Zoom',
    joinButtonIcon: 'zoom',
    // 5 avatars to perfectly trigger the 2-top, 3-bottom grid you requested
    avatars: ["/assets/avatars/1.png", "/assets/avatars/2.png", "/assets/avatars/3.png", "/assets/avatars/4.png", "/assets/avatars/5.png"],
    agenda: [
      { label: 'Objectives & Metrics', done: true, icon: '📈' },
      { label: 'Team Spotlight (Marketing)', done: true, icon: '🚀' },
      { label: 'Learnings & Insights', done: false, icon: '🧠' },
      { label: 'Showcase', done: false, icon: '📺' },
      { label: 'Q&A', done: false, icon: '❓' },
    ],
    bottomContent: <Card4Bottom />
  },
];

/* ============================================================
   SECTION ASSEMBLY & CAROUSEL
   ============================================================ */

function MeetingCardWrapper({ card }) {
  return (
    <div 
      // Adjusted desktop width to lg:w-[380px]. 
      // 4 cards * 380px + gaps = ~1592px. 
      // This guarantees the outer cards "seep out" off a standard 1440px desktop screen.
      className="group relative flex flex-col shrink-0 w-[85vw] sm:w-[340px] lg:w-[380px] snap-center rounded-2xl bg-white shadow-[0_20px_45px_-15px_rgba(26,16,51,0.25)] ring-1 ring-black/5 transition-all duration-300 md:hover:-translate-y-4 md:hover:z-20 overflow-hidden"
    >
       <TeamMeetingCard {...card} className="w-full h-full bg-white flex flex-col" />
    </div>
  );
}

export default function SuperpoweredSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F3EF] py-5 md:py-10">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl">
          A superpowered 
          <span className="sm:hidden"> </span>
          <span className="hidden sm:block" aria-hidden="true" />
           meeting in every 
           <span className="sm:hidden"> </span>
          <span className="hidden sm:block" aria-hidden="true" />
            calendar event
        </h2>
        <p className="mt-4 text-base text-[#333333] sm:text-lg">
          Calendar events in Ready are instantly transformed
          <span className="sm:hidden"> </span>
          <span className="hidden sm:block" aria-hidden="true" />
           into collaborative meeting spaces designed to create
          <span className="sm:hidden"> </span>
          <span className="hidden sm:block" aria-hidden="true" />
           the perfect meeting in seconds.
        </p>
      </div>

      {/* The Scroll Wrapper:
        - Swapped overlapping margins for uniform `gap-4 lg:gap-6`.
        - `lg:justify-center` keeps the entire track perfectly centered on desktop, forcing the overflow to the edges.
      */}
      <div
        className="
          mt-16 flex snap-x snap-mandatory px-6 pb-10 pt-4 gap-4 lg:gap-6 lg:justify-center
          overflow-x-auto lg:overflow-x-hidden
          overflow-y-visible
          [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
        "
      >
        {CARD_DATA.map((card) => (
          <MeetingCardWrapper key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}