import {
  CalendarDays, Cpu, Palette, Users, Gamepad2, Flag, Trophy, Mic2,
  Ticket, Music, Drama, Camera, Newspaper, Sparkles,
} from 'lucide-react';
import PageShell from '../components/PageShell';

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
          title: 'Clubs & chapters',
          description: 'Technical, cultural and special-interest clubs active on campus.',
          featured: 0,
          items: [
            { icon: Cpu, title: 'Technical clubs', description: 'Coding, robotics, AI, IoT and developer communities pushing what students can build.' },
            { icon: Palette, title: 'Cultural clubs', description: 'Dance, music, drama, photography and fine arts groups.' },
            { icon: Users, title: 'Special interest', description: 'Debate, quizzing, entrepreneurship and social impact clubs.' },
            { icon: Gamepad2, title: 'Sports & gaming', description: 'Sports teams, e-sports and recreational groups.' },
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
          title: 'Signature experiences',
          description: 'The events that define the VIT Chennai calendar.',
          items: [
            { icon: Ticket, title: 'Competitions', description: 'Coding contests, case studies and design challenges throughout the year.' },
            { icon: Camera, title: 'Photography walks', description: 'Community photo walks and exhibitions around campus and the city.' },
            { icon: Newspaper, title: 'Event newsletter', description: 'A weekly digest of what is happening on campus, in your inbox.' },
            { icon: Sparkles, title: 'Pop-up events', description: 'Spontaneous meetups, movie nights and surprise pop-ups.' },
          ],
        },
      ]}
      closingCta={{
        title: 'There is always something happening.',
        description: 'A live event calendar and club directory will arrive in upcoming releases.',
        primary: { label: 'Explore the toolkit', to: '/student-toolkit' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
