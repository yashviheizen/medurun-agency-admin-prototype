'use client';
import { useEffect } from 'react';
import { useUI } from '@/store/ui-store';
import { Icon } from '@/lib/icons';

export function Toast() {
  const { toastMsg, clearToast } = useUI();
  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => clearToast(), 2200);
    return () => clearTimeout(t);
  }, [toastMsg, clearToast]);

  return (
    <div className={`toast ${toastMsg ? 'show' : ''}`}>
      <Icon name="check" />
      <span>{toastMsg ?? ''}</span>
    </div>
  );
}
