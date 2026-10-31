import ScrollReveal from './ScrollReveal';

export default function BuilderClub() {
  return (
    <section id="build" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-mid-gray">
            Builder Club
          </p>
          <h2 className="mt-3 font-heading text-4xl text-claude-dark sm:text-5xl">
            Build anything.
          </h2>
          <p className="mt-4 font-body text-lg italic text-claude-dark/60">
            Open to every major. No experience needed. Just curiosity.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-claude-light-gray bg-claude-warm-white md:grid-cols-[1fr_0.8fr]">
            <div className="p-8 sm:p-10">
              <p className="font-ui text-xs uppercase tracking-[0.18em] text-claude-terracotta">
                Inspiration from student builders
              </p>
              <h3 className="mt-4 font-heading text-3xl text-claude-dark">
                See what students are making.
              </h3>
              <p className="mt-4 max-w-lg font-body leading-relaxed text-claude-dark/70">
                Explore the Claude Showcase for projects built by students at universities beyond NYU. Find ideas, see what others are making, and share a build of your own.
              </p>
              <a
                href="https://claude-showcase.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex rounded-full bg-claude-terracotta px-6 py-3 font-ui text-sm font-medium text-white transition-colors hover:bg-claude-terracotta-deep"
              >
                Explore the Claude Showcase <span aria-hidden="true" className="ml-2">↗</span>
              </a>
              <p className="mt-4 font-ui text-xs text-claude-dark/55">Opens the separate Claude Showcase site.</p>
            </div>
            <div className="flex flex-col justify-between border-t border-claude-light-gray bg-claude-sand/30 p-8 sm:p-10 md:border-l md:border-t-0">
              <div>
                <p className="font-ui text-xs uppercase tracking-[0.18em] text-claude-dark/55">Explore ideas in</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {['Creative', 'Productivity', 'Automation', 'Tools', 'Games'].map((category) => (
                    <span key={category} className="rounded-full border border-claude-dark/15 px-3 py-1.5 font-ui text-xs text-claude-dark/70">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
              <p className="mt-8 font-body text-sm italic text-claude-dark/60">
                Have an idea? Bring it to the club and build alongside other curious people.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <a href="#join" className="mt-8 inline-block font-ui text-sm text-claude-terracotta transition-colors hover:text-claude-terracotta-deep">
            Get involved with the NYU club →
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
