'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AuthLogo } from '@/components/auth/AuthLogo';
import { Stepper } from '@/components/ui/Stepper';
import { WIZ_STEPS } from '@/components/auth/register/steps';
import { AgencyDetailsStep } from '@/components/auth/register/AgencyDetailsStep';
import { DocumentsStep } from '@/components/auth/register/DocumentsStep';
import { AdminAccountStep } from '@/components/auth/register/AdminAccountStep';
import { ReviewStep } from '@/components/auth/register/ReviewStep';
import { SubmittedStep } from '@/components/auth/register/SubmittedStep';

export default function RegisterPage() {
  const [step, setStep] = useState(1);

  useEffect(() => {
    const auth = document.getElementById('auth');
    auth?.classList.add('registering');
    return () => auth?.classList.remove('registering');
  }, []);

  useEffect(() => {
    document.getElementById('auth')?.scrollTo(0, 0);
  }, [step]);

  const go = (n: number) => setStep(n);

  return (
    <div id="authRegister" style={{ width: '100%', maxWidth: 980 }}>
      <AuthLogo tagline="Agency Onboarding" />
      <div className="auth-card" style={{ maxWidth: 980, padding: '22px 26px' }}>
        <div id="wizProgress">
          <Stepper steps={WIZ_STEPS} current={step} />
        </div>
        <div id="wizBody">
          {step === 1 && <AgencyDetailsStep onContinue={() => go(2)} />}
          {step === 2 && <DocumentsStep onBack={() => go(1)} onContinue={() => go(3)} />}
          {step === 3 && <AdminAccountStep onBack={() => go(2)} onContinue={() => go(4)} />}
          {step === 4 && <ReviewStep onBack={() => go(3)} onSubmit={() => go(5)} />}
          {step === 5 && <SubmittedStep />}
        </div>
      </div>
      <div
        style={{
          textAlign: 'center',
          marginTop: 18,
          fontSize: 13,
          color: 'var(--gray-400)',
        }}
      >
        Already approved?{' '}
        <Link href="/login" className="reg" style={{ fontSize: 13, margin: 0, textDecoration: 'none' }}>
          Back to Login
        </Link>
      </div>
    </div>
  );
}
