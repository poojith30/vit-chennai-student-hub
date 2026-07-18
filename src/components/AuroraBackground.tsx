export default function AuroraBackground({
  variant = 'light',
  withGrid = true,
}: {
  variant?: 'light' | 'dark';
  withGrid?: boolean;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Mesh gradient blobs */}
      <div
        className={`absolute -top-40 -left-32 h-[40rem] w-[40rem] rounded-full blur-3xl opacity-70 animate-aurora ${
          variant === 'dark' ? 'bg-brand-600/40' : 'bg-brand-300/50'
        }`}
      />
      <div
        className={`absolute top-0 right-[-12rem] h-[38rem] w-[38rem] rounded-full blur-3xl opacity-60 animate-aurora ${
          variant === 'dark' ? 'bg-accent-500/30' : 'bg-accent-200/60'
        }`}
        style={{ animationDelay: '-6s' }}
      />
      <div
        className={`absolute bottom-[-14rem] left-1/3 h-[34rem] w-[34rem] rounded-full blur-3xl opacity-50 animate-aurora ${
          variant === 'dark' ? 'bg-cyan-500/20' : 'bg-cyan-400/20'
        }`}
        style={{ animationDelay: '-12s' }}
      />

      {/* Grid overlay */}
      {withGrid && (
        <div
          className={`absolute inset-0 opacity-[0.05] ${
            variant === 'dark' ? 'bg-grid-dark' : 'bg-grid-light'
          }`}
          style={{
            backgroundSize: '56px 56px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)',
          }}
        />
      )}

      {/* Top radial fade */}
      <div
        className={`absolute inset-0 ${
          variant === 'dark'
            ? 'bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.05),transparent_60%)]'
            : 'bg-radial-fade'
        }`}
      />
    </div>
  );
}
