import React from "react";
import { AvatarStack } from "./Shared";

/* ============================================================
   THEME TOKENS
   ------------------------------------------------------------
   theme="dark"  -> matches the provided screenshot exactly:
                    near-black app shell (#232526), the time-grid
                    and mini calendar sit on a slightly lighter
                    dark grey panel (#37393b), white primary text,
                    faint grey secondary text.
   theme="light" -> white app shell, near-black primary text,
                    light-black/grey secondary text. The time-grid
                    and mini calendar become light-grey panels that
                    float above the white shell (shadow + inset
                    margin) rather than just being flat-embedded,
                    per spec.
   ============================================================ */
const THEMES = {
  dark: {
    isLight: false,
    outerBg: "bg-[#232526]",
    outerBorder: "border-[#000000]/40",
    navbarBorder: "border-[#000000]/30",
    panelBg: "bg-[#37393B]",
    panelFloating: "", // no extra floating treatment in dark mode — flat embedded panel
    textPrimary: "text-white",
    textSecondary: "text-[#9A9CA0]",
    hairline: "border-[#7C807C]/30",
    chipBorder: "border-[#000000]/20",
    inputBg: "bg-transparent",
    inputBorder: "border-[#4A4C4F]",
    iconBtnBorder: "border-[#4A4C4F]",
    iconBtnActiveBg: "bg-[#4A4C4F]",
    badgeRing: "#232526",
    // ISSUE 8: PST pill background — was bg-black/20 (black-based) inline in
    // MiddleSection. Moved into the theme so it's adjustable per-theme and
    // documented in one place. Light-grey now, see pstPillBg below.
    pstPillBg: "bg-white/15",
    tones: {
      blue: { bg: "#585CB7", ring: "#4A4DA0" },
      orange: { bg: "#BD5A4C", ring: "#A24B3F" },
      green: { bg: "#0E7A68", ring: "#0B6354" },
    },
  },
  light: {
    isLight: true,
    outerBg: "bg-white",
    outerBorder: "border-[#E4E4E7]",
    navbarBorder: "border-[#E4E4E7]",
    panelBg: "bg-[#F4F4F5]",
    panelFloating:
      "shadow-[0_8px_24px_-8px_rgba(26,16,51,0.18)] ring-1 ring-black/5 m-2",
    textPrimary: "text-[#18181B]",
    textSecondary: "text-[#71717A]",
    hairline: "border-[#E4E4E7]",
    chipBorder: "border-black/10",
    inputBg: "bg-white",
    inputBorder: "border-[#E4E4E7]",
    iconBtnBorder: "border-[#E4E4E7]",
    iconBtnActiveBg: "bg-[#E4E4E7]",
    badgeRing: "#FFFFFF",
    pstPillBg: "bg-black/5",
    tones: {
      blue: { bg: "#5242FF", ring: "#4536DB" },
      orange: { bg: "#FF6B47", ring: "#E05A39" },
      green: { bg: "#27C93F", ring: "#20A934" },
    },
  },
};

/* ============================================================
   SMALL INLINE ICONS (kept local + minimal, stroke-based, to
   match the existing raw-SVG convention used elsewhere in this
   codebase rather than pulling in an icon library)
   ============================================================ */
const IconCalendar = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconHash = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);
const IconPanel = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="9" y1="4" x2="9" y2="20" />
  </svg>
);
const IconChevronLeft = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconChevronRight = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconFilter = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="6" cy="7" r="1.5" />
    <line x1="9" y1="7" x2="20" y2="7" />
    <line x1="4" y1="7" x2="4" y2="7" />
    <circle cx="14" cy="14" r="1.5" />
    <line x1="17" y1="14" x2="20" y2="14" />
    <line x1="4" y1="14" x2="10.5" y2="14" />
    <circle cx="8" cy="19" r="1.5" />
    <line x1="11" y1="19" x2="20" y2="19" />
    <line x1="4" y1="19" x2="4" y2="19" />
  </svg>
);
const IconPlus = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const IconSearch = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconVideo = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <polygon points="22 8 16 12 22 16 22 8" />
  </svg>
);
const IconChevronDown = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/* ============================================================
   TOP NAVBAR
   ------------------------------------------------------------
   ISSUE 2 (old, already resolved): the trio of icons (Calendar /
   Hash / Panel) next to the traffic-light dots respects a
   `showViewIcons` prop. Default is `true`.

   NEW ISSUE (this pass) — "2-row navbar instead of hiding items":
   Previously this was a single `flex items-center justify-between`
   row. As the shell narrowed, there was no responsive handling at
   all here, so content just visually crammed together with no
   spacing once the items didn't fit (nothing was actually hidden,
   it just got tight/overflowed).
   Fix: below the `sm` breakpoint (<640px) the navbar now wraps
   onto TWO rows using `flex-wrap`:
     - Row 1 (left-aligned cluster): traffic lights, view icons,
       Today button, prev/next chevrons, month label.
     - Row 2 (right-aligned cluster): filter icon, add button,
       avatar.
   This is done by:
     1. Changing the outer container from a fixed `h-12` flex row
        to `flex-wrap` with `min-h-12` (so it can grow to 2 rows)
        and adding `gap-y-1` so the two rows don't touch when
        stacked.
     2. Adding `w-full sm:w-auto` to the LEFT cluster and
        `w-full sm:w-auto` + `justify-end` to the RIGHT cluster, so
        that below `sm` each cluster claims the FULL width of the
        navbar (forcing a wrap onto its own line — left cluster's
        natural content is already left-aligned, right cluster gets
        `justify-end` so it pushes to the right edge on its own
        line), while at `sm` and above they sit side-by-side again
        exactly as before (`sm:justify-between` is no longer needed
        since the parent's `justify-between` still does that job
        once both clusters go back to `w-auto`).
     3. At `sm:` and above, `flex-wrap` simply never triggers a
        wrap (both clusters fit on one line as before), so desktop
        layout is pixel-identical to the original.
   To tune WHEN this switches to 2 rows: change the `sm:` prefixes
   below to `md:` (wraps later / stays 1-row longer) or remove them
   to always force 2 rows.
   ============================================================ */
