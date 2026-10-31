export default function Events() {
  return (
    <section id="events" className="scroll-mt-24 bg-claude-warm-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-claude-terracotta">
              What&apos;s next
            </p>
            <h2 className="mt-4 font-heading text-4xl text-claude-dark sm:text-5xl">
              Meet us there.
            </h2>
          </div>
          <p className="max-w-xs font-body text-base leading-relaxed text-claude-dark/65">
            Come together, meet other builders, and see what&apos;s possible with Claude.
          </p>
        </div>

        <article className="mt-10 overflow-hidden rounded-2xl border border-claude-dark/10 bg-claude-cream sm:mt-14">
          <div className="grid md:grid-cols-[190px_1fr]">
            <div className="flex items-center gap-5 bg-[#d97757] px-7 py-6 text-[#211a17] md:flex-col md:items-start md:justify-between md:px-8 md:py-9">
              <span className="font-ui text-xs font-semibold uppercase tracking-[0.18em]">November<br className="hidden md:block" /> 2026</span>
              <time dateTime="2026-11-10" className="font-heading text-6xl leading-none sm:text-7xl md:text-8xl">10</time>
              <span className="ml-auto font-ui text-xs font-semibold uppercase tracking-[0.16em] md:ml-0">Tuesday</span>
            </div>

            <div className="flex flex-col justify-between gap-8 p-7 sm:p-10">
              <div>
                <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-claude-terracotta">
                  Upcoming event
                </p>
                <h3 className="mt-4 font-heading text-3xl leading-tight text-claude-dark sm:text-4xl">
                  Claude at NYU <span className="text-claude-terracotta">×</span> Tech@NYU
                </h3>
                <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-claude-dark/70 sm:text-lg">
                  Join us for an upcoming event with Tech@NYU. More details are on the way.
                </p>
              </div>
              <div className="flex flex-col gap-5 border-t border-claude-light-gray pt-6 sm:flex-row sm:items-end sm:justify-between">
                <dl className="flex flex-wrap gap-x-10 gap-y-4 font-ui text-sm">
                  <div><dt className="text-claude-dark/55">Time</dt><dd className="mt-1 font-medium text-claude-dark">To be announced</dd></div>
                  <div><dt className="text-claude-dark/55">Location</dt><dd className="mt-1 font-medium text-claude-dark">To be announced</dd></div>
                </dl>
                <a href="#join" className="inline-flex w-fit items-center gap-2 font-ui text-sm font-semibold text-claude-terracotta-deep underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-claude-terracotta">
                  Get club updates <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
