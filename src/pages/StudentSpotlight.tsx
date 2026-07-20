import {
  Star, Trophy, Award, GraduationCap, Briefcase, Palette, Cpu,
  Heart, Quote, Users, Flame, Rocket, FolderGit2,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function StudentSpotlight() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Student Spotlight',
        title: 'Student Spotlight',
        subtitle:
          'Celebrating the achievements, projects and stories of VIT Chennai CSE students — because great work deserves to be seen.',
        icon: Star,
      }}
      sections={[
        {
          kind: 'bento',
          eyebrow: 'Achievements',
          title: 'Student achievements',
          description: 'A wall of recognition for students doing remarkable things.',
          featured: 0,
          items: [
            { icon: Trophy, title: 'Contest winners', description: 'Students who placed in hackathons, coding contests and inter-college competitions.' },
            { icon: Award, title: 'Research & papers', description: 'Student publications and research contributions worth celebrating.' },
            { icon: Briefcase, title: 'Placement highlights', description: 'Notable offers and placement season standouts from this year.' },
            { icon: Flame, title: 'Open source', description: 'Students making meaningful open-source contributions to real projects.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Build',
          title: 'Projects & startups',
          description: 'Student-built projects and ventures worth a closer look.',
          items: [
            { icon: FolderGit2, title: 'Student projects', description: 'A curated showcase of projects built by students across domains.' },
            { icon: Rocket, title: 'Student startups', description: 'Student-founded ventures and the stories behind them.' },
            { icon: Cpu, title: 'Research projects', description: 'Capstone and research projects making an impact.' },
            { icon: Palette, title: 'Creative work', description: 'Design, content and creative tech work by CSE students.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Stories',
          title: 'Featured students',
          description: 'In-depth spotlights on students and the journeys behind their work.',
          items: [
            { icon: Quote, title: 'The builder', description: 'A student who shipped a side project that took off across campus.' },
            { icon: GraduationCap, title: 'The researcher', description: 'From a first-year curiosity to a published paper — the full journey.' },
            { icon: Cpu, title: 'The competitor', description: 'A competitive programmer’s path to ICPC regionals and beyond.' },
            { icon: Palette, title: 'The creative', description: 'A student balancing CSE with design, music or writing.' },
          ],
        },
        {
          kind: 'split',
          eyebrow: 'Community',
          title: 'Nominate & celebrate',
          description: 'Help us shine a light on more students doing great work.',
          split: {
            icon: Heart,
            title: 'Great work deserves to be seen',
            description: 'A lightweight nomination system to surface the students who inspire the community.',
            bullets: [
              'Nominate a peer whose work deserves a spotlight',
              'A wall of thanks for mentors, friends and supporters',
              'A new featured student every month',
              'Student-led talks and project demos worth catching',
            ],
          },
        },
        {
          kind: 'stats',
          eyebrow: 'By the numbers',
          title: 'The community in figures',
          description: 'Placeholder figures for what the spotlight will track over time.',
          stats: [
            { value: '40+', label: 'Featured students', icon: Users },
            { value: '15', label: 'Hackathon wins', icon: Trophy },
            { value: '10', label: 'OSS contributors', icon: Flame },
            { value: '5', label: 'Student startups', icon: Rocket },
          ],
        },
      ]}
      closingCta={{
        title: 'Celebrate the people behind the work.',
        description: 'A nomination system and featured-student archive will arrive in upcoming releases.',
        primary: { label: 'Back to home', to: '/' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