function TopNavBar({ t, showViewIcons }) {
  return (
    <div
      className={`flex flex-wrap items-center justify-between gap-y-1.5 min-h-12 px-3 py-2 border-b shrink-0 ${t.navbarBorder}`}
    >
      {/* Left cluster: traffic-light dots, app icons, Today, chevrons, month label.
          `w-full sm:w-auto` -> claims full navbar width below `sm` so it forces
          the right cluster onto its own line (2-row layout); reverts to natural
          width at `sm`+ so both clusters share one row like the original. */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>

        {showViewIcons && (
          <div className="flex items-center gap-1 ml-1">
            {/* Calendar icon — active/selected state, slightly filled bg */}
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-md ${t.iconBtnActiveBg}`}
            >
              <IconCalendar className={`w-3.5 h-3.5 ${t.textPrimary}`} />
            </span>
            {/* Hash icon — plain, not selected */}
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-md ${t.textSecondary}`}
            >
              <IconHash className="w-3.5 h-3.5" />
            </span>
            {/* Sidebar / panel toggle icon */}
            <span
              className={`flex items-center justify-center w-6 h-6 rounded-md ${t.textSecondary}`}
            >
              <IconPanel className="w-3.5 h-3.5" />
            </span>
          </div>
        )}

        <button
          className={`text-[11px] font-medium px-2.5 py-1 rounded-md border ${t.iconBtnBorder} ${t.textPrimary}`}
        >
          Today
        </button>

        <div className={`flex items-center gap-1 ${t.textSecondary}`}>
          <IconChevronLeft className="w-3.5 h-3.5" />
          <IconChevronRight className="w-3.5 h-3.5" />
        </div>

        <p className={`text-[13px] font-semibold ${t.textPrimary}`}>
          November, 2022
        </p>
      </div>

      {/* Right cluster: filter icon, add button, single avatar.
          `w-full sm:w-auto` + `justify-end` -> below `sm` this claims the full
          width of the navbar (its own row, row 2) and right-aligns its
          contents within that row, as requested ("those in down row are right
          aligned"). At `sm`+ it shrinks back to its natural width and sits
          next to the left cluster on one row, identical to the original. */}
      <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
        <span className={t.textSecondary}>
          <IconFilter className="w-4 h-4" />
        </span>
        <button
          className={`flex items-center justify-center w-7 h-7 rounded-md border ${t.iconBtnBorder} ${t.textPrimary}`}
        >
          <IconPlus className="w-3.5 h-3.5" />
        </button>
        <AvatarStack
          avatars={["/assets/avatars/1.png"]}
          max={1}
          size="w-7 h-7"
          ringColor={t.badgeRing}
        />
      </div>
    </div>
  );
}

/* ============================================================
   LEFT SIDEBAR — radio rows + mini calendar
   ============================================================ */

// Reusable radio-style list item. `filled` = solid dot (selected
// calendar), otherwise a hollow ring in `color`.
function RadioRow({ label, color, filled, t }) {
  return (
    <li className={`flex items-center gap-2.5 text-[13px] ${t.textPrimary}`}>
      <span
        className="w-2.5 h-2.5 rounded-full shrink-0"
        style={
          filled
            ? { backgroundColor: color }
            : { backgroundColor: "transparent", border: `1.5px solid ${color}` }
        }
      />
      {label}
    </li>
  );
}

/* ============================================================
   ISSUE 1 (old, already resolved): there were TWO calendar-shaped
   elements anchored to the bottom edge of the card. The duplicate
   DateBadge has been removed; MiniCalendar is the single, correct
   bottom-anchored calendar control and remains unchanged below.
   ============================================================ */
