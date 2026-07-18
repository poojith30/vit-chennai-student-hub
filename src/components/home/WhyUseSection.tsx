import { Sparkles, Compass, Layers, Zap, Heart, ShieldCheck } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';

const pillars = [
  { icon: Sparkles, title: 'Premium & minimal', description: 'Inspired by Apple, Linear, Vercel, Notion and Framer. Calm, confident and quietly delightful.' },
  { icon: Compass, title: 'Consistent navigation', description: 'A responsive navbar with a mobile drawer and a contextual dropdown for the full section list.' },
  { icon: Layers, title: 'Modular by design', description: 'Reusable components and a clean folder structure make adding new sections effortless.' },
  { icon: Zap, title: 'Fast & lightweight', description: 'Built on Vite and React with no heavy dependencies — pages load instantly.' },
  { icon: Heart, title: 'Student-first', description: 'Built by students, for students. Every decision is made with the CSE journey in mind.' },
  { icon: ShieldCheck, title: 'No login, no tracking', description: 'Open the site and explore. No accounts, no data collection, no friction in V1.' },
];

export default function WhyUseSection() {
  return (
    <section className="section-shell mt-24">
      <SectionHeading
        eyebrow="Why use this platform"
        title="A foundation worth building on"
        description="Version 1 focuses on structure, navigation and a premium feel — the things that make everything after it possible."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {pillars.map((p, i) => {
          const Icon = p.icon;
          return (
            <Reveal key={i} delay={i * 50} variant="scale">
              <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                  <Icon className="h-5 w-5" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                </span>
                <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{p.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{p.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
