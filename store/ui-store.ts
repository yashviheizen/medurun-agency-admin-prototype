'use client';
import { create } from 'zustand';
import type { ReactNode } from 'react';

type UIState = {
  drawer: ReactNode | null;
  modal: ReactNode | null;
  trackModal: ReactNode | null;
  toastMsg: string | null;
  openDrawer: (node: ReactNode) => void;
  openModal: (node: ReactNode) => void;
  openTrack: (node: ReactNode) => void;
  closeAll: () => void;
  closeModal: () => void;
  showToast: (msg: string) => void;
  clearToast: () => void;
};

export const useUI = create<UIState>((set) => ({
  drawer: null,
  modal: null,
  trackModal: null,
  toastMsg: null,
  openDrawer: (node) => set({ drawer: node }),
  openModal: (node) => set({ modal: node }),
  openTrack: (node) => set({ trackModal: node }),
  closeAll: () => set({ drawer: null, modal: null, trackModal: null }),
  closeModal: () => set({ modal: null }),
  showToast: (msg) => set({ toastMsg: msg }),
  clearToast: () => set({ toastMsg: null }),
}));
