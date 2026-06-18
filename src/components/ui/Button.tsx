import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = Readonly<{
  variant?: 'solid' | 'ghost';
  children: ReactNode;
}> &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'>;

const BASE =
  'inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-[0.85rem] font-medium tracking-[-0.005em] no-underline transition-[background,color,border-color,transform,box-shadow] duration-200';

const VARIANT = {
  solid:
    'border-acid bg-acid text-paper hover:-translate-y-0.5 hover:shadow-[0_8px_30px_-8px_rgba(190,242,100,0.55)]',
  ghost: 'bg-surface text-ink hover:border-acid/40 hover:text-acid',
} as const;

export function Button({ variant = 'solid', children, className, ...rest }: ButtonProps) {
  return (
    <a className={cn(BASE, VARIANT[variant], className)} {...rest}>
      {children}
    </a>
  );
}
