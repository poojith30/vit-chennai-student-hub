import {
  GraduationCap, Layers, BookOpen, FileText, Calculator, CalendarDays,
  Clock, ClipboardCheck, BarChart3, RefreshCw, ShieldCheck, Youtube,
  FlaskConical, Library, BookMarked, FileStack, Video,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import CgpaCalculator from '../components/CgpaCalculator';
import SectionHeading from '../components/SectionHeading';

const semesters = Array.from({ length: 8 }, (_, i) => ({
  icon: Layers,
  title: `Semester ${i + 1}`,
  description:
    i % 2 === 0
      ? 'Core theory and foundational labs — programming, mathematics and engineering fundamentals.'
      : 'Advanced theory, specialization electives and project work tailored to your track.',
  tag: `Sem ${i + 1}`,
}));

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
          eyebrow: 'Semesters',
          title: 'Semester 1–8 resource cards',
          description: 'Jump straight into any semester to find notes, books, papers and lab manuals.',
          items: semesters,
        },
        {
          kind: 'grid',
          eyebrow: 'Study material',
          title: 'Notes, books, papers & labs',
          description: 'A growing library of academic resources, organized by subject and semester.',
          items: [
            { icon: FileText, title: 'Notes', description: 'Handwritten and typed notes organized by semester, subject and specialization.' },
            { icon: BookMarked, title: 'Reference books', description: 'Recommended textbooks with student annotations and chapter highlights.' },
            { icon: FileStack, title: 'Previous year papers', description: 'CAT and FAT papers for practice and revision, sorted by semester.' },
            { icon: FlaskConical, title: 'Lab manuals', description: 'Lab records, observation notes and experiment walkthroughs for every lab course.' },
            { icon: Library, title: 'Syllabus archive', description: 'Official syllabus documents for each course, kept up to date.' },
            { icon: BookOpen, title: 'Subject guides', description: 'Plain-language guides to tough subjects, written by seniors who took them.' },
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
          kind: 'grid',
          eyebrow: 'Video learning',
          title: 'YouTube playlists',
          description: 'Curated, senior-reviewed playlists for every core subject — all in one place.',
          items: [
            { icon: Youtube, title: 'Data Structures', description: 'A complete DSA playlist covering arrays to advanced trees, in order.' },
            { icon: Youtube, title: 'Operating Systems', description: 'Concept-first OS playlists with diagrams and exam-focused summaries.' },
            { icon: Youtube, title: 'DBMS', description: 'Relational design, normalization and SQL walkthroughs.' },
            { icon: Youtube, title: 'Computer Networks', description: 'Layered explanations of protocols, topologies and the OSI model.' },
            { icon: Video, title: 'Mathematics', description: 'Calculus, linear algebra and discrete maths refresher playlists.' },
            { icon: Video, title: 'OOP & Java', description: 'Object-oriented programming explained with hands-on Java examples.' },
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
      closing={
        <section>
          <SectionHeading
            eyebrow="Tools"
            title="CGPA Calculator"
            description="A live, no-login tool to estimate your CGPA. UI only — nothing is stored."
          />
          <CgpaCalculator />
        </section>
      }
      closingCta={{
        title: 'Academics is just the start.',
        description: 'Real timetables, syllabi and results dashboards will arrive in upcoming releases.',
        primary: { label: 'Explore coding hub', to: '/coding-hub' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
