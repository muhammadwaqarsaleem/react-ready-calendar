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
  /* M 68 1: Start at top-center 
     C 40 0, 10 10, 0 22: Smoother entry into the left curve
     C 0 34, 20 42, 60 42: Bottom curve
     C 100 42, 120 34, 120 22: Right side curve
     C 120 10, 80 2, 60 8: End tip 
  */
  d="M 68 1 C 40 0, 10 10, 4 22 C 0 34, 20 42, 60 42 C 100 42, 120 34, 120 22 C 120 10, 80 2, 60 8"
  stroke="#5242FF"
  strokeWidth="2.4"
  strokeLinecap="round"
  strokeLinejoin="round"
  fill="none"
/>
    </svg>
  </span>
);

// ─── Bento Card ───────────────────────────────────────────────────────────────
const BentoCard = ({
  eyebrow,
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

    {/* OUTER MASK: Handles the clipping boundary for the whole card */}
    <div className="relative w-full h-full flex flex-col rounded-[28px] overflow-hidden shadow-xl shadow-black/10">
      
      {/* LAYER 1: Background & Borders. Separated so they don't clip the inner content. */}
      <div className={`absolute inset-0 rounded-[28px] ${gradientClass}`} />

      {/* LAYER 2: Content (Text & Image). Stacked on top of borders via z-10 */}
      <div className="relative z-10 flex flex-col w-full h-full">
        <div className="relative z-10 px-8 pt-8 pb-2 shrink-0">
          {eyebrow && (
            <h3 className="text-[20px] font-normal text-white mb-3">
              {eyebrow}
            </h3>
          )}
          <p className="text-[13.5px] text-white leading-relaxed max-w-xl">
            {description}
          </p>
        </div>

        <div className="relative w-full flex-1 min-h-[180px] mt-4">
          <img
            src={imageSrc}
            alt={imageAlt}
            className={`absolute top-0 h-full w-full object-cover object-top ${imageClass}`}
            
          />
        </div>
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
        <h2 className="text-[42px] sm:text-5xl lg:text-[56px] font-extrabold text-[#333333] leading-[1.15] tracking-tight mb-5">
          Leave <OvalAccent /> meeting
          <br />
          feeling Ready
        </h2>
        <p className="text-[18px] text-[#333333] max-w-md mx-auto leading-relaxed">
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
          lg:grid lg:grid-cols-14 lg:gap-6 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden
        "
      >
        {/* ── Card 1 · Time Travel ── */}
        <BentoCard
          eyebrow="Time Travel"
          description={
            <>
              Ready connects your meetings together. Jump back in time to see what was discussed or leap forward to get a head start.
            </>
          }
          imageSrc="/assets/ui-timetravel.png"
          imageAlt="Time travel meeting UI showing calendar event"
          gradientClass="bg-gradient-to-br from-[#cea97d] via-[#ad7a92] to-[#9669cb]"
          className="shrink-0 w-[80vw] snap-center min-h-[380px] lg:w-auto lg:col-span-7 lg:col-start-2 lg:row-start-1"
          accentEl={
            <AccentLines className="hidden lg:block absolute top-28 -right-14 rotate-180 z-20 opacity-100" />
          }
          imageClass="left-8 w-full"
        />

        {/* ── Card 2 · Threads ── */}
        <BentoCard
          eyebrow="Threads"
          description={
            <>
              Ready organizes everything for you in Threads. Never worry about folders again.
            </>
          }
          imageSrc="/assets/ui-threads.png"
          imageAlt="Threads sidebar UI showing tasks and inbox"
          gradientClass="bg-gradient-to-r from-[#3b1096] to-[#a571a1] border-t-[28px] border-t-[#55269c] border-b-[28px] border-b-[#55269c]"
          className="shrink-0 w-[80vw] snap-center min-h-[480px] lg:w-auto lg:col-span-3 lg:col-start-6 lg:row-start-2 lg:row-span-1 lg:mt-2 lg:max-w-[420px] lg:mx-auto"
          accentEl={
            <AccentLines className="hidden lg:block absolute -top-4 -left-14 -rotate-30 z-20 opacity-100" />
          }
          imageClass="left-8 w-full"
        />

        {/* ── Card 3 · Task Sidebar ── */}
        <BentoCard
          eyebrow="Task Sidebar"
          description={
            <>
              See all your tasks and action items from across your meetings. All in one place, right alongside your calendar.
            </>
          }
          imageSrc="/assets/ui-sidebar.png"
          imageAlt="Task sidebar showing inbox and calendar view"
          gradientClass="bg-gradient-to-r from-[#9b6cb6] to-[#5e2d9a] border-l-[28px] border-l-[#7b4096] border-r-[28px] border-r-[#7b4096]"
          className="shrink-0 w-[80vw] snap-center min-h-[380px] lg:w-auto lg:col-span-3 lg:col-start-9 lg:row-start-1 lg:row-span-1 lg:translate-y-44"
          accentEl={
            <AccentLines className="hidden lg:block absolute -bottom-16 -left-2 -rotate-90 z-20 opacity-100" />
          }
          imageClass="left-0 w-[85%] md:w-[90%]"
        />
      </div>
    </section>
  );
}