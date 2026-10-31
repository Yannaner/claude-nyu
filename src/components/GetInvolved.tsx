'use client';

import { motion } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

export default function GetInvolved() {
  return (
    <section id="join" className="border-t border-claude-light-gray py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <ScrollReveal>
          <h2 className="font-heading text-4xl text-claude-dark sm:text-5xl">
            Get involved.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <motion.div
            whileHover={{
              y: -4,
              boxShadow: '0 8px 30px rgba(0,0,0,0.06)',
            }}
            className="group mt-12 flex flex-col rounded-xl border border-claude-light-gray bg-claude-warm-white p-8 transition-all hover:border-t-2 hover:border-t-claude-terracotta"
          >
            <span className="inline-block w-fit rounded-full bg-claude-sand/50 px-3 py-1 font-ui text-xs text-claude-mid-gray">
              Open · Flexible · All majors
            </span>

            <h3 className="mt-4 font-heading text-2xl text-claude-dark">
              Join the Builder Club
            </h3>

            <ul className="mt-4 space-y-2">
              <li className="flex items-start gap-2 font-body text-sm text-claude-dark/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-claude-terracotta" />
                Build AI-powered projects with Claude
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-claude-dark/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-claude-terracotta" />
                Free API credits available
              </li>
              <li className="flex items-start gap-2 font-body text-sm text-claude-dark/70">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-claude-terracotta" />
                No coding experience required
              </li>
            </ul>

            <a
              href="https://www.jotform.com/253555944387168"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block w-fit rounded-full bg-claude-terracotta px-6 py-2.5 font-ui text-sm text-white transition-colors hover:bg-claude-terracotta-deep"
            >
              Join the Club →
            </a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  );
}
