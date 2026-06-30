import { AccentLines } from "../ui/Accents";

// ─── Hand-drawn SVG oval around "every" ──────────────────────────────────────
const OvalAccent = () => (
  <span className="relative inline-block px-1">
    <span className="relative z-10">every</span>
    <svg
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ width: "calc(100% + 20px)", height: "calc(100% + 14px)" }}
      viewBox="0 0 120 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Slightly imperfect ellipse path for hand-drawn feel */}
      <path
        d="M8 22 C6 10, 28 2, 60 2 C92 2, 116 10, 114 22 C116 34, 92 42, 60 42 C28 42, 6 34, 8 22 Z"
        stroke="#5242FF"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        pathLength="1"
        strokeDasharray="0.04 0.01 0.95"
      />
    </svg>
  </span>
);

// ─── Bento Card ───────────────────────────────────────────────────────────────
const BentoCard = ({
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  gradientClass,
  className = "",
  accentEl,
  imageClass = "left-0 w-full", // NEW PROP: Defaults to full width
}) => (
  <div className={`relative flex flex-col ${className}`}>
    {accentEl}

    <div
      className={`w-full h-full flex flex-col rounded-[28px] overflow-hidden shadow-xl shadow-black/10 ${gradientClass}`}
    >
      <div className="relative z-10 px-8 pt-8 pb-2 shrink-0">
        {eyebrow && (
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/50 mb-3">
            {eyebrow}
          </p>
        )}
        <h3 className="text-[22px] font-bold text-white leading-snug mb-2">
          {title}
        </h3>
        <p className="text-[13.5px] text-white/70 leading-relaxed max-w-xs">
          {description}
        </p>
      </div>

      <div className="relative w-full flex-1 min-h-[180px] mt-4">
        <img
          src={imageSrc}
          alt={imageAlt}
          // The imageClass prop now dictates the horizontal positioning and width
          className={`absolute top-0 h-full object-cover object-left-top ${imageClass}`}
        />
      </div>
    </div>
  </div>
);

// ─── Section ──────────────────────────────────────────────────────────────────
export default function FeelReadySection() {
  return (
    <section
      id="feel-ready"
      className="
        relative w-full py-24 px-5 sm:px-10 lg:px-16
        bg-[#F5F3EF]
        bg-[radial-gradient(#D4D4D8_1.5px,transparent_1.5px)]
        [background-size:24px_24px]
        overflow-x-clip
      "
    >
      {/* ── Header ── */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <h2 className="text-[42px] sm:text-5xl lg:text-[56px] font-extrabold text-[#1A1033] leading-[1.15] tracking-tight mb-5">
          Leave <OvalAccent /> meeting
          <br />
          feeling Ready
        </h2>
        <p className="text-[18px] text-[#71717A] max-w-md mx-auto leading-relaxed">
          Never lose track of a decision or forget a follow up. Ready keeps you
          and your team organized before, during, and after every meeting.
        </p>
      </div>

      {/* ── Bento Grid ──
          Mobile  : horizontal scroll-snap carousel
          Desktop : 12-col CSS grid with staggered placement
      ───────────────────────────────────────────────────── */}
      <div
        className="
          flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 w-full
          lg:grid lg:grid-cols-12 lg:gap-6 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden
        "
      >
        {/* ── Card 1 · Time Travel ── */}
        <BentoCard
          eyebrow="Time Travel"
          title="Ready connects your meetings together."
          description="Jump back in time to see what was discussed or leap forward to get a head start."
          imageSrc="/assets/ui-timetravel.png"
          imageAlt="Time travel meeting UI showing calendar event"
          gradientClass="bg-gradient-to-br from-[#F5C4A1] via-[#C9A8E2] to-[#9B82E8]"
          className="shrink-0 w-[80vw] snap-center min-h-[380px] lg:w-auto lg:col-span-5 lg:col-start-3 lg:row-start-1"
          accentEl={
            <AccentLines className="hidden lg:block absolute top-28 -right-14 rotate-180 z-20 opacity-100" />
          }
          // NEW: Aligns with px-8 text, bleeds off the right edge
          imageClass="left-8 w-full"
        />

        {/* ── Card 2 · Threads ── */}
        <BentoCard
          eyebrow="Threads"
          title="Ready organizes everything for you in Threads."
          description="Never worry about folders again."
          imageSrc="/assets/ui-threads.png"
          imageAlt="Threads sidebar UI showing tasks and inbox"
          gradientClass="bg-gradient-to-br from-[#5B3FA6] via-[#6B4AC7] to-[#3B2080]"
          className="shrink-0 w-[80vw] snap-center min-h-[380px] lg:w-auto lg:col-span-3 lg:col-start-5 lg:row-start-2 lg:mt-2"
          accentEl={
            <AccentLines className="hidden lg:block absolute -top-2 -left-14 -rotate-30 z-20 opacity-100" />
          }
          // NEW: Aligns with px-8 text, bleeds off the right edge
          imageClass="left-8 w-full"
        />

        {/* ── Card 3 · Task Sidebar ── */}
        <BentoCard
          eyebrow="Task Sidebar"
          title="See all your tasks and action items from across your meetings."
          description="All in one place, right alongside your calendar."
          imageSrc="/assets/ui-sidebar.png"
          imageAlt="Task sidebar showing inbox and calendar view"
          gradientClass="bg-gradient-to-b from-[#7B5FD4] via-[#5A3FB5] to-[#2D1B69]"
          className="shrink-0 w-[80vw] snap-center min-h-[380px] lg:w-auto lg:col-span-4 lg:col-start-8 lg:row-start-1 lg:row-span-1 lg:translate-y-44"
          accentEl={
            <AccentLines className="hidden lg:block absolute -bottom-16 -left-17 -rotate-90 z-20 opacity-100" />
          }
          // NEW: Flush left, stops before the right edge
          imageClass="left-0 w-[85%] md:w-[90%]"
        />
      </div>
    </section>
  );
}
