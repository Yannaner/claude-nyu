'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ShimmerBackground from './ShimmerBackground';

const SPINNER_VERBS = [
  'Clauding', 'Germinating', 'Wibbling', 'Moseying', 'Marinating',
  'Coalescing', 'Percolating', 'Noodling', 'Ruminating', 'Vibing',
  'Sauntering', 'Blooming', 'Manifesting', 'Catalyzing', 'Spiraling',
  'Unfurling', 'Sparking', 'Fizzing', 'Blossoming', 'Tinkering',
];

const SPINNER_CHARS = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'];

function useSpinnerCycle() {
  const [verb, setVerb] = useState(SPINNER_VERBS[0]);
  const [charIndex, setCharIndex] = useState(0);

  const pickRandom = useCallback(() => {
    setVerb(prev => {
      let next = prev;
      while (next === prev) {
        next = SPINNER_VERBS[Math.floor(Math.random() * SPINNER_VERBS.length)];
      }
      return next;
    });
  }, []);

  useEffect(() => {
    const charTimer = setInterval(() => {
      setCharIndex(prev => (prev + 1) % SPINNER_CHARS.length);
    }, 80);
    return () => clearInterval(charTimer);
  }, []);

  useEffect(() => {
    const verbTimer = setInterval(pickRandom, 2200);
    return () => clearInterval(verbTimer);
  }, [pickRandom]);

  return { verb, spinChar: SPINNER_CHARS[charIndex] };
}

const TERMINAL_SEQUENCE = [
  { text: '$ claude', delay: 0, type: 'command' as const },
  { text: '', delay: 500, type: 'blank' as const },
  { text: '╭──────────────────────────────────────╮', delay: 700, type: 'border' as const },
  { text: '│  ✻ Claude at NYU — Builder Club      │', delay: 900, type: 'header' as const },
  { text: '╰──────────────────────────────────────╯', delay: 950, type: 'border' as const },
  { text: '', delay: 1100, type: 'blank' as const },
];

const FINAL_LINES = [
  { text: '  Welcome to the Builder Club.', delay: 0 },
  { text: '  Build anything. Every major. No experience needed.', delay: 400 },
];

export default function Hero() {
  const [sequenceIndex, setSequenceIndex] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [finalIndex, setFinalIndex] = useState(0);
  const [showCTAs, setShowCTAs] = useState(false);
  const { verb, spinChar } = useSpinnerCycle();

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    TERMINAL_SEQUENCE.forEach((line, i) => {
      timers.push(setTimeout(() => setSequenceIndex(i + 1), line.delay));
    });

    const lastDelay = TERMINAL_SEQUENCE[TERMINAL_SEQUENCE.length - 1].delay;

    // Start spinner — it never stops
    timers.push(setTimeout(() => setShowSpinner(true), lastDelay + 200));

    // Show final lines (spinner keeps going beneath them)
    timers.push(setTimeout(() => setShowFinal(true), lastDelay + 4500));

    FINAL_LINES.forEach((line, i) => {
      timers.push(setTimeout(() => setFinalIndex(i + 1), lastDelay + 4500 + line.delay));
    });

    timers.push(setTimeout(() => setShowCTAs(true), lastDelay + 5500));

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6">
      <ShimmerBackground />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left — headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/claude-logo.svg"
              alt="Claude"
              width={36}
              height={36}
              className="opacity-70"
            />
            <span className="font-ui text-sm uppercase tracking-[0.15em] text-claude-mid-gray">
              Claude Builder Club
            </span>
          </div>

          <h1 className="font-heading text-5xl leading-[1.1] text-claude-dark sm:text-6xl lg:text-7xl">
            Build anything
            <br />
            <span className="text-claude-terracotta">with Claude.</span>
          </h1>

          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-claude-dark/60">
            The builder club at NYU. Ship real projects, learn AI tools,
            and join a community of makers — every major welcome.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={showCTAs ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mt-8 flex gap-4"
          >
            <a
              href="https://www.jotform.com/253555944387168"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-claude-terracotta px-7 py-3 font-ui text-sm text-white transition-colors hover:bg-claude-terracotta-deep"
            >
              Join Us
            </a>
            <a
              href="#events"
              className="rounded-full border border-claude-dark/15 px-7 py-3 font-ui text-sm text-claude-dark transition-colors hover:border-claude-dark/30"
            >
              See Events
            </a>
          </motion.div>
        </motion.div>

        {/* Right — terminal with mascot */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative"
        >
          {/* Mascot sitting on top of terminal */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="absolute -top-14 right-6 z-10 sm:-top-16 sm:right-8"
          >
            <Image
              src="/mascot.png"
              alt="Claude mascot"
              width={64}
              height={64}
              className="drop-shadow-md sm:w-[72px] sm:h-[72px]"
            />
          </motion.div>

          <div className="w-full overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 border-b border-[#2a2a2a] px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-[#666]">
                claude — builder-club
              </span>
            </div>

            {/* Terminal body */}
            <div className="min-h-[300px] p-6 sm:p-8 font-mono text-sm sm:text-base">
              {TERMINAL_SEQUENCE.slice(0, sequenceIndex).map((line, i) => {
                if (line.type === 'blank') return <div key={i} className="h-4" />;
                if (line.type === 'border') return <div key={i} className="text-[#555]">{line.text}</div>;
                if (line.type === 'header') return <div key={i} className="text-claude-terracotta font-semibold">{line.text}</div>;
                return <div key={i} className="text-[#e0e0e0]">{line.text}</div>;
              })}

              {showFinal && (
                <>
                  {FINAL_LINES.slice(0, finalIndex).map((line, i) => (
                    <motion.div
                      key={`final-${i}`}
                      initial={{ opacity: 0, y: 4 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#ccc]"
                    >
                      {line.text}
                    </motion.div>
                  ))}
                  {finalIndex >= FINAL_LINES.length && <div className="h-4" />}
                </>
              )}

              {/* Spinner — runs continuously once started */}
              {showSpinner && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-claude-terracotta/80"
                >
                  <span className="inline-block w-4 text-center">{spinChar}</span>{' '}
                  <span className="italic text-[#888]">{verb}...</span>
                </motion.div>
              )}

              {/* Blinking cursor before spinner starts */}
              {!showSpinner && sequenceIndex > 0 && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                  className="inline-block h-4 w-2 translate-y-0.5 bg-claude-terracotta/70"
                />
              )}
            </div>

            {/* Status bar */}
            <div className="flex items-center justify-between border-t border-[#2a2a2a] px-4 py-2 font-mono text-[10px] text-[#555]">
              <span>Opus 4.6 · NYU</span>
              <span>claude-at-nyu</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={showCTAs ? { opacity: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="scroll-indicator h-8 w-px bg-claude-dark/30" />
      </motion.div>
    </section>
  );
}
