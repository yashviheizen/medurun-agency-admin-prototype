import type { VerifyItem } from '@/types';

export const VERIFY_DRIVERS: VerifyItem[] = [
  { applicant: 'Manoj Tiwari', kind: 'Driver', submitted: '20 Jun 2026', status: 'Under Review', notes: [], requestedOn: '' },
  { applicant: 'Sanjay Pawar', kind: 'Driver', submitted: '19 Jun 2026', status: 'Submitted', notes: [], requestedOn: '' },
  { applicant: 'Ravi Chauhan', kind: 'Driver', submitted: '18 Jun 2026', status: 'Changes Requested', notes: ['Aadhaar image is blurry', 'Upload updated Police Clearance', 'EMT Certificate expired'], requestedOn: '20 Jun 2026' },
  { applicant: 'Deepak Singh', kind: 'Driver', submitted: '12 Jun 2026', status: 'Verified', notes: [], requestedOn: '' },
];

export const VERIFY_AMB: VerifyItem[] = [
  { applicant: 'MH16GH3456', kind: 'Ambulance', submitted: '21 Jun 2026', status: 'Under Review', notes: [], requestedOn: '' },
  { applicant: 'MH18IJ7890', kind: 'Ambulance', submitted: '20 Jun 2026', status: 'Submitted', notes: [], requestedOn: '' },
  { applicant: 'MH20KL2345', kind: 'Ambulance', submitted: '19 Jun 2026', status: 'Changes Requested', notes: ['Pollution certificate is missing', 'Upload a valid PUC copy'], requestedOn: '21 Jun 2026' },
  { applicant: 'MH22MN6789', kind: 'Ambulance', submitted: '14 Jun 2026', status: 'Action Required', notes: ['Insurance does not match the registration number on record', 'Re-upload corrected insurance document'], requestedOn: '16 Jun 2026' },
];

export const AMB_DOC_DEFS = ['RC', 'Insurance', 'Fitness Certificate', 'Pollution Certificate', 'Commercial Permit', 'Front Photo', 'Side Photo', 'Interior Photo'];
export const DRV_DOC_DEFS = ['Driver Photo', 'Driving License', 'Aadhaar', 'EMT Certificate', 'Police Clearance', 'Medical Fitness'];
