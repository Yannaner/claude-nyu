'use client';

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export default function AtAGlance() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const stats = [
    { label: 'All majors welcome', symbol: '∞' },
    { label: 'No experience needed', symbol: '0' },
    { label: 'Free to join', symbol: '$0' },
  ];

  return (
    <section ref={ref} className="py-24 px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center divide-y divide-claude-light-gray sm:flex-row sm:divide-x sm:divide-y-0">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-8 py-4"
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? 'translateY(0)' : 'translateY(12px)',
              transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s`,
            }}
          >
            <span className="font-heading text-4xl text-claude-dark sm:text-5xl">
              {stat.symbol}
            </span>
            <span className="mt-2 font-body text-sm text-claude-mid-gray italic">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
