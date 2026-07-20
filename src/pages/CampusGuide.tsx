import {
  Map, Bus, UtensilsCrossed, Coffee, ShoppingCart, Stethoscope,
  Dumbbell, Printer, Leaf, Compass, Camera,
  BedDouble, Route, Car, Lightbulb, MapPin, ShoppingBag, Clock,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import FaqAccordion from '../components/FaqAccordion';

const hostels = [
  { name: 'Block A — Boys', type: 'Non-AC', accent: 'from-brand-500 to-brand-700' },
  { name: 'Block B — Boys', type: 'AC', accent: 'from-accent-500 to-accent-700' },
  { name: 'Block C — Girls', type: 'Non-AC', accent: 'from-ink-700 to-ink-900' },
  { name: 'Block D — Girls', type: 'AC', accent: 'from-brand-500 to-accent-500' },
];

const cafeterias = [
  { name: 'Main Food Court', specialty: 'All cuisines', hours: '7 AM – 10 PM', accent: 'from-brand-500 to-brand-700' },
  { name: 'Coffee Corner', specialty: 'Café & snacks', hours: '8 AM – 8 PM', accent: 'from-accent-500 to-accent-700' },
  { name: 'Quick Bites', specialty: 'Fast food', hours: '9 AM – 11 PM', accent: 'from-ink-700 to-ink-900' },
  { name: 'Healthy Hub', specialty: 'Salads & juices', hours: '8 AM – 9 PM', accent: 'from-accent-500 to-cyan-500' },
];

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
        <>
          <section>
            <SectionHeading
              eyebrow="Navigation"
              title="Interactive campus map"
              description="A placeholder for the interactive, searchable map coming in a future release."
            />
            <Reveal variant="scale">
              <div className="relative overflow-hidden rounded-4xl border border-ink-200/70 bg-ink-50">
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(to right, #0b0d10 1px, transparent 1px), linear-gradient(to bottom, #0b0d10 1px, transparent 1px)',
                    backgroundSize: '48px 48px',
                  }}
                />
                <div className="relative flex min-h-[22rem] flex-col items-center justify-center gap-4 p-8 text-center">
                  <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-900 text-white shadow-glow">
                    <Compass className="h-8 w-8 animate-spin-slow" />
                    <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
                  </span>
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink-900">
                    Interactive map coming soon
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-ink-500">
                    A searchable, zoomable campus map with points of interest will replace this placeholder in an upcoming release.
                  </p>
                  <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
                    {['Main Block', 'Library', 'Food Court', 'Hostels', 'Sports'].map((p) => (
                      <span key={p} className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-white/70 px-3 py-1 text-[11px] font-medium text-ink-500 backdrop-blur">
                        <MapPin className="h-3 w-3 text-brand-500" />
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </section>

          <section>
            <SectionHeading
              eyebrow="Stay"
              title="Hostel quick navigation"
              description="Jump to your hostel block — details and rules open in a future release."
            />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {hostels.map((h, i) => (
                <Reveal key={h.name} delay={i * 50} variant="scale">
                  <button
                    type="button"
                    className="sheen-host group flex w-full flex-col items-start gap-3 rounded-3xl glass-card p-5 text-left transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift"
                  >
                    <span className={`relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${h.accent} text-white shadow-glow transition-transform duration-500 group-hover:scale-110`}>
                      <BedDouble className="h-5 w-5" />
                      <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/15" />
                    </span>
                    <div>
                      <div className="font-display text-[14px] font-semibold tracking-tight text-ink-900">{h.name}</div>
                      <div className="mt-0.5 text-[12px] text-ink-500">{h.type}</div>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Eat"
              title="Cafeteria cards"
              description="Quick info on where to eat, with timings and specialties."
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {cafeterias.map((c, i) => (
                <Reveal key={c.name} delay={i * 50} variant="scale">
                  <article className="sheen-host group relative h-full overflow-hidden rounded-3xl glass-card p-5 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
                    <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${c.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
                    <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-500 group-hover:scale-110">
                      <UtensilsCrossed className="h-5 w-5" />
                    </span>
                    <h3 className="relative mt-4 font-display text-[15px] font-semibold tracking-tight text-ink-900">{c.name}</h3>
                    <p className="relative mt-1 text-[12px] text-ink-500">{c.specialty}</p>
                    <p className="relative mt-3 inline-flex items-center gap-1.5 text-[11px] font-medium text-ink-400">
                      <Clock className="h-3 w-3" />
                      {c.hours}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading
              eyebrow="Help"
              title="Frequently asked questions"
              description="Quick answers to the questions students ask most about campus life."
            />
            <FaqAccordion items={faqs} columns={2} />
          </section>
        </>
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
