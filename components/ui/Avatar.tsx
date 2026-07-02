import { initials } from '@/lib/utils';
import { clsx } from '@/lib/utils';

type Props = {
  name?: string;
  text?: string;
  className?: string;
};

export function Avatar({ name, text, className }: Props) {
  const t = text ?? (name ? initials(name) : '?');
  return <div className={clsx('av', className)}>{t}</div>;
}
