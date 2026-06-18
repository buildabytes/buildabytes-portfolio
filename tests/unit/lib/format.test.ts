import { describe, it, expect } from 'vitest';
import { padNum, splitName, currentYear } from '@/lib/format';

describe('padNum', () => {
  it('pads single digits to two characters', () => {
    expect(padNum(1)).toBe('01');
    expect(padNum(9)).toBe('09');
  });

  it('leaves two-digit numbers unchanged', () => {
    expect(padNum(42)).toBe('42');
  });

  it('respects a custom width', () => {
    expect(padNum(3, 4)).toBe('0003');
  });
});

describe('splitName', () => {
  it('splits a two-word name on the first space', () => {
    expect(splitName('Divya Flick')).toEqual(['Divya', 'Flick']);
  });

  it('returns the full name and empty second part for a single word', () => {
    expect(splitName('Madonna')).toEqual(['Madonna', '']);
  });

  it('preserves multi-word last names', () => {
    expect(splitName('Ada Bart Lovelace')).toEqual(['Ada', 'Bart Lovelace']);
  });

  it('trims surrounding whitespace before splitting', () => {
    expect(splitName('  Grace Hopper  ')).toEqual(['Grace', 'Hopper']);
  });
});

describe('currentYear', () => {
  it('returns a four-digit year', () => {
    const year = currentYear();
    expect(year).toBeGreaterThanOrEqual(2024);
    expect(String(year)).toMatch(/^\d{4}$/);
  });
});
