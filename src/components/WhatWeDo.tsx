import ScrollReveal from './ScrollReveal';
import { ACTIVITIES } from '@/lib/constants';

const icons: Record<string, React.ReactNode> = {
  hackathon: (
    <svg className="h-full w-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="8" width="24" height="16" rx="2" /><path d="M11 8V5a5 5 0 0110 0v3" /><circle cx="16" cy="17" r="2.5" /></svg>
  ),
  workshop: (
    <svg className="h-full w-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 7h24v18H4z" /><path d="M10 13h12M10 17h8" /></svg>
  ),
  demo: (
    <svg className="h-full w-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 4l3.5 7 7.5 1.1-5.5 5.3 1.3 7.6L16 21.5l-6.8 3.5 1.3-7.6-5.5-5.3 7.5-1.1z" /></svg>
  ),
  speaker: (
    <svg className="h-full w-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="16" cy="11" r="5" /><path d="M7 28c0-5 4-9 9-9s9 4 9 9" /></svg>
  ),
  office: (
    <svg className="h-full w-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="16" cy="16" r="11" /><path d="M16 9v7l4.5 2.5" /></svg>
  ),
  community: (
    <svg className="h-full w-full" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="11" cy="11" r="4" /><circle cx="21" cy="11" r="4" /><path d="M4 26c0-4 3.1-7 7-7 1.5 0 2.9.4 4 1.2M17 20.2c1.1-.8 2.5-1.2 4-1.2 3.9 0 7 3 7 7" /></svg>
  ),
};

export default function WhatWeDo() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-5 border-b border-claude-light-gray pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-dark/60">What we do</p>
              <h2 className="mt-3 font-heading text-4xl text-claude-dark sm:text-5xl">Good ideas grow together.</h2>
            </div>
            <p className="max-w-xs font-body text-base leading-relaxed text-claude-dark/65">Learn something new, make something useful, and find people to build with.</p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((activity, index) => (
            <article key={activity.title} className="group border-b border-claude-light-gray py-8 sm:px-6 sm:py-10 sm:odd:pl-0 lg:odd:pl-6 lg:[&:nth-child(3n+1)]:pl-0">
              <div className="flex items-start justify-between">
                <div className="h-8 w-8 text-claude-terracotta">{icons[activity.icon]}</div>
                <span className="font-mono text-xs text-claude-dark/45">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="mt-7 font-heading text-2xl text-claude-dark">{activity.title}</h3>
              <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-claude-dark/65">{activity.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
