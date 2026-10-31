'use client';

import ScrollReveal from './ScrollReveal';
import { BENEFITS } from '@/lib/constants';

export default function WhyJoin() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="font-ui text-xs uppercase tracking-[0.2em] text-claude-mid-gray">
            Why join
          </p>
        </ScrollReveal>

        <div className="mt-12 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div><h3 className="font-heading text-3xl leading-snug text-claude-dark sm:text-4xl">Curiosity is a good place to start.</h3><p className="mt-5 max-w-md font-body text-base leading-relaxed text-claude-mid-gray">Bring an idea, learn alongside other students, and explore both the possibilities and responsibilities of building with AI.</p></div>

          <div className="space-y-6">
            {BENEFITS.map((benefit, i) => (
              <ScrollReveal key={benefit.number} delay={i * 0.06}>
                <div className="flex gap-4">
                  <span className="font-heading text-3xl text-claude-light-gray">
                    {benefit.number}
                  </span>
                  <div>
                    <h3 className="font-ui text-base font-semibold text-claude-dark">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 font-body text-sm text-claude-dark/60">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
