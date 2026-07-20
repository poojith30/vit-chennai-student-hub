import {
  Wrench, Calculator, Clock, Calendar, FileText, ScanLine, Cloud,
  KeyRound, Code2, Palette, BookOpen, Globe, Lightbulb, Zap,
  Github, Linkedin, Trophy, BarChart3, BookMarked, Boxes, PenTool, Image, FileBox,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function StudentToolkit() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Student Toolkit',
        title: 'Student Toolkit',
        subtitle:
          'A curated set of tools, platforms and shortcuts that make student life a little easier — from coding to design to productivity.',
        icon: Wrench,
      }}
      sections={[
        {
          kind: 'grid',
          eyebrow: 'Developer tools',
          title: 'Coding & developer pack',
          description: 'The essentials every CSE student should have installed and bookmarked.',
          items: [
            { icon: Github, title: 'GitHub Student Developer Pack', description: 'Free pro tools, cloud credits and dev services for verified students.' },
            { icon: Code2, title: 'VS Code', description: 'The go-to editor with extensions, themes and setups for every language.' },
            { icon: Trophy, title: 'LeetCode', description: 'Interview-style problems, contests and company-wise sheets.' },
            { icon: BarChart3, title: 'HackerRank', description: 'Domain tracks and certifications for fundamentals.' },
            { icon: Trophy, title: 'Codeforces', description: 'Algorithmic contests with a strong rating system.' },
            { icon: BookMarked, title: 'GeeksforGeeks', description: 'Article-rich explanations and topic-wise practice.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Career & profile',
          title: 'Build your presence',
          description: 'Platforms for showcasing your work and growing your network.',
          items: [
            { icon: Linkedin, title: 'LinkedIn', description: 'How to build a student LinkedIn that recruiters actually notice.' },
            { icon: Github, title: 'GitHub profile', description: 'Tips for a README and pinned repos that stand out.' },
            { icon: FileText, title: 'Portfolio sites', description: 'Easy portfolio builders and templates for students.' },
            { icon: Globe, title: 'Devpost', description: 'Find hackathons and showcase your project submissions.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Productivity & design',
          title: 'Productivity & design',
          description: 'Tools for notes, docs, design and presentations — most free for students.',
          items: [
            { icon: Boxes, title: 'Notion', description: 'All-in-one workspace for notes, trackers and second-brain setups.' },
            { icon: PenTool, title: 'Figma', description: 'Collaborative design and prototyping with the student pro plan.' },
            { icon: Image, title: 'Canva', description: 'Posters, presentations and social graphics in minutes.' },
            { icon: FileBox, title: 'Google Workspace', description: 'Docs, Sheets, Slides and Drive for student collaboration.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Utilities',
          title: 'Everyday utilities',
          description: 'Handy little helpers that save time during the week.',
          items: [
            { icon: Calculator, title: 'GPA calculator', description: 'Compute semester and cumulative GPA with a clean, friendly interface.' },
            { icon: Clock, title: 'Attendance calculator', description: 'See how many classes you can safely miss without falling below 75%.' },
            { icon: Calendar, title: 'CGPA goal planner', description: 'Plan the grades you need to hit a target CGPA by graduation.' },
            { icon: ScanLine, title: 'Timetable image OCR', description: 'Turn a photo of your timetable into structured, searchable data.' },
            { icon: Cloud, title: 'Storage finder', description: 'Quick links to student cloud storage and drive allocations.' },
            { icon: KeyRound, title: 'Password generator', description: 'Generate strong, memorable passwords for student accounts.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'References',
          title: 'Quick references',
          description: 'Cheat sheets and lookups you will reach for again and again.',
          items: [
            { icon: Code2, title: 'Code snippets', description: 'A personal stash of reusable snippets across languages.' },
            { icon: Palette, title: 'Color & design', description: 'A quick palette picker for projects and presentations.' },
            { icon: BookOpen, title: 'Command reference', description: 'Git, Linux and shell commands at a glance.' },
            { icon: Lightbulb, title: 'Idea pad', description: 'A scratchpad to capture ideas before they slip away.' },
          ],
        },
        {
          kind: 'stats',
          eyebrow: 'By the numbers',
          title: 'The toolkit in figures',
          description: 'Placeholder figures for what the toolkit will offer as it grows.',
          stats: [
            { value: '10+', label: 'Curated tools', icon: Wrench },
            { value: '6', label: 'Coding platforms', icon: Trophy },
            { value: '4', label: 'Design apps', icon: Palette },
            { value: '100%', label: 'Student-friendly', icon: Zap },
          ],
        },
      ]}
      closingCta={{
        title: 'Small tools, big time saved.',
        description: 'Working calculators and direct tool integrations will arrive in upcoming releases.',
        primary: { label: 'Browse resources', to: '/resources' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
