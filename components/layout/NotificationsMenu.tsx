'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '@/lib/icons';
import { NOTIFS } from '@/data/notifications';
import { useUI } from '@/store/ui-store';
import { useEffect, useRef } from 'react';

type Props = {
  anchor: DOMRect | null;
  onClose: () => void;
};

export function NotificationsMenu({ anchor, onClose }: Props) {
  const router = useRouter();
  const showToast = useUI(s => s.showToast);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!ref.current) return;
      if (ref.current.contains(e.target as Node)) return;
      if ((e.target as HTMLElement)?.closest('#bellBtn')) return;
      onClose();
    }
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [onClose]);

  if (!anchor) return null;
  const width = 344;
  const top = anchor.bottom + 8;
  const left = Math.max(8, anchor.right - width);

  return (
    <div ref={ref} className="hdr-menu notif show" style={{ top, left, width }}>
      <div className="nm-head">
        <b>Notifications</b>
        <a
          onClick={() => {
            onClose();
            showToast('All notifications marked read');
          }}
        >
          Mark all read
        </a>
      </div>
      <div className="nm-list">
        {NOTIFS.map((n, i) => (
          <div
            key={i}
            className="nm-item"
            onClick={() => {
              onClose();
              router.push(n.page);
            }}
          >
            <div className={`nm-ic ${n.iconClass}`}>
              <Icon name={n.icon} />
            </div>
            <div className="tx">
              <b>{n.title}</b>
              <span>{n.desc}</span>
              <span className="tm">{n.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div
        className="nm-foot"
        onClick={() => {
          onClose();
          router.push('/verification');
        }}
      >
        View all activity
      </div>
    </div>
  );
}
