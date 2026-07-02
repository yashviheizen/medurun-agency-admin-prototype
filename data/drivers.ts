import type { Driver } from '@/types';

export const DRIVERS: Driver[] = [
  { name: 'Rajesh Kumar', phone: '+91 98200 11223', ambulance: 'MH12AB1234', rides: 342, rating: '4.8', status: 'On Duty', verification: 'Verified' },
  { name: 'Suresh Yadav', phone: '+91 98200 44556', ambulance: 'MH14CD5678', rides: 288, rating: '4.6', status: 'On Duty', verification: 'Verified' },
  { name: 'Deepak Singh', phone: '+91 98200 77889', ambulance: 'MH12EF9012', rides: 410, rating: '4.9', status: 'On Duty', verification: 'Verified' },
  { name: 'Amit Verma', phone: '+91 98200 33221', ambulance: 'MH16GH3456', rides: 156, rating: '4.3', status: 'Off Duty', verification: 'Pending' },
  { name: 'Manoj Tiwari', phone: '+91 98200 66554', ambulance: '— Unassigned', rides: 0, rating: '—', status: 'Off Duty', verification: 'Pending' },
];
