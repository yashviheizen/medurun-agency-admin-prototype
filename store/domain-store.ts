'use client';
import { create } from 'zustand';
import { AMBULANCES, ASSIGNMENT_HISTORY } from '@/data/ambulances';
import { DRIVERS } from '@/data/drivers';
import { VERIFY_DRIVERS, VERIFY_AMB } from '@/data/verification';
import type { Ambulance, Driver, VerifyItem, AssignmentHistory } from '@/types';

type DomainState = {
  ambulances: Ambulance[];
  drivers: Driver[];
  verifyDrivers: VerifyItem[];
  verifyAmb: VerifyItem[];
  asgHistory: Record<string, AssignmentHistory>;
  assignDriver: (reg: string, driverName: string) => void;
  removeAssignment: (reg: string) => void;
  resubmitVerification: (applicant: string, kind: 'drv' | 'amb') => void;
};

export const useDomain = create<DomainState>((set, get) => ({
  ambulances: AMBULANCES.map(a => ({ ...a })),
  drivers: DRIVERS.map(d => ({ ...d })),
  verifyDrivers: VERIFY_DRIVERS.map(v => ({ ...v, notes: [...v.notes] })),
  verifyAmb: VERIFY_AMB.map(v => ({ ...v, notes: [...v.notes] })),
  asgHistory: Object.fromEntries(Object.entries(ASSIGNMENT_HISTORY).map(([k, v]) => [k, { ...v }])),

  assignDriver: (reg, driverName) => {
    const { ambulances, drivers, asgHistory } = get();
    const ambIdx = ambulances.findIndex(a => a.reg === reg);
    if (ambIdx < 0) return;
    const amb = ambulances[ambIdx];
    const prevDriver = amb.driver;
    const newAmbs = [...ambulances];
    const newDrvs = [...drivers];
    const newHist = { ...asgHistory };

    if (!prevDriver.includes('Unassigned') && prevDriver !== driverName) {
      const pIdx = newDrvs.findIndex(d => d.name === prevDriver);
      if (pIdx >= 0) newDrvs[pIdx] = { ...newDrvs[pIdx], ambulance: '— Unassigned' };
      if (newHist[reg]) newHist[reg] = { last: prevDriver, assignedOn: newHist[reg].assignedOn, unassignedOn: 'Today' };
    }
    const nIdx = newDrvs.findIndex(d => d.name === driverName);
    if (nIdx >= 0) newDrvs[nIdx] = { ...newDrvs[nIdx], ambulance: reg };
    newAmbs[ambIdx] = { ...amb, driver: driverName };
    set({ ambulances: newAmbs, drivers: newDrvs, asgHistory: newHist });
  },

  removeAssignment: (reg) => {
    const { ambulances, drivers } = get();
    const ambIdx = ambulances.findIndex(a => a.reg === reg);
    if (ambIdx < 0) return;
    const amb = ambulances[ambIdx];
    const newAmbs = [...ambulances];
    const newDrvs = drivers.map(d =>
      d.name === amb.driver ? { ...d, ambulance: '— Unassigned' } : d
    );
    newAmbs[ambIdx] = { ...amb, driver: '— Unassigned' };
    set({ ambulances: newAmbs, drivers: newDrvs });
  },

  resubmitVerification: (applicant, kind) => {
    const key = kind === 'drv' ? 'verifyDrivers' : 'verifyAmb';
    const list = get()[key];
    const idx = list.findIndex(v => v.applicant === applicant);
    if (idx < 0) return;
    const updated = [...list];
    updated[idx] = { ...updated[idx], status: 'Under Review', notes: [], resubmittedAt: 'Just now' };
    set({ [key]: updated } as Partial<DomainState>);
  },
}));
