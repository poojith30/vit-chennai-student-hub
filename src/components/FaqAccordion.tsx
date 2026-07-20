import { useState } from 'react';
import { HelpCircle } from 'lucide-react';
import Reveal from './Reveal';

export type FaqEntry = { q: string; a: string };

export default function FaqAccordion({
  items,
  columns = 1,
}: {
  items: FaqEntry[];
  columns?: 1 | 2;
}) {
  return (
    <div className={columns === 2 ? 'grid gap-4 sm:grid-cols-2' : 'grid gap-4'}>
      {items.map((f, i) => (
        <Reveal key={i} delay={i * 50}>
          <FaqItem {...f} />
        </Reveal>
      ))}
    </div>
  );
}

function FaqItem({ q, a }: FaqEntry) {
  const [open, setOpen] = useState(false);
  return (
    <details
      open={open}
      onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}
      className="group rounded-3xl glass-card p-5 transition-all duration-300 hover:shadow-card"
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex items-center gap-3">
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow">
            <HelpCircle className="h-4 w-4" />
          </span>
          <span className="font-display text-[15px] font-semibold tracking-tight text-ink-900">{q}</span>
        </span>
        <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-400 transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <p className="mt-3 pl-12 text-[13px] leading-relaxed text-ink-500">{a}</p>
    </details>
  );
}
