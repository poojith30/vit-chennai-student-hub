export type Status = 'open' | 'upcoming' | 'closed';

const styles: Record<Status, string> = {
  open: 'border-accent-200 bg-accent-50 text-accent-700',
  upcoming: 'border-brand-200 bg-brand-50 text-brand-700',
  closed: 'border-ink-200 bg-ink-100 text-ink-500',
};

const dot: Record<Status, string> = {
  open: 'bg-accent-500',
  upcoming: 'bg-brand-500',
  closed: 'bg-ink-400',
};

const labels: Record<Status, string> = {
  open: 'Open',
  upcoming: 'Upcoming',
  closed: 'Closed',
};

export default function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${styles[status]}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dot[status]}`} />
      {labels[status]}
    </span>
  );
}
