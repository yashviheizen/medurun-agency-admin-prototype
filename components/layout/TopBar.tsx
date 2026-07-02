'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@/lib/icons';
import { NotificationsMenu } from './NotificationsMenu';
import { ProfileMenu } from './ProfileMenu';

const TITLES: Record<string, [string, string]> = {
  '/dashboard': ['Operations', 'Dashboard'],
  '/live': ['Operations', 'Live Rides'],
  '/assignment': ['Operations', 'Assignment Map'],
  '/history': ['Operations', 'Ride History'],
  '/ambulances': ['Fleet & Staff', 'Ambulances'],
  '/ambulances/add': ['Fleet & Staff', 'Add Ambulance'],
  '/drivers': ['Fleet & Staff', 'Drivers'],
  '/drivers/add': ['Fleet & Staff', 'Add Driver'],
  '/verification': ['Fleet & Staff', 'Verification Status'],
  '/revenue': ['Business', 'Revenue & Transactions'],
  '/settings': ['Business', 'Settings'],
};

export function TopBar() {
  const pathname = usePathname() ?? '/dashboard';
  const [notifAnchor, setNotifAnchor] = useState<DOMRect | null>(null);
  const [profileAnchor, setProfileAnchor] = useState<DOMRect | null>(null);

  const title = TITLES[pathname] ?? TITLES['/dashboard'];

  return (
    <header className="topbar">
      <div>
        <div className="crumb">{title[0]}</div>
        <h1>{title[1]}</h1>
      </div>
      <div className="spacer" />
      <div className="search">
        <Icon name="search" />
        <input placeholder="Search rides, drivers, ambulances..." />
      </div>
      <button
        id="bellBtn"
        className="icon-btn"
        onClick={(e) => {
          setProfileAnchor(null);
          setNotifAnchor(notifAnchor ? null : e.currentTarget.getBoundingClientRect());
        }}
      >
        <Icon name="bell" />
        <span className="count">5</span>
      </button>
      <button
        id="profileBtn"
        className="hdr-avatar"
        onClick={(e) => {
          setNotifAnchor(null);
          setProfileAnchor(profileAnchor ? null : e.currentTarget.getBoundingClientRect());
        }}
      >
        <Icon name="person" />
      </button>
      <NotificationsMenu anchor={notifAnchor} onClose={() => setNotifAnchor(null)} />
      <ProfileMenu anchor={profileAnchor} onClose={() => setProfileAnchor(null)} />
    </header>
  );
}
