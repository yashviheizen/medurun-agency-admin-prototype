'use client';
import { useUI } from '@/store/ui-store';
import { Icon } from '@/lib/icons';
import type { ReactNode } from 'react';

export function DrawerHead({ icon, title, sub, round }: { icon: ReactNode; title: string; sub?: ReactNode; round?: boolean }) {
  const { closeAll } = useUI();
  return (
    <div className="drawer-head">
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, minWidth: 0 }}>
        <div
          className="da-ic"
          style={round ? { borderRadius: '50%', background: 'var(--navy)', color: '#fff', fontWeight: 700 } : undefined}
        >
          {icon}
        </div>
        <div style={{ minWidth: 0 }}>
          <h3>{title}</h3>
          {sub && <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginTop: 4 }}>{sub}</div>}
        </div>
      </div>
      <div className="x" onClick={closeAll}>
        <Icon name="x" />
      </div>
    </div>
  );
}

export function DrawerBody({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <div className="drawer-body" id={id}>
      {children}
    </div>
  );
}

export function DrawerFoot({ children, justify }: { children: ReactNode; justify?: React.CSSProperties['justifyContent'] }) {
  return (
    <div className="drawer-foot" style={justify ? { justifyContent: justify } : undefined}>
      {children}
    </div>
  );
}

export function DrawerSection({
  title,
  children,
  focus,
  id,
  style,
}: {
  title: string;
  children: ReactNode;
  focus?: boolean;
  id?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`dsec${focus ? ' focus' : ''}`} id={id} style={style}>
      <h4>{title}</h4>
      {children}
    </div>
  );
}

export function DrawerMount() {
  const { drawer, closeAll, modal, trackModal } = useUI();
  return (
    <>
      <div className={`overlay ${drawer || modal || trackModal ? 'show' : ''}`} onClick={closeAll} />
      <div className={`drawer ${drawer ? 'show' : ''}`}>{drawer}</div>
    </>
  );
}
