import { useEffect, useRef, useState } from 'react';
import { TrendingUp } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';

const stats = [
  { value: 13, suffix: '', label: 'Dedicated sections' },
  { value: 1, suffix: '', label: 'Foundation release' },
  { value: 100, suffix: '%', label: 'Responsive' },
  { value: 0, suffix: '', label: 'Trackers, no login' },
];

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const duration = 1200;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(eased * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active]);
  return (
    <span className="font-display text-4xl font-extrabold tracking-tightest sm:text-5xl">
      {val}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="section-shell mt-24" ref={ref}>
      <SectionHeading
        eyebrow="By the numbers"
        title="The foundation in figures"
        description="A snapshot of what shipped in V1 — and the clean slate it leaves for what comes next."
      />
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="group text-center">
                <CountUp target={s.value} suffix={s.suffix} active={active} />
                <div className="mt-2 flex items-center justify-center gap-1 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-300">
                  <TrendingUp className="h-3.5 w-3.5 text-accent-400" />
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
