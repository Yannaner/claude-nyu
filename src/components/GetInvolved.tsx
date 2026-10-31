export default function GetInvolved() {
  return (
    <section id="join" className="bg-[#f3eee4] px-6 pb-24 pt-6 text-[#20211f] sm:pb-32">
      <div className="mx-auto max-w-6xl overflow-hidden bg-[#dc8060]">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
          <div className="relative overflow-hidden p-8 sm:p-12 lg:p-16">
            <div className="relative z-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#20211f]/75">Claude Builder Club / NYU</p>
              <h2 className="mt-8 max-w-2xl font-heading text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">Your next idea<br /><em>starts here.</em></h2>
              <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-[#20211f]/80">Whatever you&apos;re curious about, there&apos;s room to explore it here. No coding experience required.</p>
              <a href="https://www.jotform.com/253555944387168" target="_blank" rel="noopener noreferrer" className="mt-9 inline-flex items-center gap-8 rounded-full bg-[#20211f] px-6 py-4 font-ui text-sm font-semibold text-[#f9f5ec] transition-colors hover:bg-[#41413b] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20211f]">Join the club <span aria-hidden="true">↗</span></a>
              <p className="mt-3 font-ui text-xs text-[#20211f]/70">Sign-up form opens in a new tab.</p>
            </div>
            <span aria-hidden="true" className="pointer-events-none absolute -bottom-32 -right-12 font-heading text-[22rem] leading-none text-[#20211f]/[0.06]">✳</span>
          </div>
          <div className="border-t border-[#20211f]/25 p-8 sm:p-12 lg:border-l lg:border-t-0 lg:p-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#20211f]/70">Come as you are</p>
            <ul className="mt-8 space-y-6 font-body text-lg leading-relaxed">
              <li className="flex gap-4"><span className="font-mono text-xs text-[#20211f]/60">01</span> Build projects with Claude</li>
              <li className="flex gap-4"><span className="font-mono text-xs text-[#20211f]/60">02</span> Meet curious people across majors</li>
              <li className="flex gap-4"><span className="font-mono text-xs text-[#20211f]/60">03</span> Learn about developer credits and eligibility</li>
            </ul>
            <p className="mt-14 border-t border-[#20211f]/25 pt-5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#20211f]/65">Build together. Think critically.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
