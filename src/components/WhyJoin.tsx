import ScrollReveal from './ScrollReveal';
import { BENEFITS } from '@/lib/constants';

export default function WhyJoin() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-dark/60">Why join</p>
          <h2 className="mt-4 max-w-sm font-heading text-4xl leading-tight text-claude-dark sm:text-5xl">Curiosity is a good place to start.</h2>
          <p className="mt-6 max-w-sm font-body text-base leading-relaxed text-claude-dark/65">Bring an idea, learn alongside other students, and explore both the possibilities and responsibilities of building with AI.</p>
          <a href="#join" className="mt-8 inline-flex items-center gap-2 font-ui text-sm font-medium text-claude-terracotta-deep underline underline-offset-4">Find your place <span aria-hidden="true">↗</span></a>
        </ScrollReveal>

        <div className="grid gap-x-8 sm:grid-cols-2">
          {BENEFITS.map((benefit) => (
            <article key={benefit.number} className="border-t border-claude-light-gray py-6">
              <span className="font-mono text-xs text-claude-terracotta-deep">{benefit.number}</span>
              <h3 className="mt-3 font-ui text-base font-semibold text-claude-dark">{benefit.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-claude-dark/65">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
