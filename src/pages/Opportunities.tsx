import { useState } from 'react';
import {
  Briefcase, Building2, Globe, GraduationCap, FileText,
  Award, LineChart, Rocket, Trophy, Users,
  BadgeCheck, Gift, Code2, HandHeart, Megaphone, CalendarDays, Clock,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import ChipFilter from '../components/ChipFilter';
import StatusBadge, { type Status } from '../components/StatusBadge';
import Reveal from '../components/Reveal';

type Opportunity = {
  icon: typeof Briefcase;
  title: string;
  description: string;
  category: string;
  status: Status;
  deadline: string;
};

const opportunities: Opportunity[] = [
  { icon: Building2, title: 'Startup SDE intern', description: 'Early-stage role with high ownership across the stack. Remote-friendly.', category: 'internships', status: 'open', deadline: 'Rolling' },
  { icon: Briefcase, title: 'Product company internship', description: 'Summer SDE internship at an established product company.', category: 'internships', status: 'upcoming', deadline: '15 Mar' },
  { icon: Globe, title: 'Global research program', description: 'International research internship for CSE students.', category: 'internships', status: 'upcoming', deadline: '30 Apr' },
  { icon: Trophy, title: 'Inter-college hackathon', description: '48-hour hackathon with prizes and recruiter visibility.', category: 'hackathons', status: 'open', deadline: '10 Feb' },
  { icon: Code2, title: 'LeetCode weekly contest', description: 'Weekly algorithmic contest — great for interview prep.', category: 'contests', status: 'open', deadline: 'Every Sunday' },
  { icon: Megaphone, title: 'Product case challenge', description: 'Design and pitch a product solution to a panel.', category: 'contests', status: 'upcoming', deadline: '22 Mar' },
  { icon: Users, title: 'Cloud workshop series', description: 'Hands-on cloud fundamentals workshop run by seniors.', category: 'workshops', status: 'open', deadline: '05 Feb' },
  { icon: BadgeCheck, title: 'AWS certification path', description: 'Structured prep path for the AWS Cloud Practitioner exam.', category: 'certifications', status: 'open', deadline: 'Self-paced' },
  { icon: Gift, title: 'Merit scholarship', description: 'Merit-based scholarship for top-performing students.', category: 'scholarships', status: 'upcoming', deadline: '01 May' },
  { icon: HandHeart, title: 'GSoC 2025', description: 'Google Summer of Code — contribute to open source with a stipend.', category: 'oss', status: 'upcoming', deadline: '18 Mar' },
  { icon: HandHeart, title: 'MLH Fellowship', description: 'A 12-week open-source fellowship for students.', category: 'oss', status: 'closed', deadline: 'Closed' },
  { icon: Rocket, title: 'Startup incubator', description: 'On-campus incubator for student-founded ventures.', category: 'internships', status: 'open', deadline: '28 Feb' },
];

const categoryOptions = [
  { label: 'Internships', value: 'internships' },
  { label: 'Hackathons', value: 'hackathons' },
  { label: 'Contests', value: 'contests' },
  { label: 'Workshops', value: 'workshops' },
  { label: 'Certifications', value: 'certifications' },
  { label: 'Scholarships', value: 'scholarships' },
  { label: 'Open Source', value: 'oss' },
];

export default function Opportunities() {
  const [category, setCategory] = useState('all');
  const filtered = category === 'all' ? opportunities : opportunities.filter((o) => o.category === category);

  return (
    <PageShell
      hero={{
        eyebrow: 'Opportunities',
        title: 'Opportunities',
        subtitle:
          'Internships, full-time roles, research programs and competitions — a curated board for CSE students to discover what is next.',
        icon: Briefcase,
      }}
      sections={[
        {
          kind: 'features',
          eyebrow: 'Placements',
          title: 'Full-time placements',
          description: 'Placement season resources, company-wise preparation and interview experiences.',
          items: [
            { icon: GraduationCap, title: 'Placement roadmap', description: 'A timeline-driven guide to preparing for on-campus placements, semester by semester.' },
            { icon: FileText, title: 'Interview experiences', description: 'Real interview breakdowns shared by seniors, organized by company and role.' },
            { icon: Award, title: 'Offer archive', description: 'A historical view of companies, packages and roles offered on campus over the years.' },
            { icon: LineChart, title: 'Prep progress', description: 'Track mock interviews, topics covered and overall readiness with a clean dashboard.' },
          ],
        },
        {
          kind: 'stats',
          eyebrow: 'By the numbers',
          title: 'Opportunities, in figures',
          description: 'Placeholder figures for what the board will track once real data arrives.',
          stats: [
            { value: '50+', label: 'Internship tracks', icon: Briefcase },
            { value: '12', label: 'Hackathons / year', icon: Trophy },
            { value: '20+', label: 'Certifications', icon: BadgeCheck },
            { value: '8', label: 'OSS programs', icon: HandHeart },
          ],
        },
      ]}
      closing={
        <section>
          <SectionHeading
            eyebrow="Board"
            title="Opportunity board"
            description="Filter by category and track deadlines. Status badges show what is open right now."
          />
          <div className="mb-6">
            <ChipFilter options={categoryOptions} value={category} onChange={setCategory} allLabel="All" />
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((o, i) => {
              const Icon = o.icon;
              return (
                <Reveal key={o.title} delay={i * 50} variant="scale">
                  <article className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-brand-300/40 via-cyan-300/30 to-accent-300/40 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative flex items-start justify-between">
                      <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3">
                        <Icon className="h-5 w-5" />
                        <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
                      </span>
                      <StatusBadge status={o.status} />
                    </div>
                    <h3 className="relative mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{o.title}</h3>
                    <p className="relative mt-2 flex-1 text-sm leading-relaxed text-ink-500">{o.description}</p>
                    <div className="relative mt-5 flex items-center gap-4 border-t border-ink-100 pt-4 text-[12px] text-ink-500">
                      <span className="inline-flex items-center gap-1.5">
                        <CalendarDays className="h-3.5 w-3.5 text-brand-500" />
                        {o.deadline}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5 text-accent-500" />
                        {o.category}
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>
      }
      closingCta={{
        title: 'Your next opportunity starts here.',
        description: 'A live, curated opportunity board will arrive in upcoming releases.',
        primary: { label: 'Visit senior corner', to: '/senior-corner' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
