import { badgeClass } from '@/lib/statusMap';
import { clsx } from '@/lib/utils';

type Props = {
  status: string;
  small?: boolean;
  className?: string;
};

export function Badge({ status, small, className }: Props) {
  return <span className={clsx('badge2', badgeClass(status), small && 'sm', className)}>{status}</span>;
}
