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
                href="https://www.anthropic.com/campus-program"
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
              {/* Instagram */}
              <a
                href="#"
                className="text-claude-mid-gray transition-colors hover:text-claude-dark"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="16" height="16" rx="5" />
                  <circle cx="10" cy="10" r="4" />
                  <circle cx="14.5" cy="5.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
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
              {/* Discord */}
              <a
                href="#"
                className="text-claude-mid-gray transition-colors hover:text-claude-dark"
                aria-label="Discord"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.5 3.5C9 3 11 3 12.5 3.5" />
                  <path d="M4 7s1-2 6-2 6 2 6 2-1 6-2 8c-.5 1-1 1-1.5.5L10 14l-2.5 1.5c-.5.5-1 .5-1.5-.5C5 13 4 7 4 7z" />
                  <circle cx="7.5" cy="10" r="1" fill="currentColor" stroke="none" />
                  <circle cx="12.5" cy="10" r="1" fill="currentColor" stroke="none" />
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
