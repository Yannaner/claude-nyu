import { BENEFITS } from '@/lib/constants';

export default function WhyJoin() {
  return (
    <section className="bg-[#f3eee4] px-6 py-24 text-[#20211f] sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between border-b border-[#20211f]/25 pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#20211f]/65">
          <span>02 / The community</span><span>Open to every major</span>
        </div>
        <div className="grid gap-14 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#ad4c30]">Start wherever you are</p>
            <h2 className="mt-5 max-w-lg font-heading text-5xl leading-[1.05] tracking-tight sm:text-6xl">Curiosity is<br />a great <em className="text-[#b85a3d]">first skill.</em></h2>
            <p className="mt-6 max-w-sm font-body text-lg leading-relaxed text-[#20211f]/70">Bring an idea, learn alongside other students, and explore both the possibilities and responsibilities of building with AI.</p>
            <a href="#join" className="mt-8 inline-flex items-center gap-3 border-b border-[#20211f] pb-2 font-ui text-sm font-semibold text-[#20211f] transition-colors hover:text-[#ad4c30] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad4c30]">Find your place <span aria-hidden="true">↗</span></a>
          </div>
          <div className="grid gap-x-8 sm:grid-cols-2">
            {BENEFITS.map((benefit) => (
              <article key={benefit.number} className="border-t border-[#20211f]/25 py-6">
                <span className="font-mono text-xs text-[#ad4c30]">{benefit.number} /</span>
                <h3 className="mt-4 font-ui text-base font-semibold">{benefit.title}</h3>
                <p className="mt-2 max-w-xs font-body text-sm leading-relaxed text-[#20211f]/70">{benefit.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
