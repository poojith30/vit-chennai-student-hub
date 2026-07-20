import {
  Sparkles, Package, CreditCard, Compass, UtensilsCrossed,
  Users, CalendarDays, BookOpen, Wifi, ShieldCheck, Lightbulb, Home, Heart,
  BedDouble, Wallet, AlertTriangle, CheckCircle2, Plane, Backpack,
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
          title: 'Before coming to campus',
          description: 'The checklist that makes your first week smooth instead of stressful.',
          steps: [
            { phase: 'Step 1', icon: Package, title: 'What to pack', description: 'A practical packing list for Chennai’s weather and campus life — from essentials to nice-to-haves.' },
            { phase: 'Step 2', icon: CreditCard, title: 'Documents & fees', description: 'Everything you need for registration, ID verification and fee payment, in one list.' },
            { phase: 'Step 3', icon: Plane, title: 'Reaching campus', description: 'How to get to VIT Chennai from the airport, railway and bus stations with cost estimates.' },
            { phase: 'Step 4', icon: Home, title: 'Hostel check-in', description: 'What to expect on arrival day — room allocation, inventory and first-night essentials.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Checklists',
          title: 'Packing & hostel checklists',
          description: 'Ticked-off checklists so you arrive prepared and stress-free.',
          items: [
            { icon: Backpack, title: 'Packing checklist', description: 'Clothes, electronics, documents, toiletries and the things most freshers forget.' },
            { icon: BedDouble, title: 'Hostel checklist', description: 'Bedding, organizers, locks, extension cords and room comfort essentials.' },
            { icon: UtensilsCrossed, title: 'Kitchen & food', description: 'What to bring for late-night snacks and quick meals in the hostel.' },
            { icon: Wifi, title: 'Tech setup', description: 'Laptop, chargers, adapters, pen drive and the apps to install before you arrive.' },
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
            { icon: Heart, title: 'Mental health', description: 'Resources and peer support for the emotional side of starting college.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Life skills',
          title: 'Budget & common mistakes',
          description: 'The unglamorous essentials that keep your first year on track.',
          items: [
            { icon: Wallet, title: 'Budget guide', description: 'A realistic monthly budget for a fresher in Chennai, with categories and tips.' },
            { icon: AlertTriangle, title: 'Common mistakes', description: 'Things freshers often get wrong — and how to avoid them gracefully.' },
            { icon: Lightbulb, title: 'Must-know tips', description: 'Small, high-impact tips seniors wish they had known on day one.' },
            { icon: CheckCircle2, title: 'First-year checklist', description: 'A term-long checklist to keep your first year on track.' },
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
