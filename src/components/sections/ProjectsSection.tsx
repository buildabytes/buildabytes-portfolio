import { Fade } from '@/components/client/Fade';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { SITE } from '@/config/site';
import { PROJECTS } from '@/content';
import { ArrowUpRight } from 'lucide-react';
 
export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[1280px] scroll-mt-[60px] px-[5vw] py-[56px]"
    >
      <SectionHeading num="03" title="AI Experiments" />

      <div className="border-t border-line">
        {PROJECTS.map((p, i) => (
          <Fade key={p.name} delay={i * 45}>
            <ProjectCard project={p} index={i} />
          </Fade>
        ))}
      </div>

      <Fade delay={100} className="mt-[26px]">
        <a
          href={SITE.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 border-b-2 border-acid pb-[3px] font-mono text-[0.8rem] font-medium uppercase tracking-[0.03em] text-ink no-underline transition-colors hover:text-acid"
        >
          More on GitHub
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      </Fade>
    </section>
  );
}
