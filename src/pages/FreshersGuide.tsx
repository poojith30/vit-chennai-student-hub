import {
  Sparkles, Package, CreditCard, MapPin, Compass, UtensilsCrossed,
  Users, CalendarDays, BookOpen, Wifi, ShieldCheck, Lightbulb, Home, Heart,
} from 'lucide-react';
import PageShell from '../components/PageShell';

export default function FreshersGuide() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Freshers Guide',
        title: 'Freshers Guide',
        subtitle:
          'Welcome to VIT Chennai. Everything you need for your first few weeks — from registration and hostels to making friends and finding your footing.',
        icon: Sparkles,
      }}
      sections={[
        {
          kind: 'timeline',
          eyebrow: 'Before you arrive',
          title: 'Get ready',
          description: 'The checklist that makes your first week smooth instead of stressful.',
          steps: [
            { phase: 'Step 1', icon: Package, title: 'What to pack', description: 'A practical packing list for Chennai’s weather and campus life — from essentials to nice-to-haves.' },
            { phase: 'Step 2', icon: CreditCard, title: 'Documents & fees', description: 'Everything you need for registration, ID verification and fee payment, in one list.' },
            { phase: 'Step 3', icon: MapPin, title: 'Reaching campus', description: 'How to get to VIT Chennai from the airport, railway and bus stations with cost estimates.' },
            { phase: 'Step 4', icon: Home, title: 'Hostel check-in', description: 'What to expect on arrival day — room allocation, inventory and first-night essentials.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'First week',
          title: 'Your first days',
          description: 'Settle in, find your bearings and meet your first people.',
          items: [
            { icon: Compass, title: 'Orientation checklist', description: 'A day-by-day guide to your first week on campus.' },
            { icon: UtensilsCrossed, title: 'Where to eat', description: 'Food courts, cafés and the best budget meals nearby.' },
            { icon: Users, title: 'Making friends', description: 'Clubs, communities and events to help you meet people.' },
            { icon: CalendarDays, title: 'First week events', description: 'Orientation events, inductions and icebreakers.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Settling in',
          title: 'Find your rhythm',
          description: 'Practical know-how for a confident start to student life.',
          items: [
            { icon: BookOpen, title: 'Understanding FFCS', description: 'A plain-language explainer for course registration and the FFCS portal.' },
            { icon: Wifi, title: 'Wi-Fi & accounts', description: 'How to get online and set up your student accounts step by step.' },
            { icon: ShieldCheck, title: 'Safety & support', description: 'Campus security, helplines and student support services.' },
            { icon: Lightbulb, title: 'Common mistakes', description: 'Things freshers often get wrong — and how to avoid them gracefully.' },
            { icon: Heart, title: 'Mental health', description: 'Resources and peer support for the emotional side of starting college.' },
          ],
        },
      ]}
      closingCta={{
        title: 'You have got this.',
        description: 'A complete, interactive freshers checklist will arrive in upcoming releases.',
        primary: { label: 'See the campus guide', to: '/campus-guide' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
