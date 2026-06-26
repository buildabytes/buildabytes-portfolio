'use client';

import { useCallback, useEffect, useState } from 'react';

export type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

/**
 * Reads and writes the user's theme preference.
 *
 * Initial value comes from the <html data-theme="..."> attribute, which
 * is set synchronously by the no-flash script in layout.tsx. That avoids
 * hydration mismatch and the "wrong theme briefly visible" flash.
 */
export function useTheme(): { theme: Theme; toggle: () => void } {
  const [theme, setTheme] = useState<Theme>('dark');

  // Sync with whatever the no-flash script chose on first load.
  useEffect(() => {
    const current = document.documentElement.dataset.theme as Theme | undefined;
    if (current === 'light' || current === 'dark') {
      setTheme(current);
    }
  }, []);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // localStorage can throw in private browsing — that's fine, we
        // just lose persistence for the session.
      }
      return next;
    });
  }, []);

  return { theme, toggle };
}