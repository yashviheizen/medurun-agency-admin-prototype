import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { clsx } from '@/lib/utils';

type FieldProps = {
  label?: string;
  required?: boolean;
  hint?: string;
  full?: boolean;
  children: ReactNode;
  style?: React.CSSProperties;
};

export function Field({ label, required, hint, full, children, style }: FieldProps) {
  return (
    <div className={clsx('field', full && 'full')} style={style}>
      {label && (
        <label>
          {label} {required && <span className="req">*</span>}
        </label>
      )}
      {children}
      {hint && <span className="hint">{hint}</span>}
    </div>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} />;
}

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} />;
}

export function TextArea(props: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} />;
}
