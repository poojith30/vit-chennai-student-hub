import {
  Users, PartyPopper, Mic, CalendarDays, Languages, HeartHandshake,
  Home, MessageCircle, Music, Sparkles, Utensils, Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';

type StateCard = {
  name: string;
  tagline: string;
  accent: string;
  emoji: string;
};

const states: StateCard[] = [
  { name: 'Telangana', tagline: 'Biryani, festivals and a tight-knit crew', accent: 'from-brand-500 to-brand-700', emoji: 'TG' },
  { name: 'Andhra Pradesh', tagline: 'Coastal flavor and vibrant community', accent: 'from-accent-500 to-accent-700', emoji: 'AP' },
  { name: 'Tamil Nadu', tagline: 'Home state — culture, music and food', accent: 'from-ink-700 to-ink-900', emoji: 'TN' },
  { name: 'Karnataka', tagline: 'Tech hearts and coffee corners', accent: 'from-brand-500 to-accent-500', emoji: 'KA' },
  { name: 'Kerala', tagline: 'Backwaters, banter and Onam celebrations', accent: 'from-accent-500 to-cyan-500', emoji: 'KL' },
  { name: 'Maharashtra', tagline: 'Big-city energy and Marathi pride', accent: 'from-ink-700 to-brand-700', emoji: 'MH' },
  { name: 'Uttar Pradesh', tagline: 'Diverse, loud and warmly welcoming', accent: 'from-brand-600 to-ink-800', emoji: 'UP' },
  { name: 'Bihar', tagline: 'Heritage, hospitality and Chhath vibes', accent: 'from-accent-600 to-ink-800', emoji: 'BR' },
  { name: 'Rajasthan', tagline: 'Colors, culture and desert warmth', accent: 'from-brand-500 to-ink-700', emoji: 'RJ' },
  { name: 'Gujarat', tagline: 'Garba nights and sweet-spicy snacks', accent: 'from-accent-500 to-brand-700', emoji: 'GJ' },
  { name: 'Odisha', tagline: 'Temple towns and a growing community', accent: 'from-brand-600 to-accent-600', emoji: 'OD' },
  { name: 'West Bengal', tagline: 'Adda, art and Durga Puja grandeur', accent: 'from-ink-700 to-accent-700', emoji: 'WB' },
  { name: 'Punjab', tagline: 'Bhangra beats and big-hearted hosts', accent: 'from-accent-500 to-ink-700', emoji: 'PB' },
  { name: 'Delhi', tagline: 'Capital energy and street-food tales', accent: 'from-brand-500 to-ink-900', emoji: 'DL' },
  { name: 'International Students', tagline: 'A space for students from beyond India', accent: 'from-cyan-500 to-brand-600', emoji: 'IN' },
];

export default function StateCommunities() {
  return (
    <PageShell
      hero={{
        eyebrow: 'State Communities',
        title: 'State Communities',
        subtitle:
          'Find your people. Connect with students from your home state, discover regional events and feel at home away from home.',
        icon: Users,
      }}
      sections={[
        {
          kind: 'bento',
          eyebrow: 'Culture',
          title: 'Festivals & events',
          description: 'Regional festivals, cultural nights and community gatherings throughout the year.',
          featured: 0,
          items: [
            { icon: PartyPopper, title: 'Festival calendar', description: 'Onam, Pongal, Durga Puja, Lohri and more — every regional festival in one calendar.' },
            { icon: Mic, title: 'Cultural nights', description: 'Community-organized performances, food stalls and showcases.' },
            { icon: Music, title: 'Regional music & dance', description: 'Spotlights on regional art forms performed at campus events.' },
            { icon: CalendarDays, title: 'Meetups', description: 'Casual meet-and-greets for newcomers from each state.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Support',
          title: 'Settle in',
          description: 'Practical help from seniors who have been through it before.',
          items: [
            { icon: Languages, title: 'Language exchange', description: 'Find language partners and learn regional languages from peers.' },
            { icon: HeartHandshake, title: 'Mentorship', description: 'Connect with senior mentors from your home state for guidance.' },
            { icon: Home, title: 'Housing & travel', description: 'Tips on PGs, travel routes and hometown groups during breaks.' },
            { icon: Utensils, title: 'Regional food', description: 'Where to find authentic regional food in and around Chennai.' },
            { icon: MessageCircle, title: 'Community chat', description: 'A space for each community to stay connected and coordinate.' },
            { icon: Sparkles, title: 'Welcome kit', description: 'A first-week welcome kit curated by each state community.' },
          ],
        },
      ]}
      closing={
        <section>
          <SectionHeading
            eyebrow="Directory"
            title="State communities"
            description="Fifteen communities, each ready to grow. Tap a card to see what is coming."
          />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {states.map((s, i) => (
              <Reveal key={s.name} delay={i * 40} variant="scale">
                <Link
                  to="/state-communities"
                  onClick={(e) => e.preventDefault()}
                  className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-5 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <div className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${s.accent} opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40`} />
                  <div className="relative flex items-center justify-between">
                    <span className={`relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${s.accent} font-display text-sm font-bold text-white shadow-glow transition-transform duration-500 ease-out-expo group-hover:scale-110 group-hover:rotate-3`}>
                      {s.emoji}
                      <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/15" />
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-600" />
                  </div>
                  <h3 className="relative mt-4 font-display text-[15px] font-semibold tracking-tight text-ink-900">
                    {s.name}
                  </h3>
                  <p className="relative mt-1 text-[12px] leading-relaxed text-ink-500">{s.tagline}</p>
                  <div className="relative mt-4 flex items-center gap-1.5 text-[11px] font-medium text-ink-400">
                    <Star className="h-3 w-3 text-accent-500" />
                    <span>Ready for expansion</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      }
      closingCta={{
        title: 'Home away from home.',
        description: 'Community directories and festival calendars will arrive in upcoming releases.',
        primary: { label: 'Read senior advice', to: '/senior-corner' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