function MiniCalendar({ t }) {
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  // [value, isCurrentMonth] — leading/trailing days belong to Oct/Dec
  const weeks = [
    [
      [30, false],
      [31, false],
      [1, true],
      [2, true],
      [3, true],
      [4, true],
      [5, true],
    ],
    [
      [6, true],
      [7, true],
      [8, true],
      [9, true],
      [10, true],
      [11, true],
      [12, true],
    ],
    [
      [13, true],
      [14, true],
      [15, true],
      [16, true],
      [17, true],
      [18, true],
      [19, true],
    ],
    [
      [20, true],
      [21, true],
      [22, true],
      [23, true],
      [24, true],
      [25, true],
      [26, true],
    ],
    [
      [27, true],
      [28, true],
      [29, true],
      [30, true],
      [1, false],
      [2, false],
      [3, false],
    ],
  ];

  return (
    <div className={`rounded-xl p-2.5 ${t.panelBg} ${t.panelFloating}`}>
      <div className="flex items-center justify-between mb-2 px-0.5">
        <IconChevronLeft className={`w-3 h-3 ${t.textSecondary}`} />
        <span className={`text-[11px] font-semibold ${t.textPrimary}`}>
          November, 2022
        </span>
        <IconChevronRight className={`w-3 h-3 ${t.textSecondary}`} />
      </div>
      <div className="grid grid-cols-7 gap-y-1 text-center">
        {days.map((d, i) => (
          <span
            key={`d-${i}`}
            className={`text-[9px] font-medium ${t.textSecondary}`}
          >
            {d}
          </span>
        ))}
        {weeks.flat().map(([n, isCurrent], i) => {
          const isToday = isCurrent && n === 15;
          return (
            <span
              key={`n-${i}`}
              className={`text-[9px] rounded-full w-4 h-4 mx-auto flex items-center justify-center font-medium ${
                isToday
                  ? "bg-[#5242FF] text-white font-semibold"
                  : isCurrent
                    ? t.textPrimary
                    : `${t.textSecondary} opacity-50`
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

function LeftSidebar({ t }) {
  return (
    <aside className="hidden md:flex w-[180px] shrink-0 flex-col p-4">
      {/* Top block: Calendars + People — left/top aligned */}
      <div>
        <div className={`flex items-center gap-1.5 mb-2.5 ${t.textSecondary}`}>
          <IconChevronDown className="w-3 h-3" />
          <span className="text-[10px] font-semibold tracking-wide uppercase">
            Calendars
          </span>
        </div>
        <ul className="space-y-2 mb-5">
          <RadioRow label="Work" color="#5242FF" filled t={t} />
          <RadioRow label="Personal" color="#7366FE" t={t} />
          <RadioRow label="Team" color="#27C93F" t={t} />
        </ul>

        <div className={`flex items-center gap-1.5 mb-2.5 ${t.textSecondary}`}>
          <IconChevronDown className="w-3 h-3" />
          <span className="text-[10px] font-semibold tracking-wide uppercase">
            People
          </span>
        </div>
        <div
          className={`flex items-center gap-2 rounded-md border px-2.5 py-1.5 mb-3 ${t.inputBorder} ${t.inputBg}`}
        >
          <IconSearch className={`w-3 h-3 shrink-0 ${t.textSecondary}`} />
          <input
            disabled
            placeholder="Search for someone"
            className={`bg-transparent outline-none text-[11px] w-full ${t.textSecondary}`}
          />
        </div>
        <ul className="space-y-2">
          <RadioRow label="Deercember" color="#5242FF" t={t} />
          <RadioRow label="Augustine" color="#E1513D" t={t} />
          <RadioRow label="Junnie" color="#A23ED9" t={t} />
        </ul>
      </div>

      {/* Mini calendar — bottom aligned within the sidebar.
          This is now the ONLY calendar-shaped element near the
          bottom edge of the component (see ISSUE 1 note above). */}
      <div className="mt-auto pt-6">
        <MiniCalendar t={t} />
      </div>
    </aside>
  );
}

/* ============================================================
   MIDDLE SECTION — week header + hour grid + event chips
   ------------------------------------------------------------
   Implemented as ONE CSS grid so the header row, the hour-label
   gutter, the day columns, and every event chip all share the
   exact same column/row tracks — that's what keeps the day
   headers, the gridlines, and the events in perfect alignment.

   Row tracks: 1 = header (PST pill + day names)
               2 = All Day
               3..9 = 9AM..3PM (7 hour rows)
               (NEW) 10 = 4PM closing boundary line — see the
               "4PM closing line" change below for why this was
               added as a real row instead of just a label.
   Col tracks: 1 = hour-label gutter, 2..8 = the 7 day columns
               in the FULL/desktop layout.

   ============================================================
   NEW FIX — Issue "columns must reflow width before dropping":
   ------------------------------------------------------------
   PROBLEM (old behavior): day columns used Tailwind responsive
   `hidden` / `flex` classes (COL_VISIBILITY / COL_VISIBILITY_BLOCK)
   driven off fixed `sm/md/lg/xl` breakpoints, while the grid track
   sizing was a static `repeat(7, minmax(0,1fr))`. Because the
   number of VISIBLE columns is decided purely by viewport-width
   breakpoints (not by how much space each column actually has),
   whenever a column got hidden the remaining visible columns (all
   still `1fr`) would immediately stretch to fill the freed-up
   space — hence "the last col becomes very wide" instead of every
   visible column staying a consistent, readable width.
   What was actually wanted: columns should all stay the SAME width
   as each other (only the gutter column is narrower), and a column
   should only be dropped once the available per-column width would
   fall below a defined minimum — i.e. width-based reflow, not
   breakpoint-based hiding.

   FIX: replace the static `gridTemplateColumns` string + Tailwind
   breakpoint visibility classes with a small JS resize-observer
   driven calculation:
     1. We measure the actual rendered width of the grid container
        (via a `ref` + `ResizeObserver`, see `useContainerWidth`
        below).
     2. Given that measured width, the gutter column width
        (`GUTTER_WIDTH_PX = 44`, unchanged from the old hardcoded
        "44px" track), and a `MIN_DAY_COL_PX` floor (`92px` — tune
        this constant to taste, see comment on the constant itself
        for guidance), we compute the largest number of day columns
        (from 7 down to a floor of 3, "Sun, Mon, Tue" first-N as
        before) that can each be given AT LEAST `MIN_DAY_COL_PX`
        while sharing the remaining width EQUALLY.
     3. That count becomes `visibleDayCols`. We then build the
        `gridTemplateColumns` string dynamically as
        `"44px repeat(N, minmax(0,1fr))"` where N = visibleDayCols,
        so the N visible day columns are always forced to be equal
        width (1fr each) and never stretch to soak up "extra" space
        beyond filling the container — they just each get
        `containerWidth / N` (minus gutter), which by construction
        is >= MIN_DAY_COL_PX.
     4. Anything beyond `visibleDayCols` (still always the trailing
        Sat/Fri/... columns, same drop-from-the-end order as
        before) is filtered out of DAY_COLS/EVENTS render loops —
        no more Tailwind `hidden md:flex` classes are needed for
        this purpose since we no longer reserve dead grid tracks
        for hidden columns at all (the grid itself now only ever
        defines exactly `visibleDayCols` day tracks).
   This guarantees: (a) the day-column COUNT only decreases once
   per-column width would otherwise dip under the minimum, and
   (b) whenever N columns ARE visible, they're always equal width
   to each other (never "last column gets very wide").

   TO TUNE: change `MIN_DAY_COL_PX` below to make columns drop
   sooner (raise it) or later (lower it). Change `DAY_COL_FLOOR`
   to allow fewer/more columns at the narrowest width.
   ============================================================ */
const DAY_COLS = [
  { date: 13, label: "Sun" },
  { date: 14, label: "Mon" },
  { date: 15, label: "Tue", isToday: true },
  { date: 16, label: "Wed" },
  { date: 17, label: "Thu" },
  { date: 18, label: "Fri" },
  { date: 19, label: "Sat" },
];

// Width (px) of the leftmost hour-label gutter column. Was a literal
// "44px" inside the gridTemplateColumns string before; pulled out as a
// named constant since it now also feeds the column-count calculation.
const GUTTER_WIDTH_PX = 44;

// Minimum width (px) a single day column is allowed to shrink to before
// a column gets dropped (rightmost day first). Raise this number if you
// want columns to start dropping at a wider viewport (i.e. you want each
// column to stay roomier); lower it to fit more columns into a smaller
// space before any get dropped.
const MIN_DAY_COL_PX = 92;

// The minimum number of day columns we'll ever show, even at the
// narrowest supported width (matches the old breakpoint plan's floor
// of 3 — Sun, Mon, Tue, i.e. always the FIRST N columns).
const DAY_COL_FLOOR = 3;

/* Small reusable hook: measures and tracks the live rendered width of
   the element the returned ref is attached to, using a ResizeObserver.
   This is what lets MiddleSection recompute `visibleDayCols` any time
   the section is resized (window resize, sidebar collapse, etc.) rather
   than only at fixed Tailwind breakpoints. */
function useContainerWidth() {
  const ref = React.useRef(null);
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(el);
    // Capture the initial size immediately too, so we don't render once
    // at width=0 before the first ResizeObserver callback fires.
    setWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  return [ref, width];
}

/* Given the measured container width, returns how many day columns
   (3..7) should currently be visible so that every visible day column
   is >= MIN_DAY_COL_PX wide, sharing the remaining (post-gutter) width
   equally. Falls back to the full 7 columns if width hasn't been
   measured yet (width === 0, e.g. before first paint) so SSR/first
   render still looks correct rather than collapsing to the floor. */
function computeVisibleDayCols(containerWidth) {
  if (!containerWidth) return DAY_COLS.length;
  const available = containerWidth - GUTTER_WIDTH_PX;
  for (let n = DAY_COLS.length; n > DAY_COL_FLOOR; n--) {
    if (available / n >= MIN_DAY_COL_PX) return n;
  }
  return DAY_COL_FLOOR;
}

const HOUR_ROWS = [
  { label: "9AM", row: 4 },
  { label: "10AM", row: 5 },
  { label: "11AM", row: 6 },
  { label: "12PM", row: 7 },
  { label: "1PM", row: 8 },
  { label: "2PM", row: 9 },
  { label: "3PM", row: 10 },
  { label: "4PM", row: 11 },
];

/* ============================================================
   NEW FIX — events repositioned to match their time-label text
   ------------------------------------------------------------
   PROBLEM: each event's `row`/`span` was previously hand-picked
   to roughly match the visual order in the screenshot, but did
   NOT actually derive from the event's own `time` string, so a
   box labeled "10 — 11am" might not start exactly at the 10AM
   gridline, etc. — i.e. content (the time text) and position
   (grid row) could drift out of sync if either was edited later.

   FIX: every event's row/span below is now DERIVED from its
   `time` field via a small parsing helper (`timeToRow`,
   `eventRowSpan`, defined further down), instead of being a
   hand-authored `row`/`span` pair. We keep `startHour` /
   `endHour` (in 24h, decimal-free, on-the-hour granularity) as
   the single source of truth per event; `row`/`span` are
   computed once below and reused everywhere (EventChip, etc.).
   This guarantees the box position always matches its own label.

   Grid math (see HOUR_ROWS above for the row-per-hour mapping):
     - Row 3 = 9AM..10AM, Row 4 = 10AM..11AM, ... Row 9 = 3PM..4PM.
     - So `row = startHour - 9 + 3 = startHour - 6`.
     - An event like "9 - 9:30am" only has a 9AM gridline, no 9:30
       line exists, so per the request it must begin at row 3 (9AM)
       and END BEFORE row 4 (10AM) — i.e. span exactly 1 row, same
       as a full 9-10 event would. We treat any sub-hour event as
       occupying just the single hour-row its start time falls in
       (no partial/fractional row spans, since there's no gridline
       to align a fraction to) — this matches "begin from 9 but end
       in before 10, because there is no labelling of 9:30."
     - A multi-hour event like "11am — 12pm" or "11:30am — 12"
       still only spans 1 row here (11am row only) by the same
       sub-hour-truncation rule, since 11:30 has no gridline either
       — span is based on whole-hour boundaries crossed only.
     - All-day events (Group Run, Soccer) are handled separately —
       they keep their explicit `row: 2` (the literal "All Day"
       row), since they're not positioned against the hour grid at
       all.
   ============================================================ */

// Parses a start time like "9", "10", "11:30am", "1" (in this
// dataset's 9am-3pm context) into a 24-hour integer hour. Hours
// 1-8 are interpreted as PM (since this calendar's visible range
// is 9am-4pm and lunch/afternoon events use bare "1", "2", "3"
// meaning 1pm/2pm/3pm) , hours 9-12 are taken as-is (9am-12pm).
// Sub-hour minutes (e.g. ":30") are intentionally discarded since
// there is no gridline to align a fractional hour to — this is
// what implements "must begin from 9 but end before 10."
function parseStartHour(timeStr) {
  const match = timeStr.match(/^(\d{1,2})/);
  if (!match) return 9; // fallback, shouldn't happen with this dataset
  let hour = parseInt(match[1], 10);
  if (hour >= 1 && hour <= 7) hour += 12; // 1-8 => 1pm-8pm in this context
  return hour;
}

// row = which HOUR_ROWS track the event starts in (row 3 = 9AM).
function timeToRow(timeStr) {
  const startHour = parseStartHour(timeStr);
  return startHour >= 9 ? startHour - 5 : 3; // 9AM -> 3, 10AM -> 4, ... matches HOUR_ROWS
}

// day = matches DAY_COLS[].date
// time = the human-readable label rendered inside the chip; ALSO now
//   the single source of truth for the chip's grid `row` (see
//   timeToRow above) — row is no longer hand-authored separately.
// span is always 1 for these hour-grid events per the "no 9:30
// gridline" rule explained above; all-day events keep an explicit
// row instead of being time-derived.
const EVENTS = [
  {
    day: 17,
    row: 2,
    span: 1,
    allDay: true,
    tone: "orange",
    emoji: "🏃",
    title: "Group Run",
    time: "8 — 9am",
    avatars: 3,
  },
  {
    day: 19,
    row: 2,
    span: 1,
    allDay: true,
    tone: "orange",
    emoji: "⚽",
    title: "Soccer",
    time: "8 — 9am",
    avatars: 1,
  },

  {
    day: 14,
    tone: "blue",
    emoji: "👍",
    title: "Daily Standup",
    time: "9 — 9:30am",
    avatars: 0,
    video: false,
  },
  {
    day: 16,
    tone: "blue",
    emoji: "👍",
    title: "Daily Standup",
    time: "9 — 9:30am",
    avatars: 0,
    video: true,
  },
  {
    day: 18,
    tone: "blue",
    emoji: "👍",
    title: "Daily Standup",
    time: "9 — 9:30am",
    avatars: 0,
    video: true,
  },

  {
    day: 15,
    tone: "blue",
    emoji: "👋",
    title: "Team Meeting",
    time: "10 — 11am",
    avatars: 5,
  },
  {
    day: 16,
    tone: "green",
    emoji: "🎉",
    title: "Julie's Bday",
    time: "10 — 11am",
    avatars: 4,
  },
  {
    day: 17,
    tone: "blue",
    emoji: "📁",
    title: "Project Final",
    time: "10 — 11am",
    avatars: 4,
    video: true,
  },
  {
    day: 18,
    tone: "blue",
    emoji: "👀",
    title: "Team Critique",
    time: "10 — 11am",
    avatars: 3,
    video: true,
  },

  {
    day: 14,
    tone: "blue",
    emoji: "✉️",
    title: "Proj Kickoff",
    time: "11am — 12pm",
    avatars: 5,
    avatarMax: 4,
  },
  {
    day: 18,
    tone: "blue",
    title: "Interview",
    time: "11:30am — 12",
    avatars: 0,
    video: true,
  },

  {
    day: 17,
    tone: "orange",
    emoji: "🍔",
    title: "Lunch Meeting",
    time: "12 — 1pm",
    avatars: 3,
  },
  {
    day: 18,
    tone: "blue",
    title: "Interview",
    time: "12 — 1pm",
    avatars: 0,
    video: true,
  },

  {
    day: 14,
    tone: "blue",
    title: "Leadership Sync",
    time: "1 — 2pm",
    avatars: 4,
  },
  {
    day: 15,
    tone: "blue",
    title: "Febby <> Junnie",
    time: "1 — 2pm",
    avatars: 2,
  },
  {
    day: 16,
    tone: "blue",
    title: "Augustine 1:1",
    time: "1 — 1:30pm",
    avatars: 0,
    video: true,
  },
  {
    day: 17,
    tone: "blue",
    title: "All Hands",
    time: "1 — 2pm",
    avatars: 4,
    video: true,
  },
  {
    day: 18,
    tone: "blue",
    title: "Onboarding",
    time: "1 — 2pm",
    avatars: 3,
    video: true,
  },

  {
    day: 16,
    tone: "blue",
    title: "Julie <> Leo",
    time: "2 — 2:30pm",
    avatars: 0,
    video: true,
  },
  {
    day: 18,
    tone: "blue",
    emoji: "🔔",
    title: "Weekly Sync",
    time: "2 — 3pm",
    avatars: 4,
    video: true,
  },

  // "3 — 4pm" now lands exactly on row 9 (the real 3PM row) with
  // span 1, ending precisely at the new 4PM closing line instead of
  // peeking past the grid into a phantom row 10 — see the "4PM
  // closing line" change below for why row 10 no longer needs to
  // exist as an overflow row at all.
  { day: 14, tone: "blue", title: "CS Catch Up", time: "3 — 4pm", avatars: 0 },
];

// Resolve each event's final `row`/`span`: all-day events keep their
// explicit `row`/`span` as authored above; every other (hour-grid)
// event gets `row` computed from its own `time` text via timeToRow,
// with `span` fixed at 1 (see the big comment block above for why no
// event spans more than 1 row in this dataset/grid).
const RESOLVED_EVENTS = EVENTS.map((e) =>
  e.allDay ? e : { ...e, row: timeToRow(e.time), span: 1 },
);

/* ISSUE 4 (old, already resolved): event chips no longer stretch to
   fill their full grid-row track — `self-start` + `overflow-hidden`
   (kept below) ensure a chip sizes to its content and can never
   bleed past its track. */
function EventChip({ e, t, colIndex }) {
  const tone = t.tones[e.tone];
  const avatarList =
    e.avatars > 0
      ? Array.from(
          { length: e.avatars },
          (_, i) => `/assets/avatars/${(i % 5) + 1}.png`,
        )
      : [];

  return (
    <div
      // NOTE: the per-column `hidden md:block` style visibility classes
      // (COL_VISIBILITY_BLOCK) have been removed here — see the
      // "columns must reflow width before dropping" comment block
      // above MiddleSection. Column visibility is now handled by simply
      // not rendering events whose `colIndex` falls outside the
      // currently-visible day columns (done in MiddleSection's render
      // loop, which now filters EVENTS by `visibleDayCols` before
      // mapping), so no Tailwind breakpoint classes are needed on the
      // chip itself anymore.
      className="relative self-start rounded-lg px-2 py-1.5 m-[3px] overflow-hidden shadow-sm max-h-full"
      style={{
        gridColumn: colIndex + 2,
        gridRow: `${e.row} / span ${e.span}`,
        backgroundColor: tone.bg,
      }}
    >
      {e.video && (
        <span className="absolute top-1.5 right-1.5 flex items-center justify-center w-4 h-4 rounded bg-black/25">
          <IconVideo className="w-2.5 h-2.5 text-white" />
        </span>
      )}
      <p
        className={`text-[10px] font-semibold text-white truncate leading-tight ${e.video ? "pr-5" : ""}`}
      >
        {e.emoji ? `${e.emoji} ` : ""}
        {e.title}
      </p>
      <p className="text-[9px] text-white/80 truncate leading-tight">
        {e.time}
      </p>
      {avatarList.length > 0 && (
        <div className="mt-1">
          <AvatarStack
            avatars={avatarList}
            max={e.avatarMax ?? 4}
            size="w-4 h-4"
            ringColor={tone.bg}
          />
        </div>
      )}
    </div>
  );
}

function MiddleSection({ t }) {
  // Measures the live width of the grid wrapper so we can compute how
  // many day columns currently fit at >= MIN_DAY_COL_PX each. See the
  // big comment block above DAY_COLS for the full rationale.
  const [containerRef, containerWidth] = useContainerWidth();
  const visibleDayCols = computeVisibleDayCols(containerWidth);
  // Always keep the FIRST N columns (Sun, Mon, Tue, ... in that
  // order) — same "drop from the end" behavior as the old breakpoint
  // version, just now driven by measured width instead of fixed
  // viewport breakpoints.
  const visibleDays = DAY_COLS.slice(0, visibleDayCols);

  return (
    // ISSUE (old, resolved): the wrapper no longer hardcodes a fixed
    // pixel height — the grid sizes itself to its defined rows.
    //
    // NEW — "4PM closing line": a new row 10 (16px tall, just enough
    // for a clean horizontal rule) has been added to gridTemplateRows.
    // This isn't an event-overflow row anymore (no event uses row 10
    // now, see the CS Catch Up fix above) — it exists purely to host
    // the new bottom-most horizontal gridline so the 3PM row's BOTTOM
    // edge (the literal "4PM" boundary) gets its own visible closing
    // line, same as every other hour boundary above it. `pb-3` is
    // added on the outer <main> so there's a little breathing room
    // between that 4PM line and the panel's rounded bottom edge,
    // instead of the line touching the panel border directly.
    <main
      ref={containerRef}
      className={`flex-1 min-w-0 rounded-xl overflow-hidden ${t.panelBg} ${t.panelFloating}`}
    >
      <div
        className="grid"
        style={{
          // Gutter column stays a fixed GUTTER_WIDTH_PX; day columns are
          // always `minmax(0,1fr)` so the `visibleDayCols` columns we DO
          // render share the remaining width equally (this, combined with
          // only ever defining `visibleDayCols` tracks instead of a fixed
          // 7, is what keeps every visible column the same width and
          // prevents the old "last column gets very wide" stretching).
          gridTemplateColumns: `${GUTTER_WIDTH_PX}px repeat(${visibleDayCols}, minmax(0,1fr))`,
          // Row 10 (16px) added as the new 4PM closing-line row — see
          // the "4PM closing line" comment above.
          gridTemplateRows: "48px 32px repeat(8, 56px) 16px",
        }}
      >
        {/* ---- PST pill, row 1 col 1 ---- */}
        <div
          className="flex items-start justify-start pt-3 pl-2"
          style={{ gridColumn: 1, gridRow: 1 }}
        >
          <span
            className={`text-[9px] font-semibold px-1.5 py-0.5 rounded-md ${t.pstPillBg} ${t.textPrimary}`}
          >
            PST
          </span>
        </div>

        {/* ---- Day headers, row 1 ----
            NEW: now maps over `visibleDays` (computed by width, see
            above) instead of the full DAY_COLS with Tailwind
            `hidden`/`flex` breakpoint classes — a column that isn't
            currently visible simply isn't rendered at all, rather than
            being rendered-but-hidden into a collapsed grid track. */}
        {visibleDays.map((d, i) => (
          <div
            key={d.date}
            className="flex flex-col items-center justify-center"
            style={{ gridColumn: i + 2, gridRow: 1 }}
          >
            <div className="flex items-center gap-1.5">
              <span
                className={`text-[15px] font-bold w-6 h-6 rounded-full flex items-center justify-center ${
                  d.isToday ? "bg-[#5242FF] text-white" : t.textPrimary
                }`}
              >
                {d.date}
              </span>
              <span
                className={`text-[11px] ${d.isToday ? t.textPrimary : t.textSecondary}`}
              >
                {d.label}
              </span>
            </div>
          </div>
        ))}

        {/* ---- "All Day" label, vertically centered in its row ---- */}
        <div
          className="flex items-center"
          style={{ gridColumn: 1, gridRow: 2 }}
        >
          <span className={`text-[9px] pl-2 ${t.textSecondary}`}>All Day</span>
        </div>

        {/* ---- Hour labels ----
            ISSUE (old, resolved): each label anchored to the TOP edge
            of its own cell so "9AM" sits exactly at the 3rd horizontal
            line, "10AM" at the 4th, etc.
            NEW: a trailing "4PM" label is added below, anchored to the
            top of the new row 10 — i.e. sitting exactly on the new
            closing line, completing the sequence (9AM...3PM, 4PM) so
            the grid visually closes the same way it opened. */}
        {/* ---- Hour labels ----
    Each label anchors to the TOP edge of its own row, using h.row
    directly (no +1 hack) so "9AM" sits exactly on the gridline
    between All Day and the 9AM row, "10AM" on the line between the
    9AM and 10AM rows, etc. — labels now derive from the same row
    numbers that already correctly position the gridlines and event
    chips, so all three are guaranteed to stay in sync. */}
        {HOUR_ROWS.map((h) => (
          <div
            key={h.label}
            className="relative"
            style={{ gridColumn: 1, gridRow: h.row }}
          >
            <span
              className={`absolute top-0 left-2 -translate-y-1/2 text-[9px] ${t.textSecondary}`}
            >
              {h.label}
            </span>
          </div>
        ))}
        {/* "4PM" closes the grid as the BOTTOM boundary of the last hour row
    (row 9, which already covers 3PM-4PM) rather than living in its
    own stub row — anchored to the bottom edge (translate +1/2) so it
    sits exactly on the final gridline with no overlap against "3PM"
    (which is anchored to the TOP of this same row). */}
        

        {/* ---- Horizontal gridlines ----
            ISSUE (old, resolved): rows 2 and 3 span the full width
            (gutter included), every other row spans only the day
            columns (col 2 to end).
            NEW: row 10 added to this list so the new 4PM boundary gets
            its own horizontal line too, using the same "day columns
            only" span as the other hour lines (consistent with rows
            4-9 above it). */}
        {/* ---- Horizontal gridlines ----
    Rows 2 and 3 span the full width (gutter included), every other
    row spans only the day columns (col 2 to end). The closing 4PM
    line is the BOTTOM border of the last hour row (row 9) instead of
    a separate top-border row 10, since row 10 no longer exists. */}
        {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((r) => (
          <div
            key={`hline-${r}`}
            className={`border-t ${t.hairline}`}
            style={{ gridColumn: r <= 3 ? "1 / -1" : "2 / -1", gridRow: r }}
          />
        ))}
        <div
          className={`border-t ${t.hairline}`}
          style={{ gridColumn: "2 / -1", gridRow: 11 }}
        />

        {/* ---- Vertical gridlines, one per VISIBLE day column ----
            NEW: maps over `visibleDays` instead of the full DAY_COLS
            with breakpoint visibility classes — same reasoning as the
            day-header loop above (not rendering a column also removes
            its line, instead of toggling visibility on an
            already-rendered line).
            Row span extended to "1 / 11" (was "1 / 10") so the
            vertical lines now also reach down through the new row 10,
            i.e. all the way to the 4PM closing line, instead of
            stopping one row short of it. */}
        {visibleDays.map((d, i) => (
          <div
            key={`vline-${d.date}`}
            className={`border-l ${t.hairline}`}
            style={{ gridColumn: i + 2, gridRow: "1 / 11" }}
          />
        ))}

        {/* ---- Event chips ----
            NEW: uses RESOLVED_EVENTS (time-derived row/span, see the
            big comment block above) instead of the old hand-authored
            EVENTS row/span. Also now filters out any event whose day
            isn't in the currently-visible `visibleDays` (replacing the
            old per-chip COL_VISIBILITY_BLOCK breakpoint classes) before
            mapping, and looks up `colIndex` against `visibleDays`
            (not the full DAY_COLS) so the column index always matches
            the currently-rendered grid tracks. */}
        {RESOLVED_EVENTS.filter((e) =>
          visibleDays.some((d) => d.date === e.day),
        ).map((e, i) => (
          <EventChip
            key={i}
            e={e}
            t={t}
            colIndex={visibleDays.findIndex((d) => d.date === e.day)}
          />
        ))}
      </div>
    </main>
  );
}

/* ============================================================
   RIGHT SIDEBAR — Inbox / Complete tabs + task list
   ============================================================ */
const INBOX_ITEMS = [
  { title: "Update newsletter", meta: "Proj Kickoff", emoji: "✉️" },
  { title: "Finalize OKRs document", meta: "Team Meeting", emoji: "👋" },
  { title: "Follow up on compensation", meta: "Febby <> Junnie", emoji: null },
  { title: "Finalize Q4 objectives", meta: "Augustine <> Febby", emoji: null },
  { title: "Update team meeting", meta: "Weekly Retro", emoji: "🕐" },
];

function RightSidebar({ t }) {
  return (
    <aside className="hidden lg:flex w-[220px] shrink-0 flex-col p-4">
      <div className="flex items-center gap-4 mb-3">
        <span
          className={`text-[13px] font-semibold pb-1.5 border-b-2 border-current ${t.textPrimary}`}
        >
          Inbox
        </span>
        <span className={`text-[13px] font-medium pb-1.5 ${t.textSecondary}`}>
          Complete
        </span>
      </div>
      <ul>
        {INBOX_ITEMS.map((item, i) => (
          <li
            key={item.title}
            className={`flex items-start gap-2.5 py-3 ${i !== 0 ? `border-t ${t.hairline}` : ""}`}
          >
            <span
              className={`w-3.5 h-3.5 rounded-full border mt-0.5 shrink-0 ${t.hairline}`}
            />
            <div>
              <p
                className={`text-[11px] font-semibold leading-tight ${t.textPrimary}`}
              >
                {item.title}
              </p>
              <p
                className={`text-[10px] mt-0.5 flex items-center gap-1 ${t.textSecondary}`}
              >
                {item.emoji && <span>{item.emoji}</span>}
                {item.meta}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

/* ============================================================
   MAIN COMPONENT
   ------------------------------------------------------------
   Props:
   - theme: "dark" | "light"        (default "dark")
   - showViewIcons: boolean         (default true)
   - className: extra classes for the outer wrapper

   NOTE on ISSUE 1 (old, resolved): the floating <DateBadge />
   component and its usage were fully removed; MiniCalendar inside
   <LeftSidebar /> is the single, correct calendar element near the
   bottom of the layout.
   ============================================================ */
export default function CalendarAppShowcase({
  theme = "dark",
  showViewIcons = true,
  className = "",
}) {
  const t = THEMES[theme] ?? THEMES.dark;

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`flex flex-col rounded-2xl border shadow-xl overflow-hidden ${t.outerBg} ${t.outerBorder}`}
      >
        <TopNavBar t={t} showViewIcons={showViewIcons} />
        <div className="flex flex-1 min-h-0 pb-4">
          <LeftSidebar t={t} />
          <MiddleSection t={t} />
          <RightSidebar t={t} />
        </div>
      </div>
    </div>
  );
}
