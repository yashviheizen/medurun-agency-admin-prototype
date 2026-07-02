'use client';
import { clsx } from '@/lib/utils';

export type TabItem = {
  key: string;
  label: string;
  count?: number;
};

type Props = {
  items: TabItem[];
  active: string;
  onChange: (key: string) => void;
  id?: string;
  style?: React.CSSProperties;
};

export function Tabs({ items, active, onChange, id, style }: Props) {
  return (
    <div className="tabs" id={id} style={style}>
      {items.map(t => (
        <div
          key={t.key}
          className={clsx('tab', active === t.key && 'active')}
          onClick={() => onChange(t.key)}
        >
          {t.label}
          {typeof t.count === 'number' && <span className="count">{t.count}</span>}
        </div>
      ))}
    </div>
  );
}
