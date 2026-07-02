'use client';
import { clsx } from '@/lib/utils';

type Props = {
  items: string[];
  active: string;
  onChange: (val: string) => void;
  style?: React.CSSProperties;
};

export function Chips({ items, active, onChange, style }: Props) {
  return (
    <div className="chip-row" style={style}>
      {items.map(c => (
        <div key={c} className={clsx('chip', active === c && 'active')} onClick={() => onChange(c)}>
          {c}
        </div>
      ))}
    </div>
  );
}
