import { CalendarDays, MapPin, Clock, ArrowRight } from 'lucide-react';
import Reveal from '../../components/Reveal';
import SectionHeading from '../../components/SectionHeading';

const events = [
  { day: '22', month: 'Jul', title: 'Freshers orientation', meta: 'Main auditorium · 10:00 AM', accent: 'from-brand-500 to-brand-700' },
  { day: '28', month: 'Jul', title: 'Coding contest — Round 1', meta: 'Coding Hub · online · 7:00 PM', accent: 'from-accent-500 to-accent-700' },
  { day: '04', month: 'Aug', title: 'Clubs induction day', meta: 'Student plaza · 4:00 PM', accent: 'from-ink-700 to-ink-900' },
  { day: '12', month: 'Aug', title: 'Hackathon kickoff', meta: 'Innovation lab · 9:00 AM', accent: 'from-brand-500 to-accent-500' },
];

export default function EventsSection() {
  return (
    <section className="section-shell mt-24">
      <SectionHeading
        eyebrow="Upcoming events"
        title="Mark your calendar"
        description="A unified view of orientation, contests, inductions and fests. Real dates arrive in the next release."
      >
        <a href="#" onClick={(e) => e.preventDefault()} className="btn-ghost">
          View all
          <ArrowRight className="h-4 w-4" />
        </a>
      </SectionHeading>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((e, i) => (
          <Reveal key={i} delay={i * 60} variant="scale">
            <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-5 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`relative flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${e.accent} text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-105`}>
                    <span className="font-display text-xl font-bold leading-none">{e.day}</span>
                    <span className="text-[10px] font-medium uppercase tracking-wider">{e.month}</span>
                    <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" />
                  </div>
                </div>
                <CalendarDays className="h-5 w-5 text-ink-300 transition-colors duration-200 group-hover:text-brand-500" />
              </div>
              <h3 className="mt-4 font-display text-[15px] font-semibold tracking-tight text-ink-900">{e.title}</h3>
              <div className="mt-2 space-y-1 text-[12px] text-ink-500">
                <p className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.meta.split(' · ')[0]}</p>
                <p className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {e.meta.split(' · ')[1]}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
