'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Icon } from '@/lib/icons';
import { clsx } from '@/lib/utils';

type Item = { href: string; icon: string; label: string; badge?: string };

const OPS: Item[] = [
  { href: '/dashboard', icon: 'grid', label: 'Dashboard' },
  { href: '/live', icon: 'activity', label: 'Live Rides', badge: '4' },
  { href: '/assignment', icon: 'map', label: 'Assignment Map' },
  { href: '/history', icon: 'clock', label: 'Ride History' },
];
const FLEET: Item[] = [
  { href: '/ambulances', icon: 'truck', label: 'Ambulances' },
  { href: '/drivers', icon: 'users', label: 'Drivers' },
  { href: '/verification', icon: 'shield', label: 'Verification Status' },
];
const BUSINESS: Item[] = [
  { href: '/revenue', icon: 'chart', label: 'Revenue' },
  { href: '/settings', icon: 'settings', label: 'Settings' },
];

function NavLink({ item, active }: { item: Item; active: boolean }) {
  return (
    <Link href={item.href} className={clsx(active && 'active')}>
      <Icon name={item.icon} />
      <span className="txt">{item.label}</span>
      {item.badge && <span className="badge">{item.badge}</span>}
    </Link>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isActive = (href: string) => pathname?.startsWith(href) ?? false;

  const onLogout = () => {
    router.push('/login');
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="logo">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2}>
            <path d="M3 11h2l1-2h12l1 2h2v6h-2a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H3z" />
            <path d="M11 5h2M12 4v3M10.5 5.5h3" strokeWidth={1.6} />
          </svg>
        </div>
        <div>
          <b>Medurun</b>
          <span>Agency Admin</span>
        </div>
      </div>
      <nav className="nav">
        <div className="nav-label">Operations</div>
        {OPS.map(i => <NavLink key={i.href} item={i} active={isActive(i.href)} />)}
        <div className="nav-label">Fleet &amp; Staff</div>
        {FLEET.map(i => <NavLink key={i.href} item={i} active={isActive(i.href)} />)}
        <div className="nav-label">Business</div>
        {BUSINESS.map(i => <NavLink key={i.href} item={i} active={isActive(i.href)} />)}
      </nav>
      <div className="sidebar-foot">
        <div className="avatar">RA</div>
        <div style={{ flex: 1 }}>
          <b style={{ color: 'var(--navy)', fontSize: 13 }}>Rapid Aid Pvt Ltd</b>
          <br />
          <span style={{ fontSize: 11, color: 'var(--gray-400)' }}>Verified Agency</span>
        </div>
        <button
          onClick={onLogout}
          title="Sign out"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--gray-400)',
            padding: 6,
            borderRadius: 7,
            display: 'flex',
          }}
        >
          <Icon name="logout" style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </aside>
  );
}
