import {
  Award, Compass, BookOpen, Briefcase, Lightbulb, Quote, Star,
  GraduationCap, Users, Target, Coffee,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function SeniorCorner() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Senior Corner',
        title: 'Senior Corner',
        subtitle:
          'Hard-earned advice, reflections and stories from seniors who have walked the path before you — across academics, placements and campus life.',
        icon: Award,
      }}
      sections={[
        {
          kind: 'features',
          eyebrow: 'Advice',
          title: 'Words from those who have been there',
          description: 'Curated advice on the things students wish they had known earlier.',
          items: [
            { icon: Compass, title: 'First-year advice', description: 'How to settle in, manage time and build good habits early in your CSE journey.' },
            { icon: BookOpen, title: 'Academic strategies', description: 'How to approach CATs, FATs and difficult courses effectively without burning out.' },
            { icon: Briefcase, title: 'Placement prep', description: 'When to start, what to prioritize and how to stay sane during placement season.' },
            { icon: Lightbulb, title: 'Project & research', description: 'How to find meaningful projects and research opportunities that actually matter.' },
            { icon: Target, title: 'Goal setting', description: 'How seniors planned their four years — and what they would do differently.' },
            { icon: Coffee, title: 'Work-life balance', description: 'Honest takes on managing academics with clubs, friends and rest.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Stories',
          title: 'Senior stories',
          description: 'Personal journeys — the wins, the detours and the lessons.',
          items: [
            { icon: Quote, title: 'My placement journey', description: 'A senior reflects on the highs and lows of placement season.' },
            { icon: Star, title: 'From introvert to club lead', description: 'How getting involved changed one senior’s campus life.' },
            { icon: GraduationCap, title: 'Choosing a specialization', description: 'How one senior decided between AI, Data Science and Cyber Security.' },
            { icon: Lightbulb, title: 'The side project that worked', description: 'A senior on building something people actually used.' },
            { icon: Compass, title: 'Switching tracks', description: 'What it is like to pivot between specializations mid-way.' },
          ],
        },
        {
          kind: 'split',
          eyebrow: 'Mentorship',
          title: 'Connect with mentors',
          description: 'A structured way to reach out to seniors for guidance.',
          split: {
            icon: Users,
            title: 'Guidance, one conversation away',
            description: 'A lightweight mentorship system to help you find the right senior to talk to.',
            bullets: [
              'Browse seniors by specialization, year and area of expertise',
              'Weekly drop-in office hours where seniors answer questions openly',
              'Past Ask-Me-Anything sessions, organized by topic',
              'A safe, student-run space — no pressure, no judgment',
            ],
          },
        },
      ]}
      closingCta={{
        title: 'Wisdom, passed forward.',
        description: 'A mentor directory and AMA archive will arrive in upcoming releases.',
        primary: { label: 'See student spotlight', to: '/student-spotlight' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
