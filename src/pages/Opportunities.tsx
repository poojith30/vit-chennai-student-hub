import {
  Briefcase, Building2, Globe, CalendarClock, GraduationCap, FileText,
  Award, LineChart, Rocket, Mail, Trophy, Users, Sparkles,
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
          kind: 'grid',
          eyebrow: 'Beyond campus',
          title: 'Research & competitions',
          description: 'Open calls for research programs, fellowships and student competitions.',
          items: [
            { icon: Rocket, title: 'Research programs', description: 'Summer research programs, MS/PhD calls and open-source fellowships.' },
            { icon: Trophy, title: 'Competitions', description: 'Hackathons, case challenges and design competitions worth entering.' },
            { icon: Users, title: 'Team finder', description: 'Find teammates for hackathons and competitions across specializations.' },
            { icon: Mail, title: 'Newsletter sign-up', description: 'A weekly digest of new opportunities, straight to your inbox.' },
            { icon: Sparkles, title: 'Mentor matches', description: 'Get matched with seniors who have walked the path you are aiming for.' },
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
