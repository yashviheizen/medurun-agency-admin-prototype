'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthLogo } from '@/components/auth/AuthLogo';
import { OtpInput } from '@/components/auth/OtpInput';
import { Icon } from '@/lib/icons';
import { useUI } from '@/store/ui-store';
import { useOtpTimer } from '@/hooks/useOtpTimer';

export default function LoginPage() {
  const router = useRouter();
  const showToast = useUI(s => s.showToast);
  const [step, setStep] = useState<'login' | 'otp'>('login');
  const [email, setEmail] = useState('admin@rapidaid.in');
  const [password, setPassword] = useState('········');
  const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
  const timer = useOtpTimer(30);

  const onSignIn = () => {
    if (!email.trim()) {
      showToast('Enter agency email');
      return;
    }
    setStep('otp');
    timer.start();
  };

  const onVerify = () => {
    const code = otp.join('');
    if (code.length < 6) {
      showToast('Enter all 6 digits');
      return;
    }
    router.push('/dashboard');
    setTimeout(() => showToast('Signed in · Welcome back'), 300);
  };

  const onResend = () => {
    showToast('New OTP sent');
    timer.start();
  };

  return (
    <div style={{ width: '100%', maxWidth: 480 }}>
      <AuthLogo />
      {step === 'login' ? (
        <div className="auth-card">
          <div className="ac-head">
            <h2>Welcome Back</h2>
            <p>Sign in to your approved agency account</p>
          </div>
          <div className="field">
            <label>Agency Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@agency.in"
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </div>
          <div className="auth-row">
            <label>
              <input type="checkbox" defaultChecked /> Remember me
            </label>
            <Link href="/forgot-password" className="fp" style={{ textDecoration: 'none' }}>
              Forgot password?
            </Link>
          </div>
          <button className="btn btn-primary btn-block" onClick={onSignIn}>
            <Icon name="shield" />
            Sign In
          </button>
          <div className="auth-foot">
            Need to onboard a new agency?
            <br />
            <Link href="/register" className="reg" style={{ textDecoration: 'none' }}>
              Start Agency Registration →
            </Link>
          </div>
        </div>
      ) : (
        <div className="auth-card">
          <button className="back-lnk" onClick={() => setStep('login')}>
            <Icon name="x" />
            Back to login
          </button>
          <div className="ac-head">
            <h2>Verify it&apos;s you</h2>
            <p>Enter the 6-digit code we sent to your registered mobile</p>
          </div>
          <div className="otp-mail">+91 98200 •••00 · {email}</div>
          <OtpInput value={otp} onChange={setOtp} autoFocus />
          <button className="btn btn-primary btn-block" onClick={onVerify}>
            <Icon name="check" />
            Verify &amp; Continue
          </button>
          <div className="resend">
            Didn&apos;t get the code? <button onClick={onResend}>Resend OTP</button>{' '}
            <span>{timer.seconds > 0 ? `(${timer.seconds}s)` : ''}</span>
          </div>
        </div>
      )}
    </div>
  );
}
