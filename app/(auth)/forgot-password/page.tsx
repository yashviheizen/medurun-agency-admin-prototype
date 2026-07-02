'use client';
import { useState } from 'react';
import Link from 'next/link';
import { AuthLogo } from '@/components/auth/AuthLogo';
import { PasswordField, PasswordStrength } from '@/components/auth/PasswordField';
import { Icon } from '@/lib/icons';
import { useUI } from '@/store/ui-store';

export default function ForgotPasswordPage() {
  const showToast = useUI(s => s.showToast);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('admin@rapidaid.in');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');

  const back = (
    <div className="auth-foot" style={{ border: 'none', paddingTop: 16, marginTop: 14 }}>
      <Link href="/login" className="reg" style={{ fontSize: 13.5, textDecoration: 'none' }}>
        ← Back to Login
      </Link>
    </div>
  );

  const doReset = () => {
    if (!pw) {
      showToast('Enter a new password');
      return;
    }
    if (pw !== pw2) {
      showToast('Passwords do not match');
      return;
    }
    setStep(4);
    showToast('Password updated');
  };

  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <AuthLogo />
      <div className="auth-card">
        {step === 1 && (
          <>
            <div className="ac-head">
              <h2>Reset Password</h2>
              <p>Enter your agency email and we&apos;ll send reset instructions.</p>
            </div>
            <div className="field" style={{ marginBottom: 18 }}>
              <label>Agency Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="admin@agency.in"
              />
            </div>
            <button className="btn btn-primary btn-block" onClick={() => setStep(2)}>
              Send Reset Link
            </button>
            {back}
          </>
        )}
        {step === 2 && (
          <div style={{ textAlign: 'center' }}>
            <div className="circle" style={{ width: 64, height: 64, margin: '4px auto 16px' }}>
              <Icon name="check" />
            </div>
            <h2
              style={{
                fontSize: 21,
                color: 'var(--navy)',
                fontWeight: 800,
                marginBottom: 8,
              }}
            >
              Check your email
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: 13.5, marginBottom: 22 }}>
              We&apos;ve sent password reset instructions to your registered email address.
            </p>
            <Link
              href="/login"
              className="btn btn-primary btn-block"
              style={{ textDecoration: 'none' }}
            >
              Back to Login
            </Link>
            <div style={{ marginTop: 14, fontSize: 12, color: 'var(--gray-400)' }}>
              Didn&apos;t get it?{' '}
              <button className="reg" style={{ fontSize: 12 }} onClick={() => setStep(1)}>
                Resend
              </button>{' '}
              ·{' '}
              <button className="reg" style={{ fontSize: 12 }} onClick={() => setStep(3)}>
                Open reset link (demo) →
              </button>
            </div>
          </div>
        )}
        {step === 3 && (
          <>
            <div className="ac-head">
              <h2>Reset Password</h2>
              <p>Choose a new password for your account.</p>
            </div>
            <div className="field">
              <label>New Password</label>
              <PasswordField value={pw} onChange={e => setPw(e.currentTarget.value)} placeholder="••••••••" />
              <PasswordStrength value={pw} />
            </div>
            <div className="field" style={{ margin: '14px 0 18px' }}>
              <label>Confirm Password</label>
              <PasswordField value={pw2} onChange={e => setPw2(e.currentTarget.value)} placeholder="••••••••" />
            </div>
            <button className="btn btn-primary btn-block" onClick={doReset}>
              Reset Password
            </button>
            {back}
          </>
        )}
        {step === 4 && (
          <div style={{ textAlign: 'center' }}>
            <div className="circle" style={{ width: 72, height: 72, margin: '4px auto 18px' }}>
              <Icon name="check" />
            </div>
            <h2
              style={{
                fontSize: 22,
                color: 'var(--navy)',
                fontWeight: 800,
                marginBottom: 8,
              }}
            >
              Password updated successfully
            </h2>
            <p style={{ color: 'var(--gray-500)', fontSize: 13.5, marginBottom: 24 }}>
              Your password has been reset. You can now sign in with your new credentials.
            </p>
            <Link
              href="/login"
              className="btn btn-primary btn-block"
              style={{ textDecoration: 'none' }}
            >
              Back to Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
