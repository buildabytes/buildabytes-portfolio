import { Fade } from '@/components/client/Fade';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SKILLS } from '@/content';

export function SkillsSection() {
  return (
    <section className="mx-auto max-w-[1280px] px-[5vw] py-[56px]">
      <SectionHeading num="04" title="Toolkit" />

      <div className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((s, i) => (
          <Fade
            key={s.group}
            delay={i * 60}
            className="border-r border-b border-faint p-[22px_20px]"
          >
            <h3 className="mb-3.5 border-b border-line pb-3.5 text-[0.92rem] font-extrabold uppercase tracking-[0.03em] text-ink">
              {s.group}
            </h3>
            <ul className="flex flex-col gap-1.5">
              {s.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 font-mono text-[0.8rem] text-grey before:size-[5px] before:shrink-0 before:bg-acid before:content-['']"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Fade>
        ))}
      </div>
    </section>
  );
}
