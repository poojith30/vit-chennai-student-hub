export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

const styles: Record<Difficulty, string> = {
  beginner: 'border-accent-200 bg-accent-50 text-accent-700',
  intermediate: 'border-brand-200 bg-brand-50 text-brand-700',
  advanced: 'border-amber-200 bg-amber-50 text-amber-700',
};

const labels: Record<Difficulty, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

export default function DifficultyBadge({ level }: { level: Difficulty }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${styles[level]}`}
    >
      {labels[level]}
    </span>
  );
}
