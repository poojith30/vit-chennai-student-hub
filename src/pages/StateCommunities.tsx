import {
  Users, MapPin, PartyPopper, Mic, CalendarDays, Languages, HeartHandshake,
  Home, Globe, MessageCircle, Music, Sparkles, Utensils,
} from 'lucide-react';
import PageShell from '../components/PageShell';

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
          kind: 'grid',
          eyebrow: 'Communities',
          title: 'State-wise groups',
          description: 'A directory of state communities active on campus, each with its own rhythm.',
          items: [
            { icon: MapPin, title: 'North India', description: 'Delhi, UP, Punjab, Haryana, Rajasthan and more — connect with your region.' },
            { icon: MapPin, title: 'South India', description: 'Tamil Nadu, Karnataka, Kerala, Andhra & Telangana communities.' },
            { icon: MapPin, title: 'East & Northeast', description: 'West Bengal, Odisha, Bihar, Jharkhand and the Northeast communities.' },
            { icon: MapPin, title: 'West India', description: 'Maharashtra, Gujarat, Goa and Madhya Pradesh communities.' },
            { icon: MapPin, title: 'Central India', description: 'Chhattisgarh, MP and surrounding regions represented on campus.' },
            { icon: Globe, title: 'International', description: 'A space for international students to connect and share experiences.' },
          ],
        },
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
      closingCta={{
        title: 'Home away from home.',
        description: 'Community directories and festival calendars will arrive in upcoming releases.',
        primary: { label: 'Read senior advice', to: '/senior-corner' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
