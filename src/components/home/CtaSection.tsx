import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import AuroraBackground from '../../components/AuroraBackground';
import Reveal from '../../components/Reveal';

export default function CtaSection() {
  return (
    <section className="section-shell mt-24">
      <Reveal variant="scale">
        <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-10 text-white sm:p-16">
          <AuroraBackground variant="dark" withGrid={false} />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent-300" /> Foundation
            </span>
            <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight leading-tight sm:text-4xl">
              A foundation worth building on.
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-ink-300 sm:text-base">
              Version 1 focuses on structure, navigation and a premium feel.
              Real content and interactive features will arrive in upcoming releases.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                Share feedback
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/freshers-guide" className="btn-ghost">
                Freshers guide
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
