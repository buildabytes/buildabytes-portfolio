import { Github, Linkedin, Mail } from 'lucide-react';
import { SITE } from '@/config/site';
import { Fade } from '@/components/client/Fade';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="mx-auto max-w-[1280px] scroll-mt-[60px] px-[5vw] py-[70px]"
    >
      <SectionHeading num="05" title="Contact" />

      <Fade
        as="h2"
        variant="wipe"
        className="text-[clamp(2.8rem,9vw,6.4rem)] font-medium leading-[0.92] tracking-[-0.035em] text-ink"
      >
        Let&rsquo;s build
        <br />
        something
        <span
          className="ml-[0.12em] inline-block size-[0.16em] bg-acid align-baseline"
          aria-hidden="true"
        />
      </Fade>

      <Fade
        as="p"
        delay={140}
        className="mt-[26px] max-w-[40ch] border-t border-line pt-[22px] text-[1.1rem] text-grey"
      >
        Always happy to talk frontend craft, AI, or whatever you&rsquo;re working on. The
        inbox is open.
      </Fade>

      <Fade delay={210} className="mt-[26px]">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-block border-b-[3px] border-acid pb-1 text-[clamp(1.4rem,4.5vw,2.6rem)] font-medium tracking-[-0.02em] text-ink no-underline transition-colors hover:text-acid"
        >
          {SITE.email}
        </a>
        <span className="mx-3.5 align-[12px] font-mono text-[0.82rem] text-mute">or</span>
        <a
          href={`mailto:${SITE.emailAlt}`}
          className="inline-block border-b border-line pb-[3px] align-[8px] font-mono text-[clamp(0.95rem,2vw,1.15rem)] font-medium text-grey no-underline transition-[color,border-color] hover:border-acid hover:text-acid"
        >
          {SITE.emailAlt}
        </a>
      </Fade>

      <Fade delay={290} className="mt-9 flex flex-wrap gap-[26px]">
        <a
          href={SITE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[0.82rem] font-medium uppercase tracking-[0.02em] text-grey no-underline transition-colors hover:text-acid"
        >
          <Linkedin size={16} strokeWidth={1.8} aria-hidden="true" /> LinkedIn
        </a>
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-[0.82rem] font-medium uppercase tracking-[0.02em] text-grey no-underline transition-colors hover:text-acid"
        >
          <Github size={16} strokeWidth={1.8} aria-hidden="true" /> buildabytes
        </a>
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center gap-2 font-mono text-[0.82rem] font-medium uppercase tracking-[0.02em] text-grey no-underline transition-colors hover:text-acid"
        >
          <Mail size={16} strokeWidth={1.8} aria-hidden="true" /> Email
        </a>
      </Fade>
    </section>
  );
}
