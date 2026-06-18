type ClassValue = string | number | false | null | undefined;

/**
 * Tiny class-name joiner. Filters falsy values.
 */
export function cn(...values: ReadonlyArray<ClassValue>): string {
  return values.filter(Boolean).join(' ');
}
