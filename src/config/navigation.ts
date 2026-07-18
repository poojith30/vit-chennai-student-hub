import {
  Home,
  GraduationCap,
  Code2,
  Briefcase,
  Map,
  Users,
  Award,
  CalendarDays,
  Wrench,
  Sparkles,
  BookOpen,
  Star,
  MessageSquare,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  label: string;
  path: string;
  icon: LucideIcon;
  description: string;
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: Home, description: 'Welcome to the hub' },
  { label: 'Academics', path: '/academics', icon: GraduationCap, description: 'Curriculum, timetables & results' },
  { label: 'Coding Hub', path: '/coding-hub', icon: Code2, description: 'DSA, contests & practice' },
  { label: 'Opportunities', path: '/opportunities', icon: Briefcase, description: 'Internships & placements' },
  { label: 'Campus Guide', path: '/campus-guide', icon: Map, description: 'Map, food & facilities' },
  { label: 'State Communities', path: '/state-communities', icon: Users, description: 'Find your people' },
  { label: 'Senior Corner', path: '/senior-corner', icon: Award, description: 'Advice from seniors' },
  { label: 'Clubs & Events', path: '/clubs-events', icon: CalendarDays, description: 'Everything happening on campus' },
  { label: 'Student Toolkit', path: '/student-toolkit', icon: Wrench, description: 'Tools to make life easier' },
  { label: 'Freshers Guide', path: '/freshers-guide', icon: Sparkles, description: 'Your first weeks at VIT' },
  { label: 'Resources', path: '/resources', icon: BookOpen, description: 'Notes, PDFs & references' },
  { label: 'Student Spotlight', path: '/student-spotlight', icon: Star, description: 'Celebrate achievements' },
  { label: 'Contact & Feedback', path: '/contact', icon: MessageSquare, description: 'Reach the team' },
];
