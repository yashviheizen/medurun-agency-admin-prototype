import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'red' | 'green';
type Size = 'md' | 'sm';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  block?: boolean;
  children?: ReactNode;
};

export function Button({ variant = 'primary', size = 'md', block, className, children, ...rest }: Props) {
  return (
    <button
      className={clsx(
        'btn',
        `btn-${variant}`,
        size === 'sm' && 'btn-sm',
        block && 'btn-block',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
