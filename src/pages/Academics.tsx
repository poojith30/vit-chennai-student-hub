import { useMemo, useState } from 'react';
import {
  GraduationCap, Layers, BookOpen, FileText, Calculator, CalendarDays,
  Clock, ClipboardCheck, BarChart3, RefreshCw, ShieldCheck, Youtube,
  FlaskConical, Library, BookMarked, FileStack, Video, Download, Bookmark,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import CgpaCalculator from '../components/CgpaCalculator';
import SectionHeading from '../components/SectionHeading';
import SearchBar from '../components/SearchBar';
import ChipFilter from '../components/ChipFilter';
import EmptyState from '../components/EmptyState';
import { ResourceCardGrid, type ResourceCardItem } from '../components/ResourceCard';

const resourceItems: ResourceCardItem[] = [
  { id: 'ac-notes', icon: FileText, title: 'Notes', description: 'Handwritten and typed notes organized by semester, subject and specialization.', tag: 'Notes', category: 'notes', bookmarkable: true, downloadable: true },
  { id: 'ac-books', icon: BookMarked, title: 'Reference books', description: 'Recommended textbooks with student annotations and chapter highlights.', tag: 'Books', category: 'books', bookmarkable: true, downloadable: true },
  { id: 'ac-papers', icon: FileStack, title: 'Previous year papers', description: 'CAT and FAT papers for practice and revision, sorted by semester.', tag: 'Papers', category: 'papers', bookmarkable: true, downloadable: true },
  { id: 'ac-labs', icon: FlaskConical, title: 'Lab manuals', description: 'Lab records, observation notes and experiment walkthroughs for every lab course.', tag: 'Labs', category: 'labs', bookmarkable: true, downloadable: true },
  { id: 'ac-syllabus', icon: Library, title: 'Syllabus archive', description: 'Official syllabus documents for each course, kept up to date.', tag: 'Syllabus', category: 'syllabus', bookmarkable: true, downloadable: true },
  { id: 'ac-guides', icon: BookOpen, title: 'Subject guides', description: 'Plain-language guides to tough subjects, written by seniors who took them.', tag: 'Guides', category: 'guides', bookmarkable: true },
];

const categories = [
  { label: 'Notes', value: 'notes' },
  { label: 'Books', value: 'books' },
  { label: 'Papers', value: 'papers' },
  { label: 'Labs', value: 'labs' },
  { label: 'Syllabus', value: 'syllabus' },
  { label: 'Guides', value: 'guides' },
];

const semesterSubjects = [
  'Programming in C', 'Mathematics I', 'Physics', 'English', 'Engineering Graphics',
  'Data Structures', 'OOP in Java', 'Mathematics II', 'Digital Logic', 'Chemistry',
  'Algorithms', 'DBMS', 'Operating Systems', 'Computer Organization', 'Discrete Math',
  'Computer Networks', 'Theory of Computation', 'Software Engineering', 'Microprocessor', 'Statistics',
  'AI Fundamentals', 'Compiler Design', 'Cloud Computing', 'Web Technologies', 'Big Data',
  'Machine Learning', 'Deep Learning', 'Cyber Security', 'IoT', 'Distributed Systems',
  'Capstone Project I', 'Elective I', 'Elective II', 'Seminar', 'Industry Internship',
  'Capstone Project II', 'Elective III', 'Elective IV', 'Thesis', 'Industry Project',
];

export default function Academics() {
  const [semester, setSemester] = useState(1);
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return resourceItems.filter((r) => {
      const matchCat = category === 'all' || r.category === category;
      const matchQ =
        !query ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [category, query]);

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
        <>
          <section>
            <SectionHeading
              eyebrow="Semesters"
              title="Semester selector"
              description="Pick a semester to see its subjects and jump to the right resources."
            />
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 8 }, (_, i) => i + 1).map((s) => {
                const active = semester === s;
                return (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSemester(s)}
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl font-display text-sm font-bold transition-all duration-200 ease-out-expo ${
                      active
                        ? 'bg-ink-900 text-white shadow-glow'
                        : 'border border-ink-200 bg-white/70 text-ink-600 backdrop-blur hover:border-ink-300 hover:text-ink-900'
                    }`}
                    aria-pressed={active}
                    aria-label={`Semester ${s}`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {semesterSubjects.slice((semester - 1) * 5, (semester - 1) * 5 + 5).map((sub, i) => (
                <div
                  key={i}
                  className="sheen-host group flex items-center gap-3 rounded-2xl glass-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card"
                >
                  <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-ink-900 text-white shadow-soft transition-transform group-hover:scale-105">
                    <Bookmark className="h-4 w-4" />
                  </span>
                  <span className="flex-1 text-[13px] font-medium text-ink-800">{sub}</span>
                  <Download className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brand-500" />
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Study material"
              title="Notes, books, papers & labs"
              description="A growing library of academic resources, organized by subject and semester."
            />
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <SearchBar
                value={query}
                onChange={setQuery}
                placeholder="Search notes, books, papers…"
                className="sm:max-w-xs"
              />
              <ChipFilter options={categories} value={category} onChange={setCategory} allLabel="All types" />
            </div>
            {filtered.length > 0 ? (
              <ResourceCardGrid items={filtered} />
            ) : (
              <EmptyState
                title="No resources found"
                description="Try a different search term or category — more content arrives in future releases."
                icon={FileText}
              />
            )}
          </section>

          <section>
            <SectionHeading
              eyebrow="Tools"
              title="CGPA Calculator"
              description="A live, no-login tool to estimate your CGPA. UI only — nothing is stored."
            />
            <CgpaCalculator />
          </section>
        </>
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
