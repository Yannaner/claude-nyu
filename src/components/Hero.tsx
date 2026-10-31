import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex min-h-[min(850px,100svh)] items-center overflow-hidden px-6 pb-20 pt-32">
      <div className="pointer-events-none absolute inset-0 opacity-45 dark:opacity-15" aria-hidden="true"><Image src="/collaboration-art.webp" alt="" fill priority sizes="100vw" className="object-cover object-center" /></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-claude-cream via-claude-cream/85 to-transparent" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-6 flex items-center gap-3">
            <Image src="/claude-logo.svg" alt="" width={36} height={36} className="opacity-70" />
            <span className="font-ui text-sm uppercase tracking-[0.15em] text-claude-mid-gray">Claude Builder Club</span>
          </div>
          <h1 className="font-heading text-5xl leading-[1.1] text-claude-dark sm:text-6xl lg:text-7xl">
            Build anything<br /><span className="text-claude-terracotta">with Claude.</span>
          </h1>
          <p className="mt-6 max-w-md font-body text-lg leading-relaxed text-claude-dark/60">
            The builder club at NYU. Build projects, learn AI tools, and join a community of makers. Every major welcome.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://www.jotform.com/253555944387168" target="_blank" rel="noopener noreferrer" className="rounded-full bg-claude-terracotta px-7 py-3 font-ui text-sm text-white transition-colors hover:bg-claude-terracotta-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-claude-terracotta">Join Us</a>
            <a href="#events" className="rounded-full border border-claude-dark/15 px-7 py-3 font-ui text-sm text-claude-dark transition-colors hover:border-claude-dark/30 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-claude-terracotta">See Events</a>
          </div>
        </div>
        <div className="relative">
          <Image src="/mascot.png" alt="" width={72} height={72} className="absolute -top-14 right-6 z-10 drop-shadow-md sm:-top-16 sm:right-8" />
          <div className="w-full overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#1a1a1a] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-[#2a2a2a] px-4 py-3" aria-hidden="true">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" /><div className="h-3 w-3 rounded-full bg-[#febc2e]" /><div className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 font-mono text-xs text-[#aaa]">claude — builder-club</span>
            </div>
            <div className="min-h-[230px] p-6 font-mono text-sm leading-relaxed sm:p-8 sm:text-base">
              <p className="text-[#e0e0e0]">$ claude</p>
              <p className="mt-6 text-claude-terracotta">✻ Claude at NYU — Builder Club</p>
              <p className="mt-6 text-[#ddd]">Welcome to the Builder Club.</p>
              <p className="mt-2 text-[#aaa]">Bring an idea. Find your people. Build something together.</p>
              <p className="mt-6 text-claude-terracotta" aria-hidden="true">✳ Ready to build</p>
            </div>
            <div className="flex items-center justify-between border-t border-[#2a2a2a] px-4 py-2 font-mono text-xs text-[#aaa]"><span>NYU</span><span>claude-at-nyu</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
