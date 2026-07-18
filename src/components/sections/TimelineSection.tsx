import type { Section } from './types';
import Reveal from '../Reveal';
import SectionHeading from '../SectionHeading';

export default function TimelineSection({ section }: { section: Section }) {
  const steps = section.steps ?? [];
  return (
    <section>
      <SectionHeading
        eyebrow={section.eyebrow}
        title={section.title}
        description={section.description}
      />
      <div className="relative">
        <div className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand-400 via-ink-200 to-transparent sm:left-[1.65rem]" />
        <ol className="space-y-5">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={i} delay={i * 80} variant="scale">
                <li className="relative grid grid-cols-[2.5rem_1fr] gap-5 sm:grid-cols-[3.5rem_1fr]">
                  <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-brand-600 shadow-soft ring-4 ring-ink-50 sm:h-14 sm:w-14">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <div className="sheen-host group rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                        {s.phase}
                      </span>
                      <span className="text-[11px] text-ink-400">Step {i + 1}</span>
                    </div>
                    <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink-900">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.description}</p>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
