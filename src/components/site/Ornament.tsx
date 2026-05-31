export function Ornament({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 20" className={className} aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M0 10 H28" />
        <path d="M52 10 H80" />
        <circle cx="40" cy="10" r="6" />
        <circle cx="40" cy="10" r="2.5" fill="currentColor" />
        <path d="M34 10 a6 6 0 0 1 12 0" />
        <path d="M34 10 a6 6 0 0 0 12 0" />
      </g>
    </svg>
  );
}

export function GoldDivider() {
  return (
    <div className="gold-divider my-4">
      <Ornament className="ornament" />
    </div>
  );
}
