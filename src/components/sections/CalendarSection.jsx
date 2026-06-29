import React from 'react';
import { WavyUnderline } from '../ui/WavyUnderline';

export default function CalendarSection() {
  return (
    <section className="bg-[#F5F3EF] relative overflow-hidden pt-24 pb-16">
      {/* Ambient Glow */}
      <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[80vw] max-w-[800px] h-[400px] bg-[#6B4AC7]/15 blur-[100px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center z-10 relative px-6">
        <h2 className="text-5xl lg:text-6xl font-bold text-[#1A1033] leading-[1.4]">
          All in a calendar,
          <br />
          {/* Wrapper 1: The Arch over "that's" */}
          <span className="relative inline-block">
            <svg
              className="absolute -top-5 md:-top-5 left-0 w-20 md:w-24 h-6 md:h-8"
              viewBox="0 0 100 40"
              fill="none"
            >
              <path
                d="M5 35 Q50 -5 95 35"
                stroke="#5C6AE4"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
            that's
          </span>{' '}
          a{' '}
          {/* Wrapper 2: The Underline under "joy to use" */}
          <span className="relative inline-block">
            joy to use
            <WavyUnderline className="absolute -bottom-2 left-0 w-full" color="#5242FF" />
          </span>
        </h2>

        <p className="mt-6 text-lg text-[#71717A] max-w-2xl mx-auto">
          An entire meeting collaboration platform built inside a fast and
          modern calendar you and your team will love.
        </p>
      </div>

      {/* Feature Pills */}
      <div className="flex flex-wrap justify-center gap-3 mt-8 max-w-2xl mx-auto z-10 relative px-6">
        {[
          'Desktop App',
          'Keyboard Shortcuts',
          'Dark & Light Mode',
          'Google Calendar Sync',
          'Notifications',
        ].map((feature) => (
          <span
            key={feature}
            className="px-5 py-2.5 rounded-full border border-[#5C6AE4]/20 bg-white/40 text-[#5C6AE4] text-sm font-semibold backdrop-blur-sm shadow-sm transition-all hover:bg-white/60"
          >
            {feature}
          </span>
        ))}
      </div>

      {/* Hero Images */}
      <div className="mt-16 max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <img
          src="/assets/ui-calendar.png"
          alt="Ready Calendar Interface"
          className="w-full h-auto drop-shadow-[0_20px_50px_rgba(26,16,51,0.2)] rounded-t-2xl relative z-10"
        />
        <img
          src="/assets/ui-calendar-icon.png"
          alt="Calendar Icon"
          className="absolute z-20 left-1/2 -translate-x-1/2 -bottom-6 md:-bottom-10 w-10 md:w-16 h-auto drop-shadow-xl"
        />
      </div>
    </section>
  );
}