import { Sparkles, Plus } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';

const items = [
  {
    badge: 'New',
    title: 'Premium design system',
    excerpt: 'A unified visual language across every section — typography, depth and motion that feel intentional.',
    tag: 'Foundation',
  },
  {
    badge: 'New',
    title: '13 dedicated sections',
    excerpt: 'Academics, coding, opportunities, campus life, community and more — each with its own home.',
    tag: 'Structure',
  },
  {
    badge: 'Soon',
    title: 'Real content & data',
    excerpt: 'Notes, timetables, contest calendars and placement data will arrive in upcoming releases.',
    tag: 'Roadmap',
  },
  {
    badge: 'Soon',
    title: 'Interactive features',
    excerpt: 'GPA calculators, attendance trackers and personalized dashboards are on the way.',
    tag: 'Roadmap',
  },
];

export default function WhatsNewSection() {
  return (
    <section className="section-shell mt-24">
      <SectionHeading
        eyebrow="What's new"
        title="Fresh in this release"
        description="A look at what landed in V1 and what is coming next."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 60} variant="scale">
            <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex items-center justify-between">
                <span
                  className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ring-1 ring-inset ${
                    it.badge === 'New'
                      ? 'bg-accent-50 text-accent-700 ring-accent-100'
                      : 'bg-ink-100 text-ink-500 ring-ink-200'
                  }`}
                >
                  {it.badge}
                </span>
                <span className="text-[11px] font-medium uppercase tracking-wider text-ink-400">
                  {it.tag}
                </span>
              </div>
              <h3 className="relative mt-4 flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink-900">
                <Sparkles className="h-4 w-4 text-brand-500" />
                {it.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{it.excerpt}</p>
              <div className="relative mt-5 flex items-center gap-1 text-[13px] font-medium text-ink-400 transition-colors duration-200 group-hover:text-brand-600">
                <Plus className="h-3.5 w-3.5" />
                Learn more
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
