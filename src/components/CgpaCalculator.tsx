import { useMemo, useState } from 'react';
import { Calculator, RotateCcw, TrendingUp } from 'lucide-react';
import Reveal from './Reveal';

type Row = { id: number; credits: number; grade: string };

const GRADES: { label: string; value: number }[] = [
  { label: 'O', value: 10 },
  { label: 'A+', value: 9 },
  { label: 'A', value: 8 },
  { label: 'B+', value: 7 },
  { label: 'B', value: 6 },
  { label: 'C', value: 5 },
  { label: 'F', value: 0 },
];

const inputCls =
  'w-full rounded-xl border border-ink-200 bg-white/70 px-3 py-2 text-sm text-ink-900 outline-none transition focus:border-brand-400 focus:ring-2 focus:ring-brand-100';

export default function CgpaCalculator() {
  const [rows, setRows] = useState<Row[]>([
    { id: 1, credits: 4, grade: 'O' },
    { id: 2, credits: 3, grade: 'A+' },
    { id: 3, credits: 3, grade: 'A' },
  ]);
  const [scale, setScale] = useState<10 | 4>(10);

  const cgpa = useMemo(() => {
    const total = rows.reduce((acc, r) => {
      const g = GRADES.find((x) => x.label === r.grade)?.value ?? 0;
      return acc + r.credits * g;
    }, 0);
    const credits = rows.reduce((acc, r) => acc + Number(r.credits || 0), 0);
    if (!credits) return 0;
    return total / credits;
  }, [rows]);

  const display = scale === 10 ? cgpa : (cgpa / 10) * 4;

  const addRow = () =>
    setRows((r) => [...r, { id: Date.now(), credits: 3, grade: 'A' }]);
  const removeRow = (id: number) => setRows((r) => r.filter((x) => x.id !== id));
  const update = (id: number, patch: Partial<Row>) =>
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const reset = () =>
    setRows([
      { id: 1, credits: 4, grade: 'O' },
      { id: 2, credits: 3, grade: 'A+' },
      { id: 3, credits: 3, grade: 'A' },
    ]);

  return (
    <Reveal variant="scale">
      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="rounded-4xl glass-card p-6 sm:p-8">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow">
                <Calculator className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">
                  CGPA Calculator
                </h3>
                <p className="text-[12px] text-ink-500">UI only · nothing is stored</p>
              </div>
            </div>
            <div className="flex items-center gap-1 rounded-full border border-ink-200 bg-white/70 p-1">
              {([10, 4] as const).map((s) => (
                <button
                  key={s}
                  onClick={() => setScale(s)}
                  className={`rounded-full px-3 py-1 text-[12px] font-medium transition ${
                    scale === s ? 'bg-ink-900 text-white' : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {s}-pt
                </button>
              ))}
            </div>
          </div>

          <div className="hidden grid-cols-[1fr_1fr_auto] gap-3 px-1 pb-2 text-[11px] font-semibold uppercase tracking-wider text-ink-400 sm:grid">
            <span>Credits</span>
            <span>Grade</span>
            <span className="w-8 text-right">—</span>
          </div>

          <div className="space-y-2.5">
            {rows.map((row) => (
              <div key={row.id} className="grid grid-cols-1 gap-2.5 sm:grid-cols-[1fr_1fr_auto]">
                <input
                  type="number"
                  min={0}
                  max={8}
                  value={row.credits}
                  onChange={(e) => update(row.id, { credits: Number(e.target.value) })}
                  className={inputCls}
                  aria-label="Credits"
                />
                <select
                  value={row.grade}
                  onChange={(e) => update(row.id, { grade: e.target.value })}
                  className={inputCls}
                  aria-label="Grade"
                >
                  {GRADES.map((g) => (
                    <option key={g.label} value={g.label}>
                      {g.label} ({g.value})
                    </option>
                  ))}
                </select>
                <button
                  onClick={() => removeRow(row.id)}
                  className="flex h-9 items-center justify-center rounded-xl border border-ink-200 bg-white/70 px-3 text-ink-400 transition hover:border-red-200 hover:bg-red-50 hover:text-red-500 sm:w-9"
                  aria-label="Remove row"
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button onClick={addRow} className="btn-primary">
              Add course
            </button>
            <button onClick={reset} className="btn-ghost">
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 text-white">
          <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="relative">
            <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-300">
              <TrendingUp className="h-3.5 w-3.5 text-accent-400" />
              Your {scale === 10 ? 'CGPA' : 'GPA'}
            </div>
            <div className="mt-4 font-display text-6xl font-extrabold tracking-tightest">
              {display.toFixed(2)}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">
              Computed live from {rows.length} course{rows.length === 1 ? '' : 's'} on a {scale}-point
              scale. A placeholder tool — real grade mapping will arrive in a future release.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
