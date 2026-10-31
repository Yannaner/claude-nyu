import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#171715] text-[#f7f3eb]">
      <div className="absolute inset-0" aria-hidden="true"><Image src="/collaboration-art-v2.webp" alt="" fill priority sizes="100vw" className="object-cover object-[65%_center]" /></div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#171715] via-[#171715]/85 to-transparent max-lg:bg-gradient-to-t max-lg:from-[#171715] max-lg:via-[#171715]/65 max-lg:to-[#171715]/10" aria-hidden="true" />
      <div className="relative mx-auto grid min-h-[min(880px,100svh)] max-w-[1600px] items-center gap-8 px-6 pb-10 pt-32 sm:px-10 lg:grid-cols-[1fr_1.1fr] lg:gap-0 lg:pb-14 lg:pt-36 xl:px-16">
        <div className="relative z-10 max-w-2xl lg:pb-12">
          <div className="flex items-center gap-3 font-ui text-xs font-semibold uppercase tracking-[0.2em] text-[#e69a7d]">
            <span className="h-2 w-2 rounded-full bg-[#e69a7d]" /> NYU&apos;s Claude Builder Club
          </div>
          <h1 className="mt-8 font-heading text-[clamp(3.7rem,7.2vw,7.5rem)] leading-[0.95] tracking-[-0.045em]">
            Make ideas<br /><span className="text-[#e99778]">move.</span>
          </h1>
          <p className="mt-8 max-w-md font-ui text-base leading-relaxed text-[#e4ddd3] sm:text-lg">
            A community for curious minds building with Claude. Bring your ideas, meet your people, and make something real.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="https://www.jotform.com/253555944387168" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-5 rounded-full bg-[#e99778] px-6 py-3 font-ui text-sm font-semibold text-[#171715] transition-colors hover:bg-[#f4b69e]">Join the club <span aria-hidden="true">↗</span></a>
            <a href="#events" className="inline-flex min-h-12 items-center gap-4 rounded-full border border-white/30 px-6 py-3 font-ui text-sm font-medium text-white transition-colors hover:bg-white/10">What&apos;s happening <span aria-hidden="true">↓</span></a>
          </div>
          <div className="mt-12 flex flex-wrap gap-x-7 gap-y-2 border-t border-white/20 pt-5 font-ui text-xs uppercase tracking-[0.13em] text-[#c9c1b8]">
            <span>All majors</span><span>All experience levels</span><span>New York City</span>
          </div>
        </div>
        <div className="relative flex h-[260px] items-end justify-end sm:h-[340px] lg:h-[min(640px,72vh)]">
          <div className="rounded-full border border-white/30 bg-black/30 px-4 py-2 font-ui text-xs font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-sm">Curiosity → creation</div>
        </div>
      </div>
      <div className="relative border-t border-white/15 px-6 py-4 sm:px-10 xl:px-16"><div className="mx-auto flex max-w-[1472px] items-center justify-between gap-4 font-ui text-[10px] uppercase tracking-[0.18em] text-white/55 sm:text-xs"><span>Ideas are better together.</span><a href="#events" className="text-white hover:text-[#e99778]">Explore the club ↓</a></div></div>
    </section>
  );
}
