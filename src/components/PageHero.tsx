import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AuroraBackground from './AuroraBackground';
import Reveal from './Reveal';

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  accent?: string;
};

export default function PageHero({
  eyebrow = 'VIT Chennai Student Hub',
  title,
  subtitle,
  icon: Icon,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20">
      <AuroraBackground />
      <div className="section-shell">
        <Reveal variant="scale" className="flex flex-col items-start">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            {eyebrow}
          </span>
          <div className="mt-6 flex items-center gap-4">
            <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-glow">
              <Icon className="h-7 w-7" />
              <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
            </span>
            <h1 className="font-display text-4xl font-extrabold tracking-tightest text-gradient sm:text-5xl">
              {title}
            </h1>
          </div>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/" className="btn-ghost">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Back to home
            </Link>
            <span className="text-[12px] text-ink-400">Version 1 · Foundation</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
