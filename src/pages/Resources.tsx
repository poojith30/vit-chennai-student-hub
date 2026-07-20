import {
  BookOpen, FileText, FolderOpen, Download, Video, Link2, Bookmark,
  GraduationCap, FlaskConical, Cpu, ShieldCheck, Library, Languages, Star,
  Globe, Smartphone, Award, FileStack, LayoutTemplate, FileType,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function Resources() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Resources',
        title: 'Resources',
        subtitle:
          'A curated library of notes, references, videos and links — organized by subject and specialization so you can find what you need fast.',
        icon: BookOpen,
      }}
      sections={[
        {
          kind: 'grid',
          eyebrow: 'Notes & references',
          title: 'Study material',
          description: 'Subject-organized notes, references and past papers.',
          items: [
            { icon: FileText, title: 'Subject notes', description: 'Notes organized by semester, subject and specialization for quick access.' },
            { icon: FolderOpen, title: 'Reference books', description: 'Recommended textbooks with student annotations and chapter highlights.' },
            { icon: Download, title: 'Past papers', description: 'CAT and FAT papers for practice and revision, sorted by semester.' },
            { icon: Bookmark, title: 'Cheat sheets', description: 'Compact one-pagers for quick revision before exams.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Curated lists',
          title: 'Best websites & apps',
          description: 'The sites and apps students keep coming back to.',
          items: [
            { icon: Globe, title: 'Best websites', description: 'A categorized directory of student-useful websites and references.' },
            { icon: Smartphone, title: 'Best apps', description: 'Mobile apps for study, coding, notes and campus life.' },
            { icon: Link2, title: 'Useful links', description: 'A bookmarkable collection of links worth keeping close.' },
            { icon: Star, title: 'Reading lists', description: 'Curated reading lists for going deeper into each specialization.' },
          ],
        },
        {
          kind: 'bento',
          eyebrow: 'Learning',
          title: 'Free courses & video',
          description: 'Curated playlists and free courses worth your time.',
          featured: 0,
          items: [
            { icon: Video, title: 'Video playlists', description: 'Hand-picked YouTube playlists for every core subject, reviewed by seniors.' },
            { icon: Award, title: 'Free courses', description: 'Free and audited courses worth taking alongside your coursework.' },
            { icon: GraduationCap, title: 'Recommended courses', description: 'Paid courses with student discounts and high signal-to-noise.' },
            { icon: Bookmark, title: 'Reading lists', description: 'Curated reading lists for going deeper into each specialization.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Downloads',
          title: 'Cheat sheets, templates & PDFs',
          description: 'Ready-to-use downloads for study and productivity.',
          items: [
            { icon: FileStack, title: 'Cheat sheets', description: 'One-page references for DSA, OS, DBMS, CN and more.' },
            { icon: LayoutTemplate, title: 'Templates', description: 'Resume, project report and presentation templates ready to use.' },
            { icon: FileType, title: 'PDFs', description: 'Curated PDFs of notes, books and reference material.' },
            { icon: Download, title: 'Lab records', description: 'Lab record templates and observation note formats.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'By track',
          title: 'Specialization libraries',
          description: 'Resources grouped by CSE specialization tracks.',
          items: [
            { icon: Cpu, title: 'AI & ML', description: 'Foundational and advanced resources for machine learning and deep learning.' },
            { icon: FlaskConical, title: 'Data Science', description: 'Statistics, data engineering and visualization resources.' },
            { icon: ShieldCheck, title: 'Cyber Security', description: 'Security fundamentals, CTFs and reading lists.' },
            { icon: GraduationCap, title: 'Core CS', description: 'DSA, OS, DBMS, CN and core theory resources.' },
            { icon: Library, title: 'IoT & Systems', description: 'Embedded, IoT and systems programming references.' },
            { icon: Languages, title: 'Web & App dev', description: 'Frontend, backend and mobile development tracks.' },
          ],
        },
      ]}
      closingCta={{
        title: 'Everything you need, in one library.',
        description: 'A searchable resource library with uploads will arrive in upcoming releases.',
        primary: { label: 'Visit coding hub', to: '/coding-hub' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
