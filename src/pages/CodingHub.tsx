import {
  Code2, Boxes, FileCode2, Bug, Trophy, BarChart3, BookMarked,
  GitBranch, Target, Zap, Globe, Database, ShieldCheck, Smartphone,
  Brain, Network, Map as MapIcon, Rocket, Layers,
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
          eyebrow: 'Languages',
          title: 'Language tracks',
          description: 'Starter tracks and syntax refreshers for the languages you will meet at VIT.',
          items: [
            { icon: FileCode2, title: 'Java', description: 'The primary academic language — syntax, OOP and collections deep dives.' },
            { icon: FileCode2, title: 'C / C++', description: 'Memory, pointers and the go-to language for competitive programming.' },
            { icon: FileCode2, title: 'Python', description: 'Scripting, data work and ML prototyping with clean, idiomatic Python.' },
            { icon: FileCode2, title: 'SQL', description: 'Queries, joins and database design fundamentals with hands-on examples.' },
          ],
        },
        {
          kind: 'bento',
          eyebrow: 'Core CS',
          title: 'DSA & core skills',
          description: 'The fundamentals that show up in every interview and every contest.',
          featured: 0,
          items: [
            { icon: Boxes, title: 'DSA mastery', description: 'Topic-wise sheets for arrays, linked lists, trees, graphs, DP and more.' },
            { icon: Bug, title: 'Debug journal', description: 'Log tricky bugs and solutions so you never make the same mistake twice.' },
            { icon: Target, title: 'Goal setter', description: 'Set weekly problem targets and track your solving velocity.' },
            { icon: Zap, title: 'Complexity drills', description: 'Short drills to internalize time and space complexity intuition.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Domains',
          title: 'Specialization domains',
          description: 'Track-based resources for the paths CSE students care about most.',
          items: [
            { icon: Globe, title: 'Web Development', description: 'HTML, CSS, JavaScript, React and backend fundamentals with project ideas.' },
            { icon: Smartphone, title: 'App Development', description: 'Android, Flutter and React Native tracks with starter projects.' },
            { icon: Brain, title: 'AI / ML', description: 'From linear regression to deep learning — math, libraries and projects.' },
            { icon: ShieldCheck, title: 'Cybersecurity', description: 'Security fundamentals, CTFs, tools and reading lists.' },
            { icon: Database, title: 'Databases', description: 'SQL, NoSQL, indexing and design patterns for real-world systems.' },
            { icon: Network, title: 'Systems & Networking', description: 'OS, computer networks and distributed systems essentials.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Tooling',
          title: 'Git, GitHub & workflows',
          description: 'Version control and developer workflows every CSE student should know.',
          items: [
            { icon: GitBranch, title: 'Git essentials', description: 'Commits, branches, merges and rebases explained with diagrams.' },
            { icon: GitBranch, title: 'GitHub workflows', description: 'Pull requests, code review, issues and project boards.' },
            { icon: Rocket, title: 'Open source prep', description: 'How to find good-first-issues and make your first contribution.' },
            { icon: Layers, title: 'CI/CD basics', description: 'Automate tests and deploys with GitHub Actions.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Roadmaps',
          title: 'Learning roadmaps',
          description: 'Curated, step-by-step paths so you always know what to learn next.',
          items: [
            { icon: MapIcon, title: 'DSA roadmap', description: 'A 12-week plan from basics to advanced problem solving.' },
            { icon: MapIcon, title: 'Full-stack roadmap', description: 'Frontend, backend and deployment in a structured path.' },
            { icon: MapIcon, title: 'AI/ML roadmap', description: 'Math foundations to model deployment, week by week.' },
            { icon: MapIcon, title: 'DevOps roadmap', description: 'Linux, containers, cloud and CI/CD essentials.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Platforms',
          title: 'Coding platforms',
          description: 'Where to practice, compete and build a public profile.',
          items: [
            { icon: Trophy, title: 'LeetCode', description: 'Interview-style problems, contests and company-wise sheets.' },
            { icon: Trophy, title: 'Codeforces', description: 'Algorithmic contests with a strong rating system.' },
            { icon: Trophy, title: 'CodeChef', description: 'Long challenges, cook-offs and starters for all levels.' },
            { icon: Trophy, title: 'AtCoder', description: 'Japanese-style contests focused on math and DP.' },
            { icon: BarChart3, title: 'HackerRank', description: 'Domain tracks and certifications for fundamentals.' },
            { icon: BookMarked, title: 'GeeksforGeeks', description: 'Article-rich explanations and topic-wise practice.' },
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
