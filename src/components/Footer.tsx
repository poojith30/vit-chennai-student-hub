import { Link } from 'react-router-dom';
import { Github, Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';
import { NAV_ITEMS } from '../config/navigation';

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/10 bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute inset-0 bg-mesh-dark opacity-40" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60rem] -translate-x-1/2 rounded-full bg-brand-600/25 blur-3xl" />
      <div className="section-shell relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="group flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15 transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path d="M6 8 L12 18 L18 8" stroke="url(#fg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="18" r="1.6" fill="#10b981" />
                  <defs>
                    <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#5a8bff" />
                      <stop offset="1" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-bold text-white">VIT Chennai</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
                  Student Hub
                </span>
              </div>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              An unofficial student platform built by students, for students of VIT Chennai
              CSE &amp; CSE Specialization. Version 1 — Foundation.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Github, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-ink-400 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
                  aria-label="social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {chunk(NAV_ITEMS, 4).map((col, ci) => (
              <div key={ci}>
                <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink-500">
                  Explore {ci + 1}
                </h4>
                <ul className="mt-4 space-y-2.5">
                  {col.map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        className="group inline-flex items-center gap-1 text-[13px] text-ink-400 transition-colors duration-200 hover:text-white"
                      >
                        {item.label}
                        <ArrowUpRight className="h-3 w-3 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-[12px] text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} VIT Chennai Student Hub. Unofficial, student-run.</p>
          <p className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-400" />
            </span>
            V1 · Foundation release
          </p>
        </div>
      </div>
    </footer>
  );
}

function chunk<T>(arr: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}
