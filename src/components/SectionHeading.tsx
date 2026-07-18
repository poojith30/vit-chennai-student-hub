import type { ReactNode } from 'react';
import Reveal from './Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-600">
            <span className="h-1 w-6 rounded-full bg-gradient-to-r from-brand-500 to-accent-500" />
            {eyebrow}
          </span>
        )}
        <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink-900 sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-sm leading-relaxed text-ink-500 sm:text-base">{description}</p>
        )}
      </div>
      {children && <div className="flex flex-none items-center gap-2">{children}</div>}
    </Reveal>
  );
}
