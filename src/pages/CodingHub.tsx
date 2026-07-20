import { useState } from 'react';
import {
  Code2, Boxes, FileCode2, Bug, Trophy, BarChart3, BookMarked,
  GitBranch, Globe, Database, ShieldCheck, Smartphone,
  Brain, Network, Map as MapIcon, Rocket, CheckCircle2, ArrowUpRight,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import ChipFilter from '../components/ChipFilter';
import DifficultyBadge, { type Difficulty } from '../components/DifficultyBadge';
import ProgressBar from '../components/ProgressBar';
import Reveal from '../components/Reveal';

type Track = {
  icon: typeof Code2;
  title: string;
  description: string;
  tech: string;
  difficulty: Difficulty;
  progress: number;
};

const tracks: Track[] = [
  { icon: FileCode2, title: 'Java', description: 'The primary academic language — syntax, OOP and collections deep dives.', tech: 'languages', difficulty: 'beginner', progress: 35 },
  { icon: FileCode2, title: 'C / C++', description: 'Memory, pointers and the go-to language for competitive programming.', tech: 'languages', difficulty: 'intermediate', progress: 20 },
  { icon: FileCode2, title: 'Python', description: 'Scripting, data work and ML prototyping with clean, idiomatic Python.', tech: 'languages', difficulty: 'beginner', progress: 50 },
  { icon: Database, title: 'SQL', description: 'Queries, joins and database design fundamentals with hands-on examples.', tech: 'languages', difficulty: 'beginner', progress: 15 },
  { icon: Boxes, title: 'DSA mastery', description: 'Topic-wise sheets for arrays, linked lists, trees, graphs, DP and more.', tech: 'core', difficulty: 'intermediate', progress: 42 },
  { icon: Bug, title: 'Debug journal', description: 'Log tricky bugs and solutions so you never make the same mistake twice.', tech: 'core', difficulty: 'beginner', progress: 10 },
  { icon: Globe, title: 'Web Development', description: 'HTML, CSS, JavaScript, React and backend fundamentals with project ideas.', tech: 'domains', difficulty: 'intermediate', progress: 60 },
  { icon: Smartphone, title: 'App Development', description: 'Android, Flutter and React Native tracks with starter projects.', tech: 'domains', difficulty: 'intermediate', progress: 25 },
  { icon: Brain, title: 'AI / ML', description: 'From linear regression to deep learning — math, libraries and projects.', tech: 'domains', difficulty: 'advanced', progress: 18 },
  { icon: ShieldCheck, title: 'Cybersecurity', description: 'Security fundamentals, CTFs, tools and reading lists.', tech: 'domains', difficulty: 'advanced', progress: 8 },
  { icon: GitBranch, title: 'Git & GitHub', description: 'Version control, PRs, code review and open-source workflows.', tech: 'tooling', difficulty: 'beginner', progress: 70 },
  { icon: Network, title: 'Systems & Networking', description: 'OS, computer networks and distributed systems essentials.', tech: 'core', difficulty: 'advanced', progress: 12 },
];

const techOptions = [
  { label: 'Languages', value: 'languages' },
  { label: 'Core CS', value: 'core' },
  { label: 'Domains', value: 'domains' },
  { label: 'Tooling', value: 'tooling' },
];

const paths = [
  { icon: MapIcon, title: 'DSA roadmap', description: 'A 12-week plan from basics to advanced problem solving.', difficulty: 'intermediate' as Difficulty, weeks: 12 },
  { icon: Globe, title: 'Full-stack roadmap', description: 'Frontend, backend and deployment in a structured path.', difficulty: 'intermediate' as Difficulty, weeks: 16 },
  { icon: Brain, title: 'AI/ML roadmap', description: 'Math foundations to model deployment, week by week.', difficulty: 'advanced' as Difficulty, weeks: 20 },
  { icon: Rocket, title: 'DevOps roadmap', description: 'Linux, containers, cloud and CI/CD essentials.', difficulty: 'advanced' as Difficulty, weeks: 14 },
];

export default function CodingHub() {
  const [tech, setTech] = useState('all');
  const filtered = tech === 'all' ? tracks : tracks.filter((t) => t.tech === tech);

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
      closing={
        <>
          <section>
            <SectionHeading
              eyebrow="Learning tracks"
              title="Technology tracks with progress"
              description="Filter by technology, see difficulty, and track your learning progress."
            />
            <div className="mb-6">
              <ChipFilter options={techOptions} value={tech} onChange={setTech} allLabel="All tracks" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t, i) => {
                const Icon = t.icon;
                return (
                  <Reveal key={t.title} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex items-start justify-between">
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5" />
                          <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                        </span>
                        <DifficultyBadge level={t.difficulty} />
                      </div>
                      <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{t.title}</h3>
                      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-500">{t.description}</p>
                      <div className="relative mt-5">
                        <ProgressBar value={t.progress} label="Progress" />
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Roadmaps"
              title="Recommended learning paths"
              description="Curated, step-by-step paths so you always know what to learn next."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {paths.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={p.title} delay={i * 60} variant="scale">
                    <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="flex items-center justify-between">
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </span>
                        <DifficultyBadge level={p.difficulty} />
                      </div>
                      <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink-900">{p.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-500">{p.description}</p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="chip">{p.weeks} weeks</span>
                        <span className="flex items-center gap-1 text-[12px] font-medium text-ink-400 transition group-hover:text-brand-600">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Start
                          <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
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
        title: 'Level up, one commit at a time.',
        description: 'Live contest calendars, streaks and project showcases will arrive in upcoming releases.',
        primary: { label: 'See opportunities', to: '/opportunities' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
