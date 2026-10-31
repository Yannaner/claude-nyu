import { ACTIVITIES } from '@/lib/constants';

const marks = ['↗', '✳', '◉', '⌁', '✦', '◎'];

export default function WhatWeDo() {
  return (
    <section className="bg-claude-warm-white px-6 py-24 text-claude-dark sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between border-b border-claude-dark/20 pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-claude-dark/65">
          <span>01 / The practice</span><span>Learn · make · share</span>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <h2 className="max-w-3xl font-heading text-5xl leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl">Ideas are better<br /><span className="text-claude-terracotta">in good company.</span></h2>
          <p className="max-w-sm font-body text-lg leading-relaxed text-claude-dark/70 md:justify-self-end">Learn, build, and share with other students.</p>
        </div>
        <div className="mt-16 grid border-l border-t border-claude-dark/20 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity, i) => (
            <article key={activity.title} className="group flex min-h-[230px] flex-col border-b border-r border-claude-dark/20 p-7 transition-colors duration-200 hover:bg-claude-dark/[0.04] sm:p-8">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-claude-dark/55">{String(i + 1).padStart(2, '0')}</span>
                <span className={`font-heading text-3xl leading-none ${i % 2 ? "text-claude-terracotta" : "text-claude-terracotta"}`} aria-hidden="true">{marks[i]}</span>
              </div>
              <div className="mt-auto pt-10">
                <h3 className="font-heading text-2xl">{activity.title}</h3>
                <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-claude-dark/65">{activity.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
