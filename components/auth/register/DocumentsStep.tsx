'use client';
import { useState } from 'react';
import { Icon } from '@/lib/icons';
import { REG_DOCS_DEFAULT } from '@/data/regDocs';
import type { RegistrationDoc } from '@/types';
import { clsx } from '@/lib/utils';
import { useUI } from '@/store/ui-store';

type Props = {
  onBack: () => void;
  onContinue: () => void;
};

export function DocumentsStep({ onBack, onContinue }: Props) {
  const showToast = useUI(s => s.showToast);
  const [docs, setDocs] = useState<RegistrationDoc[]>(() =>
    REG_DOCS_DEFAULT.map(d => ({ ...d }))
  );

  const reqDocs = docs.filter(d => d.required);
  const addDocs = docs.filter(d => !d.required);
  const reqDone = reqDocs.filter(d => d.done).length;
  const optDone = addDocs.filter(d => d.done).length;

  const upload = (name: string) => {
    setDocs(prev => prev.map(d => (d.name === name && !d.done ? { ...d, done: true } : d)));
  };

  const replace = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    showToast('Choose a new file to replace');
  };

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14 }}>
        <div>
          <h3 style={{ color: 'var(--navy)', fontSize: 16 }}>Document Upload</h3>
          <p style={{ color: 'var(--gray-500)', fontSize: 12.5 }}>
            Provide your agency&apos;s verification documents.
          </p>
        </div>
        <div className="count-pill">
          <span className="cl">Required Documents</span>
          <span className="cv">{reqDone} / {reqDocs.length} Uploaded</span>
          <span
            className="cl"
            style={{
              marginTop: 4,
              textTransform: 'none',
              letterSpacing: 0,
              fontWeight: 600,
              color: 'var(--gray-500)',
            }}
          >
            Optional Documents: <span>{optDone} / {addDocs.length} Uploaded</span>
          </span>
        </div>
      </div>
      <div className="trust">
        <Icon name="shield" />
        All documents are securely uploaded and reviewed by the Medurun verification team.
      </div>
      <div className="wiz-sec-h">Required Documents</div>
      <div className="doc-grid">
        {reqDocs.map(d => (
          <DocCard key={d.name} doc={d} onUpload={() => upload(d.name)} onReplace={e => replace(d.name, e)} />
        ))}
      </div>
      <div className="wiz-sec-h">Additional Documents</div>
      <div className="doc-grid">
        {addDocs.map(d => (
          <DocCard key={d.name} doc={d} onUpload={() => upload(d.name)} onReplace={e => replace(d.name, e)} />
        ))}
      </div>
      <div className="wiz-actions">
        <button className="btn btn-ghost" onClick={onBack}>
          ← Back
        </button>
        <button className="btn btn-primary" onClick={onContinue}>
          Continue →
        </button>
      </div>
    </>
  );
}

function DocCard({
  doc,
  onUpload,
  onReplace,
}: {
  doc: RegistrationDoc;
  onUpload: () => void;
  onReplace: (e: React.MouseEvent) => void;
}) {
  return (
    <div className={clsx('doc-up', doc.done && 'done')} onClick={onUpload}>
      {!doc.done ? (
        <>
          <div className="du-ic">
            <Icon name="upload" />
          </div>
          <div className="du-main">
            <div className="du-top">
              <b>{doc.name}</b>
              {doc.required ? (
                <span className="badge2 b-navy sm">Required</span>
              ) : (
                <span className="badge2 b-gray sm">Optional</span>
              )}
            </div>
            <div className="du-meta">PDF, JPG, PNG · max 5 MB</div>
            <div className="du-act">
              <Icon name="upload" />
              Upload file
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="du-ic">
            <Icon name="check" />
          </div>
          <div className="du-main">
            <div className="du-top">
              <b>{doc.name}</b>
              <span className="badge2 b-green sm">Uploaded</span>
            </div>
            <div className="du-file">
              <b>{doc.fileName}</b> · {doc.fileSize}
            </div>
            <button className="du-replace" onClick={onReplace}>
              Replace file
            </button>
          </div>
          {doc.isLogo && (
            <div className="du-thumb">
              <Icon name="truck" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
