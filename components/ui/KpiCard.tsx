import { Icon } from '@/lib/icons';

type Props = {
  icon: string;
  iconClass: string;
  label: string;
  value: string | number;
  delta?: string;
  dir?: 'up' | 'down';
};

export function KpiCard({ icon, iconClass, label, value, delta, dir }: Props) {
  return (
    <div className="kpi">
      <div className={`ico ${iconClass}`}>
        <Icon name={icon} />
      </div>
      <div className="label">{label}</div>
      <div className="val">{value}</div>
      {delta ? (
        <span className={`delta ${dir ?? ''}`}>
          {dir === 'up' ? '▲' : '▼'} {delta} vs yesterday
        </span>
      ) : (
        <span className="t-sub">Live now</span>
      )}
    </div>
  );
}

type MiniProps = {
  label: string;
  value: string | number;
  iconClass: string;
  icon: string;
  id?: string;
};

export function KpiMini({ label, value, iconClass, icon, id }: MiniProps) {
  return (
    <div className="kpi">
      <div className={`ico ${iconClass}`} style={{ width: 34, height: 34, marginBottom: 10 }}>
        <Icon name={icon} />
      </div>
      <div className="label">{label}</div>
      <div className="val" id={id} style={{ fontSize: 22 }}>
        {value}
      </div>
    </div>
  );
}
