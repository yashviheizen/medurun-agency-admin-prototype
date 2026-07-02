'use client';
import { useEffect, useRef, type KeyboardEvent, type ChangeEvent } from 'react';
import { clsx } from '@/lib/utils';

type Props = {
  value: string[];
  onChange: (v: string[]) => void;
  invalid?: boolean;
  size?: 'lg' | 'sm';
  autoFocus?: boolean;
  id?: string;
};

export function OtpInput({ value, onChange, invalid, size = 'lg', autoFocus, id }: Props) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (autoFocus) refs.current[0]?.focus();
  }, [autoFocus]);

  const setAt = (i: number, v: string) => {
    const next = [...value];
    next[i] = v;
    onChange(next);
  };

  const onInput = (i: number) => (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/[^0-9]/g, '').slice(0, 1);
    setAt(i, v);
    if (v && i < 5) refs.current[i + 1]?.focus();
  };

  const onKeyDown = (i: number) => (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[i] && i > 0) {
      refs.current[i - 1]?.focus();
    }
  };

  const containerClass = size === 'sm' ? 'otp-mini' : 'otp-row';

  return (
    <div className={containerClass} id={id}>
      {[0, 1, 2, 3, 4, 5].map(i => (
        <input
          key={i}
          ref={el => {
            refs.current[i] = el;
          }}
          maxLength={1}
          inputMode="numeric"
          value={value[i] ?? ''}
          onChange={onInput(i)}
          onKeyDown={onKeyDown(i)}
          className={clsx(invalid && 'bad')}
        />
      ))}
    </div>
  );
}
