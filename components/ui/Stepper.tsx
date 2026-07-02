import type { CSSProperties } from 'react';
import { clsx } from '@/lib/utils';

export type Step = { title: string; subtitle: string };

type Props = {
  steps: Step[];
  current: number;
  style?: CSSProperties;
};

export function Stepper({ steps, current, style }: Props) {
  return (
    <div className="stepper" style={{ maxWidth: 'none', ...style }}>
      {steps.map((s, i) => {
        const n = i + 1;
        const cls = n < current ? 'done' : n === current ? 'active' : '';
        return (
          <div key={s.title} className={clsx('step', cls)}>
            <div className="dot">{n < current ? '✓' : n}</div>
            <div className="txt">
              <b>{s.title}</b>
              <span>{s.subtitle}</span>
            </div>
            {i < steps.length - 1 && <div className="bar" />}
          </div>
        );
      })}
    </div>
  );
}
