'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { ACTIVITIES } from '@/lib/constants';

const icons: Record<string, React.ReactNode> = {
  hackathon: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="8" width="24" height="16" rx="2" />
      <path d="M11 8V5a5 5 0 0110 0v3" />
      <circle cx="16" cy="17" r="2.5" />
    </svg>
  ),
  workshop: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 7h24v18H4z" />
      <path d="M10 13h12M10 17h8" />
    </svg>
  ),
  demo: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4l3.5 7 7.5 1.1-5.5 5.3 1.3 7.6L16 21.5l-6.8 3.5 1.3-7.6-5.5-5.3 7.5-1.1z" />
    </svg>
  ),
  speaker: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="11" r="5" />
      <path d="M7 28c0-5 4-9 9-9s9 4 9 9" />
    </svg>
  ),
  office: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="16" cy="16" r="11" />
      <path d="M16 9v7l4.5 2.5" />
    </svg>
  ),
  community: (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="4" />
      <circle cx="21" cy="11" r="4" />
      <path d="M4 26c0-4 3.1-7 7-7 1.5 0 2.9.4 4 1.2" />
      <path d="M17 20.2c1.1-.8 2.5-1.2 4-1.2 3.9 0 7 3 7 7" />
    </svg>
  ),
};

const DETAIL_BLURBS: Record<string, string[]> = {
  hackathon: [
    'Turn an idea into a project with other students.',
    'Explore problems that matter to you and your community.',
    'All levels of experience are welcome.',
  ],
  workshop: [
    'Practice with Claude through hands-on activities.',
    'Explore tools and techniques at your own pace.',
    'Bring questions and learn alongside other builders.',
  ],
  demo: [
    'Share a project or idea with the community.',
    'Learn from the approaches other students take.',
    'Find inspiration for what you might build next.',
  ],
  speaker: [
    'Explore AI through different fields and perspectives.',
    'Learn from people working on meaningful problems.',
    'Ask questions and share ideas with the community.',
  ],
  office: [
    'Bring your questions and ideas to the community.',
    'Learn from fellow students as you work on projects.',
    'Explore ways to take your next step.',
  ],
  community: [
    'Meet students who are curious about building with AI.',
    'Every major, every year, every skill level is welcome.',
    'Learn, share ideas, and create together.',
  ],
};

/* ── Mobile: tap-to-expand accordion ── */
function MobileAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="flex flex-col gap-2 lg:hidden">
      {ACTIVITIES.map((activity, i) => {
        const isOpen = i === openIndex;
        return (
          <div key={activity.title} className="rounded-xl border border-claude-light-gray overflow-hidden">
            <button
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              className="flex w-full items-center gap-3 px-4 py-4 text-left"
            >
              <div className={`shrink-0 transition-colors duration-200 ${isOpen ? 'text-claude-terracotta' : 'text-claude-mid-gray'}`}>
                {icons[activity.icon]}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-ui text-sm font-semibold transition-colors duration-200 ${isOpen ? 'text-claude-dark' : 'text-claude-dark/60'}`}>
                  {activity.title}
                </h3>
                <p className="mt-0.5 font-body text-xs text-claude-mid-gray truncate">
                  {activity.description}
                </p>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className={`shrink-0 transition-transform duration-200 text-claude-mid-gray ${isOpen ? 'rotate-180' : ''}`}
              >
                <path d="M4 6l4 4 4-4" />
              </svg>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 pb-4 space-y-2.5">
                    {DETAIL_BLURBS[activity.icon].map((blurb, j) => (
                      <div key={j} className="flex items-start gap-2.5">
                        <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-claude-terracotta/50" />
                        <p className="font-body text-sm leading-relaxed text-claude-dark/70">
                          {blurb}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* ── Desktop: scroll-triggered with sticky panel ── */
function DesktopScrollView() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = ACTIVITIES[activeIndex];
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setRef = useCallback((el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let bestEntry: IntersectionObserverEntry | null = null;
        let bestRatio = 0;

        for (const entry of entries) {
          if (entry.isIntersecting && entry.intersectionRatio > bestRatio) {
            bestRatio = entry.intersectionRatio;
            bestEntry = entry;
          }
        }

        if (bestEntry) {
          const idx = itemRefs.current.indexOf(bestEntry.target as HTMLDivElement);
          if (idx !== -1) setActiveIndex(idx);
        }
      },
      {
        rootMargin: '-35% 0px -35% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="hidden lg:grid grid-cols-[1fr_1.2fr] gap-12">
      {/* Left — scroll triggers */}
      <div>
        {ACTIVITIES.map((activity, i) => {
          const isActive = i === activeIndex;
          return (
            <div
              key={activity.title}
              ref={(el) => setRef(el, i)}
              className="flex min-h-[240px] items-start py-6"
            >
              <div className={`flex items-start gap-4 rounded-lg px-4 py-3 transition-all duration-300 ${
                isActive ? 'bg-claude-warm-white' : ''
              }`}>
                <div className={`mt-1 w-[3px] shrink-0 rounded-full transition-all duration-300 ${
                  isActive ? 'h-8 bg-claude-terracotta' : 'h-0 bg-transparent'
                }`} />
                <div className={`shrink-0 mt-0.5 transition-colors duration-300 ${
                  isActive ? 'text-claude-terracotta' : 'text-claude-mid-gray'
                }`}>
                  {icons[activity.icon]}
                </div>
                <div>
                  <h3 className={`font-ui text-base font-semibold transition-colors duration-300 ${
                    isActive ? 'text-claude-dark' : 'text-claude-dark/50'
                  }`}>
                    {activity.title}
                  </h3>
                  <p className={`mt-1 font-body text-sm leading-relaxed transition-colors duration-300 ${
                    isActive ? 'text-claude-dark/60' : 'text-claude-mid-gray'
                  }`}>
                    {activity.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right — sticky detail panel */}
      <div>
        <div className="sticky top-32">
          <div className="relative min-h-[360px] rounded-2xl border border-claude-light-gray bg-claude-warm-white/60 p-8 sm:p-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-claude-terracotta/5 to-transparent rounded-bl-[80px]" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-claude-terracotta">
                    {icons[active.icon]}
                  </div>
                  <h3 className="font-heading text-2xl text-claude-dark sm:text-3xl">
                    {active.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {DETAIL_BLURBS[active.icon].map((blurb, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: j * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-claude-terracotta/50" />
                      <p className="font-body text-base leading-relaxed text-claude-dark/70">
                        {blurb}
                      </p>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <span className="font-mono text-xs text-claude-mid-gray">
                    {String(activeIndex + 1).padStart(2, '0')} / {String(ACTIVITIES.length).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-claude-light-gray" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function WhatWeDo() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-mid-gray">
            What we offer
          </p>
          <h2 className="mt-3 mb-16 font-heading text-4xl text-claude-dark sm:text-5xl">
            What we do
          </h2>
        </ScrollReveal>

        <MobileAccordion />
        <DesktopScrollView />
      </div>
    </section>
  );
}
