'use client';

import ScrollReveal from './ScrollReveal';

export default function Events() {
  return (
    <section id="events" className="bg-claude-warm-white py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-mid-gray">
            Mark your calendar
          </p>
          <h2 className="mt-3 font-heading text-4xl text-claude-dark sm:text-5xl">
            Upcoming events
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-claude-light-gray py-20 px-6">
            <div className="text-claude-terracotta/40">
              <svg width="40" height="40" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="3" width="12" height="11" rx="1.5" />
                <path d="M2 6.5h12M5 1.5v3M11 1.5v3" />
              </svg>
            </div>
            <p className="mt-4 font-heading text-xl text-claude-dark">
              Coming soon
            </p>
            <p className="mt-2 max-w-sm text-center font-body text-sm text-claude-mid-gray">
              Event details will be shared when they&apos;re confirmed. Join the club to hear about upcoming opportunities.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
