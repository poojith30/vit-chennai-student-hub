import type { FeatureItem } from './types';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '../Reveal';

export default function FeatureRow({ items }: { items: FeatureItem[] }) {
  return (
    <div className="space-y-4">
      {items.map((c, i) => {
        const Icon = c.icon;
        return (
          <Reveal key={i} delay={i * 60}>
            <article className="sheen-host group grid items-center gap-5 rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift sm:grid-cols-[auto_1fr_auto]">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-6 w-6" />
                <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">{c.title}</h3>
                  <span className="chip">{c.tag ?? 'Coming soon'}</span>
                </div>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-ink-500">{c.description}</p>
              </div>
              <div className="hidden items-center gap-2 text-[13px] font-medium text-ink-400 transition-colors duration-200 group-hover:text-brand-600 sm:flex">
                <Check className="h-4 w-4 text-accent-500" />
                <span>Planned</span>
                <ArrowUpRight className="ml-2 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
