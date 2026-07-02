import type { ReactNode } from 'react';
import { clsx } from '@/lib/utils';

export function TableWrap({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx('tbl-wrap', className)}>{children}</div>;
}

export function Table({ children, className }: { children: ReactNode; className?: string }) {
  return <table className={className}>{children}</table>;
}
