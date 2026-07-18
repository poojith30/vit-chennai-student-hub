import {
  Code2, Flame, Boxes, FileCode2, Bug, Trophy, BarChart3, BookMarked, Cpu,
  GitBranch, Target, Zap,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function CodingHub() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Coding Hub',
        title: 'Coding Hub',
        subtitle:
          'DSA practice, contest trackers, language tracks and project ideas — everything you need to level up as a CSE student.',
        icon: Code2,
      }}
      sections={[
        {
          kind: 'grid',
          eyebrow: 'Practice',
          title: 'Structured DSA practice',
          description: 'Curated paths and trackers to build strong fundamentals, one problem at a time.',
          items: [
            { icon: Flame, title: 'Daily streak tracker', description: 'Build consistency with a visual streak across LeetCode, Codeforces and more.' },
            { icon: Boxes, title: 'Topic-wise sheets', description: 'Hand-picked problem lists for arrays, graphs, DP, trees and more.' },
            { icon: FileCode2, title: 'Language tracks', description: 'C++, Java, Python and Go starter tracks with syntax refreshers.' },
            { icon: Bug, title: 'Debug journal', description: 'Log tricky bugs and solutions so you never make the same mistake twice.' },
            { icon: Target, title: 'Goal setter', description: 'Set weekly problem targets and track your solving velocity.' },
            { icon: Zap, title: 'Complexity drills', description: 'Short drills to internalize time and space complexity intuition.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Contests',
          title: 'Contests & competitions',
          description: 'Stay in the loop with upcoming contests, ratings and post-contest editorials.',
          items: [
            { icon: Trophy, title: 'Contest calendar', description: 'LeetCode, Codeforces, CodeChef and AtCoder contests in one unified calendar with reminders.' },
            { icon: BarChart3, title: 'Rating tracker', description: 'Visualize your rating progression across platforms with a single, clean chart.' },
            { icon: BookMarked, title: 'Editorials archive', description: 'Curated post-contest editorials and solution walkthroughs, organized by contest.' },
            { icon: Cpu, title: 'ICPC & hackathons', description: 'Resources, past problems and team-building guides for competitive events.' },
          ],
        },
        {
          kind: 'split',
          eyebrow: 'Projects',
          title: 'Build & ship',
          description: 'From first repo to open source — a space to plan, share and showcase projects.',
          split: {
            icon: GitBranch,
            title: 'A home for everything you build',
            description: 'Track ideas, draft READMEs, and showcase projects you are proud of — all in one place.',
            bullets: [
              'Difficulty-tagged project ideas across web, ML, systems and more',
              'Setup guides for Git, Docker, VS Code and common toolchains',
              'A personal showcase you can share with recruiters and peers',
              'Open-source contribution tracker and good-first-issue finder',
            ],
          },
        },
      ]}
      closingCta={{
        title: 'Level up, one commit at a time.',
        description: 'Live contest calendars, streaks and project showcases will arrive in upcoming releases.',
        primary: { label: 'See opportunities', to: '/opportunities' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
