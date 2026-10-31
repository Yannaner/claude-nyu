export default function Events() {
  return (
    <section id="events" className="scroll-mt-24 bg-[#171715] px-6 py-24 text-[#f9f7ef] sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/20 pb-6 font-ui text-xs font-medium uppercase tracking-[0.19em] text-white/65">
          <span>01 / What&apos;s next</span>
          <span>Claude at NYU · Events</span>
        </div>

        <div className="grid gap-12 pt-12 md:grid-cols-[0.7fr_1.3fr] md:gap-16 md:pt-16">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-[#edaa90]">Upcoming event</p>
            <time dateTime="2026-11-10" className="mt-5 block font-heading text-[clamp(5rem,13vw,9rem)] leading-[0.85] tracking-tight">
              11<span className="text-[#d97757]">.</span>10
            </time>
            <p className="mt-5 font-ui text-sm text-white/65">Tuesday · November 10, 2026</p>
          </div>

          <article className="md:pt-2">
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#edaa90]">In collaboration with</p>
            <h2 className="mt-5 font-heading text-4xl leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Claude at NYU <span className="text-[#d97757]">×</span><br />Tech@NYU
            </h2>
            <p className="mt-6 max-w-lg font-body text-lg leading-relaxed text-white/70">
              Join us for an upcoming event with Tech@NYU. More details are on the way.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/20 pt-6 font-ui text-sm">
              <div><dt className="text-white/55">Time</dt><dd className="mt-2 font-medium">To be announced</dd></div>
              <div><dt className="text-white/55">Location</dt><dd className="mt-2 font-medium">To be announced</dd></div>
            </dl>
            <a href="#join" className="mt-9 inline-flex min-h-11 items-center gap-3 border-b border-[#edaa90] pb-1 font-ui text-sm font-semibold text-[#ffd2c0] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#edaa90]">
              Get club updates <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
