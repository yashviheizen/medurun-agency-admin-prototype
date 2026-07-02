'use client';
import { useState, type ReactNode } from 'react';
import { Icon } from '@/lib/icons';
import { clsx } from '@/lib/utils';

type Props = {
  label: ReactNode;
  required?: boolean;
  initialDone?: boolean;
  initialSub?: string;
};

export function UploadCard({ label, required, initialDone, initialSub }: Props) {
  const [done, setDone] = useState(!!initialDone);
  const [sub, setSub] = useState(initialSub ?? 'Click to upload');
  return (
    <div
      className={clsx('upload', done && 'done')}
      onClick={() => {
        setDone(true);
        setSub('Uploaded ✓');
      }}
    >
      <Icon name="upload" />
      <div className="ttl">
        {done ? 'Uploaded ✓' : label}
        {!done && required && <span className="req"> *</span>}
      </div>
      <div className="sub">{sub}</div>
    </div>
  );
}
