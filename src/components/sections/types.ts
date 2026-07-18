import type { LucideIcon } from 'lucide-react';

export type FeatureItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
};

export type Section = {
  id?: string;
  kind?: 'grid' | 'bento' | 'features' | 'timeline' | 'split' | 'stats';
  eyebrow?: string;
  title: string;
  description?: string;
  items?: FeatureItem[];
  /** stats */
  stats?: { value: string; label: string; icon?: LucideIcon }[];
  /** split */
  split?: {
    icon: LucideIcon;
    title: string;
    description: string;
    bullets?: string[];
  };
  /** timeline */
  steps?: { icon: LucideIcon; title: string; description: string; phase: string }[];
  /** bento layout hints (optional). If omitted, first item is featured. */
  featured?: number;
};
