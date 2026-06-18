/**
 * Keyboard-only skip link. Required for WCAG 2.4.1.
 */
export function SkipLink() {
  return (
    <a
      href="#main"
      className="fixed left-2 top-2 z-[100] -translate-y-[180%] bg-acid px-3.5 py-2.5 font-mono text-[0.78rem] font-medium text-paper no-underline transition-transform duration-150 focus:translate-y-0"
    >
      Skip to content
    </a>
  );
}
