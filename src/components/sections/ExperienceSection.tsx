import { EXPERIENCE } from '@/content';
import { Fade } from '@/components/client/Fade';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { TagList } from '@/components/ui/TagList';

const ROW =
  'group relative grid grid-cols-[96px_minmax(220px,1.5fr)_150px_1.4fr] items-start gap-[22px] border-b border-faint py-[18px] pl-[18px]';

const ROW_MOBILE = 'max-md:grid-cols-1 max-md:gap-1.5 max-md:pl-4';

/**
 * Experience timeline. Visually presented as a table, but uses semantic
 * list markup — <ul>/<li> with <h3> per job — because the previous
 * role="table" structure was missing required ARIA children. This
 * gives screen-reader users a clean list of roles instead of an
 * incomplete table, and Lighthouse no longer flags the section.
 */
export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1280px] scroll-mt-[60px] px-[5vw] py-[70px]"
    >
      <SectionHeading num="02" title="Experience" />

      <div className="border-t border-line">
        <div
          aria-hidden="true"
          className="grid grid-cols-[96px_minmax(220px,1.5fr)_150px_1.4fr] gap-[22px] border-b border-faint py-2.5 pl-[18px] max-md:hidden"
        >
          {(['Year', 'Role', 'Location', 'Stack'] as const).map((h) => (
            <span
              key={h}
              className="font-mono text-[0.64rem] uppercase tracking-[0.07em] text-mute"
            >
              {h}
            </span>
          ))}
        </div>

        <ul className="list-none">
          {EXPERIENCE.map((job, i) => (
            <Fade
              as="li"
              key={`${job.range}-${job.company}`}
              delay={i * 50}
              className={`${ROW} ${ROW_MOBILE} transition-colors duration-200 hover:bg-surface/40`}
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-[3px] origin-top scale-y-0 bg-acid transition-transform duration-[250ms] group-hover:scale-y-100"
              />
              <span className="pt-[3px] font-mono text-[0.82rem] text-grey">{job.range}</span>
              <div className="flex flex-col gap-px">
                <h3 className="text-[1.16rem] font-extrabold leading-[1.2] text-ink">
                  {job.role}
                </h3>
                <span className="text-[0.9rem] font-medium uppercase tracking-[0.02em] text-mute transition-colors duration-200 group-hover:text-acid">
                  {job.company}
                </span>
              </div>
              <span className="pt-1 font-mono text-[0.76rem] text-mute">{job.place}</span>
              <span className="pt-0.5">
                <TagList tags={job.tags} />
              </span>
            </Fade>
          ))}
        </ul>
      </div>
    </section>
  );
}