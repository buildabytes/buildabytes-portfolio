type TagListProps = Readonly<{
  tags: ReadonlyArray<string>;
}>;

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-sm border border-line bg-surface/40 px-[7px] py-[3px] font-mono text-[0.66rem] text-grey"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
