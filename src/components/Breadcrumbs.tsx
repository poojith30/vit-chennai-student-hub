import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { NAV_ITEMS } from '../config/navigation';

type Crumb = { label: string; path?: string };

export default function Breadcrumbs() {
  const { pathname } = useLocation();
  if (pathname === '/') return null;

  const current = NAV_ITEMS.find((n) => n.path === pathname);
  const crumbs: Crumb[] = [{ label: 'Home', path: '/' }];
  if (current) crumbs.push({ label: current.label });

  return (
    <nav aria-label="Breadcrumb" className="section-shell -mt-6 mb-2">
      <ol className="flex flex-wrap items-center gap-1 text-[12px] font-medium text-ink-500">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={i} className="flex items-center gap-1">
              {i === 0 && <Home className="h-3.5 w-3.5" />}
              {c.path && !last ? (
                <Link to={c.path} className="transition-colors hover:text-brand-600">
                  {c.label}
                </Link>
              ) : (
                <span className={last ? 'text-ink-900' : ''}>{c.label}</span>
              )}
              {!last && <ChevronRight className="h-3.5 w-3.5 text-ink-300" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
