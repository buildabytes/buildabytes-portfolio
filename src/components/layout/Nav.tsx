'use client';

import { Github, Linkedin } from 'lucide-react';
import { SITE } from '@/config/site';
import { NAV } from '@/config/nav';
import { cn } from '@/lib/cn';
import { padNum } from '@/lib/format';
import { useScrollSpy } from '@/components/client/useScrollSpy';
import { useScrolled } from '@/components/client/useScrolled';

const SECTION_IDS = NAV.map((n) => n.id);

export function Nav() {
  const scrolled = useScrolled(12);
  const active = useScrollSpy(SECTION_IDS, 'about');

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-30 flex items-center justify-between px-[5vw] transition-[background,padding,border-color,backdrop-filter] duration-300',
        scrolled
          ? 'border-b border-line bg-paper/85 py-[13px] backdrop-blur-md'
          : 'border-b border-transparent py-[19px]',
      )}
    >
      <a
        href="#top"
        className="flex items-center gap-2 text-[0.9rem] font-extrabold uppercase tracking-[-0.01em] text-ink no-underline"
      >
        {SITE.name}
        <span className="inline-block size-2 bg-acid" aria-hidden="true" />
      </a>

      <nav className="hidden gap-[30px] md:flex" aria-label="Primary">
        {NAV.map((item, i) => {
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? 'true' : undefined}
              className={cn(
                'flex items-baseline gap-1.5 text-[0.8rem] font-semibold uppercase tracking-[0.01em] no-underline transition-colors duration-200',
                isActive ? 'text-acid' : 'text-ink hover:text-acid',
              )}
            >
              <span
                className={cn(
                  'font-mono text-[0.6rem] font-normal',
                  isActive ? 'text-acid' : 'text-mute',
                )}
              >
                {padNum(i + 1)}
              </span>
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="flex gap-[13px]">
        <a
          href={SITE.github}
          aria-label="GitHub profile"
          target="_blank"
          rel="noreferrer"
          className="text-ink leading-none transition-colors hover:text-acid"
        >
          <Github size={17} strokeWidth={1.7} aria-hidden="true" />
        </a>
        <a
          href={SITE.linkedin}
          aria-label="LinkedIn profile"
          target="_blank"
          rel="noreferrer"
          className="text-ink leading-none transition-colors hover:text-acid"
        >
          <Linkedin size={17} strokeWidth={1.7} aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
