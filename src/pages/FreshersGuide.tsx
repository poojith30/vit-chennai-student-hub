import {
  Sparkles, Package, CreditCard, Compass, UtensilsCrossed,
  Users, BookOpen, Wifi, ShieldCheck, Lightbulb, Home, Heart,
  Wallet, AlertTriangle, CheckCircle2, Plane,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import Checklist, { type ChecklistEntry } from '../components/Checklist';

const packingList: ChecklistEntry[] = [
  { id: 'p1', label: 'Clothes for a week (Chennai is warm year-round)' },
  { id: 'p2', label: 'Comfortable walking shoes and a pair of flip-flops' },
  { id: 'p3', label: 'Umbrella and raincoat for monsoon season' },
  { id: 'p4', label: 'Toiletries and a basic first-aid kit' },
  { id: 'p5', label: 'Original documents + photocopies (ID, admission letter)' },
  { id: 'p6', label: 'Laptop, charger, and a universal adapter' },
  { id: 'p7', label: 'Power bank and a 6-foot extension cord' },
  { id: 'p8', label: 'Headphones and a USB drive' },
];

const hostelList: ChecklistEntry[] = [
  { id: 'h1', label: 'Bed sheets, pillow and a light blanket' },
  { id: 'h2', label: 'Mattress protector and a foldable mattress topper' },
  { id: 'h3', label: 'Curtains (check window size on arrival)' },
  { id: 'h4', label: 'A sturdy lock for your cupboard' },
  { id: 'h5', label: 'Desk organizer and a study lamp' },
  { id: 'h6', label: 'Reusable water bottle and basic cutlery' },
  { id: 'h7', label: 'Clothes drying rack or clips' },
  { id: 'h8', label: 'A small trash bin and liners' },
];

const firstWeek = [
  { phase: 'Day 1', icon: Plane, title: 'Arrive & check in', description: 'Reach campus, complete hostel check-in and collect your ID.' },
  { phase: 'Day 2', icon: Compass, title: 'Orientation', description: 'Campus tour, meet your batch and find your classes.' },
  { phase: 'Day 3', icon: BookOpen, title: 'FFCS registration', description: 'Register for courses and build your timetable.' },
  { phase: 'Day 4', icon: Users, title: 'Clubs & community', description: 'Browse club stalls and meet your state community.' },
  { phase: 'Day 5', icon: UtensilsCrossed, title: 'Find your food', description: 'Try every food court and pick your favorites.' },
  { phase: 'Day 6', icon: Wifi, title: 'Get connected', description: 'Set up Wi-Fi, email and student accounts.' },
  { phase: 'Day 7', icon: Heart, title: 'Settle in', description: 'Decorate your room, call home and breathe.' },
];

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
      ]}
      closing={
        <>
          <section>
            <SectionHeading
              eyebrow="Checklists"
              title="Expandable checklists"
              description="Tick items off as you pack and settle in — progress is saved in your browser."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <Checklist title="Packing checklist" items={packingList} />
              <Checklist title="Hostel essentials" items={hostelList} />
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="First week"
              title="First week timeline"
              description="A day-by-day walkthrough of your first seven days on campus."
            />
            <div className="relative">
              <div className="absolute left-[1.15rem] top-3 bottom-3 w-px bg-gradient-to-b from-brand-400 via-ink-200 to-transparent sm:left-[1.65rem]" />
              <ol className="space-y-5">
                {firstWeek.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <Reveal key={i} delay={i * 70} variant="scale">
                      <li className="relative grid grid-cols-[2.5rem_1fr] gap-5 sm:grid-cols-[3.5rem_1fr]">
                        <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-ink-200 bg-white text-brand-600 shadow-soft ring-4 ring-ink-50 sm:h-14 sm:w-14">
                          <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                        </span>
                        <div className="sheen-host group rounded-3xl glass-card p-6 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-600">
                              {s.phase}
                            </span>
                          </div>
                          <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink-900">{s.title}</h3>
                          <p className="mt-1.5 text-sm leading-relaxed text-ink-500">{s.description}</p>
                        </div>
                      </li>
                    </Reveal>
                  );
                })}
              </ol>
            </div>
          </section>
        </>
      }
      closingCta={{
        title: 'You have got this.',
        description: 'A complete, interactive freshers checklist will arrive in upcoming releases.',
        primary: { label: 'See the campus guide', to: '/campus-guide' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
