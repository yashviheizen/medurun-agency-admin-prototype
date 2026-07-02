'use client';
import { useState, type InputHTMLAttributes } from 'react';
import { Icon } from '@/lib/icons';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function PasswordField(props: Props) {
  const [show, setShow] = useState(false);
  return (
    <div className="pw-wrap">
      <input {...props} type={show ? 'text' : 'password'} />
      <button type="button" className="pw-eye" onClick={() => setShow(s => !s)}>
        <Icon name={show ? 'eyeoff' : 'eye'} />
      </button>
    </div>
  );
}

type StrengthProps = {
  value: string;
  labelId?: string;
};

export function passwordScore(v: string): number {
  let s = 0;
  if (v.length >= 8) s++;
  if (/[A-Z]/.test(v) && /[a-z]/.test(v)) s++;
  if (/\d/.test(v) && /[^A-Za-z0-9]/.test(v)) s++;
  return s;
}

export function PasswordStrength({ value, labelId }: StrengthProps) {
  const s = passwordScore(value);
  const map: Record<number, [string, string]> = {
    0: ['', 'var(--gray-400)'],
    1: ['Weak', 'var(--red)'],
    2: ['Medium', 'var(--amber)'],
    3: ['Strong', 'var(--green)'],
  };
  const col = value ? map[s][1] : 'var(--gray-400)';
  let label: React.ReactNode;
  if (!value) label = 'Enter password';
  else if (s >= 3) label = <span className="pwok">✓ Strong · meets requirements</span>;
  else label = map[s][0] || 'Weak';

  return (
    <div className="pw-strength">
      <div className="pw-bars">
        {[0, 1, 2].map(i => (
          <i key={i} style={{ background: value && i < s ? col : 'var(--gray-200)' }} />
        ))}
      </div>
      <span className="pw-lbl" id={labelId} style={{ color: col }}>
        {label}
      </span>
    </div>
  );
}
