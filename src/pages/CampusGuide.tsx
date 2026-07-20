import {
  Map, Building, Bus, UtensilsCrossed, Coffee, ShoppingCart, Stethoscope,
  BookOpen, Dumbbell, Wifi, Printer, Leaf, Compass, Camera,
  HelpCircle, BedDouble, Route, Car, ShoppingBag, Lightbulb,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

const faqs = [
  { q: 'What time do the gates close?', a: 'Placeholder answer — campus gate timings will be added in a future release.' },
  { q: 'How do I get a bus pass?', a: 'Placeholder answer — transport desk details will be added soon.' },
  { q: 'Where is the medical center?', a: 'Placeholder answer — exact location and timings will arrive shortly.' },
  { q: 'Are there ATMs on campus?', a: 'Placeholder answer — ATM locations will be listed in the next update.' },
  { q: 'Can I stay in the library after hours?', a: 'Placeholder answer — library timings and zones will be documented soon.' },
  { q: 'How do I report a lost item?', a: 'Placeholder answer — lost-and-found process will be added here.' },
];

export default function CampusGuide() {
  return (
    <PageShell
      hero={{
        eyebrow: 'Campus Guide',
        title: 'Campus Guide',
        subtitle:
          'Find your way around VIT Chennai — blocks, food courts, hostels, transport and the little things that make campus life easier.',
        icon: Map,
      }}
      sections={[
        {
          kind: 'split',
          eyebrow: 'Navigation',
          title: 'Campus map',
          description: 'An interactive, searchable guide to every block, lab and facility on campus.',
          split: {
            icon: Compass,
            title: 'A campus you can actually navigate',
            description: 'Searchable blocks, an interactive map and transport info — designed so you never feel lost in your first week.',
            bullets: [
              'Searchable directory of academic blocks, labs and faculty cabins',
              'Interactive campus map with searchable points of interest',
              'Bus routes, timings and shuttle stops in and around campus',
              'Accessibility notes and shortcuts between buildings',
            ],
          },
        },
        {
          kind: 'grid',
          eyebrow: 'Stay',
          title: 'Hostel guide',
          description: 'Everything you need to know about hostel life at VIT Chennai.',
          items: [
            { icon: BedDouble, title: 'Hostel blocks', description: 'A directory of hostel blocks for men and women with capacity and wardens.' },
            { icon: Building, title: 'Room types', description: 'AC, non-AC, single and shared room options with approximate costs.' },
            { icon: BookOpen, title: 'Hostel rules', description: 'Timings, visitors policy and do-and-dont rules at a glance.' },
            { icon: Wifi, title: 'Hostel Wi-Fi', description: 'How to connect, data limits and troubleshooting tips.' },
          ],
        },
        {
          kind: 'grid',
          eyebrow: 'Food & essentials',
          title: 'Eat, shop, live',
          description: 'Food courts, cafés, stationery and convenience spots worth knowing.',
          items: [
            { icon: UtensilsCrossed, title: 'Food courts', description: 'Every food court and café with timings and student reviews.' },
            { icon: Coffee, title: 'Cafés & hangouts', description: 'Quiet corners and popular hangout spots across campus.' },
            { icon: ShoppingCart, title: 'Stationery & stores', description: 'Where to find stationery, supplies and quick essentials.' },
            { icon: Stethoscope, title: 'Medical center', description: 'Health center location, timings and emergency contacts.' },
            { icon: ShoppingBag, title: 'Nearby shopping', description: 'Nearby malls, markets and stores for everyday needs.' },
            { icon: Bus, title: 'Transport desk', description: 'Bus pass info, routes and lost-and-found for campus transport.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Facilities',
          title: 'Sports & wellness',
          description: 'Sports, gyms and green spaces for a balanced life.',
          items: [
            { icon: Dumbbell, title: 'Sports facilities', description: 'Courts, fields and the sports complex with timings and booking info.' },
            { icon: Leaf, title: 'Green spaces', description: 'Gardens, lawns and quiet outdoor spots to unwind.' },
            { icon: Printer, title: 'Print & scan', description: 'Print stations, costs and locations across campus.' },
            { icon: Camera, title: 'Photo spots', description: 'Scenic spots on campus worth capturing for the gram.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Getting around',
          title: 'Transportation',
          description: 'How to get to and around VIT Chennai.',
          items: [
            { icon: Car, title: 'Reaching campus', description: 'How to get to VIT Chennai from the airport, railway and bus stations.' },
            { icon: Route, title: 'Bus routes', description: 'College bus routes with stops and approximate timings.' },
            { icon: Bus, title: 'Public transport', description: 'Nearby MTC and metro options for getting around the city.' },
            { icon: Lightbulb, title: 'Travel tips', description: 'Best times to travel and common routes students use.' },
          ],
        },
      ]}
      closing={
        <section>
          <SectionHeading
            eyebrow="Help"
            title="Frequently asked questions"
            description="Quick answers to the questions students ask most about campus life."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <details className="group rounded-3xl glass-card p-5 transition-all duration-300 hover:shadow-card">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow">
                        <HelpCircle className="h-4 w-4" />
                      </span>
                      <span className="font-display text-[15px] font-semibold tracking-tight text-ink-900">
                        {f.q}
                      </span>
                    </span>
                    <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full border border-ink-200 text-ink-400 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pl-12 text-[13px] leading-relaxed text-ink-500">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      }
      closingCta={{
        title: 'Campus, decoded.',
        description: 'An interactive map and searchable directory will arrive in upcoming releases.',
        primary: { label: 'See clubs & events', to: '/clubs-events' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
