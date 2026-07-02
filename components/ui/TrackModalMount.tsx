'use client';
import { useUI } from '@/store/ui-store';

export function TrackModalMount() {
  const { trackModal } = useUI();
  return <div className={`track-modal ${trackModal ? 'show' : ''}`}>{trackModal}</div>;
}
