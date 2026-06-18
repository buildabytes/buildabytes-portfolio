import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/types/content';
import { padNum } from '@/lib/format';
import { TagList } from '@/components/ui/TagList';

type ProjectCardProps = Readonly<{
  project: Project;
  index: number;
}>;

const SHARED =
  'group grid grid-cols-[64px_1fr_40px] items-start gap-5 border-b border-faint p-[26px_18px] no-underline text-ink max-md:grid-cols-[40px_1fr]';

export function ProjectCard({ project, index }: ProjectCardProps) {
  const inner = (
    <>
      <span
        className={`pt-1 font-mono text-[0.9rem] transition-colors duration-200 ${
          project.link ? 'text-mute group-hover:text-acid' : 'text-mute'
        }`}
      >
        {padNum(index + 1)}
      </span>

      <div>
        <div className="mb-2 flex flex-wrap items-baseline gap-3.5">
          <h3 className="text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.02em]">
            {project.name}
          </h3>
          <span className="rounded-sm border border-acid/60 px-[7px] py-[3px] font-mono text-[0.62rem] uppercase tracking-[0.06em] text-acid">
            {project.kind}
          </span>
        </div>
        <p className="mb-3.5 max-w-[62ch] text-[1.02rem] text-grey">{project.blurb}</p>
        <TagList tags={project.tags} />
      </div>

      <span className="pt-0.5 text-grey max-md:hidden" aria-hidden="true">
        {project.link ? (
          <ArrowUpRight
            size={22}
            strokeWidth={1.8}
            className="transition-transform duration-[220ms] group-hover:-translate-y-[3px] group-hover:translate-x-[3px] group-hover:text-acid"
          />
        ) : null}
      </span>
    </>
  );

  if (project.link) {
    return (
      <a
        href={project.link}
        target="_blank"
        rel="noreferrer"
        className={`${SHARED} transition-colors duration-200 hover:bg-surface`}
      >
        {inner}
      </a>
    );
  }

  return <div className={SHARED}>{inner}</div>;
}
