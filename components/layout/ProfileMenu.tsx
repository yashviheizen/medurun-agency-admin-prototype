'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '@/lib/icons';
import { useEffect, useRef } from 'react';

type Props = {
  anchor: DOMRect | null;
  onClose: () => void;
};

export function ProfileMenu({ anchor, onClose }: Props) {
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      if ((e.target as HTMLElement)?.closest('#profileBtn')) return;
      onClose();
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [onClose]);

  if (!anchor) return null;
  const width = 236;
  const top = anchor.bottom + 8;
  const left = Math.max(8, anchor.right - width);

  return (
    <div ref={ref} className="hdr-menu profile show" style={{ top, left, width }}>
      <div className="pm-user">
        <div className="av">RA</div>
        <div>
          <b>Rapid Aid Pvt Ltd</b>
          <span>admin@rapidaid.in</span>
        </div>
      </div>
      <div
        className="pm-item"
        onClick={() => {
          onClose();
          router.push('/settings');
        }}
      >
        <Icon name="users" />
        Agency Profile
      </div>
      <div
        className="pm-item"
        onClick={() => {
          onClose();
          router.push('/settings');
        }}
      >
        <Icon name="settings" />
        Settings
      </div>
      <div
        className="pm-item"
        onClick={() => {
          onClose();
          router.push('/revenue');
        }}
      >
        <Icon name="money" />
        Billing / Revenue
      </div>
      <div className="pm-sep" />
      <div
        className="pm-item danger"
        onClick={() => {
          onClose();
          router.push('/login');
        }}
      >
        <Icon name="x" />
        Logout
      </div>
    </div>
  );
}
