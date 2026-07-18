import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 650);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-ink-50 transition-opacity duration-500 ease-out-expo ${
        hidden ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <span className="absolute inset-0 rounded-2xl bg-ink-900" />
          <span className="absolute inset-0 animate-pulse-ring rounded-2xl bg-brand-500/40" />
          <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="none">
            <path d="M6 8 L12 18 L18 8" stroke="url(#plg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="12" cy="18" r="1.6" fill="#10b981" />
            <defs>
              <linearGradient id="plg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0" stopColor="#5a8bff" />
                <stop offset="1" stopColor="#10b981" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="text-[11px] font-medium uppercase tracking-[0.2em] text-ink-400">
          Student Hub
        </div>
      </div>
    </div>
  );
}
