import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { UISurfaces } from '@/components/ui/UISurfaces';

export const metadata: Metadata = {
  title: 'Medurun Agency Admin',
  description: 'Agency operations dashboard',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <UISurfaces />
      </body>
    </html>
  );
}
