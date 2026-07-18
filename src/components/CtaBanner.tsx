import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import AuroraBackground from './AuroraBackground';
import Reveal from './Reveal';

export default function CtaBanner({
  title = 'This section is part of the Foundation release.',
  description = 'Rich content, real data and interactive features will arrive in upcoming versions. For now, consider this a beautifully structured placeholder.',
  primary = { label: 'Back to home', to: '/' },
  secondary = { label: 'Share feedback', to: '/contact' },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <Reveal variant="scale">
      <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900 p-8 text-white sm:p-12">
        <AuroraBackground variant="dark" withGrid={false} />
        <div className="relative flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-ink-200 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent-300" />
              Roadmap
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">{description}</p>
          </div>
          <div className="flex flex-none flex-wrap items-center gap-3">
            <Link to={primary.to} className="btn-primary">
              {primary.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to={secondary.to} className="btn-ghost">
              {secondary.label}
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
