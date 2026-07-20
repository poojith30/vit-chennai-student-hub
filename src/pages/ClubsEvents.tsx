import { useState } from 'react';
import {
  CalendarDays, Cpu, Palette, Users, Flag, Trophy, Mic2,
  Ticket, Music, Drama, Camera, Newspaper, Sparkles, Dumbbell,
  UserPlus, ArrowUpRight, MapPin, Clock,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import ChipFilter from '../components/ChipFilter';
import StatusBadge, { type Status } from '../components/StatusBadge';
import Reveal from '../components/Reveal';

const clubCategories = [
  { label: 'Technical', value: 'technical' },
  { label: 'Cultural', value: 'cultural' },
  { label: 'Sports', value: 'sports' },
  { label: 'Special interest', value: 'special' },
];

const clubs = [
  { icon: Cpu, title: 'Coding Club', description: 'DSA, contests and dev talks.', category: 'technical' },
  { icon: Cpu, title: 'Robotics Club', description: 'Build, program and compete with robots.', category: 'technical' },
  { icon: Cpu, title: 'AI/ML Club', description: 'Research papers, models and hackathons.', category: 'technical' },
  { icon: Palette, title: 'Dance Club', description: 'Choreo nights and fest performances.', category: 'cultural' },
  { icon: Music, title: 'Music Club', description: 'Jam sessions and pro-night openings.', category: 'cultural' },
  { icon: Drama, title: 'Drama Club', description: 'Plays, skits and improv sessions.', category: 'cultural' },
  { icon: Dumbbell, title: 'Sports Club', description: 'Intramural leagues and tournaments.', category: 'sports' },
  { icon: Users, title: 'Debate Society', description: 'MUNs, debates and public speaking.', category: 'special' },
];

const events = [
  { icon: Flag, title: 'Orientation & inductions', phase: 'Aug', day: '15', status: 'upcoming' as Status, location: 'Main Auditorium', time: '9 AM' },
  { icon: Mic2, title: 'Git & GitHub workshop', phase: 'Sep', day: '03', status: 'open' as Status, location: 'Lab Block', time: '4 PM' },
  { icon: Trophy, title: 'Inter-college hackathon', phase: 'Nov', day: '10', status: 'open' as Status, location: 'Innovation Lab', time: '48 hrs' },
  { icon: Music, title: 'Riviera cultural fest', phase: 'Feb', day: '21', status: 'upcoming' as Status, location: 'Main Ground', time: '5 PM' },
  { icon: Drama, title: 'Year-end showcase', phase: 'Apr', day: '18', status: 'closed' as Status, location: 'Auditorium', time: '6 PM' },
];

export default function ClubsEvents() {
  const [category, setCategory] = useState('all');
  const filteredClubs = category === 'all' ? clubs : clubs.filter((c) => c.category === category);

  return (
    <PageShell
      hero={{
        eyebrow: 'Clubs & Events',
        title: 'Clubs & Events',
        subtitle:
          'A living calendar of everything happening on campus — clubs to join, fests to attend and events you will not want to miss.',
        icon: CalendarDays,
      }}
      sections={[
        {
          kind: 'grid',
          eyebrow: 'Spotlight',
          title: 'Upcoming events',
          description: 'The events to look out for in the coming weeks.',
          items: [
            { icon: Ticket, title: 'Competitions', description: 'Coding contests, case studies and design challenges throughout the year.' },
            { icon: Camera, title: 'Photography walks', description: 'Community photo walks and exhibitions around campus and the city.' },
            { icon: Newspaper, title: 'Event newsletter', description: 'A weekly digest of what is happening on campus, in your inbox.' },
            { icon: Sparkles, title: 'Pop-up events', description: 'Spontaneous meetups, movie nights and surprise pop-ups.' },
          ],
        },
      ]}
      closing={
        <>
          <section>
            <SectionHeading
              eyebrow="Clubs"
              title="Club directory"
              description="Filter by category and find a club to join."
            />
            <div className="mb-6">
              <ChipFilter options={clubCategories} value={category} onChange={setCategory} allLabel="All clubs" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredClubs.map((c, i) => {
                const Icon = c.icon;
                return (
                  <Reveal key={c.title} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex items-start justify-between">
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="chip">{c.category}</span>
                      </div>
                      <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{c.title}</h3>
                      <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{c.description}</p>
                      <div className="relative mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink-400 transition group-hover:text-brand-600">
                          <UserPlus className="h-3.5 w-3.5" />
                          Join club
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Calendar"
              title="Event calendar"
              description="A month-by-month view of the campus event calendar."
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((e, i) => {
                const Icon = e.icon;
                return (
                  <Reveal key={e.title} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-5 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="flex items-start justify-between">
                        <div className="relative flex h-14 w-14 flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-ink-900 to-ink-800 text-white shadow-glow transition-transform duration-500 group-hover:scale-105">
                          <span className="font-display text-xl font-bold leading-none">{e.day}</span>
                          <span className="text-[10px] font-medium uppercase tracking-wider">{e.phase}</span>
                          <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" />
                        </div>
                        <StatusBadge status={e.status} />
                      </div>
                      <div className="mt-4 flex items-center gap-2">
                        <Icon className="h-4 w-4 text-brand-500" />
                        <h3 className="font-display text-[15px] font-semibold tracking-tight text-ink-900">{e.title}</h3>
                      </div>
                      <div className="mt-3 space-y-1.5 text-[12px] text-ink-500">
                        <p className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {e.location}</p>
                        <p className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {e.time}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>
        </>
      }
      closingCta={{
        title: 'There is always something happening.',
        description: 'A live event calendar and club directory will arrive in upcoming releases.',
        primary: { label: 'Explore the toolkit', to: '/student-toolkit' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
