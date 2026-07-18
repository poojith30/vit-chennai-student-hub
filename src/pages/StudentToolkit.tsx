import {
  Wrench, Calculator, Clock, Calendar, FileText, ScanLine, Cloud,
  KeyRound, Code2, Palette, BookOpen, Globe, Lightbulb, Zap,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function StudentToolkit() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Student Toolkit',
        title: 'Student Toolkit',
        subtitle:
          'A growing collection of tools and shortcuts to make student life a little easier — calculators, converters, planners and quick references.',
        icon: Wrench,
      }}
      sections={[
        {
          kind: 'grid',
          eyebrow: 'Calculators',
          title: 'Quick calculators',
          description: 'Small, focused tools for the numbers students care about.',
          items: [
            { icon: Calculator, title: 'GPA calculator', description: 'Compute semester and cumulative GPA with a clean, friendly interface.' },
            { icon: Clock, title: 'Attendance calculator', description: 'See how many classes you can safely miss without falling below 75%.' },
            { icon: Calendar, title: 'CGPA goal planner', description: 'Plan the grades you need to hit a target CGPA by graduation.' },
            { icon: Zap, title: 'Quick converter', description: 'Convert between units, formats and timezones in a single keystroke.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Utilities',
          title: 'Everyday utilities',
          description: 'Handy little helpers that save time during the week.',
          items: [
            { icon: FileText, title: 'Resume reviewer', description: 'A checklist-driven review for your resume before you send it out.' },
            { icon: ScanLine, title: 'Timetable image OCR', description: 'Turn a photo of your timetable into structured, searchable data.' },
            { icon: Cloud, title: 'Storage finder', description: 'Quick links to student cloud storage and drive allocations.' },
            { icon: KeyRound, title: 'Password generator', description: 'Generate strong, memorable passwords for student accounts.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'References',
          title: 'Quick references',
          description: 'Cheat sheets and lookups you will reach for again and again.',
          items: [
            { icon: Code2, title: 'Code snippets', description: 'A personal stash of reusable snippets across languages.' },
            { icon: Palette, title: 'Color & design', description: 'A quick palette picker for projects and presentations.' },
            { icon: BookOpen, title: 'Command reference', description: 'Git, Linux and shell commands at a glance.' },
            { icon: Globe, title: 'Useful links', description: 'A curated directory of student-useful websites and tools.' },
            { icon: Lightbulb, title: 'Idea pad', description: 'A scratchpad to capture ideas before they slip away.' },
          ],
        },
      ]}
      closingCta={{
        title: 'Small tools, big time saved.',
        description: 'Working calculators and utilities will arrive in upcoming releases.',
        primary: { label: 'Browse resources', to: '/resources' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
