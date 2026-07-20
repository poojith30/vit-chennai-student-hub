import { useState } from 'react';
import { Check } from 'lucide-react';

export type ChecklistEntry = { id: string; label: string };

export default function Checklist({
  items,
  title,
}: {
  items: ChecklistEntry[];
  title?: string;
}) {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const toggle = (id: string) => setChecked((c) => ({ ...c, [id]: !c[id] }));
  const done = items.filter((i) => checked[i.id]).length;

  return (
    <div className="rounded-3xl glass-card p-6 sm:p-8">
      {title && (
        <div className="mb-5 flex items-center justify-between">
          <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">{title}</h3>
          <span className="rounded-full bg-ink-100 px-2.5 py-1 text-[11px] font-semibold text-ink-500">
            {done}/{items.length}
          </span>
        </div>
      )}
      <ul className="space-y-2.5">
        {items.map((item) => {
          const on = !!checked[item.id];
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className="flex w-full items-center gap-3 rounded-2xl border border-ink-100 bg-white/60 p-3 text-left transition-all duration-200 hover:border-ink-200 hover:bg-white"
              >
                <span
                  className={`flex h-6 w-6 flex-none items-center justify-center rounded-lg border transition-all duration-200 ${
                    on
                      ? 'border-accent-500 bg-accent-500 text-white'
                      : 'border-ink-200 bg-white text-transparent'
                  }`}
                >
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span
                  className={`text-[13px] leading-snug transition-colors duration-200 ${
                    on ? 'text-ink-400 line-through' : 'text-ink-700'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
