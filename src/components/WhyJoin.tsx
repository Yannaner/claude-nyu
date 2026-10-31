'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import { BENEFITS } from '@/lib/constants';

const quoteWords = 'I built my first real project in a weekend and it actually works.'.split(' ');

function AnimatedQuote() {
  const ref = useRef<HTMLQuoteElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <blockquote ref={ref} className="font-heading text-3xl leading-snug text-claude-dark italic sm:text-4xl">
      &ldquo;
      {quoteWords.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: i * 0.08, duration: 0.4 }}
          className="inline-block mr-[0.3em]"
        >
          {word}
        </motion.span>
      ))}
      &rdquo;
      <footer className="mt-4 font-ui text-sm not-italic text-claude-mid-gray">
        — Builder Club Member
      </footer>
    </blockquote>
  );
}

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
          <AnimatedQuote />

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
