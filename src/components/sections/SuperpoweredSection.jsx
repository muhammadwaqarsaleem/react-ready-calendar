import { AvatarStack } from '../ui/Shared';

const CARD_DATA = [
  {
    id: 'standup',
    header: 'bg-gradient-to-br from-[#1FA37A] to-[#0E6B57]',
    title: 'Daily Standup',
    schedule: 'Every Mon, Wed, Fri',
    agenda: [
      { label: 'Yesterday', done: true },
      { label: "Today's plan", done: true },
      { label: 'Blockers', done: false },
    ],
  },
  {
    id: 'team-meeting',
    header: 'bg-gradient-to-br from-[#FC7064] to-[#4F4FBA]',
    title: 'Team Meeting',
    schedule: 'Weekly on Tuesday',
    agenda: [
      { label: 'Objectives & Metrics', done: true },
      { label: 'Roundtable Updates + What\u2019s Next', done: true },
      { label: 'Blockers', done: false },
      { label: 'Shout-Outs', done: false },
      { label: 'Next steps', done: false },
    ],
    metrics: {
      title: 'Objectives & Metrics',
      rows: [
        { label: 'Newsletter Open Rate', last: '34%', current: '49%' },
        { label: 'CAC', last: '$195', current: '$201' },
        { label: 'LTV:CAC', last: '4:1', current: '3:1' },
        { label: 'New Users', last: '4,338', current: '5,915' },
      ],
    },
  },
  {
    id: 'one-on-one',
    header: 'bg-gradient-to-br from-[#1F8FD9] to-[#3A3A9E]',
    title: 'Febby <> Augustine',
    schedule: 'Weekly on Thursday',
    agenda: [
      { label: 'Check-in', done: true },
      { label: 'What\u2019s top of mind?', done: true },
      { label: 'Progress on your goals', done: false },
      { label: 'Feedback', done: false },
      { label: 'Next steps', done: false },
    ],
    notes: [
      { speaker: 'Febby', text: 'Feeling green. Glad the webinar is finished.' },
      { speaker: 'Augustine', text: 'Yellow. Falling behind on the compensation overhaul.' },
    ],
  },
  {
    id: 'all-hands',
    header: 'bg-gradient-to-br from-[#6B4FD9] to-[#A23ED9]',
    title: 'All Hands',
    schedule: 'Monthly on Thursday',
    agenda: [
      { label: 'Objectives & Metrics', done: true },
      { label: 'Team Spotlight (Marketing)', done: true },
      { label: 'Learnings & Insights', done: false },
      { label: 'Showcase', done: false },
      { label: 'Q&A', done: false },
    ],
    metrics: {
      title: null,
      rows: [
        { label: 'ARPU', last: '$210', current: '$225' },
        { label: 'Churn', last: '2.7%', current: '2.8%' },
        { label: 'Total Users', last: '32,599', current: '68,402' },
      ],
    },
  },
];

