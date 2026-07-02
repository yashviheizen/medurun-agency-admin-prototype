import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  style?: React.CSSProperties;
};

export function Filters({ children, style }: Props) {
  return (
    <div className="filters" style={style}>
      {children}
    </div>
  );
}
