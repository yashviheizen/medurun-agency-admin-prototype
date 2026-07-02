import type { ButtonHTMLAttributes } from 'react';
import { clsx } from '@/lib/utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function IconButton({ className, children, ...rest }: Props) {
  return (
    <button className={clsx('iconbtn', className)} {...rest}>
      {children}
    </button>
  );
}
