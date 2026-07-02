'use client';
import { DrawerMount } from './Drawer';
import { ModalMount } from './Modal';
import { TrackModalMount } from './TrackModalMount';
import { Toast } from './Toast';

export function UISurfaces() {
  return (
    <>
      <DrawerMount />
      <ModalMount />
      <TrackModalMount />
      <Toast />
    </>
  );
}
