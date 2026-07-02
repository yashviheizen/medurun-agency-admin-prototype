export const STATUS_BADGE_CLASS: Record<string, string> = {
  Completed: 'b-green',
  Verified: 'b-green',
  Active: 'b-green',
  'On Duty': 'b-green',
  Available: 'b-green',
  'En Route': 'b-amber',
  Pending: 'b-amber',
  Dispatched: 'b-navy',
  Idle: 'b-gray',
  'Off Duty': 'b-gray',
  Cancelled: 'b-red',
  Flagged: 'b-red',
  Maintenance: 'b-red',
  Rejected: 'b-red',
  Missing: 'b-red',
  Uploaded: 'b-blue',
  'Pending Verification': 'b-amber',
  'Changes Requested': 'b-blue',
  Submitted: 'b-gray',
  'Under Review': 'b-amber',
  'Action Required': 'b-red',
  'In Service': 'b-blue',
};

export function badgeClass(status: string): string {
  return STATUS_BADGE_CLASS[status] ?? 'b-gray';
}
