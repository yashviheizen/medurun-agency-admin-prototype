import type { ReactNode } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <Sidebar />
      <div className="main">
        <TopBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
