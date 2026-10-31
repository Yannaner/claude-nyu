import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ() {
  return (
    <section id="faq" className="bg-claude-cream px-6 py-24 text-claude-dark sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between border-b border-claude-dark/25 pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-claude-dark/65"><span>03 / The details</span><span>Questions welcome</span></div>
        <div className="grid gap-10 pt-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 className="font-heading text-5xl leading-tight tracking-tight sm:text-6xl">Good<br /><em className="text-claude-terracotta">questions.</em></h2>
            <p className="mt-5 max-w-xs font-body text-lg leading-relaxed text-claude-dark/70">A few things to know before you join us.</p>
          </div>
          <div className="border-t border-claude-dark/25">
            {FAQ_ITEMS.map((item, i) => (
              <details key={item.question} className="group border-b border-claude-dark/25">
                <summary className="flex cursor-pointer list-none items-center gap-4 py-6 text-left font-ui text-base font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#ad4c30] [&::-webkit-details-marker]:hidden">
                  <span className="hidden font-mono text-xs font-normal text-claude-dark/55 sm:block">{String(i + 1).padStart(2, '0')}</span>
                  <span className="flex-1">{item.question}</span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-claude-dark/30 text-claude-terracotta transition-colors group-open:bg-claude-dark group-open:text-claude-cream" aria-hidden="true">
                    <svg className="h-4 w-4 group-open:hidden" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3v10M3 8h10" /></svg>
                    <svg className="hidden h-4 w-4 group-open:block" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10" /></svg>
                  </span>
                </summary>
                <p className="max-w-xl pb-6 pr-12 font-body text-base leading-relaxed text-claude-dark/70 sm:pl-8">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
