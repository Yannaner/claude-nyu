import ScrollReveal from './ScrollReveal';
import { FAQ_ITEMS } from '@/lib/constants';

export default function FAQ() {
  return (
    <section id="faq" className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-dark/60">A little more detail</p>
          <h2 className="mt-4 font-heading text-4xl text-claude-dark sm:text-5xl">Good questions.</h2>
          <p className="mt-5 max-w-sm font-body text-base leading-relaxed text-claude-dark/65">Everything you need to get started, whether you&apos;re here to learn, build, or meet people.</p>
        </ScrollReveal>

        <div className="border-t border-claude-light-gray">
          {FAQ_ITEMS.map((item) => (
            <details key={item.question} className="group border-b border-claude-light-gray">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 text-left font-ui text-base font-semibold text-claude-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-claude-terracotta-deep [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-claude-light-gray text-claude-terracotta-deep" aria-hidden="true">
                  <svg className="h-4 w-4 group-open:hidden" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 3v10M3 8h10" /></svg>
                  <svg className="hidden h-4 w-4 group-open:block" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10" /></svg>
                </span>
              </summary>
              <p className="max-w-xl pb-6 pr-12 font-body text-base leading-relaxed text-claude-dark/65">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
