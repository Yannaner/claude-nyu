import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="border-t border-claude-light-gray bg-claude-cream py-16 px-6">
      <div className="mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-3">
              <Image
                src="/claude-logo.svg"
                alt="Claude"
                width={28}
                height={28}
                className="opacity-70"
              />
              <span className="font-heading text-xl text-claude-dark">
                Claude at NYU
              </span>
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 font-ui text-sm text-claude-mid-gray">
              <a
                href="https://claude.com/programs/campus"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-wipe transition-colors hover:text-claude-dark"
              >
                Anthropic Campus Program
              </a>
              <a
                href="https://claude.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-wipe transition-colors hover:text-claude-dark"
              >
                Claude.ai
              </a>
              <a
                href="https://engage.nyu.edu"
                target="_blank"
                rel="noopener noreferrer"
                className="underline-wipe transition-colors hover:text-claude-dark"
              >
                NYU Student Orgs
              </a>
            </div>

            <div className="mt-6 flex gap-5">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/claude-at-nyu/about/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-claude-mid-gray transition-colors hover:text-claude-dark"
                aria-label="LinkedIn"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="16" height="16" rx="2" />
                  <path d="M6 9v5M6 6v.01M10 14v-3.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V14" />
                </svg>
              </a>
            </div>

            <p className="mt-8 font-body text-sm text-claude-mid-gray italic">
              Built with Claude, for NYU.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
}
