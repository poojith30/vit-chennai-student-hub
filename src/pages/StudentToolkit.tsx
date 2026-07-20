import { useState } from 'react';
import {
  Wrench, Calculator, Clock, Calendar, ScanLine, Cloud,
  KeyRound, Code2, Palette, Zap,
  Github, Linkedin, Trophy, BarChart3, BookMarked, Boxes, PenTool, Image,
  Star, ArrowUpRight, Rocket,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import ChipFilter from '../components/ChipFilter';
import Reveal from '../components/Reveal';
import { useFavorites } from '../components/useFavorites';

type Tool = {
  id: string;
  icon: typeof Github;
  title: string;
  description: string;
  category: string;
  url?: string;
};

const tools: Tool[] = [
  { id: 'gh-pack', icon: Github, title: 'GitHub Student Pack', description: 'Free pro tools, cloud credits and dev services for verified students.', category: 'dev', url: '#' },
  { id: 'vscode', icon: Code2, title: 'VS Code', description: 'The go-to editor with extensions for every language.', category: 'dev', url: '#' },
  { id: 'leetcode', icon: Trophy, title: 'LeetCode', description: 'Interview-style problems, contests and company-wise sheets.', category: 'coding', url: '#' },
  { id: 'hackerrank', icon: BarChart3, title: 'HackerRank', description: 'Domain tracks and certifications for fundamentals.', category: 'coding', url: '#' },
  { id: 'codeforces', icon: Trophy, title: 'Codeforces', description: 'Algorithmic contests with a strong rating system.', category: 'coding', url: '#' },
  { id: 'gfg', icon: BookMarked, title: 'GeeksforGeeks', description: 'Article-rich explanations and topic-wise practice.', category: 'coding', url: '#' },
  { id: 'linkedin', icon: Linkedin, title: 'LinkedIn', description: 'Build a student profile that recruiters notice.', category: 'career', url: '#' },
  { id: 'notion', icon: Boxes, title: 'Notion', description: 'All-in-one workspace for notes and trackers.', category: 'productivity', url: '#' },
  { id: 'figma', icon: PenTool, title: 'Figma', description: 'Collaborative design and prototyping with the student plan.', category: 'design', url: '#' },
  { id: 'canva', icon: Image, title: 'Canva', description: 'Posters, presentations and social graphics in minutes.', category: 'design', url: '#' },
];

const categoryOptions = [
  { label: 'Developer', value: 'dev' },
  { label: 'Coding', value: 'coding' },
  { label: 'Career', value: 'career' },
  { label: 'Productivity', value: 'productivity' },
  { label: 'Design', value: 'design' },
];

export default function StudentToolkit() {
  const [category, setCategory] = useState('all');
  const { toggle, isFav, list } = useFavorites();
  const favIds = list();
  const favTools = tools.filter((t) => favIds.includes(t.id));
  const filtered = category === 'all' ? tools : tools.filter((t) => t.category === category);

  return (
    <PageShell
      hero={{
        eyebrow: 'Student Toolkit',
        title: 'Student Toolkit',
        subtitle:
          'A curated set of tools, platforms and shortcuts that make student life a little easier — from coding to design to productivity.',
        icon: Wrench,
      }}
      sections={[
        {
          kind: 'features',
          eyebrow: 'Utilities',
          title: 'Everyday utilities',
          description: 'Handy little helpers that save time during the week.',
          items: [
            { icon: Calculator, title: 'GPA calculator', description: 'Compute semester and cumulative GPA with a clean, friendly interface.' },
            { icon: Clock, title: 'Attendance calculator', description: 'See how many classes you can safely miss without falling below 75%.' },
            { icon: Calendar, title: 'CGPA goal planner', description: 'Plan the grades you need to hit a target CGPA by graduation.' },
            { icon: ScanLine, title: 'Timetable image OCR', description: 'Turn a photo of your timetable into structured, searchable data.' },
            { icon: Cloud, title: 'Storage finder', description: 'Quick links to student cloud storage and drive allocations.' },
            { icon: KeyRound, title: 'Password generator', description: 'Generate strong, memorable passwords for student accounts.' },
          ],
        },
        {
          kind: 'stats',
          eyebrow: 'By the numbers',
          title: 'The toolkit in figures',
          description: 'Placeholder figures for what the toolkit will offer as it grows.',
          stats: [
            { value: '10+', label: 'Curated tools', icon: Wrench },
            { value: '6', label: 'Coding platforms', icon: Trophy },
            { value: '4', label: 'Design apps', icon: Palette },
            { value: '100%', label: 'Student-friendly', icon: Zap },
          ],
        },
      ]}
      closing={
        <>
          {favTools.length > 0 && (
            <section>
              <SectionHeading
                eyebrow="Favorites"
                title="Your favourite tools"
                description="Quick access to the tools you have bookmarked."
              />
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {favTools.map((t, i) => {
                  const Icon = t.icon;
                  return (
                    <Reveal key={t.id} delay={i * 40} variant="scale">
                      <button
                        type="button"
                        onClick={() => window.open(t.url, '_blank')}
                        className="sheen-host group flex w-full items-center gap-3 rounded-2xl glass-card p-4 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                      >
                        <span className="flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="flex-1">
                          <span className="block text-[13px] font-semibold text-ink-900">{t.title}</span>
                          <span className="block text-[11px] text-ink-500">Quick launch</span>
                        </span>
                        <Rocket className="h-4 w-4 text-brand-500 transition-transform group-hover:translate-x-0.5" />
                      </button>
                    </Reveal>
                  );
                })}
              </div>
            </section>
          )}

          <section>
            <SectionHeading
              eyebrow="Tools"
              title="Tool directory"
              description="Filter by category, bookmark your favourites, and quick-launch."
            />
            <div className="mb-6">
              <ChipFilter options={categoryOptions} value={category} onChange={setCategory} allLabel="All tools" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((t, i) => {
                const Icon = t.icon;
                const fav = isFav(t.id);
                return (
                  <Reveal key={t.id} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative flex items-start justify-between">
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5" />
                        </span>
                        <button
                          type="button"
                          aria-label={fav ? 'Remove favourite' : 'Add favourite'}
                          aria-pressed={fav}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggle(t.id);
                          }}
                          className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-200 ${
                            fav
                              ? 'border-amber-200 bg-amber-50 text-amber-500'
                              : 'border-ink-200 bg-white/70 text-ink-400 hover:border-ink-300 hover:text-ink-700'
                          }`}
                        >
                          <Star className={`h-4 w-4 ${fav ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{t.title}</h3>
                      <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{t.description}</p>
                      <div className="relative mt-5 flex items-center justify-between border-t border-ink-100 pt-4">
                        <span className="chip">{t.category}</span>
                        <span className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-400 transition group-hover:text-brand-600">
                          Launch
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        title: 'Small tools, big time saved.',
        description: 'Working calculators and direct tool integrations will arrive in upcoming releases.',
        primary: { label: 'Browse resources', to: '/resources' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
