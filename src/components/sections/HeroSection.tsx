import { ArrowUpRight, ArrowRight, FileText } from 'lucide-react';
import { SITE } from '@/config/site';
import { STATS } from '@/content';
import { splitName } from '@/lib/format';
import { Fade } from '@/components/client/Fade';

/* ------------------------------------------------------------------ */
/*  whoami terminal — content-rich right column                        */
/* ------------------------------------------------------------------ */
function Line({ prompt, text }: Readonly<{ prompt: string; text: string }>) {
  return (
    <div className="flex gap-2.5">
      <span className="select-none text-acid">{prompt}</span>
      <span className="text-ink">{text}</span>
    </div>
  );
}

function Output({ text }: Readonly<{ text: string }>) {
  return (
    <div className="flex gap-2.5 pl-0.5">
      <span className="select-none text-mute">›</span>
      <span className="text-grey">{text}</span>
    </div>
  );
}

function WhoamiTerminal() {
  return (
    <div
      role="img"
      aria-label="Terminal window introducing Divya Flick"
      className="relative w-full max-w-[480px] rounded-[10px] border border-line bg-[#0d0e11] font-mono shadow-[0_0_60px_-20px_rgba(190,242,100,0.18)]"
    >
      <div className="flex items-center gap-2 border-b border-line px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f56]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
        <span className="size-3 rounded-full bg-[#27c93f]" aria-hidden="true" />
        <span className="ml-3 text-[0.72rem] text-mute">~/whoami.sh</span>
      </div>

      <div className="space-y-2.5 px-5 py-5 text-[0.82rem] leading-[1.6]">
        <Line prompt="$" text="whoami" />
        <Output text="senior software engineer — ui / frontend" />
        <Line prompt="$" text="cat stack.txt" />
        <Output text="react · relay · graphql · typescript · node" />
        <Line prompt="$" text="status --now" />
        <Output text="building AI editing surfaces @ microsoft" />
        <div className="flex h-4 items-center pt-1">
          <span className="inline-block h-3 w-2 animate-[blink_1s_steps(2,end)_infinite] bg-acid" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */
export function HeroSection() {
  const [first, last] = splitName(SITE.name);

  return (
    <section
      aria-label="Introduction"
      className="
        relative isolate overflow-hidden
        px-[5vw] pt-[132px] pb-[80px] md:pb-[100px]
        [background-image:radial-gradient(rgba(243,243,239,0.05)_1px,transparent_1px)]
        [background-size:22px_22px]
      "
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] -z-10 size-[520px] rounded-full bg-acid opacity-[0.06] blur-[120px]"
      />

      <div className="mx-auto grid max-w-[1280px] items-start gap-12 md:grid-cols-[1.35fr_1fr] md:gap-16">
        <div>
          <Fade>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 px-3.5 py-1.5 font-mono text-[0.72rem] tracking-[0.04em] text-acid backdrop-blur-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-acid opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-acid" />
              </span>
              Senior Software Engineer · UI / Frontend Systems
            </span>
          </Fade>

          <Fade
            as="h1"
            variant="wipe"
            delay={80}
            className="mt-9 text-[clamp(3.6rem,11vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.035em]"
          >
            {first}
            <br />
            {last}
            <span
              className="ml-[0.12em] inline-block size-[0.18em] bg-acid align-baseline"
              aria-hidden="true"
            />
          </Fade>

          <Fade
            as="p"
            delay={200}
            className="mt-7 max-w-[42ch] text-[1.08rem] leading-[1.55] text-grey"
          >
            I design and engineer interface systems —{' '}
            <span className="text-ink">Relay/GraphQL data layers</span>,{' '}
            <span className="text-ink">AI editing surfaces</span>, and{' '}
            <span className="text-ink">component architectures</span> shipped across
            Microsoft 365.
          </Fade>

          <Fade delay={300} className="mt-9 flex flex-wrap gap-3">
            <a
              href={SITE.github}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md bg-acid px-5 py-3 text-[0.85rem] font-medium tracking-[-0.005em] text-paper no-underline transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(190,242,100,0.55)]"
            >
              GitHub
              <ArrowUpRight
                size={16}
                strokeWidth={2.4}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-5 py-3 text-[0.85rem] font-medium text-ink no-underline transition-colors duration-200 hover:border-acid/40 hover:text-acid"
            >
              Email
              <ArrowRight size={15} strokeWidth={2.2} aria-hidden="true" />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-md border border-line bg-transparent px-5 py-3 text-[0.85rem] font-medium text-grey no-underline transition-colors duration-200 hover:border-mute hover:text-ink"
            >
              <FileText size={15} strokeWidth={1.8} aria-hidden="true" />
              Résumé
            </a>
          </Fade>
        </div>

        <Fade delay={380} className="md:justify-self-end">
          <WhoamiTerminal />
        </Fade>
      </div>

      <Fade
        delay={460}
        className="mx-auto mt-20 grid max-w-[1280px] grid-cols-1 gap-y-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-x-12"
      >
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-1.5">
            <div className="flex items-baseline gap-0.5">
              <span className="text-[2.6rem] font-medium leading-none tracking-[-0.03em] text-ink">
                {s.value.replace(/\+$/, '')}
              </span>
              {s.value.endsWith('+') && (
                <span className="text-[2rem] font-medium leading-none text-acid">+</span>
              )}
            </div>
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.06em] text-mute">
              {s.label}
            </span>
          </div>
        ))}
      </Fade>
    </section>
  );
}
