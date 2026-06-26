import { Fade } from '@/components/client/Fade';
import { SITE } from '@/config/site';
import { splitName } from '@/lib/format';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

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
        <Output text="software engineer · full-stack → ai" />
        <Line prompt="$" text="cat now.txt" />
        <Output text="building creative tools @ microsoft" />
        <Line prompt="$" text="cat learning.txt" />
        <Output text="agents · evals · retrieval · multi-agent systems" />
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
          <Fade
            as="h1"
            variant="wipe"
            delay={80}
            className="text-[clamp(3.6rem,11vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.035em]"
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
            <span className="text-ink">Full-stack engineer</span> by trade,{' '}
            <span className="text-ink">teaching myself to build with AI</span> on the
            side. I build creative tools at Microsoft and write about the journey at{' '}
            <span className="text-ink">buildabytes</span>.
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

            {/* Résumé button removed until public/resume.pdf is in place. */}
          </Fade>
        </div>

        <Fade delay={380} className="md:justify-self-end">
          <WhoamiTerminal />
        </Fade>
      </div>
    </section>
  );
}