import type { CSSProperties, ReactNode } from 'react';
import { clsx } from '@/lib/utils';

type Props = {
  className?: string;
  children: ReactNode;
};

export function Card({ className, children }: Props) {
  return <div className={clsx('card', className)}>{children}</div>;
}

export function CardHead({ children, className }: Props) {
  return <div className={clsx('card-head', className)}>{children}</div>;
}

export function CardBody({ children, className, flush, style }: Props & { flush?: boolean; style?: CSSProperties }) {
  return (
    <div className={clsx('card-body', flush && 'flush', className)} style={style}>
      {children}
    </div>
  );
}
