import {
  Award, Compass, BookOpen, Briefcase, Lightbulb, Quote, Star,
  GraduationCap, Users, Target, Coffee, FileText, PenLine, MessageSquare,
  FolderGit2, Rocket, Code2, Brain, CheckCircle2,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import DifficultyBadge from '../components/DifficultyBadge';

const experiences = [
  { icon: Briefcase, title: 'Product company SDE', company: 'Placeholder Co.', role: 'SDE Intern', summary: 'Three rounds — OA, technical, HR. Focused on DSA and system design basics.', tag: 'Placement' },
  { icon: Rocket, title: 'Startup internship', company: 'Placeholder Startup', role: 'Full-stack Intern', summary: 'Built a feature end-to-end. Learned agile workflows and code review.', tag: 'Internship' },
  { icon: Code2, title: 'Coding contest win', company: 'Inter-college', role: 'Finalist', summary: 'Solved 5/6 problems. Graph and DP were the decisive topics.', tag: 'Contest' },
  { icon: GraduationCap, title: 'Research internship', company: 'Placeholder Lab', role: 'Research Intern', summary: 'Worked on a published paper. Learned how to read and write research.', tag: 'Research' },
];

const resumeTips = [
  { icon: FileText, title: 'One page, clean', description: 'Keep your resume to one page with clear sections and consistent spacing.', level: 'beginner' as const },
  { icon: PenLine, title: 'Impact bullets', description: 'Start each bullet with a strong verb and quantify impact where possible.', level: 'beginner' as const },
  { icon: FolderGit2, title: 'Projects that shine', description: 'Show 2–3 meaningful projects with links and a one-line impact statement.', level: 'intermediate' as const },
  { icon: Target, title: 'Tailor for the role', description: 'Reorder and tweak bullets to match the job description keywords.', level: 'intermediate' as const },
  { icon: Star, title: 'GitHub & LinkedIn', description: 'Keep your GitHub README and LinkedIn headline crisp and up to date.', level: 'beginner' as const },
  { icon: Lightbulb, title: 'Avoid common mistakes', description: 'No typos, no generic objectives, no irrelevant hobbies.', level: 'beginner' as const },
];

const interviewSteps = [
  { phase: 'Month 1', icon: Code2, title: 'DSA foundations', description: 'Arrays, strings, hashing and basic recursion. Aim for 2 problems a day.' },
  { phase: 'Month 2', icon: Brain, title: 'Core CS revision', description: 'OS, DBMS, CN and OOP — one topic a week with short notes.' },
  { phase: 'Month 3', icon: FolderGit2, title: 'Projects deep-dive', description: 'Be able to explain every project decision, trade-off and tech choice.' },
  { phase: 'Month 4', icon: MessageSquare, title: 'Mock interviews', description: 'Run 1–2 mocks a week with peers; review and iterate.' },
  { phase: 'Month 5', icon: Target, title: 'HR & behavioral', description: 'Prepare STAR stories for common behavioral questions.' },
  { phase: 'Month 6', icon: CheckCircle2, title: 'Apply & interview', description: 'Apply widely, interview confidently, negotiate offers.' },
];

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
          kind: 'grid',
          eyebrow: 'Academics',
          title: 'Subject guidance',
          description: 'Seniors on the subjects that trip students up most.',
          items: [
            { icon: BookOpen, title: 'Tough subject guides', description: 'How to approach the subjects students find hardest, semester by semester.' },
            { icon: Compass, title: 'Specialization advice', description: 'How seniors chose between AI, Data Science, Cyber Security and more.' },
            { icon: Target, title: 'Exam strategy', description: 'How to prepare for CATs and FATs without burning out.' },
            { icon: Coffee, title: 'Study routines', description: 'Real study routines and schedules that worked for seniors.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Build',
          title: 'Project ideas',
          description: 'Inspiration and guidance for projects that actually stand out.',
          items: [
            { icon: FolderGit2, title: 'Project ideas', description: 'Difficulty-tagged project ideas across web, ML, systems and more.' },
            { icon: Code2, title: 'Tech stack picks', description: 'Seniors on the stacks they used and would choose again.' },
            { icon: Rocket, title: 'Showcase guide', description: 'How to present projects on GitHub and in your resume.' },
            { icon: Lightbulb, title: 'Open source starts', description: 'How seniors made their first open-source contributions.' },
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
      closing={
        <>
          <section>
            <SectionHeading
              eyebrow="Experiences"
              title="Experience cards"
              description="Real journeys from seniors who have been through placement and internship seasons."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {experiences.map((e, i) => {
                const Icon = e.icon;
                return (
                  <Reveal key={e.title} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="flex items-center justify-between">
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 group-hover:scale-110">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="chip">{e.tag}</span>
                      </div>
                      <h3 className="mt-5 font-display text-[15px] font-semibold tracking-tight text-ink-900">{e.title}</h3>
                      <p className="mt-1 text-[12px] font-medium text-ink-500">{e.company} · {e.role}</p>
                      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-ink-500">{e.summary}</p>
                      <div className="mt-4 flex items-center gap-1 text-[12px] font-medium text-ink-400 transition group-hover:text-brand-600">
                        <Quote className="h-3.5 w-3.5" />
                        Read story
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Resume"
              title="Resume tips cards"
              description="Practical, senior-approved tips for a resume that gets shortlisted."
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {resumeTips.map((t, i) => {
                const Icon = t.icon;
                return (
                  <Reveal key={t.title} delay={i * 50} variant="scale">
                    <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                      <div className="flex items-center justify-between">
                        <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                          <Icon className="h-5 w-5" />
                        </span>
                        <DifficultyBadge level={t.level} />
                      </div>
                      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{t.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">{t.description}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Interview prep"
              title="Interview roadmap timeline"
              description="A six-month, month-by-month plan to get placement-ready."
            />
            <div className="relative">
              <div className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand-400 via-ink-200 to-transparent sm:left-[1.65rem]" />
              <ol className="space-y-5">
                {interviewSteps.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={i} delay={i * 80} variant="scale">
                      <li className="relative grid grid-cols-[2.5rem_1fr] gap-5 sm:grid-cols-[3.5rem_1fr]">
                        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-brand-600 shadow-soft ring-4 ring-ink-50 sm:h-14 sm:w-14">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </span>
                        <div className="sheen-host group rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                              {s.phase}
                            </span>
                            <span className="text-[11px] text-ink-400">Step {i + 1}</span>
                          </div>
                          <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink-900">{s.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.description}</p>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </section>
        </>
      }
      closingCta={{
        title: 'Wisdom, passed forward.',
        description: 'A mentor directory and AMA archive will arrive in upcoming releases.',
        primary: { label: 'See student spotlight', to: '/student-spotlight' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
