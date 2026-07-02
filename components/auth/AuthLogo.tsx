type Props = { tagline?: string };

export function AuthLogo({ tagline = 'Agency Admin' }: Props) {
  return (
    <div className="auth-logo">
      <div className="lg">
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth={2.2}>
          <path d="M3 11h2l1-2h12l1 2h2v6h-2a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H3z" />
          <path d="M11 5h2M12 4v3M10.5 5.5h3" strokeWidth={1.6} />
        </svg>
      </div>
      <div className="lt">
        <b>Medurun</b>
        <span>{tagline}</span>
      </div>
    </div>
  );
}
