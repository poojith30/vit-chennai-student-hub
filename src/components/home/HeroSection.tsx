import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, ShieldCheck, Layers, Rocket, ChevronRight, Play,
} from 'lucide-react';
import AuroraBackground from '../../components/AuroraBackground';
import Reveal from '../../components/Reveal';

const previewCards = [
  { k: 'Academics', v: 'Curriculum & results', c: 'from-brand-500 to-brand-700' },
  { k: 'Coding Hub', v: 'DSA & contests', c: 'from-accent-500 to-accent-700' },
  { k: 'Opportunities', v: 'Internships & roles', c: 'from-ink-700 to-ink-900' },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28">
      <AuroraBackground />
      {/* subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #0b0d10 1px, transparent 1px), linear-gradient(to bottom, #0b0d10 1px, transparent 1px)',
          backgroundSize: '56px 56px',
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 30%, black, transparent 75%)',
        }}
      />

      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal variant="scale">
            <span className="eyebrow">
              <span className="relative flex h-2 w-2 items-center justify-center">
                <span className="absolute h-2 w-2 animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-accent-500" />
              </span>
              Version 1 · Foundation release is live
              <ChevronRight className="h-3.5 w-3.5 text-ink-400" />
            </span>
          </Reveal>

          <Reveal delay={80} variant="scale">
            <h1 className="mt-7 font-display text-5xl font-extrabold leading-[1.04] tracking-tightest text-ink-900 sm:text-6xl lg:text-7xl">
              The student hub for{' '}
              <span className="relative inline-block">
                <span className="text-gradient-animated">VIT Chennai</span>
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9C60 3 130 3 298 9"
                    stroke="url(#hl)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="hl" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0" stopColor="#5a8bff" />
                      <stop offset="1" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              CSE.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-ink-600 sm:text-lg">
              An unofficial, student-built platform bringing academics, coding,
              opportunities, campus life and community into one beautifully
              organized space. This is just the foundation.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Link to="/freshers-guide" className="btn-primary">
                Start exploring
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/academics" className="btn-ghost">
                <Play className="h-3.5 w-3.5" />
                View academics
              </Link>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] font-medium text-ink-500">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-accent-500" /> No login required
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Layers className="h-4 w-4 text-brand-500" /> Modular structure
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Rocket className="h-4 w-4 text-brand-500" /> Built for expansion
              </span>
            </div>
          </Reveal>
        </div>

        {/* Floating dashboard preview */}
        <Reveal delay={400} variant="scale" className="mt-16">
          <div className="relative mx-auto max-w-5xl">
            <div className="pointer-events-none absolute -inset-x-10 -top-10 h-40 bg-gradient-to-b from-brand-300/40 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl glass p-2 shadow-lift">
              <div className="overflow-hidden rounded-2xl border border-ink-200 bg-ink-50">
                {/* window chrome */}
                <div className="flex items-center gap-2 border-b border-ink-200 bg-white/70 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-green-400/80" />
                  <div className="ml-3 hidden flex-1 items-center gap-1.5 rounded-md bg-ink-100 px-3 py-1 text-[11px] text-ink-400 sm:flex">
                    vitchennai-student-hub.app
                  </div>
                </div>
                {/* preview body */}
                <div className="grid gap-4 p-5 sm:grid-cols-3">
                  {previewCards.map((b, i) => (
                    <div
                      key={i}
                      className="sheen-host group rounded-2xl border border-ink-200 bg-white p-4 transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:shadow-card"
                    >
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${b.c} text-white shadow-soft`}>
                        <Sparkles className="h-4 w-4" />
                      </span>
                      <div className="mt-3 font-display text-sm font-semibold text-ink-900">{b.k}</div>
                      <div className="text-[12px] text-ink-500">{b.v}</div>
                      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                        <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-brand-400 to-accent-400" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 px-5 pb-5 sm:grid-cols-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="rounded-xl border border-ink-200 bg-white p-3">
                      <div className="h-2 w-1/2 rounded-full bg-ink-200" />
                      <div className="mt-2 h-2 w-3/4 rounded-full bg-ink-100" />
                      <div className="mt-3 h-8 w-full rounded-md bg-gradient-to-r from-ink-100 to-ink-50" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* floating badges */}
            <div className="absolute -left-4 top-1/3 hidden animate-float-slow rounded-2xl glass px-4 py-3 shadow-lift sm:block">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-100 text-accent-600">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[12px] font-semibold text-ink-900">No login</div>
                  <div className="text-[10px] text-ink-500">Just open and explore</div>
                </div>
              </div>
            </div>
            <div className="absolute -right-4 top-1/2 hidden animate-float-slow rounded-2xl glass px-4 py-3 shadow-lift sm:block" style={{ animationDelay: '-3.5s' }}>
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
                  <Rocket className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[12px] font-semibold text-ink-900">V1 Foundation</div>
                  <div className="text-[10px] text-ink-500">Built for expansion</div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
