'use client';
import { useState } from 'react';
import { clsx } from '@/lib/utils';

type Props = {
  defaultOn?: boolean;
  onChange?: (on: boolean) => void;
};

export function Toggle({ defaultOn, onChange }: Props) {
  const [on, setOn] = useState(!!defaultOn);
  return (
    <div
      className={clsx('toggle', on && 'on')}
      onClick={() => {
        setOn(v => {
          onChange?.(!v);
          return !v;
        });
      }}
    />
  );
}
