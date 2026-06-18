type SectionHeadingProps = Readonly<{
  num: string;
  title: string;
}>;

export function SectionHeading({ num, title }: SectionHeadingProps) {
  return (
    <div className="mb-11 flex items-baseline gap-[18px]">
      <span className="font-mono text-[0.82rem] font-medium text-acid">{num}</span>
      <span className="text-base font-extrabold uppercase tracking-[0.03em]">{title}</span>
      <span className="h-px flex-1 self-center bg-line" />
    </div>
  );
}
