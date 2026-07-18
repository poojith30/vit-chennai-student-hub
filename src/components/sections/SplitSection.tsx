import type { Section } from './types';
import { ArrowRight, Check } from 'lucide-react';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

export default function SplitSection({ section }: { section: Section }) {
  const split = section.split!;
  const Icon = split.icon;
  return (
    <section>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <Reveal variant="scale">
          <div className="relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 text-white">
            <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" />
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand-500/40 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent-500/30 blur-3xl" />
            <div className="relative">
              <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur ring-1 ring-inset ring-white/15">
                <Icon className="h-7 w-7 text-white" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-bold leading-tight tracking-tight">{split.title}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-ink-300">{split.description}</p>
            </div>
            <div className="relative mt-8 flex items-center gap-2 text-[13px] font-medium text-ink-200">
              <span className="flex h-1.5 w-1.5 rounded-full bg-accent-400" />
              <span>Coming in a future release</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} variant="scale">
          <div className="grid h-full content-center gap-4 rounded-4xl glass-card p-8">
            <h4 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-ink-500">
              What to expect
            </h4>
            <ul className="space-y-3">
              {(split.bullets ?? []).map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent-50 text-accent-600 ring-1 ring-inset ring-accent-100">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm leading-relaxed text-ink-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
