import { Quote, Star } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';

const testimonials = [
  {
    quote: 'Finally, a place that brings academics, coding and campus life together without the noise. The design alone makes me want to explore every section.',
    name: 'Senior, CSE — AI specialization',
    initials: 'AR',
    accent: 'from-brand-500 to-brand-700',
  },
  {
    quote: 'As a fresher, having a structured guide makes the first weeks feel so much less overwhelming. Clean, fast and genuinely helpful.',
    name: 'Fresher, CSE — Core',
    initials: 'MK',
    accent: 'from-accent-500 to-accent-700',
  },
  {
    quote: 'The placeholder structure is exactly what a student platform should look like. I cannot wait to see real content fill these sections.',
    name: 'Junior, CSE — Data Science',
    initials: 'SV',
    accent: 'from-ink-700 to-ink-900',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="section-shell mt-24">
      <SectionHeading
        eyebrow="Testimonials"
        title="Loved by students"
        description="Placeholder reflections from students across years and specializations — real voices will fill these in upcoming releases."
      />
      <div className="grid gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 80} variant="scale">
            <article className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-7 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <Quote className="relative h-8 w-8 text-brand-300" />
              <p className="relative mt-4 flex-1 text-[15px] leading-relaxed text-ink-700">
                {t.quote}
              </p>
              <div className="relative mt-6 flex items-center gap-3 border-t border-ink-100 pt-5">
                <span className={`relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.accent} font-display text-sm font-bold text-white shadow-glow transition-transform duration-300 group-hover:scale-105`}>
                  {t.initials}
                  <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/15" />
                </span>
                <div>
                  <div className="text-[13px] font-semibold text-ink-900">{t.name}</div>
                  <div className="mt-0.5 flex items-center gap-0.5 text-accent-500">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-3 w-3 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
