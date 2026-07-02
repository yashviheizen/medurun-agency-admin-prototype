import type { Notification } from '@/types';

export const NOTIFS: Notification[] = [
  { icon: 'shield', iconClass: 'ico-amber', title: '3 pending verifications', desc: 'Drivers & ambulances awaiting Medurun review', time: '2h ago', page: '/verification' },
  { icon: 'users', iconClass: 'ico-red', title: 'Driver license expiring', desc: 'Amit Verma — license expires in 7 days', time: '5h ago', page: '/drivers' },
  { icon: 'truck', iconClass: 'ico-red', title: 'Ambulance insurance expiring', desc: 'MH16GH3456 insurance expires 01 Jul 2026', time: '1d ago', page: '/ambulances' },
  { icon: 'truck', iconClass: 'ico-amber', title: 'Fitness certificate due', desc: 'MH18IJ7890 fitness expires 20 Nov 2026', time: '1d ago', page: '/ambulances' },
  { icon: 'activity', iconClass: 'ico-navy', title: 'Ride cancelled', desc: 'MED-2406 was cancelled by the patient', time: '2d ago', page: '/history' },
];
