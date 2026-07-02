import type { CSSProperties, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  text?: string;
  style?: CSSProperties;
};

export function EmptyState({ children, text, style }: Props) {
  return (
    <div className="empty" style={style}>
      {children ?? text}
    </div>
  );
}
