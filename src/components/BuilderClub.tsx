export default function BuilderClub() {
  return (
    <section id="build" className="scroll-mt-24 bg-claude-cream px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-4 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-claude-terracotta">
          <span>03 / The work</span><span className="h-px flex-1 bg-claude-light-gray" />
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-[1fr_0.65fr] md:items-end">
          <h2 className="max-w-3xl font-heading text-5xl leading-[1.02] tracking-tight text-claude-dark sm:text-6xl lg:text-7xl">Ideas are better<br /><span className="italic text-claude-terracotta">out in the world.</span></h2>
          <p className="max-w-sm font-body text-lg leading-relaxed text-claude-dark/75 md:justify-self-end">Discover what students are building with Claude.</p>
        </div>

        <div className="relative mt-14 overflow-hidden bg-[#1c1b19] text-[#faf9f5]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#d08a70]/25 sm:h-[28rem] sm:w-[28rem]" aria-hidden="true">
            <div className="absolute inset-[15%] rounded-full border border-[#d08a70]/25" /><div className="absolute inset-[30%] rounded-full border border-[#d08a70]/25" /><div className="absolute left-1/2 top-1/2 h-4 w-4 rounded-full bg-[#d08a70]" />
          </div>
          <div className="relative grid gap-12 p-8 sm:p-12 md:grid-cols-[1fr_0.65fr] md:p-14">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#dfa990]">Across the community ↗</p>
              <h3 className="mt-6 max-w-lg font-heading text-4xl leading-tight sm:text-5xl">See what student builders are making.</h3>
              <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-[#dedbd2]">Explore projects by students beyond NYU, or share your own.</p>
              <a href="https://claude-showcase.vercel.app/" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-5 border-b border-[#dfa990] pb-2 font-ui text-sm font-semibold text-[#fff] hover:text-[#dfa990] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfa990]">Explore the Claude Showcase <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
            </div>
            <div className="flex flex-col justify-end border-t border-white/20 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#c8c2b6]">A few places to start</p>
              <ul className="mt-5 space-y-3 font-heading text-xl text-[#faf9f5]">
                <li>01 <span className="ml-4">Creative tools</span></li>
                <li>02 <span className="ml-4">Productivity</span></li>
                <li>03 <span className="ml-4">Games &amp; experiments</span></li>
              </ul>
              <a href="#join" className="mt-8 w-fit font-ui text-sm font-semibold text-[#dfa990] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfa990]">Build with us at NYU →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
