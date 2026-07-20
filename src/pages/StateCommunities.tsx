import { useMemo, useState } from 'react';
import {
  Users, PartyPopper, Mic, CalendarDays, Languages, HeartHandshake,
  Home, MessageCircle, Music, Sparkles, Utensils, Star, ArrowUpRight,
  Github, Twitter, Instagram, Globe, UserPlus, Check,
} from 'lucide-react';
import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import SearchBar from '../components/SearchBar';
import EmptyState from '../components/EmptyState';

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

const socials = [Github, Twitter, Instagram, Globe];

export default function StateCommunities() {
  const [query, setQuery] = useState('');
  const [joined, setJoined] = useState<Record<string, boolean>>({});

  const filtered = useMemo(() => {
    if (!query) return states;
    const q = query.toLowerCase();
    return states.filter(
      (s) => s.name.toLowerCase().includes(q) || s.tagline.toLowerCase().includes(q),
    );
  }, [query]);

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
            description="Fifteen communities, each ready to grow. Search, join, and connect."
          />
          <div className="mb-6">
            <SearchBar
              value={query}
              onChange={setQuery}
              placeholder="Search by state or tagline…"
              className="sm:max-w-md"
            />
          </div>
          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {filtered.map((s, i) => {
                const isJoined = !!joined[s.name];
                return (
                  <Reveal key={s.name} delay={i * 40} variant="scale">
                    <div className="sheen-host group relative flex h-full flex-col overflow-hidden rounded-3xl glass-card p-5 transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-lift">
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
                      <div className="relative mt-4 flex items-center justify-between border-t border-ink-100 pt-4">
                        <button
                          type="button"
                          onClick={() => setJoined((j) => ({ ...j, [s.name]: !j[s.name] }))}
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-semibold transition-all duration-200 ${
                            isJoined
                              ? 'bg-accent-500 text-white'
                              : 'bg-ink-900 text-white hover:bg-ink-800'
                          }`}
                        >
                          {isJoined ? <Check className="h-3 w-3" /> : <UserPlus className="h-3 w-3" />}
                          {isJoined ? 'Joined' : 'Join'}
                        </button>
                        <div className="flex items-center gap-1">
                          {socials.map((Soc, si) => (
                            <span
                              key={si}
                              className="flex h-7 w-7 items-center justify-center rounded-lg border border-ink-200 bg-white/70 text-ink-400 transition hover:border-ink-300 hover:text-ink-700"
                            >
                              <Soc className="h-3.5 w-3.5" />
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <EmptyState
              title="No community found"
              description="Try a different search — all 15 communities are ready to grow."
              icon={Users}
            />
          )}
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
