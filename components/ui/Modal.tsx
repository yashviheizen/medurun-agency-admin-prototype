'use client';
import { useUI } from '@/store/ui-store';
import { Icon } from '@/lib/icons';
import type { ReactNode } from 'react';

export function ModalShell({ title, children, foot }: { title: string; children: ReactNode; foot?: ReactNode }) {
  const { closeModal } = useUI();
  return (
    <>
      <div className="modal-head">
        <h3>{title}</h3>
        <div className="x" onClick={closeModal}>
          <Icon name="x" />
        </div>
      </div>
      <div className="modal-body">{children}</div>
      {foot && <div className="modal-foot">{foot}</div>}
    </>
  );
}

export function ModalMount() {
  const { modal, closeAll } = useUI();
  return (
    <>
      <div className={`overlay ${modal ? 'show' : ''}`} onClick={closeAll} />
      <div className={`modal ${modal ? 'show' : ''}`}>{modal}</div>
    </>
  );
}
