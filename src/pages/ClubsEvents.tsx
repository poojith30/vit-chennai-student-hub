import {
  CalendarDays, Cpu, Palette, Users, Flag, Trophy, Mic2,
  Ticket, Music, Drama, Camera, Newspaper, Sparkles, Dumbbell,
  Mic, UserPlus, Image as ImageIcon, Lightbulb,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const gallery = Array.from({ length: 8 }, (_, i) => ({
  gradient: [
    'from-brand-500 to-accent-500',
    'from-accent-500 to-cyan-500',
    'from-ink-700 to-brand-700',
    'from-brand-600 to-ink-800',
    'from-accent-600 to-brand-600',
    'from-cyan-500 to-accent-500',
    'from-ink-800 to-accent-700',
    'from-brand-500 to-ink-700',
  ][i],
  label: ['Riviera', 'Hackathon', 'Cultural night', 'Induction', 'Workshop', 'Contest', 'Showcase', 'Fest'][i],
}));

export default function ClubsEvents() {
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
          kind: 'bento',
          eyebrow: 'Clubs',
          title: 'Technical & cultural clubs',
          description: 'The clubs and chapters that make VIT Chennai come alive.',
          featured: 0,
          items: [
            { icon: Cpu, title: 'Technical clubs', description: 'Coding, robotics, AI, IoT and developer communities pushing what students can build.' },
            { icon: Palette, title: 'Cultural clubs', description: 'Dance, music, drama, photography and fine arts groups.' },
            { icon: Dumbbell, title: 'Sports clubs', description: 'Sports teams, intramural leagues and recreational groups.' },
            { icon: Users, title: 'Special interest', description: 'Debate, quizzing, entrepreneurship and social impact clubs.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Recruitment',
          title: 'Club recruitment',
          description: 'How to join a club and what to expect from the process.',
          items: [
            { icon: UserPlus, title: 'Recruitment drives', description: 'A calendar of club recruitment windows and application forms.' },
            { icon: Mic, title: 'Auditions & interviews', description: 'What auditions and interviews look like for different clubs.' },
            { icon: Lightbulb, title: 'Tips to get in', description: 'Senior advice on standing out during recruitment.' },
            { icon: Flag, title: 'New clubs', description: 'How to start a new club if one does not exist yet.' },
          ],
        },
        {
          kind: 'timeline',
          eyebrow: 'Events',
          title: 'A year of events',
          description: 'A walkthrough of the campus event calendar — from orientation to the final fest.',
          steps: [
            { phase: 'August', icon: Flag, title: 'Orientation & inductions', description: 'Club inductions, icebreakers and the first wave of workshops for the year.' },
            { phase: 'September', icon: Mic2, title: 'Workshops & hackathons', description: 'Skill-building workshops and the first inter-college hackathons of the season.' },
            { phase: 'November', icon: Trophy, title: 'Competitions season', description: 'Coding contests, case studies and design challenges heat up.' },
            { phase: 'February', icon: Music, title: 'Riviera & cultural fests', description: 'The annual cultural fest — pro nights, stage shows and community celebrations.' },
            { phase: 'April', icon: Drama, title: 'Year-end showcases', description: 'Final projects, performances and senior farewells close out the year.' },
          ],
        },
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
        <section>
          <SectionHeading
            eyebrow="Gallery"
            title="Event gallery"
            description="A peek at past events — placeholders for a richer gallery in a future release."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {gallery.map((g, i) => (
              <Reveal key={i} delay={i * 40} variant="scale">
                <figure className="sheen-host group relative aspect-[4/3] overflow-hidden rounded-3xl glass-card">
                  <div className={`absolute inset-0 bg-gradient-to-br ${g.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`} />
                  <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-30" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between p-4 text-white">
                    <span className="font-display text-sm font-semibold">{g.label}</span>
                    <ImageIcon className="h-4 w-4 opacity-80" />
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </section>
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
