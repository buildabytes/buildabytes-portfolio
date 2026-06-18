import { SITE } from '@/config/site';
import type { Fact } from '@/types/content';
import { Fade } from '@/components/client/Fade';
import { SectionHeading } from '@/components/ui/SectionHeading';

const FACTS: ReadonlyArray<Fact> = [
  ['Currently', 'AI creative tools, Microsoft'],
  ['Based in', SITE.location],
  ['Education', 'M.S. Computer Science — UT Arlington'],
] as const;

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-[1280px] scroll-mt-[60px] px-[5vw] py-[70px]">
      <SectionHeading num="01" title="About" />

      <div className="grid gap-9 md:grid-cols-[1.7fr_1fr] md:gap-14">
        <Fade delay={60} className="space-y-5">
          <p className="text-[1.16rem] leading-[1.5] text-grey">
            Hi, I&rsquo;m Divya — the engineer behind{' '}
            <em className="font-medium not-italic text-acid">buildabytes</em>. The
            name&rsquo;s a nod to Build-A-Bear: instead of stuffing plush toys, I build
            software byte by byte, and I sweat every one of them.
          </p>
          <p className="text-[1.16rem] leading-[1.5] text-grey">
            I&rsquo;m a Software Engineer II at Microsoft, building the interface for
            <span className="text-ink"> Microsoft Designer</span> and{' '}
            <span className="text-ink">Microsoft Create</span> — the AI-powered tools
            millions of people use to make and edit content. That&rsquo;s React and
            TypeScript at enterprise scale, with a real focus on performance,
            accessibility, and the small details users only notice when they&rsquo;re
            missing.
          </p>
          <p className="text-[1.16rem] leading-[1.5] text-grey">
            Before Microsoft, I spent years in EdTech at Savvas Learning and Pearson
            building platforms used by millions of students, and got my start in
            enterprise software at Cisco and NetDocuments. I hold a Master&rsquo;s in
            Computer Science from UT Arlington, where I built recommendation systems and
            search engines and first got hooked on machine learning — a curiosity
            I&rsquo;m now turning into a deliberate path by teaching myself AI
            engineering from the ground up.
          </p>
          <p className="text-[1.16rem] leading-[1.5] text-grey">
            Off the clock, I&rsquo;m learning my most important subject yet — how to be
            a mom to my daughter. Humbling, joyful, and the best kind of hard.
          </p>
        </Fade>

        <Fade as="dl" delay={140} className="flex flex-col">
          {FACTS.map(([key, value], i) => (
            <div
              key={key}
              className={
                i === 0 ? 'border-t border-line py-3.5' : 'border-t border-faint py-3.5'
              }
            >
              <dt className="mb-0.5 font-mono text-[0.66rem] uppercase tracking-[0.06em] text-mute">
                {key}
              </dt>
              <dd className="text-[0.96rem] font-medium text-ink">{value}</dd>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
}
