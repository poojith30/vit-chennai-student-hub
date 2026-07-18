import type { FeatureItem } from './types';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';

export default function FeatureGrid({ items }: { items: FeatureItem[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c, i) => (
        <FeatureCard key={i} {...c} delay={i * 60} />
      ))}
    </div>
  );
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  tag = 'Coming soon',
  delay = 0,
}: FeatureItem & { delay?: number }) {
  return (
    <Reveal delay={delay} variant="scale">
      <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
        <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
        <div className="relative flex items-start justify-between">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-5 w-5" />
            <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </span>
          <span className="chip">{tag}</span>
        </div>
        <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">
          {title}
        </h3>
        <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{description}</p>
        <div className="relative mt-5 flex items-center gap-1 text-[13px] font-medium text-ink-400 transition-colors duration-200 group-hover:text-brand-600">
          <span>Explore</span>
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </article>
    </Reveal>
  );
}
