export default function ProgressBar({
  value,
  label,
  className = '',
}: {
  value: number;
  label?: string;
  className?: string;
}) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className={className}>
      {label && (
        <div className="mb-1.5 flex items-center justify-between text-[12px] font-medium">
          <span className="text-ink-600">{label}</span>
          <span className="text-ink-400">{Math.round(pct)}%</span>
        </div>
      )}
      <div className="h-2 w-full overflow-hidden rounded-full bg-ink-100">
        <div
          className="h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-700 ease-out-expo"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
