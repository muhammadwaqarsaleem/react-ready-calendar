import { WavyUnderline } from "../ui/WavyUnderline";
import { AccentLines } from "../ui/Accents";

function TemplatesCard({ className }) {
  return (
    <div
      className={`relative p-8 rounded-3xl 
    bg-gradient-to-r from-[#5a73ba] via-[#bc877f] to-[#ec8a58]
    border-t-[20px] border-t-[#6c77b0]
    border-b-[20px] border-b-[#9aa1c8]
    ${className}`}
    >
      <AccentLines className="hidden lg:block absolute -top-20 -right-2 z-20 rotate-90" />

      {/* Changed to justify-start for top alignment */}
      <div className="flex flex-col w-full h-full justify-start">
        <div>
          <h3 className="text-white text-2xl font-bold mb-3">
            Automated Templates
          </h3>
          <p className="text-white/80 text-sm max-w-sm">
            Templates allow you to recreate the perfect meeting in 1-click. And
            Templates can be added automatically to your weekly meetings, making
            it No-Click&trade;.
          </p>
        </div>

        {/* TWEAK ZONE: Adjust the classes on the <img> tag below to shift/scale the image */}
        <div className="relative w-full h-48 lg:h-56 overflow-hidden rounded-xl mt-8">
          {/* Locks the image to the left, scaling it down so it never overflows */}
          <img
            src="/assets/ui-templates.png"
            alt="Templates Dropdown UI"
            className="absolute top-0 left-0 w-[85%] h-full object-cover md:object-contain object-left-top drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

function TasksCard({ className }) {
  return (
    <div
      className={`relative p-8 rounded-3xl
    bg-gradient-to-r from-[#ec8a58] via-[#bc877f] to-[#2e54a3]
    border-l-[20px] border-l-[#6873a5]
    border-r-[20px] border-r-[#6873a5]
    ${className}`}
    >
      <AccentLines className="hidden lg:block absolute -top-2 -left-20 z-20 -rotate-20" />

      {/* Changed to justify-start for top alignment */}
      <div className="flex flex-col w-full h-full justify-start">
        <div>
          <h3 className="text-white text-2xl font-bold mb-3">Smart Tasks</h3>
          <p className="text-white/80 text-sm max-w-sm">
            Jot down tasks and assign action items in your meetings. Ready then
            automatically organizes them for you and your team.
          </p>
        </div>

        {/* TWEAK ZONE: Adjust the classes on the <img> tag below to shift/scale the image */}
        <div className="relative w-full h-48 lg:h-56 overflow-hidden rounded-xl  mt-8 md:mt-2">
          {/* Locks the image to the right, scaling it down to 85% width so the bottom doesn't clip */}
          <img
            src="/assets/ui-tasks.png"
            alt="Smart Tasks UI"
            className="absolute top-0 left-0 w-[85%] h-full object-cover md:object-contain object-left-top drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

function ToolsCard({ className }) {
  return (
    <div
      className={`relative p-8 rounded-3xl
    bg-gradient-to-b from-[#2e54a3] via-[#bc877f] to-[#ec8a58]
    border-l-[6px] border-l-[#6873a5]
    border-r-[6px] border-r-[#6873a5]
    ${className}`}
    >
      <AccentLines className="hidden lg:block absolute -bottom-16 -left-2 z-20 -rotate-90" />

      {/* Changed to justify-start for top alignment */}
      <div className="flex flex-col w-full h-full justify-start">
        <div>
          <h3 className="text-white text-2xl font-bold mb-3">Powerful Tools</h3>
          <p className="text-white/80 text-sm max-w-sm">
            Meeting spaces come loaded with a growing kit of meeting tools that
            power-up your meetings in a few clicks.
          </p>
        </div>

        {/* TWEAK ZONE: flex-1 allows this specific container to stretch and fill the tall right column */}
        <div className="relative w-full h-48 lg:flex-1 md:min-h-[400px] lg:min-h-[580px] overflow-hidden rounded-xl mt-8 md:mt-2">
          {/* Keeps the tall menu fully visible, anchoring it to the top left */}
          <img
            src="/assets/ui-tools.png"
            alt="Powerful Tools UI Menu"
            className="absolute top-0 left-0 w-[90%] h-full object-cover md:object-contain object-left-top drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default function UpgradeSection() {
  return (
    <section className="w-full overflow-hidden bg-[#F5F3EF] relative py-24 bg-[radial-gradient(#D4D4D8_1.5px,transparent_1.5px)] [background-size:24px_24px]">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-[#333333] text-5xl lg:text-6xl font-bold leading-tight">
          Meetings just
          <span className="sm:hidden"> </span>
          <span className="hidden sm:block" aria-hidden="true" />
          got an{" "}
          <span className="relative inline-block z-10">
            upgrade
            <WavyUnderline
              variant="subtle"
              className="absolute md:-bottom-4 -bottom-2 left-0 w-full h-6 md:h-8 -z-10"
              color="#5242FF"
            />
          </span>
        </h2>
        <p className="text-[#333333] max-w-md mt-6 text-lg">
          Templates, tasks, and meeting tools make it effortless to supercharge
          your meetings.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* The Grid Master Layout */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-12 lg:grid lg:grid-cols-12 lg:gap-8 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Column Left - Card 1 
              EXPLICIT GRID LOCK: col-start-1, row-start-1 guarantees top left.
          */}
          <TemplatesCard className="shrink-0 w-[80vw] snap-center lg:w-auto lg:col-span-7 lg:col-start-1 lg:row-start-1" />

          {/* Column Left - Card 2 
          EXPLICIT GRID LOCK: col-start-2 and col-span-6 pushes the left edge inward 
          while keeping the right edge perfectly flush with Card 1 above it.
          */}
          <TasksCard className="shrink-0 w-[80vw] snap-center lg:w-auto lg:col-span-6 lg:col-start-2 lg:row-start-2" />

          {/* Column Right - Card 3 
              EXPLICIT GRID LOCK: col-start-8, row-start-1, row-span-2 guarantees the entire right side.
              lg:translate-y-16 adds the visual stagger effect.
          */}
          <ToolsCard className="shrink-0 w-[80vw] snap-center lg:w-auto lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:-translate-y-24 lg:self-start" />
        </div>
      </div>
    </section>
  );
}
