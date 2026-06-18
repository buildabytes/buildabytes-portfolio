'use client';

import { cn } from '@/lib/cn';
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

type FadeVariant = 'up' | 'wipe';

type FadeOwnProps<E extends ElementType> = {
  as?: E;
  delay?: number;
  variant?: FadeVariant;
  className?: string;
  children: ReactNode;
};

type FadeProps<E extends ElementType> = FadeOwnProps<E> &
  Omit<ComponentPropsWithoutRef<E>, keyof FadeOwnProps<E>>;

const VARIANT_CLASS: Record<FadeVariant, string> = {
  up: 'opacity-0 translate-y-5 transition-[opacity,transform] duration-[600ms] ease-[cubic-bezier(0.16,0.84,0.36,1)] data-[shown=true]:opacity-100 data-[shown=true]:translate-y-0',
  wipe: '[clip-path:inset(0_0_102%_0)] transition-[clip-path] duration-[850ms] ease-[cubic-bezier(0.72,0,0.18,1)] data-[shown=true]:[clip-path:inset(0_0_-4%_0)]',
};

// If an element somehow never triggers, reveal it anyway after this long.
// Safety net so users never see a permanently-hidden element.
const SAFETY_REVEAL_MS = 1200;

export function Fade<E extends ElementType = 'div'>({
  as,
  delay = 0,
  variant = 'up',
  className,
  children,
  ...rest
}: FadeProps<E>) {
  const Tag = (as ?? 'div') as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Synchronous viewport check: catches elements already in view at
    // mount time (most often the hero, but also any section the user
    // navigated to via a hash link).
    const rect = el.getBoundingClientRect();
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const isAlreadyVisible = rect.top < viewportHeight && rect.bottom > 0;

    if (isAlreadyVisible) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    // Permissive intersection: threshold 0 + no bottom margin means the
    // observer fires on the first pixel of entry. Tall headlines that
    // would never reach a 10% intersection inside a -30px margin now
    // reveal as soon as any part of them appears.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' },
    );
    observer.observe(el);

    // Safety net: if the element has been scrolled into view but the
    // observer somehow missed firing, force-reveal after a short window.
    const safety = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const hasPassedThrough = r.top < vh && r.bottom > 0;
      if (hasPassedThrough) {
        setShown(true);
        observer.disconnect();
      }
    }, SAFETY_REVEAL_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      data-fade
      data-shown={shown}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(VARIANT_CLASS[variant], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}