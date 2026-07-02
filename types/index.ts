export type Ride = {
  id: string;
  patient: string;
  driver: string;
  ambulance: string;
  pickup: string;
  status: string;
  fare: string;
  date: string;
  type: string;
};

export type LiveRide = {
  id: string;
  patient: string;
  driver: string;
  ambulance: string;
  from: string;
  to: string;
  status: string;
  eta: string;
  variant: '' | 'enroute' | 'dispatch';
};

export type Ambulance = {
  reg: string;
  model: string;
  category: 'ALS' | 'BLS' | 'Neo';
  driver: string;
  insuranceExpiry: string;
  fitnessExpiry: string;
  status: 'Active' | 'Idle' | 'Maintenance';
  verification: 'Verified' | 'Pending';
};

export type Driver = {
  name: string;
  phone: string;
  ambulance: string;
  rides: number;
  rating: string;
  status: 'On Duty' | 'Off Duty';
  verification: 'Verified' | 'Pending';
};

export type HistoryEntry = {
  id: string;
  dateTime: string;
  patient: string;
  driver: string;
  ambulance: string;
  route: string;
  status: string;
  fare: string;
};

export type VerifyItem = {
  applicant: string;
  kind: 'Driver' | 'Ambulance';
  submitted: string;
  status: 'Submitted' | 'Under Review' | 'Changes Requested' | 'Action Required' | 'Verified';
  notes: string[];
  requestedOn: string;
  resubmittedAt?: string;
};

export type Transaction = {
  id: string;
  date: string;
  description: string;
  type: 'Credit' | 'Debit';
  amount: string;
};

export type Notification = {
  icon: string;
  iconClass: string;
  title: string;
  desc: string;
  time: string;
  page: string;
};

export type AssignmentHistory = {
  last: string;
  assignedOn: string;
  unassignedOn: string;
};

export type RegistrationDoc = {
  name: string;
  required: boolean;
  fileName: string;
  fileSize: string;
  isLogo?: boolean;
  done?: boolean;
};

export type BadgeStatus = string;
