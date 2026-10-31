import ScrollReveal from './ScrollReveal';

export default function BuilderClub() {
  return (
    <section id="build" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-mid-gray">
            Builder Club
          </p>
          <h2 className="mt-3 font-heading text-4xl text-claude-dark sm:text-5xl">
            Build anything.
          </h2>
          <p className="mt-4 font-body text-lg text-claude-dark/60 italic">
            Open to every major. No experience needed. Just curiosity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center justify-center rounded-2xl border border-dashed border-claude-light-gray py-20 px-6">
            <div className="text-claude-terracotta/40">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <p className="mt-4 font-heading text-xl text-claude-dark">
              Projects coming soon
            </p>
            <p className="mt-2 max-w-sm text-center font-body text-sm text-claude-mid-gray">
              Our members are building AI-powered tools, research assistants, and creative projects. Check back to see what ships.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-10">
            <a
              href="https://www.jotform.com/253555944387168"
              target="_blank"
              rel="noopener noreferrer"
              className="font-ui text-sm text-claude-terracotta transition-colors hover:text-claude-terracotta-deep"
            >
              Join &amp; get Free API Credits →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
