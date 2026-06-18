/**
 * Domain types for site content.
 * Runtime arrays in src/content/ use `satisfies` to enforce these.
 */

export type Job = Readonly<{
  range: string;
  role: string;
  company: string;
  place: string;
  tags: ReadonlyArray<string>;
}>;

export type Project = Readonly<{
  name: string;
  kind: string;
  blurb: string;
  tags: ReadonlyArray<string>;
  link?: string;
}>;

export type SkillGroup = Readonly<{
  group: string;
  items: ReadonlyArray<string>;
}>;

export type Metrics = Readonly<{
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  lcp: string;
  cls: string;
  inp: string;
  totalKb: number;
  jsKb: number;
  measuredAt: string;
}>;

export type Fact = Readonly<[key: string, value: string]>;

export type NavItem = Readonly<{
  id: string;
  label: string;
}>;

export type Stat = Readonly<{
  value: string;
  label: string;
}>;
