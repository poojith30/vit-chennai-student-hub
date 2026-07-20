import { Bookmark } from 'lucide-react';
import { useFavorites } from './useFavorites';

export default function BookmarkButton({ id }: { id: string }) {
  const { toggle, isFav } = useFavorites();
  const active = isFav(id);
  return (
    <button
      type="button"
      aria-label={active ? 'Remove bookmark' : 'Add bookmark'}
      aria-pressed={active}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(id);
      }}
      className={`flex h-8 w-8 items-center justify-center rounded-lg border transition-all duration-200 ${
        active
          ? 'border-brand-200 bg-brand-50 text-brand-600'
          : 'border-ink-200 bg-white/70 text-ink-400 hover:border-ink-300 hover:text-ink-700'
      }`}
    >
      <Bookmark className={`h-4 w-4 ${active ? 'fill-current' : ''}`} />
    </button>
  );
}
