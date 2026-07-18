import HeroSection from '../components/home/HeroSection';
import QuickNavSection from '../components/home/QuickNavSection';
import AnnouncementsSection from '../components/home/AnnouncementsSection';
import WhatsNewSection from '../components/home/WhatsNewSection';
import EventsSection from '../components/home/EventsSection';
import FeaturedResourcesSection from '../components/home/FeaturedResourcesSection';
import WhyUseSection from '../components/home/WhyUseSection';
import StatsSection from '../components/home/StatsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CtaSection from '../components/home/CtaSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickNavSection />
      <AnnouncementsSection />
      <WhatsNewSection />
      <EventsSection />
      <FeaturedResourcesSection />
      <WhyUseSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
