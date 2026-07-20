import {
  Award, Compass, BookOpen, Briefcase, Lightbulb, Quote, Star,
  GraduationCap, Users, Target, Coffee, FileText, PenLine, MessageSquare,
  FolderGit2, Rocket, Code2, Brain,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function SeniorCorner() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Senior Corner',
        title: 'Senior Corner',
        subtitle:
          'Hard-earned advice, reflections and stories from seniors who have walked the path before you — across academics, placements and campus life.',
        icon: Award,
      }}
      sections={[
        {
          kind: 'features',
          eyebrow: 'Experiences',
          title: 'Placement & internship stories',
          description: 'Real journeys from seniors who have been through placement and internship seasons.',
          items: [
            { icon: Briefcase, title: 'Placement experiences', description: 'Company-wise breakdowns of placement rounds, questions and offers.' },
            { icon: GraduationCap, title: 'Internship stories', description: 'How seniors landed and navigated their internships, with takeaways.' },
            { icon: Quote, title: 'Interview deep-dives', description: 'Detailed interview experiences with topics, rounds and prep notes.' },
            { icon: Star, title: 'Offer reflections', description: 'Honest takes on offers, negotiations and choosing between roles.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Career prep',
          title: 'Resume & interview prep',
          description: 'Practical resources to get you placement-ready, one step at a time.',
          items: [
            { icon: FileText, title: 'Resume tips', description: 'Structure, bullet points and common mistakes — with senior-approved examples.' },
            { icon: PenLine, title: 'Resume templates', description: 'Clean, ATS-friendly templates ready to customize for your profile.' },
            { icon: MessageSquare, title: 'Mock interviews', description: 'How to run mock interviews with peers and what to focus on.' },
            { icon: Brain, title: 'Interview preparation', description: 'Topic checklists for DSA, core CS, projects and HR rounds.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Academics',
          title: 'Subject guidance',
          description: 'Seniors on the subjects that trip students up most.',
          items: [
            { icon: BookOpen, title: 'Tough subject guides', description: 'How to approach the subjects students find hardest, semester by semester.' },
            { icon: Compass, title: 'Specialization advice', description: 'How seniors chose between AI, Data Science, Cyber Security and more.' },
            { icon: Target, title: 'Exam strategy', description: 'How to prepare for CATs and FATs without burning out.' },
            { icon: Coffee, title: 'Study routines', description: 'Real study routines and schedules that worked for seniors.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Build',
          title: 'Project ideas',
          description: 'Inspiration and guidance for projects that actually stand out.',
          items: [
            { icon: FolderGit2, title: 'Project ideas', description: 'Difficulty-tagged project ideas across web, ML, systems and more.' },
            { icon: Code2, title: 'Tech stack picks', description: 'Seniors on the stacks they used and would choose again.' },
            { icon: Rocket, title: 'Showcase guide', description: 'How to present projects on GitHub and in your resume.' },
            { icon: Lightbulb, title: 'Open source starts', description: 'How seniors made their first open-source contributions.' },
          ],
        },
        {
          kind: 'split',
          eyebrow: 'Mentorship',
          title: 'Connect with mentors',
          description: 'A structured way to reach out to seniors for guidance.',
          split: {
            icon: Users,
            title: 'Guidance, one conversation away',
            description: 'A lightweight mentorship system to help you find the right senior to talk to.',
            bullets: [
              'Browse seniors by specialization, year and area of expertise',
              'Weekly drop-in office hours where seniors answer questions openly',
              'Past Ask-Me-Anything sessions, organized by topic',
              'A safe, student-run space — no pressure, no judgment',
            ],
          },
        },
      ]}
      closingCta={{
        title: 'Wisdom, passed forward.',
        description: 'A mentor directory and AMA archive will arrive in upcoming releases.',
        primary: { label: 'See student spotlight', to: '/student-spotlight' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
