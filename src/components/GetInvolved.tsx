import ScrollReveal from './ScrollReveal';

export default function GetInvolved() {
  return (
    <section id="join" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="overflow-hidden rounded-3xl border border-claude-light-gray bg-claude-warm-white p-8 sm:p-12 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
              <div>
                <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-terracotta-deep">Claude Builder Club · NYU</p>
                <h2 className="mt-4 max-w-lg font-heading text-4xl leading-tight text-claude-dark sm:text-5xl">Come build with us.</h2>
                <p className="mt-5 max-w-md font-body text-base leading-relaxed text-claude-dark/65">Whatever you&apos;re curious about, there&apos;s room to explore it here. No coding experience required.</p>
                <a href="https://www.jotform.com/253555944387168" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-claude-terracotta-deep px-6 py-3.5 font-ui text-sm font-medium text-white transition-colors hover:bg-[#a64b2e] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-claude-terracotta-deep">
                  Join the club <span aria-hidden="true">↗</span>
                </a>
                <p className="mt-3 font-ui text-xs text-claude-dark/55">The club sign-up form opens in a new tab.</p>
              </div>
              <div className="border-t border-claude-light-gray pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <p className="font-ui text-xs uppercase tracking-[0.18em] text-claude-dark/55">What you can expect</p>
                <ul className="mt-5 space-y-5 font-body text-base text-claude-dark/80">
                  <li className="flex gap-3"><span className="text-claude-terracotta-deep" aria-hidden="true">✳</span> Build projects with Claude</li>
                  <li className="flex gap-3"><span className="text-claude-terracotta-deep" aria-hidden="true">✳</span> Meet curious people across majors</li>
                  <li className="flex gap-3"><span className="text-claude-terracotta-deep" aria-hidden="true">✳</span> Learn about developer credits and eligibility</li>
                </ul>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
