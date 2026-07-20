import { useMemo, useState } from 'react';
import {
  BookOpen, FileText, FolderOpen, Download, Video, Link2, Bookmark,
  GraduationCap, FlaskConical, Cpu, ShieldCheck, Library, Languages, Star,
  Globe, Smartphone, Award, LayoutTemplate, FileType, Inbox,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import SearchBar from '../components/SearchBar';
import ChipFilter from '../components/ChipFilter';
import EmptyState from '../components/EmptyState';
import { ResourceCardGrid, type ResourceCardItem } from '../components/ResourceCard';

const resources: ResourceCardItem[] = [
  { id: 'r-notes', icon: FileText, title: 'Subject notes', description: 'Notes organized by semester, subject and specialization for quick access.', tag: 'Notes', category: 'study', bookmarkable: true, downloadable: true },
  { id: 'r-books', icon: FolderOpen, title: 'Reference books', description: 'Recommended textbooks with student annotations and chapter highlights.', tag: 'Books', category: 'study', bookmarkable: true, downloadable: true },
  { id: 'r-papers', icon: Download, title: 'Past papers', description: 'CAT and FAT papers for practice and revision, sorted by semester.', tag: 'Papers', category: 'study', bookmarkable: true, downloadable: true },
  { id: 'r-cheats', icon: Bookmark, title: 'Cheat sheets', description: 'Compact one-pagers for quick revision before exams.', tag: 'Cheat sheets', category: 'downloads', bookmarkable: true, downloadable: true },
  { id: 'r-websites', icon: Globe, title: 'Best websites', description: 'A categorized directory of student-useful websites and references.', tag: 'Websites', category: 'lists', bookmarkable: true },
  { id: 'r-apps', icon: Smartphone, title: 'Best apps', description: 'Mobile apps for study, coding, notes and campus life.', tag: 'Apps', category: 'lists', bookmarkable: true },
  { id: 'r-courses', icon: Award, title: 'Free courses', description: 'Free and audited courses worth taking alongside your coursework.', tag: 'Courses', category: 'learning', bookmarkable: true },
  { id: 'r-videos', icon: Video, title: 'Video playlists', description: 'Hand-picked YouTube playlists for every core subject, reviewed by seniors.', tag: 'Videos', category: 'learning', bookmarkable: true },
  { id: 'r-templates', icon: LayoutTemplate, title: 'Templates', description: 'Resume, project report and presentation templates ready to use.', tag: 'Templates', category: 'downloads', bookmarkable: true, downloadable: true },
  { id: 'r-pdfs', icon: FileType, title: 'PDFs', description: 'Curated PDFs of notes, books and reference material.', tag: 'PDFs', category: 'downloads', bookmarkable: true, downloadable: true },
  { id: 'r-links', icon: Link2, title: 'Useful links', description: 'A bookmarkable collection of links worth keeping close.', tag: 'Links', category: 'lists', bookmarkable: true },
  { id: 'r-reading', icon: Star, title: 'Reading lists', description: 'Curated reading lists for going deeper into each specialization.', tag: 'Reading', category: 'learning', bookmarkable: true },
];

const categories = [
  { label: 'Study material', value: 'study' },
  { label: 'Downloads', value: 'downloads' },
  { label: 'Lists', value: 'lists' },
  { label: 'Learning', value: 'learning' },
];

export default function Resources() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  const filtered = useMemo(() => {
    return resources.filter((r) => {
      const matchCat = category === 'all' || r.category === category;
      const matchQ =
        !query ||
        r.title.toLowerCase().includes(query.toLowerCase()) ||
        r.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQ;
    });
  }, [query, category]);

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
      closing={
        <section>
          <SectionHeading
            eyebrow="Library"
            title="Search resources"
            description="Search and filter across notes, books, videos, templates and more."
          />
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search resources…"
              className="sm:max-w-xs"
            />
            <ChipFilter options={categories} value={category} onChange={setCategory} allLabel="All" />
          </div>
          {filtered.length > 0 ? (
            <ResourceCardGrid items={filtered} />
          ) : (
            <EmptyState
              title="No resources found"
              description="Try a different search term or category — more content arrives in future releases."
              icon={Inbox}
            />
          )}
        </section>
      }
      closingCta={{
        title: 'Everything you need, in one library.',
        description: 'A searchable resource library with uploads will arrive in upcoming releases.',
        primary: { label: 'Visit coding hub', to: '/coding-hub' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
