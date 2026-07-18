import type { Section } from './types';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

export default function StatsSection({ section }: { section: Section }) {
  const stats = section.stats ?? [];
  return (
    <section>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 text-white sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-60" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-500/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="relative grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="group text-center">
                  <div className="flex items-center justify-center">
                    {Icon && (
                      <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-accent-300 ring-1 ring-inset ring-white/10 transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-4 w-4" />
                      </span>
                    )}
                  </div>
                  <div className="font-display text-4xl font-extrabold tracking-tightest sm:text-5xl">
                    {s.value}
                  </div>
                  <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.18em] text-ink-300">
                    {s.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
