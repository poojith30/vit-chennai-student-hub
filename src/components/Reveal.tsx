import { useEffect, useRef, type ReactNode } from 'react';

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
  variant?: 'up' | 'scale';
};

export default function Reveal({
  children,
  className = '',
  delay = 0,
  as = 'div',
  variant = 'up',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as any;
  const base = variant === 'scale' ? 'reveal-scale' : 'reveal';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.transitionDelay = `${delay}ms`;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as any} className={`${base} ${className}`}>
      {children}
    </Tag>
  );
}
