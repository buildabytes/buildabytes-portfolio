/**
 * Pad a positive integer with a leading zero.
 */
export function padNum(n: number, width = 2): string {
  return String(n).padStart(width, '0');
}

/**
 * Split a full name into [first, rest] for the hero treatment.
 */
export function splitName(full: string): readonly [string, string] {
  const trimmed = full.trim();
  const idx = trimmed.indexOf(' ');
  if (idx === -1) return [trimmed, ''];
  return [trimmed.slice(0, idx), trimmed.slice(idx + 1)];
}

/**
 * Get the current year. Wrapped so we can stub in tests.
 */
export function currentYear(): number {
  return new Date().getFullYear();
}
