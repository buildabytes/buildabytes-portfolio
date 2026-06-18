import { describe, it, expect } from 'vitest';
import { cn } from '@/lib/cn';

describe('cn', () => {
  it('joins truthy class names with spaces', () => {
    expect(cn('a', 'b', 'c')).toBe('a b c');
  });

  it('filters out falsy values', () => {
    expect(cn('a', false, null, undefined, '', 'b')).toBe('a b');
  });

  it('returns an empty string when nothing is passed', () => {
    expect(cn()).toBe('');
  });

  it('preserves order', () => {
    expect(cn('z', 'a', 'm')).toBe('z a m');
  });
});
