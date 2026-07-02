import type { Ride, LiveRide, HistoryEntry } from '@/types';

export const RIDES: Ride[] = [
  { id: 'MED-2401', patient: 'Anita Sharma', driver: 'Rajesh Kumar', ambulance: 'MH12AB1234', pickup: '08:12 AM', status: 'En Route', fare: '₹1,250', date: 'Jun 22', type: 'ALS' },
  { id: 'MED-2402', patient: 'Vikram Patel', driver: 'Suresh Yadav', ambulance: 'MH14CD5678', pickup: '08:45 AM', status: 'Completed', fare: '₹850', date: 'Jun 22', type: 'BLS' },
  { id: 'MED-2403', patient: 'Newborn (Mehta)', driver: 'Deepak Singh', ambulance: 'MH12EF9012', pickup: '09:20 AM', status: 'En Route', fare: '₹2,100', date: 'Jun 22', type: 'Neo' },
  { id: 'MED-2404', patient: 'Farhan Khan', driver: 'Rajesh Kumar', ambulance: 'MH12AB1234', pickup: '10:05 AM', status: 'Dispatched', fare: '₹1,400', date: 'Jun 22', type: 'ALS' },
  { id: 'MED-2405', patient: 'Sunita Rao', driver: 'Amit Verma', ambulance: 'MH16GH3456', pickup: '10:40 AM', status: 'Completed', fare: '₹650', date: 'Jun 22', type: 'BLS' },
  { id: 'MED-2406', patient: 'Mohan Das', driver: 'Suresh Yadav', ambulance: 'MH14CD5678', pickup: '11:15 AM', status: 'Cancelled', fare: '₹0', date: 'Jun 22', type: 'BLS' },
  { id: 'MED-2407', patient: 'Priya Nair', driver: 'Deepak Singh', ambulance: 'MH12EF9012', pickup: '11:50 AM', status: 'Completed', fare: '₹1,800', date: 'Jun 22', type: 'ALS' },
];

export const LIVE_RIDES: LiveRide[] = [
  { id: 'MED-2401', patient: 'Anita Sharma', driver: 'Rajesh Kumar', ambulance: 'MH12AB1234', from: 'Andheri Station', to: 'Lilavati Hospital', status: 'En Route', eta: '6 min', variant: 'enroute' },
  { id: 'MED-2403', patient: 'Newborn (Mehta)', driver: 'Deepak Singh', ambulance: 'MH12EF9012', from: 'Kandivali', to: 'Surya Childrens', status: 'En Route', eta: '11 min', variant: 'enroute' },
  { id: 'MED-2404', patient: 'Farhan Khan', driver: 'Rajesh Kumar', ambulance: 'MH18IJ7890', from: 'Sion', to: 'KEM Hospital', status: 'Dispatched', eta: '2 min', variant: 'dispatch' },
  { id: 'MED-2408', patient: 'Geeta Bhosale', driver: 'Suresh Yadav', ambulance: 'MH14CD5678', from: 'Bandra West', to: 'Holy Family', status: 'On Scene', eta: '—', variant: '' },
  { id: 'MED-2402', patient: 'Vikram Patel', driver: 'Suresh Yadav', ambulance: 'MH14CD5678', from: 'Powai', to: 'Hiranandani', status: 'Completed', eta: '—', variant: '' },
  { id: 'MED-2405', patient: 'Sunita Rao', driver: 'Amit Verma', ambulance: 'MH16GH3456', from: 'Dadar', to: 'KEM Hospital', status: 'Completed', eta: '—', variant: '' },
];

export const LIVE_ACTIVE = ['En Route', 'Dispatched', 'On Scene'];

export const HISTORY: HistoryEntry[] = [
  { id: 'MED-2398', dateTime: 'Jun 21, 07:30', patient: 'Kiran Joshi', driver: 'Rajesh Kumar', ambulance: 'MH12AB1234', route: 'Andheri → Lilavati', status: 'Completed', fare: '₹1,150' },
  { id: 'MED-2399', dateTime: 'Jun 21, 14:10', patient: 'Asha Pillai', driver: 'Suresh Yadav', ambulance: 'MH14CD5678', route: 'Bandra → Holy Family', status: 'Completed', fare: '₹780' },
  { id: 'MED-2400', dateTime: 'Jun 21, 19:45', patient: 'Ramesh Iyer', driver: 'Deepak Singh', ambulance: 'MH12EF9012', route: 'Dadar → KEM Hospital', status: 'Cancelled', fare: '₹0' },
  { id: 'MED-2395', dateTime: 'Jun 20, 06:15', patient: 'Neha Gupta', driver: 'Amit Verma', ambulance: 'MH16GH3456', route: 'Powai → Hiranandani', status: 'Completed', fare: '₹920' },
  { id: 'MED-2396', dateTime: 'Jun 20, 22:05', patient: 'Imran Shaikh', driver: 'Rajesh Kumar', ambulance: 'MH12AB1234', route: 'Kurla → Sion Hospital', status: 'Completed', fare: '₹1,350' },
];
