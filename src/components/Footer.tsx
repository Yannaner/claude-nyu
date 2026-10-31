import Image from 'next/image';

const links = [
  { href: 'https://claude.com/programs/campus', label: 'Claude Campus Program' },
  { href: 'https://claude.ai', label: 'Claude.ai' },
  { href: 'https://engage.nyu.edu', label: 'NYU Student Orgs' },
  { href: 'https://www.linkedin.com/company/claude-at-nyu/about/', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1c1b19] px-6 pb-8 pt-20 text-[#faf9f5] sm:pt-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 border-b border-white/20 pb-16 md:grid-cols-[1fr_auto]">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#dfa990]">Made for curious minds</p>
            <p className="mt-5 max-w-2xl font-heading text-4xl leading-tight sm:text-5xl lg:text-6xl">Let&apos;s build something <em>together.</em></p>
            <a href="#join" className="mt-8 inline-flex items-center gap-5 border-b border-[#dfa990] pb-2 font-ui text-sm font-semibold text-[#faf9f5] hover:text-[#dfa990] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfa990]">Get involved <span aria-hidden="true">↗</span></a>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#c8c2b6]">Explore</p>
            <ul className="mt-5 space-y-3 font-ui text-sm">
              {links.map(link => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="text-[#e0ddd6] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#dfa990]">{link.label} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></li>)}
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3"><Image src="/claude-logo.svg" alt="" width={24} height={24} /><span className="font-heading text-lg">Claude at NYU</span></div>
          <p className="font-ui text-xs text-[#c8c2b6]">Built with Claude, for NYU.</p>
        </div>
      </div>
    </footer>
  );
}
