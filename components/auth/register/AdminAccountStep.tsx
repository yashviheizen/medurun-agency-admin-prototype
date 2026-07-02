'use client';
import { useEffect, useState } from 'react';
import { Icon } from '@/lib/icons';
import { PasswordField, PasswordStrength } from '@/components/auth/PasswordField';
import { OtpInput } from '@/components/auth/OtpInput';
import { useUI } from '@/store/ui-store';
import { useOtpTimer } from '@/hooks/useOtpTimer';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

const WIZ_OTP_CODE = '123456';

export function AdminAccountStep({ onBack, onContinue }: Props) {
  const showToast = useUI(s => s.showToast);
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [mobile, setMobile] = useState('+91 98765 04521');
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const [otpSent, setOtpSent] = useState(false);
  const [otpInvalid, setOtpInvalid] = useState(false);
  const [verified, setVerified] = useState(false);
  const timer = useOtpTimer(30);

  // mobile changed → invalidate prior verification
  useEffect(() => {
    if (verified) {
      setVerified(false);
      setOtpSent(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mobile]);

  const last4 = mobile.replace(/\s/g, '').slice(-4) || '4521';

  const sendOtp = () => {
    setVerified(false);
    setOtpSent(true);
    setOtpInvalid(false);
    setOtp(['', '', '', '', '', '']);
    timer.start();
    showToast('OTP sent to +91 •••••• ' + last4);
  };

  const verifyOtp = () => {
    const code = otp.join('');
    if (code.length < 6) {
      showToast('Enter all 6 digits');
      return;
    }
    if (code === WIZ_OTP_CODE) {
      setVerified(true);
      showToast('Mobile number verified');
    } else {
      setOtpInvalid(true);
    }
  };

  return (
    <>
      <h3 style={{ color: 'var(--navy)', fontSize: 16 }}>Admin Account Setup</h3>
      <p style={{ color: 'var(--gray-500)', fontSize: 12.5, marginBottom: 6 }}>
        Create the administrator login and verify your mobile number.
      </p>
      <div className="form-grid">
        <div className="field full">
          <label>Admin Email <span className="req">*</span></label>
          <input type="email" defaultValue="admin@rapidaid.in" placeholder="admin@agency.in" />
        </div>
        <div className="field">
          <label>Password <span className="req">*</span></label>
          <PasswordField value={pw} onChange={e => setPw(e.currentTarget.value)} placeholder="••••••••" />
          <PasswordStrength value={pw} />
        </div>
        <div className="field">
          <label>Confirm Password <span className="req">*</span></label>
          <PasswordField value={pw2} onChange={e => setPw2(e.currentTarget.value)} placeholder="••••••••" />
        </div>
        <div className="field full">
          <label>Mobile Number <span className="req">*</span></label>
          <div style={{ display: 'flex', gap: 8 }}>
            <input
              value={mobile}
              onChange={e => setMobile(e.target.value)}
              style={{ flex: 1 }}
              placeholder="+91 ..."
            />
            <button type="button" className="btn btn-ghost" onClick={sendOtp}>
              Send OTP
            </button>
          </div>
        </div>
        <div className="field full">
          <label>OTP Verification <span className="req">*</span></label>
          <div className="otp-block">
            {!otpSent && !verified && (
              <div className="otp-hint">
                Click &quot;Send OTP&quot; to receive a 6-digit code on your mobile.
              </div>
            )}
            {otpSent && !verified && (
              <>
                <div className="otp-sent">
                  <Icon name="check" />
                  OTP sent to +91 •••••• {last4}
                </div>
                <OtpInput value={otp} onChange={(v) => { setOtp(v); setOtpInvalid(false); }} size="sm" invalid={otpInvalid} autoFocus />
                <div className="otp-verify-row">
                  <button type="button" className="btn btn-primary btn-sm" onClick={verifyOtp}>
                    Verify OTP
                  </button>
                  <span className="otp-resend">
                    Resend OTP{' '}
                    <button onClick={sendOtp} disabled={timer.seconds > 0}>
                      <span>{timer.seconds > 0 ? `in ${timer.seconds}s` : 'now'}</span>
                    </button>
                  </span>
                </div>
                {otpInvalid && (
                  <div className="otp-error">
                    <Icon name="alert" />
                    Invalid OTP. Please try again.
                  </div>
                )}
                <div className="otp-demo">
                  Demo code: <b>{WIZ_OTP_CODE}</b>
                </div>
              </>
            )}
            {verified && (
              <div className="otp-success">
                <div className="sc">
                  <Icon name="check" />
                </div>
                <div>
                  <b>Mobile Number Verified</b>
                  <span>OTP verified successfully</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="wiz-actions">
        <button className="btn btn-ghost" onClick={onBack}>
          ← Back
        </button>
        <button className="btn btn-primary" onClick={onContinue} disabled={!verified}>
          Continue →
        </button>
      </div>
    </>
  );
}
