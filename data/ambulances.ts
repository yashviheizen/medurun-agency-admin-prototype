import type { Ambulance, AssignmentHistory } from '@/types';

export const AMBULANCES: Ambulance[] = [
  { reg: 'MH12AB1234', model: 'Force Traveller', category: 'ALS', driver: 'Rajesh Kumar', insuranceExpiry: '12 Aug 2026', fitnessExpiry: '30 Sep 2026', status: 'Active', verification: 'Verified' },
  { reg: 'MH14CD5678', model: 'Tata Winger', category: 'BLS', driver: 'Suresh Yadav', insuranceExpiry: '05 Jul 2026', fitnessExpiry: '18 Dec 2026', status: 'Active', verification: 'Verified' },
  { reg: 'MH12EF9012', model: 'Maruti Eeco', category: 'Neo', driver: 'Deepak Singh', insuranceExpiry: '22 Nov 2026', fitnessExpiry: '14 Mar 2027', status: 'Active', verification: 'Verified' },
  { reg: 'MH16GH3456', model: 'Mahindra Bolero', category: 'BLS', driver: 'Amit Verma', insuranceExpiry: '01 Jul 2026', fitnessExpiry: '09 Oct 2026', status: 'Active', verification: 'Pending' },
  { reg: 'MH18IJ7890', model: 'Force Traveller', category: 'ALS', driver: '— Unassigned', insuranceExpiry: '15 Aug 2026', fitnessExpiry: '20 Nov 2026', status: 'Idle', verification: 'Pending' },
  { reg: 'MH20KL2345', model: 'Tata Winger', category: 'BLS', driver: '— Unassigned', insuranceExpiry: '28 Jun 2026', fitnessExpiry: '12 Jan 2027', status: 'Maintenance', verification: 'Verified' },
];

export const ASSIGNMENT_HISTORY: Record<string, AssignmentHistory> = {
  MH12AB1234: { last: 'Rajesh Kumar', assignedOn: '02 Jun 2026', unassignedOn: '' },
  MH14CD5678: { last: 'Suresh Yadav', assignedOn: '28 May 2026', unassignedOn: '' },
  MH12EF9012: { last: 'Deepak Singh', assignedOn: '15 May 2026', unassignedOn: '' },
  MH16GH3456: { last: 'Amit Verma', assignedOn: '10 Jun 2026', unassignedOn: '' },
  MH18IJ7890: { last: 'Sandeep More', assignedOn: '01 Apr 2026', unassignedOn: '12 Jun 2026' },
  MH20KL2345: { last: 'Vijay Patil', assignedOn: '20 Mar 2026', unassignedOn: '05 Jun 2026' },
};
