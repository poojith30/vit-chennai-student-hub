import { useEffect, useRef, useState } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS } from '../config/navigation';

type Result = { label: string; path: string; description: string };

export default function GlobalSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
    else setQuery('');
  }, [open]);

  const results: Result[] = NAV_ITEMS.filter((n) => n.path !== '/').map((n) => ({
    label: n.label,
    path: n.path,
    description: n.description,
  }));
  const filtered = query
    ? results.filter(
        (r) =>
          r.label.toLowerCase().includes(query.toLowerCase()) ||
          r.description.toLowerCase().includes(query.toLowerCase()),
      )
    : results;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="hidden h-9 items-center gap-2 rounded-full border border-ink-200 bg-white/70 px-3 text-[12px] text-ink-400 backdrop-blur transition hover:border-ink-300 hover:bg-white md:inline-flex"
      >
        <Search className="h-3.5 w-3.5" />
        <span>Search…</span>
        <kbd className="ml-2 rounded-md border border-ink-200 bg-white px-1.5 py-0.5 text-[10px] font-medium text-ink-400 shadow-soft">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-ink-950/50 px-4 pt-[12vh] backdrop-blur-md"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl overflow-hidden rounded-3xl glass shadow-lift"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-ink-100 px-4 py-3">
              <Search className="h-4 w-4 text-ink-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search pages, resources, tools…"
                className="flex-1 bg-transparent text-sm text-ink-900 outline-none placeholder:text-ink-400"
              />
              <button
                onClick={() => setOpen(false)}
                aria-label="Close search"
                className="flex h-7 w-7 items-center justify-center rounded-lg text-ink-400 transition hover:bg-ink-100 hover:text-ink-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <p className="px-3 py-6 text-center text-[13px] text-ink-500">
                  No results for “{query}”.
                </p>
              ) : (
                <ul className="grid gap-1">
                  {filtered.map((r) => (
                    <li key={r.path}>
                      <Link
                        to={r.path}
                        onClick={() => setOpen(false)}
                        className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition hover:bg-ink-100/70"
                      >
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink-900 text-white shadow-soft transition-transform group-hover:scale-105">
                          <Search className="h-3.5 w-3.5" />
                        </span>
                        <span className="flex flex-1 flex-col">
                          <span className="text-[13px] font-semibold text-ink-900">{r.label}</span>
                          <span className="text-[11px] text-ink-500">{r.description}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="border-t border-ink-100 px-4 py-2.5 text-[11px] text-ink-400">
              Press <kbd className="rounded-md border border-ink-200 bg-white px-1 py-0.5">Esc</kbd> to close
            </div>
          </div>
        </div>
      )}
    </>
  );
}
