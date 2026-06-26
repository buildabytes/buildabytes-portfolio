'use client';

import { useTheme } from '@/components/client/useTheme';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="text-ink leading-none transition-colors hover:text-acid"
    >
      {isDark ? (
        <Sun size={17} strokeWidth={1.7} aria-hidden="true" />
      ) : (
        <Moon size={17} strokeWidth={1.7} aria-hidden="true" />
      )}
    </button>
  );
}