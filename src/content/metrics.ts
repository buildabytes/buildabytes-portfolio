import type { Metrics } from '@/types/content';

export const METRICS = {
  performance: 97,
  accessibility: 98,
  bestPractices: 100,
  seo: 100,
  lcp: '2.6s',
  cls: '0',
  inp: '< 50ms',
  totalKb: 38,
  jsKb: 12,
  measuredAt: '2026-06-18',
} as const satisfies Metrics;