import { ArrowUpRight, BookOpen, FileText, Video, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';

const resources = [
  { icon: FileText, title: 'DSA cheat sheets', kind: 'Notes', tag: 'Popular' },
  { icon: BookOpen, title: 'OS fundamentals', kind: 'Reference' },
  { icon: Video, title: 'Web dev playlist', kind: 'Video' },
  { icon: Download, title: 'Past CAT papers', kind: 'Archive', tag: 'New' },
];

export default function FeaturedResourcesSection() {
  return (
    <section className="section-shell mt-24">
      <SectionHeading
        eyebrow="Featured resources"
        title="Start here"
        description="A handpicked set of placeholders for the notes, references and media students reach for most."
      >
        <Link to="/resources" className="btn-ghost">
          Browse library
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {resources.map((r, i) => {
          const Icon = r.icon;
          return (
            <Reveal key={i} delay={i * 60} variant="scale">
              <article className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                <div className="flex items-center justify-between">
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                    <Icon className="h-5 w-5" />
                    <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                  </span>
                  {r.tag && (
                    <span className="chip">{r.tag}</span>
                  )}
                </div>
                <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink-900">{r.title}</h3>
                <p className="mt-1 text-[12px] text-ink-500">{r.kind}</p>
                <div className="mt-auto flex items-center gap-1 pt-5 text-[13px] font-medium text-ink-400 transition-colors duration-200 group-hover:text-brand-600">
                  Open
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
