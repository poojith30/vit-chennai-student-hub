import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import PageHero from './PageHero';
import SectionHeading from './SectionHeading';
import FeatureGrid from './sections/FeatureGrid';
import BentoGrid from './sections/BentoGrid';
import FeatureRow from './sections/FeatureRow';
import TimelineSection from './sections/TimelineSection';
import SplitSection from './sections/SplitSection';
import StatsSection from './sections/StatsSection';
import CtaBanner from './CtaBanner';
import type { Section } from './sections/types';

export type { Section } from './sections/types';

type PageShellProps = {
  hero: {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    eyebrow?: string;
  };
  sections: Section[];
  closing?: ReactNode;
  closingCta?: {
    title?: string;
    description?: string;
    primary?: { label: string; to: string };
    secondary?: { label: string; to: string };
  };
};

export default function PageShell({ hero, sections, closing, closingCta }: PageShellProps) {
  return (
    <>
      <PageHero {...hero} />
      <div className="section-shell space-y-20 pb-10">
        {sections.map((section, si) => (
          <SectionRenderer key={si} section={section} />
        ))}
        {closing}
        {closingCta !== null && !closing && (
          <CtaBanner
            title={closingCta?.title}
            description={closingCta?.description}
            primary={closingCta?.primary}
            secondary={closingCta?.secondary}
          />
        )}
      </div>
    </>
  );
}

function SectionRenderer({ section }: { section: Section }) {
  const kind = section.kind ?? 'grid';
  switch (kind) {
    case 'bento':
      return (
        <section>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <BentoGrid items={section.items ?? []} featured={section.featured} />
        </section>
      );
    case 'features':
      return (
        <section>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <FeatureRow items={section.items ?? []} />
        </section>
      );
    case 'timeline':
      return <TimelineSection section={section} />;
    case 'split':
      return <SplitSection section={section} />;
    case 'stats':
      return <StatsSection section={section} />;
    case 'grid':
    default:
      return (
        <section>
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
          <FeatureGrid items={section.items ?? []} />
        </section>
      );
  }
}
