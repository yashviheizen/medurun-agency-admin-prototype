import type { RegistrationDoc } from '@/types';

export const REG_DOCS_DEFAULT: RegistrationDoc[] = [
  { name: 'GST Certificate', required: true, fileName: 'gst-certificate.pdf', fileSize: '845 KB' },
  { name: 'PAN Card', required: true, fileName: 'pan-card.pdf', fileSize: '512 KB' },
  { name: 'Undertaking (Seal, Stamp & Sign)', required: true, fileName: 'undertaking.pdf', fileSize: '1.0 MB' },
  { name: 'Organogram', required: true, fileName: 'organogram.pdf', fileSize: '780 KB' },
  { name: 'Incorporation Certificate', required: false, fileName: 'incorporation-cert.pdf', fileSize: '1.4 MB' },
  { name: 'MSME Certificate', required: false, fileName: 'msme-cert.pdf', fileSize: '920 KB' },
  { name: 'EPF & ESIC Certificate', required: false, fileName: 'epf-esic-cert.pdf', fileSize: '1.1 MB' },
  { name: 'Agency Logo', required: false, fileName: 'agency-logo.png', fileSize: '96 KB', isLogo: true },
];
