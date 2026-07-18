import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';
import { NAV_ITEMS } from '../../config/navigation';

export default function QuickNavSection() {
  const items = NAV_ITEMS.filter((n) => n.path !== '/' && n.path !== '/contact');
  return (
    <section className="section-shell mt-8">
      <SectionHeading
        eyebrow="Quick navigation"
        title="Jump to any section"
        description="Twelve focused spaces covering academics, coding, campus life and community — each ready to grow into something richer."
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <Reveal key={item.path} delay={i * 40} variant="scale">
              <Link
                to={item.path}
                className="sheen-host group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl glass-card p-5 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift"
              >
                <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex items-center justify-between">
                  <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                    <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                </div>
                <div className="relative mt-4">
                  <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink-900">{item.label}</h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-ink-500">{item.description}</p>
                </div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
