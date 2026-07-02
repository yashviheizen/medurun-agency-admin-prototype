import type { Transaction } from '@/types';

export const TXNS: Transaction[] = [
  { id: 'TXN-90231', date: 'Jun 22', description: 'Ride MED-2402', type: 'Credit', amount: '₹850' },
  { id: 'TXN-90230', date: 'Jun 22', description: 'Fuel — MH12AB1234', type: 'Debit', amount: '₹2,200' },
  { id: 'TXN-90228', date: 'Jun 21', description: 'Ride MED-2398', type: 'Credit', amount: '₹1,150' },
  { id: 'TXN-90225', date: 'Jun 21', description: 'Driver Incentive', type: 'Debit', amount: '₹1,500' },
  { id: 'TXN-90222', date: 'Jun 20', description: 'Ride MED-2396', type: 'Credit', amount: '₹1,350' },
];

export const REVENUE_MONTHS: Array<{ label: string; revenue: number; expense: number }> = [
  { label: 'Jan', revenue: 62, expense: 38 },
  { label: 'Feb', revenue: 70, expense: 42 },
  { label: 'Mar', revenue: 58, expense: 40 },
  { label: 'Apr', revenue: 75, expense: 45 },
  { label: 'May', revenue: 82, expense: 48 },
  { label: 'Jun', revenue: 96, expense: 52 },
];
