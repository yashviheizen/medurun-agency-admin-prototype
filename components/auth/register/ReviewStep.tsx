'use client';
import { useState } from 'react';
import { Icon } from '@/lib/icons';
import { useUI } from '@/store/ui-store';

type Props = {
  onBack: () => void;
  onSubmit: () => void;
};

export function ReviewStep({ onBack, onSubmit }: Props) {
  const showToast = useUI(s => s.showToast);
  const [terms, setTerms] = useState(false);

  const submit = () => {
    if (!terms) {
      showToast('Please confirm the declaration');
      return;
    }
    onSubmit();
  };

  return (
    <>
      <h3 style={{ color: 'var(--navy)', fontSize: 17, marginBottom: 4 }}>Review &amp; Submit</h3>
      <p style={{ color: 'var(--gray-500)', fontSize: 13, marginBottom: 18 }}>
        Confirm everything is correct before submitting for Super Admin approval.
      </p>
      <div className="sec-title">Agency Details</div>
      <dl className="dl">
        <dt>Agency Name</dt>
        <dd>Rapid Aid Pvt Ltd</dd>
        <dt>Reg. Number</dt>
        <dd>MH/AMB/2021/0457</dd>
        <dt>GSTIN</dt>
        <dd>27AABCR1234M1Z5</dd>
        <dt>City / State</dt>
        <dd>Mumbai, Maharashtra</dd>
        <dt>Ambulances</dt>
        <dd>6</dd>
        <dt>Contact</dt>
        <dd>Sunil Raghavan · +91 98200 00100</dd>
      </dl>
      <div className="sec-title">Documents</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
        {['GST Certificate', 'PAN Card', 'Undertaking (Seal, Stamp & Sign)', 'Organogram', 'Agency Logo'].map(d => (
          <span key={d} className="badge2 b-green">
            {d}
          </span>
        ))}
      </div>
      <div className="sec-title">Admin Account</div>
      <dl className="dl">
        <dt>Admin Email</dt>
        <dd>admin@rapidaid.in</dd>
        <dt>Mobile</dt>
        <dd>Verified ✓</dd>
      </dl>
      <label className="check" style={{ marginTop: 20 }}>
        <input type="checkbox" checked={terms} onChange={e => setTerms(e.target.checked)} />
        I confirm the above information is accurate and agree to Medurun&apos;s partner terms.
      </label>
      <div className="wiz-actions">
        <button className="btn btn-ghost" onClick={onBack}>
          ← Back
        </button>
        <button className="btn btn-primary" onClick={submit}>
          <Icon name="check" />
          Submit Application
        </button>
      </div>
    </>
  );
}