function AgendaItem({ label, done }) {
  return (
    <div className="flex items-center gap-2 text-[13px] leading-tight">
      <span
        className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full text-[10px] ${
          done ? 'bg-[#5242FF] text-white' : 'border border-[#E4E4E7] text-transparent'
        }`}
      >
        {done ? '\u2713' : ''}
      </span>
      <span className={done ? 'text-[#1A1033]' : 'text-[#71717A]'}>{label}</span>
    </div>
  );
}

function MetricsTable({ title, rows }) {
  return (
    <div className="mt-4">
      {title && (
        <p className="mb-2 text-[13px] font-semibold text-[#1A1033]">{title}</p>
      )}
      <div className="overflow-hidden rounded-lg border border-[#E4E4E7]">
        <table className="w-full text-left text-[11px]">
          <thead>
            <tr className="border-b border-[#E4E4E7] bg-[#FAFAF9] text-[#71717A]">
              <th className="px-2 py-1.5 font-medium"> </th>
              <th className="px-2 py-1.5 font-medium">Last Month</th>
              <th className="px-2 py-1.5 font-medium">This Month</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className="border-b border-[#E4E4E7] last:border-0">
                <td className="px-2 py-1.5 font-medium text-[#1A1033]">{row.label}</td>
                <td className="px-2 py-1.5 text-[#71717A]">{row.last}</td>
                <td className="px-2 py-1.5 text-[#1A1033]">{row.current}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MeetingCard({ card, index }) {
  return (
    <div
      /* * MOBILE: w-[85vw] limits width to show next card peeking. snap-center locks scroll position.
       * DESKTOP: Fixed 320px width, negative margins (-ml-12) for overlap, z-index hover physics active.
       */
      className={`group relative flex flex-col shrink-0 w-[85vw] sm:w-[320px] snap-center rounded-2xl bg-white shadow-[0_20px_45px_-15px_rgba(26,16,51,0.25)] ring-1 ring-black/5 transition-all duration-300 md:hover:-translate-y-4 md:hover:z-20 ${
        index === 0 ? '' : 'ml-4 md:-ml-12'
      }`}
      style={{ zIndex: index }}
    >
      {/* Top half - Padding reduced slightly on mobile (px-4/pt-4 vs md:px-5/pt-5) */}
      <div className={`rounded-t-2xl ${card.header} px-4 pt-4 pb-5 md:px-5 md:pt-5 md:pb-6 text-white`}>
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-medium backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            Going
          </span>
          <div className="flex items-center gap-1 text-white/80">
            <span className="text-xs">{'\u2039'}</span>
            <span className="text-xs">{'\u203A'}</span>
            <span className="text-xs">{'\u22EF'}</span>
          </div>
        </div>

        <h3 className="mt-4 text-lg font-bold leading-snug">{card.title}</h3>
        <p className="mt-1 text-[12px] text-white/80">{card.schedule}</p>

        <div className="mt-4">
          <AvatarStack avatars={[null, null, null]} />
        </div>
      </div>

      {/* Bottom half - flex-1 ensures it stretches to match tallest card */}
      <div className="flex-1 flex flex-col rounded-b-2xl bg-white px-4 py-4 md:px-5 md:py-5">
        <p className="mb-3 text-[13px] font-semibold text-[#1A1033]">Agenda</p>
        <div className="space-y-2">
          {card.agenda.map((item) => (
            <AgendaItem key={item.label} label={item.label} done={item.done} />
          ))}
        </div>

        {/* PROGRESSIVE DISCLOSURE: hidden on mobile, block on md screens */}
        <div className="hidden md:block">
          {card.metrics && <MetricsTable title={card.metrics.title} rows={card.metrics.rows} />}
          
          {card.notes && (
            <div className="mt-4 space-y-2 border-t border-[#E4E4E7] pt-3">
              {card.notes.map((note) => (
                <p key={note.speaker} className="text-[12px] leading-snug text-[#71717A]">
                  <span className="font-semibold text-[#1A1033]">{note.speaker}: </span>
                  {note.text}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SuperpoweredSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F3EF] py-20">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#1A1033] sm:text-5xl">
          A superpowered meeting in every calendar event
        </h2>
        <p className="mt-4 text-base text-[#71717A] sm:text-lg">
          Calendar events in Ready are instantly transformed into collaborative meeting spaces
          designed to create the perfect meeting in seconds.
        </p>
      </div>

      {/* * SCROLL WRAPPER: 
        * Mobile uses snap-x snap-mandatory to create an app-like swipe carousel.
        * Desktop (md+) disables scroll, centers content, allows overlapping dropdowns (overflow-visible).
        * [scrollbar-width:none] cleans up the ugly default horizontal scrollbar on non-Apple devices.
        */}
      <div className="mt-16 flex overflow-x-auto snap-x snap-mandatory px-6 pb-10 md:justify-center md:overflow-visible md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Row Wrapper - items-stretch forces equal height */}
        <div className="flex items-stretch py-4">
          {CARD_DATA.map((card, index) => (
            <MeetingCard key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}