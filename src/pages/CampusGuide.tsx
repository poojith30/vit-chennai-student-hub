import {
  Map, Building, Bus, UtensilsCrossed, Coffee, ShoppingCart, Stethoscope,
  BookOpen, Dumbbell, Wifi, Printer, Leaf, Compass, Camera,
} from 'lucide-react';
import PageShell from '../components/PageShell';

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
          title: 'Getting around',
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
          eyebrow: 'Food & essentials',
          title: 'Eat, shop, live',
          description: 'Food courts, stationery, medical and convenience spots worth knowing.',
          items: [
            { icon: UtensilsCrossed, title: 'Food courts', description: 'Every food court and café with timings and student reviews.' },
            { icon: Coffee, title: 'Cafés & hangouts', description: 'Quiet corners and popular hangout spots across campus.' },
            { icon: ShoppingCart, title: 'Stationery & stores', description: 'Where to find stationery, supplies and quick essentials.' },
            { icon: Stethoscope, title: 'Medical center', description: 'Health center location, timings and emergency contacts.' },
            { icon: Building, title: 'Hostel guide', description: 'Hostel blocks, wardens and rules at a glance.' },
            { icon: Bus, title: 'Transport desk', description: 'Bus pass info, routes and lost-and-found for campus transport.' },
          ],
        },
        {
          kind: 'features',
          eyebrow: 'Facilities',
          title: 'Study & wellness',
          description: 'Libraries, study spaces, gyms and green spaces for a balanced life.',
          items: [
            { icon: BookOpen, title: 'Library & study spaces', description: 'Library floors, silent zones and group study rooms with booking info.' },
            { icon: Dumbbell, title: 'Sports & gym', description: 'Sports complex, gym timings and how to access facilities.' },
            { icon: Wifi, title: 'Wi-Fi & IT help', description: 'Network setup, common issues and where to get IT help.' },
            { icon: Printer, title: 'Print & scan', description: 'Print stations, costs and locations across campus.' },
            { icon: Leaf, title: 'Green spaces', description: 'Gardens, lawns and quiet outdoor spots to unwind.' },
            { icon: Camera, title: 'Photo spots', description: 'Scenic spots on campus worth capturing for the gram.' },
          ],
        },
      ]}
      closingCta={{
        title: 'Campus, decoded.',
        description: 'An interactive map and searchable directory will arrive in upcoming releases.',
        primary: { label: 'See clubs & events', to: '/clubs-events' },
        secondary: { label: 'Share feedback', to: '/contact' },
      }}
    />
  );
}
