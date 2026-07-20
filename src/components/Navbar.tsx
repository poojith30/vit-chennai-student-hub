import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Command, ArrowRight } from 'lucide-react';
import { NAV_ITEMS } from '../config/navigation';
import GlobalSearch from './GlobalSearch';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const primary = NAV_ITEMS.slice(0, 6);
  const overflow = NAV_ITEMS.slice(6);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled ? 'py-2.5' : 'py-4'
        }`}
      >
        <div className="section-shell">
          <div
            className={`flex items-center justify-between rounded-2xl px-3 py-2 transition-all duration-500 ease-out-expo sm:px-4 ${
              scrolled
                ? 'glass shadow-soft'
                : 'border border-transparent bg-transparent'
            }`}
          >
            {/* Logo */}
            <Link to="/" className="group flex items-center gap-2.5 pl-1">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-ink-900 text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                  <path d="M6 8 L12 18 L18 8" stroke="url(#lg)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="12" cy="18" r="1.6" fill="#10b981" />
                  <defs>
                    <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#5a8bff" />
                      <stop offset="1" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[15px] font-bold tracking-tight text-ink-900">
                  VIT Chennai
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-ink-500">
                  Student Hub
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-0.5 lg:flex">
              {primary.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-200 ease-out-expo ${
                    isActive(item.path)
                      ? 'text-ink-900'
                      : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  {isActive(item.path) && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-ink-100/80 shadow-inner-soft" />
                  )}
                  {item.label}
                </Link>
              ))}

              {/* Mega menu */}
              <div className="group relative">
                <button
                  className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-[13px] font-medium transition-all duration-200 ${
                    overflow.some((i) => isActive(i.path))
                      ? 'text-ink-900'
                      : 'text-ink-500 hover:text-ink-900'
                  }`}
                >
                  More
                  <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 mt-2 w-[30rem] -translate-x-1/2 translate-y-2 rounded-3xl glass p-3 opacity-0 shadow-lift transition-all duration-300 ease-out-expo group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="grid grid-cols-2 gap-1">
                    {overflow.map((item) => {
                      const Icon = item.icon;
                      const active = isActive(item.path);
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className={`group/item flex items-start gap-3 rounded-2xl p-3 transition-all duration-200 ${
                            active ? 'bg-ink-100' : 'hover:bg-ink-100/70'
                          }`}
                        >
                          <span className={`flex h-9 w-9 flex-none items-center justify-center rounded-xl transition-all duration-200 group-hover/item:scale-105 ${
                            active
                              ? 'bg-ink-900 text-white shadow-glow'
                              : 'bg-white text-brand-600 shadow-soft'
                          }`}>
                            <Icon className="h-4 w-4" />
                          </span>
                          <span className="flex flex-col">
                            <span className="text-[13px] font-semibold text-ink-900">{item.label}</span>
                            <span className="text-[11px] leading-snug text-ink-500">{item.description}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </nav>

            {/* CTA + search + mobile toggle */}
            <div className="flex items-center gap-2">
              <GlobalSearch />
              <Link to="/contact" className="hidden btn-primary sm:inline-flex">
                Get in touch
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white/70 text-ink-800 backdrop-blur transition-all duration-200 hover:bg-white active:scale-95 lg:hidden"
              >
                <span className="relative flex h-5 w-5 items-center justify-center">
                  {mobileOpen ? (
                    <X className="h-5 w-5 animate-fade-in" />
                  ) : (
                    <Menu className="h-5 w-5 animate-fade-in" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden ${mobileOpen ? '' : 'pointer-events-none'}`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/50 backdrop-blur-md transition-opacity duration-400 ease-out-expo ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[88%] max-w-sm overflow-y-auto bg-white px-5 pb-10 pt-24 shadow-2xl transition-transform duration-500 ease-out-expo ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="mb-5 flex items-center gap-2 rounded-2xl border border-ink-200 bg-ink-50 px-3 py-2 text-[12px] text-ink-500">
            <Command className="h-3.5 w-3.5" />
            <span>Sections</span>
            <span className="ml-auto rounded-md bg-white px-1.5 py-0.5 text-[10px] font-medium text-ink-400 shadow-soft">
              {NAV_ITEMS.length - 1}
            </span>
          </div>
          <nav className="grid gap-1">
            {NAV_ITEMS.filter((n) => n.path !== '/').map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`group flex items-center gap-3 rounded-2xl px-3 py-3 transition-all duration-200 ${
                    active ? 'bg-ink-900 text-white shadow-glow' : 'hover:bg-ink-50'
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${
                      active ? 'bg-white/10 text-white' : 'bg-ink-100 text-ink-700'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-1 flex-col">
                    <span className={`text-sm font-semibold ${active ? 'text-white' : 'text-ink-900'}`}>
                      {item.label}
                    </span>
                    <span className={`text-[11px] ${active ? 'text-ink-300' : 'text-ink-500'}`}>
                      {item.description}
                    </span>
                  </span>
                  <ArrowRight className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${active ? 'text-white' : 'text-ink-300'}`} />
                </Link>
              );
            })}
          </nav>
          <Link to="/contact" className="btn-primary mt-6 w-full">
            Get in touch
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <p className="mt-6 text-center text-[11px] text-ink-400">
            V1 · Foundation release · Unofficial
          </p>
        </div>
      </div>
    </>
  );
}
