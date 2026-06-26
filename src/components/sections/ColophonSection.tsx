import { Fade } from '@/components/client/Fade';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SITE } from '@/config/site';
import { METRICS } from '@/content';
import { ArrowUpRight } from 'lucide-react';

const SCORES = [
  { key: 'Performance', value: METRICS.performance },
  { key: 'Accessibility', value: METRICS.accessibility },
  { key: 'Best Practices', value: METRICS.bestPractices },
  { key: 'SEO', value: METRICS.seo },
] as const;

const VITALS = [
  { key: 'LCP', value: METRICS.lcp },
  { key: 'CLS', value: METRICS.cls },
  { key: 'INP', value: METRICS.inp },
  { key: 'Total weight', value: `${METRICS.totalKb} KB` },
  { key: 'JS shipped', value: `${METRICS.jsKb} KB` },
  { key: 'Measured', value: METRICS.measuredAt },
] as const;

const STACK = [
  { key: 'Stack', value: 'Next.js · React · TypeScript · Tailwind' },
  { key: 'Rendering', value: 'Static-rendered, minimal client JS' },
  { key: 'Typefaces', value: 'Archivo & IBM Plex Mono, self-hosted' },
  { key: 'Hosting', value: 'Vercel, edge-delivered' },
  {
    key: 'Accessibility',
    value: 'WCAG AA · keyboard-navigable · honors reduced-motion',
  },
  {
    key: 'Performance',
    value: 'Live PageSpeed report',
    href: `https://pagespeed.web.dev/analysis?url=${SITE.url}`,
  },
  {
    key: 'Source',
    value: 'View on GitHub',
    href: `${SITE.github}/buildabytes-portfolio`,
  },
  { key: 'Privacy', value: 'No cookies, no trackers, no analytics' },
] as const;

export function ColophonSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-[5vw] py-[56px]">
      <SectionHeading num="06" title="Colophon" />

      <Fade as="p" delay={60} className="mb-[30px] max-w-[54ch] text-[1.12rem] leading-[1.5] text-grey">
        This site is itself a work sample — built to be fast, accessible, and measurable.
        The numbers below are public; re-run them yourself.
      </Fade>

      {/* Score cards */}
      <Fade delay={100} className="grid grid-cols-1 rounded-sm border border-line bg-surface/30 sm:grid-cols-2 lg:grid-cols-4">
        {SCORES.map((s, i) => (
          <div
            key={s.key}
            className={`relative flex flex-wrap items-baseline gap-1.5 p-[22px_18px] ${
              i < SCORES.length - 1 ? 'border-r border-faint max-sm:border-r-0 max-sm:border-b' : ''
            }`}
          >
            <span className="absolute inset-x-[18px] bottom-2 h-px bg-acid/30" aria-hidden="true" />
            <span className="mb-1.5 basis-full font-mono text-[0.63rem] uppercase tracking-[0.07em] text-acid">
              {s.key}
            </span>
            <span className="text-[2.4rem] font-medium leading-none tracking-[-0.03em] text-ink">
              {s.value}
            </span>
            <span className="font-mono text-[0.78rem] text-mute">/100</span>
          </div>
        ))}
      </Fade>

      {/* Core Web Vitals strip */}
      <Fade
        delay={140}
        className="mb-7 mt-[-1px] grid grid-cols-2 border border-line bg-surface/30 sm:grid-cols-3 lg:grid-cols-6"
      >
        {VITALS.map((v, i) => (
          <div
            key={v.key}
            className={`flex flex-col gap-1 p-[14px_14px] ${
              (i + 1) % 6 !== 0 ? 'border-r border-faint' : ''
            }`}
          >
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.07em] text-mute">
              {v.key}
            </span>
            <span className="font-mono text-[0.92rem] font-medium text-ink">{v.value}</span>
          </div>
        ))}
      </Fade>

      {/* Stack */}
      <dl className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map((c, i) => (
          <Fade
            key={c.key}
            delay={i * 35}
            className="border-r border-b border-faint p-[18px_16px]"
          >
            <dt className="mb-2.5 font-mono text-[0.63rem] uppercase tracking-[0.07em] text-acid">
              {c.key}
            </dt>
            <dd className="text-[0.92rem] font-medium leading-[1.4] text-ink">
              {'href' in c && c.href ? (
                <a
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 border-b border-acid pb-0.5 text-ink no-underline transition-colors hover:text-acid"
                >
                  {c.value}
                  <ArrowUpRight size={12} strokeWidth={2.4} aria-hidden="true" />
                </a>
              ) : (
                c.value
              )}
            </dd>
          </Fade>
        ))}
      </dl>
    </section>
  );
}
