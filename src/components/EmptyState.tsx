import type { LucideIcon } from 'lucide-react';
import { Inbox } from 'lucide-react';

export default function EmptyState({
  title = 'Nothing here yet',
  description = 'Content for this section will arrive in a future release.',
  icon: Icon = Inbox,
  action,
}: {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-ink-200 bg-white/40 px-6 py-16 text-center backdrop-blur">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-100 text-ink-400">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">{title}</h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-500">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}
