'use client';
import Link from 'next/link';
import { Icon } from '@/lib/icons';
import { Badge } from '@/components/ui/Badge';
import { useUI } from '@/store/ui-store';

export function SubmittedStep() {
  const showToast = useUI(s => s.showToast);
  return (
    <div
      className="success-wrap"
      style={{ boxShadow: 'none', border: 'none', padding: '14px 10px', maxWidth: 'none' }}
    >
      <div className="circle">
        <Icon name="check" />
      </div>
      <h2>Application Submitted!</h2>
      <p>Thank you. Your registration is now under review by the Medurun Super Admin team.</p>
      <div className="refbox">
        <div className="lbl">Application Reference ID</div>
        <div className="ref">MDR-APP-2026-7841</div>
        <Badge status="Under Review" />
      </div>
      <p style={{ fontSize: 13 }}>
        You&apos;ll be notified at <b>admin@rapidaid.in</b> once approved (typically 2–3 business days).
        Dashboard access stays locked until your agency is approved.
      </p>
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginTop: 20 }}>
        <button className="btn btn-ghost" onClick={() => showToast('Reference copied')}>
          Copy Reference ID
        </button>
        <Link href="/login" className="btn btn-primary" style={{ textDecoration: 'none' }}>
          Back to Login
        </Link>
      </div>
    </div>
  );
}
