import type { Stat } from '@/types/content';

/**
 * Stat strip shown in the hero. Update these to reflect current numbers.
 */
export const STATS = [
  { value: '4+', label: 'yrs @ Microsoft' },
  { value: '11', label: 'AI features shipped' },
  { value: '2', label: 'product orgs led in' },
] as const satisfies ReadonlyArray<Stat>;
