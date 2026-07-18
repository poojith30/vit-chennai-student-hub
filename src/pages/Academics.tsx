import {
  GraduationCap, Layers, BookOpen, FileText, Calculator, CalendarDays,
  Clock, ClipboardCheck, BarChart3, RefreshCw, ShieldCheck,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function Academics() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Academics',
        title: 'Academics',
        subtitle:
          'Curriculum, timetables, assessments and results — a clean academic home base for CSE & CSE Specialization students.',
        icon: GraduationCap,
      }}
      sections={[
        {
          kind: 'bento',
          eyebrow: 'Curriculum',
          title: 'Your academic backbone',
          description:
            'A structured view of the CSE journey — from first semester to electives and specializations.',
          featured: 0,
          items: [
            { icon: Layers, title: 'Semester roadmap', description: 'A clear, semester-by-semester breakdown of the CSE curriculum with credit loads and key milestones.' },
            { icon: BookOpen, title: 'Specialization tracks', description: 'Explore AI, Data Science, Cyber Security, IoT and other paths with prerequisites.' },
            { icon: FileText, title: 'Electives library', description: 'Browse electives with prerequisites, credits and student-written notes.' },
            { icon: Calculator, title: 'Credit calculator', description: 'Plan credits and track progress toward graduation requirements visually.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Assessment',
          title: 'Timetables, CATs & results',
          description: 'Stay on top of assessments with a clean, unified view of the academic calendar.',
          items: [
            { icon: Clock, title: 'Live timetables', description: 'Personalized class schedules synced with your section and specialization.' },
            { icon: CalendarDays, title: 'CAT & FAT schedule', description: 'Internal assessment dates, slots and seating arrangements.' },
            { icon: BarChart3, title: 'Results dashboard', description: 'A consolidated view of grades, GPA and progress over time.' },
            { icon: RefreshCw, title: 'Revaluation tracker', description: 'Track revaluation requests and outcomes in one place.' },
            { icon: ClipboardCheck, title: 'Attendance monitor', description: 'Keep an eye on attendance with clear, visual indicators.' },
            { icon: ShieldCheck, title: 'Academic integrity', description: 'Guidelines, policies and resources on academic integrity.' },
          ],
        },
        {
          kind: 'stats',
          eyebrow: 'At a glance',
          title: 'The academic year in figures',
          description: 'Placeholder figures for what this section will track once real data arrives.',
          stats: [
            { value: '8', label: 'Semesters', icon: Layers },
            { value: '160+', label: 'Credits to graduate', icon: Calculator },
            { value: '6', label: 'Specializations', icon: BookOpen },
            { value: '2', label: 'Assessment cycles', icon: CalendarDays },
          ],
        },
      ]}
      closingCta={{
        title: 'Academics is just the start.',
        description: 'Real timetables, syllabi and results dashboards will arrive in upcoming releases.',
        primary: { label: 'Explore coding hub', to: '/coding-hub' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
