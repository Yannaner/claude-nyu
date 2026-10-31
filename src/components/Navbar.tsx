'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { NAV_LINKS } from '@/lib/constants';
import { useTheme } from './ThemeProvider';

const focusClass = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#edaa90]';

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className={`flex h-11 w-11 items-center justify-center rounded-full text-[#f9f7ef] hover:bg-white/10 ${focusClass}`}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {theme === 'light' ? (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 1v1M8 14v1M1 8h1M14 8h1M3.05 3.05l.7.7M12.25 12.25l.7.7M3.05 12.95l.7-.7M12.25 3.75l.7-.7" />
          <circle cx="8" cy="8" r="3" />
        </svg>
      ) : (
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 8.5A6.5 6.5 0 017.5 2 5.5 5.5 0 1014 8.5z" />
        </svg>
      )}
    </button>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMobileOpen(false);
        menuButton.current?.focus();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <nav aria-label="Main navigation" className="mx-auto max-w-5xl rounded-2xl border border-white/15 bg-[#171715]/70 px-4 shadow-lg shadow-black/10 backdrop-blur-xl backdrop-saturate-150 sm:rounded-full sm:px-5">
        <div className="flex min-h-[54px] items-center justify-between gap-4">
          <a href="#" className={`flex shrink-0 items-center gap-2 rounded-sm ${focusClass}`} aria-label="Claude at NYU, back to top">
            <Image src="/claude-logo.svg" alt="" width={21} height={21} />
            <span className="font-ui text-sm font-semibold tracking-tight text-[#f9f7ef]">Claude at NYU</span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} className={`rounded-full px-4 py-2 font-ui text-sm font-medium text-white/75 transition-colors hover:bg-white/10 hover:text-white ${focusClass}`}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <a href="https://www.jotform.com/253555944387168" target="_blank" rel="noopener noreferrer" className={`hidden rounded-full min-h-10 items-center bg-[#d97757] px-4 py-2 font-ui text-xs font-semibold text-[#171715] hover:bg-[#efaa91] md:inline-flex ${focusClass}`}>
              Join <span aria-hidden="true" className="ml-2">↗</span>
            </a>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setMobileOpen(open => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              className={`flex h-11 w-11 items-center justify-center rounded-full text-[#f9f7ef] hover:bg-white/10 md:hidden ${focusClass}`}
            >
              {mobileOpen ? (
                <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="1.5" /></svg>
              ) : (
                <svg aria-hidden="true" width="20" height="14" viewBox="0 0 20 14" fill="none"><path d="M0 1h20M0 7h20M0 13h20" stroke="currentColor" strokeWidth="1.5" /></svg>
              )}
            </button>
          </div>
        </div>

        <div id="mobile-menu" hidden={!mobileOpen} className="max-h-[calc(100svh-80px)] overflow-y-auto border-t border-white/15 px-1 pb-4 pt-2 md:hidden">
          <div className="flex flex-col">
            {NAV_LINKS.map(link => (
              <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className={`rounded-sm py-3 font-ui text-base font-medium text-[#f9f7ef] ${focusClass}`}>
                {link.label}
              </a>
            ))}
            <a href="https://www.jotform.com/253555944387168" target="_blank" rel="noopener noreferrer" onClick={() => setMobileOpen(false)} className={`mt-3 inline-flex w-fit rounded-full bg-[#d97757] px-5 py-3 font-ui text-sm font-semibold text-[#171715] hover:bg-[#efaa91] ${focusClass}`}>
              Join <span aria-hidden="true" className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
