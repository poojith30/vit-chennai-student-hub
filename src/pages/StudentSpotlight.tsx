import {
  Star, Trophy, Award, GraduationCap, Briefcase, Palette, Cpu,
  Heart, Quote, Users, Flame, Rocket, FolderGit2, ArrowUpRight, Sparkles,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';

const achievements = [
  { icon: Trophy, title: 'Hackathon win', person: 'Placeholder Student', detail: '1st place at an inter-college hackathon.', accent: 'from-brand-500 to-brand-700' },
  { icon: Award, title: 'Research paper', person: 'Placeholder Student', detail: 'Co-authored a paper accepted at a conference.', accent: 'from-accent-500 to-accent-700' },
  { icon: Briefcase, title: 'Dream offer', person: 'Placeholder Student', detail: 'Landed a top-tier SDE offer on campus.', accent: 'from-ink-700 to-ink-900' },
  { icon: Flame, title: 'Open source', person: 'Placeholder Student', detail: 'Merged a feature into a major open-source project.', accent: 'from-brand-500 to-accent-500' },
];

const projects = [
  { icon: FolderGit2, title: 'Campus marketplace', author: 'Placeholder Team', description: 'A peer-to-peer marketplace built with React and Supabase.', tags: ['React', 'Supabase', 'Tailwind'] },
  { icon: Cpu, title: 'ML vision app', author: 'Placeholder Student', description: 'Real-time object detection app using PyTorch.', tags: ['Python', 'PyTorch', 'OpenCV'] },
  { icon: Palette, title: 'Design system', author: 'Placeholder Student', description: 'An open-source design system published on Figma.', tags: ['Figma', 'Design', 'OSS'] },
  { icon: Rocket, title: 'DevOps pipeline', author: 'Placeholder Team', description: 'A CI/CD pipeline template for student projects.', tags: ['Docker', 'GH Actions', 'AWS'] },
];

const startups = [
  { icon: Rocket, title: 'Placeholder Startup', founder: 'Placeholder Founder', description: 'A student-founded edtech venture in early stage.', accent: 'from-brand-500 to-brand-700' },
  { icon: Rocket, title: 'Placeholder Startup', founder: 'Placeholder Founder', description: 'A campus food-delivery app built by students.', accent: 'from-accent-500 to-accent-700' },
  { icon: Rocket, title: 'Placeholder Startup', founder: 'Placeholder Founder', description: 'An AI-powered study companion in beta.', accent: 'from-ink-700 to-ink-900' },
];

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
      closing={
        <>
          <section>
            <SectionHeading
              eyebrow="Achievements"
              title="Achievement cards"
              description="A wall of recognition for students doing remarkable things."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {achievements.map((a, i) => {
                const Icon = a.icon;
                return (
                  <Reveal key={i} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${a.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
                      <span className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${a.accent} text-white shadow-glow transition-transform duration-500 group-hover:scale-110`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-display text-[15px] font-semibold tracking-tight text-ink-900">{a.title}</h3>
                      <p className="mt-1 text-[12px] font-medium text-ink-500">{a.person}</p>
                      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">{a.detail}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Projects"
              title="Featured projects"
              description="A curated showcase of projects built by students across domains."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {projects.map((p, i) => {
                const Icon = p.icon;
                return (
                  <Reveal key={i} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="flex items-center justify-between">
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5" />
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                      </div>
                      <h3 className="mt-5 font-display text-[15px] font-semibold tracking-tight text-ink-900">{p.title}</h3>
                      <p className="mt-1 text-[12px] font-medium text-ink-500">{p.author}</p>
                      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-500">{p.description}</p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {p.tags.map((t) => (
                          <span key={t} className="chip">{t}</span>
                        ))}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Ventures"
              title="Student startups"
              description="Student-founded ventures and the stories behind them."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {startups.map((s, i) => {
                const Icon = s.icon;
                return (
                  <Reveal key={i} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
                      <span className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.accent} text-white shadow-glow transition-transform duration-500 group-hover:scale-110`}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{s.title}</h3>
                      <p className="mt-1 text-[12px] font-medium text-ink-500">{s.founder}</p>
                      <p className="mt-3 text-sm leading-relaxed text-ink-500">{s.description}</p>
                      <div className="mt-4 flex items-center gap-1 text-[12px] font-medium text-ink-400 transition group-hover:text-brand-600">
                        <Sparkles className="h-3.5 w-3.5" />
                        Learn more
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
        title: 'Celebrate the people behind the work.',
        description: 'A nomination system and featured-student archive will arrive in upcoming releases.',
        primary: { label: 'Back to home', to: '/' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
