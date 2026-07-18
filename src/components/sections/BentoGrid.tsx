import type { FeatureItem } from './types';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal';

export default function BentoGrid({ items, featured = 0 }: { items: FeatureItem[]; featured?: number }) {
  return (
    <div className="grid gap-5 md:grid-cols-6">
      {items.map((c, i) => {
        const isFeatured = i === featured;
        return (
          <Reveal
            key={i}
            delay={i * 50}
            variant="scale"
            className={isFeatured ? 'md:col-span-3 md:row-span-2' : 'md:col-span-3'}
          >
            <article
              className={`sheen-host group relative flex h-full flex-col overflow-hidden rounded-4xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift ${
                isFeatured ? 'min-h-[20rem] justify-between' : ''
              }`}
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-start justify-between">
                <span
                  className={`relative flex items-center justify-center rounded-2xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:-rotate-3 ${
                    isFeatured ? 'h-14 w-14' : 'h-11 w-11'
                  }`}
                >
                  <c.icon className={isFeatured ? 'h-7 w-7' : 'h-5 w-5'} />
                  <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                </span>
                <span className="chip">{c.tag ?? 'Coming soon'}</span>
              </div>
              <div className="relative mt-auto pt-6">
                <h3
                  className={`font-display font-semibold tracking-tight text-ink-900 ${
                    isFeatured ? 'text-2xl' : 'text-lg'
                  }`}
                >
                  {c.title}
                </h3>
                <p className={`mt-2 leading-relaxed text-ink-500 ${isFeatured ? 'text-base' : 'text-sm'}`}>
                  {c.description}
                </p>
                <div className="mt-5 flex items-center gap-1 text-[13px] font-medium text-ink-400 transition-colors duration-200 group-hover:text-brand-600">
                  <span>Explore</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </article>
          </Reveal>
        );
      })}
    </div>
  );
}
