import { Megaphone, ArrowRight, Bell } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';

const announcements = [
  {
    tag: 'Platform',
    title: 'VIT Chennai Student Hub V1 is live',
    excerpt: 'The foundation release is here — 13 sections, premium design and a structure built to grow.',
    date: 'Jul 18',
  },
  {
    tag: 'Academics',
    title: 'CAT-1 window approaching',
    excerpt: 'A consolidated assessment calendar will land in the next release. For now, placeholders are in place.',
    date: 'Jul 16',
  },
  {
    tag: 'Community',
    title: 'Freshers induction — save the date',
    excerpt: 'Orientation and icebreaker events will be added to the Clubs & Events calendar soon.',
    date: 'Jul 14',
  },
];

export default function AnnouncementsSection() {
  return (
    <section className="section-shell mt-24">
      <SectionHeading
        eyebrow="Latest announcements"
        title="What is happening"
        description="A quiet, scannable feed of platform and campus updates — no noise, just what matters."
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white/70 px-3 py-1.5 text-[12px] font-medium text-ink-600">
          <Bell className="h-3.5 w-3.5 text-brand-500" /> Updated weekly
        </span>
      </SectionHeading>

      <div className="overflow-hidden rounded-3xl glass-card">
        {announcements.map((a, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="group flex flex-col gap-3 border-b border-ink-100 p-5 transition-all duration-300 hover:bg-ink-50/60 last:border-b-0 sm:flex-row sm:items-center sm:gap-6 sm:p-6">
              <div className="flex flex-none items-center gap-4 sm:w-40">
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                  <Megaphone className="h-5 w-5" />
                  <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                </span>
                <div className="sm:hidden">{a.date}</div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                    {a.tag}
                  </span>
                  <span className="hidden text-[12px] text-ink-400 sm:inline">· {a.date}</span>
                </div>
                <h3 className="mt-1.5 font-display text-[15px] font-semibold tracking-tight text-ink-900">{a.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-500">{a.excerpt}</p>
              </div>
              <div className="flex flex-none items-center gap-1 text-[13px] font-medium text-ink-400 transition-colors duration-200 group-hover:text-brand-600">
                Read
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
