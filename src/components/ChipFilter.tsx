export type ChipOption = { label: string; value: string };

export default function ChipFilter({
  options,
  value,
  onChange,
  allLabel = 'All',
}: {
  options: ChipOption[];
  value: string;
  onChange: (v: string) => void;
  allLabel?: string;
}) {
  const all = [{ label: allLabel, value: 'all' }, ...options];
  return (
    <div className="flex flex-wrap items-center gap-2">
      {all.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium transition-all duration-200 ease-out-expo ${
              active
                ? 'bg-ink-900 text-white shadow-glow'
                : 'border border-ink-200 bg-white/70 text-ink-600 backdrop-blur hover:border-ink-300 hover:text-ink-900'
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
