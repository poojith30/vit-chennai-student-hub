import {
  Briefcase, Building2, Globe, CalendarClock, GraduationCap, FileText,
  Award, LineChart, Rocket, Trophy, Users, Sparkles, Flame,
  BadgeCheck, BookOpen, Gift, Code2, HandHeart, Megaphone,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function Opportunities() {
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
          kind: 'bento',
          eyebrow: 'Internships',
          title: 'Internship board',
          description: 'Curated internship openings from startups, product companies and research labs.',
          featured: 0,
          items: [
            { icon: Building2, title: 'Startup internships', description: 'Early-stage roles with high ownership and fast learning curves, curated for students.' },
            { icon: Briefcase, title: 'Product company roles', description: 'SDE internships at established product and platform companies.' },
            { icon: Globe, title: 'Remote & global', description: 'Remote-first opportunities and international research programs.' },
            { icon: CalendarClock, title: 'Application tracker', description: 'Track deadlines, statuses and follow-ups for every application.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Compete',
          title: 'Hackathons & contests',
          description: 'Compete, build and get noticed — the events that move your profile forward.',
          items: [
            { icon: Trophy, title: 'Hackathons', description: 'On-campus and global hackathons with team-building support and idea prompts.' },
            { icon: Code2, title: 'Coding contests', description: 'LeetCode, Codeforces and CodeChef contests with prep resources.' },
            { icon: Megaphone, title: 'Case challenges', description: 'Product, design and business case competitions worth entering.' },
            { icon: Flame, title: 'Streak challenges', description: 'Community-driven daily and weekly coding streaks.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Grow',
          title: 'Workshops & certifications',
          description: 'Structured learning and credentials that complement your degree.',
          items: [
            { icon: Users, title: 'Workshops', description: 'Hands-on workshops run by clubs, seniors and industry mentors.' },
            { icon: BadgeCheck, title: 'Certifications', description: 'Cloud, ML and developer certifications worth pursuing, with prep paths.' },
            { icon: BookOpen, title: 'Bootcamps', description: 'Curated free and paid bootcamps across domains.' },
            { icon: LineChart, title: 'Skill tracks', description: 'Self-paced tracks that map to real job roles.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Support',
          title: 'Scholarships & open source',
          description: 'Funding and community programs that help you grow while giving back.',
          items: [
            { icon: Gift, title: 'Scholarships', description: 'Merit and need-based scholarships with eligibility and deadlines.' },
            { icon: HandHeart, title: 'Open source programs', description: 'GSoC, MLH Fellowship, Outreachy and similar programs with guides.' },
            { icon: Rocket, title: 'Incubators', description: 'Startup and project incubators accessible to students.' },
            { icon: Sparkles, title: 'Mentor matches', description: 'Get matched with seniors who have walked the path you are aiming for.' },
          ],
        },
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
      closingCta={{
        title: 'Your next opportunity starts here.',
        description: 'A live, curated opportunity board will arrive in upcoming releases.',
        primary: { label: 'Visit senior corner', to: '/senior-corner' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
