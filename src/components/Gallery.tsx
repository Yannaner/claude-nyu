import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  return (
    <section className="bg-claude-warm-white py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-mid-gray">
            Look back
          </p>
          <h2 className="mt-3 font-heading text-4xl text-claude-dark sm:text-5xl">
            Moments
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-claude-light-gray py-20 px-6">
            <div className="text-claude-terracotta/40">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
            </div>
            <p className="mt-4 font-heading text-xl text-claude-dark">
              Coming soon
            </p>
            <p className="mt-2 max-w-sm text-center font-body text-sm text-claude-mid-gray">
              Photos from our events and build sessions will appear here. Stay tuned.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
