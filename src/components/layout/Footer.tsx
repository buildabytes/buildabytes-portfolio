import { SITE } from '@/config/site';
import { currentYear } from '@/lib/format';

export function Footer() {
  return (
    <footer className="mx-auto grid max-w-[1280px] grid-cols-1 gap-1.5 border-t border-line px-[5vw] pt-[18px] pb-10 sm:grid-cols-3">
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.04em] text-mute">
        Designed &amp; built by {SITE.name}
      </span>
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.04em] text-acid sm:text-center">
        @buildabytes
      </span>
      <span className="font-mono text-[0.68rem] uppercase tracking-[0.04em] text-mute sm:text-right">
        © {currentYear()} — Set on a grid
      </span>
    </footer>
  );
}
