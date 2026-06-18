type SectionHeadingProps = Readonly<{
  num: string;
  title: string;
}>;

/**
 * Section header used across the page. Renders the title as <h2> so
 * that the document heading order goes h1 (hero name) -> h2 (section)
 * -> h3 (job role, project name, skill group) cleanly. The number
 * label is decorative and remains a span.
 */
export function SectionHeading({ num, title }: SectionHeadingProps) {
  return (
    <div className="mb-11 flex items-baseline gap-[18px]">
      <span aria-hidden="true" className="font-mono text-[0.82rem] font-medium text-acid">
        {num}
      </span>
      <h2 className="text-base font-extrabold uppercase tracking-[0.03em]">{title}</h2>
      <span aria-hidden="true" className="h-px flex-1 self-center bg-line" />
    </div>
  );
}