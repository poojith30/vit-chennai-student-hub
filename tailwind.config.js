/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      colors: {
        ink: {
          50: '#f7f8fa',
          100: '#eef0f4',
          200: '#dde1e9',
          300: '#c2c8d4',
          400: '#9aa3b2',
          500: '#6b7585',
          600: '#4a5260',
          700: '#363c47',
          800: '#23272f',
          900: '#15181d',
          950: '#0b0d10',
        },
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#bcd2ff',
          300: '#8eb3ff',
          400: '#5a8bff',
          500: '#3563ff',
          600: '#1f44f5',
          700: '#1733d6',
          800: '#192da8',
          900: '#1a2b85',
          950: '#131b4f',
        },
        accent: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.75rem',
        '5xl': '2.25rem',
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,18,25,0.04), 0 4px 16px rgba(15,18,25,0.06)',
        'card': '0 1px 2px rgba(15,18,25,0.05), 0 12px 32px -8px rgba(15,18,25,0.12)',
        'lift': '0 1px 2px rgba(15,18,25,0.06), 0 24px 48px -12px rgba(15,18,25,0.18)',
        'glow': '0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px -20px rgba(53,99,255,0.45)',
        'glow-brand': '0 8px 30px -8px rgba(53,99,255,0.5)',
        'glow-accent': '0 8px 30px -8px rgba(16,185,129,0.45)',
        'inner-soft': 'inset 0 1px 0 0 rgba(255,255,255,0.6), inset 0 0 0 1px rgba(15,18,25,0.03)',
      },
      backgroundImage: {
        'grid-light':
          'linear-gradient(to right, rgba(15,18,25,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,18,25,0.04) 1px, transparent 1px)',
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,255,255,0.7), transparent 70%)',
        'mesh-light':
          'radial-gradient(at 20% 20%, rgba(90,139,255,0.18) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(52,211,153,0.16) 0px, transparent 50%), radial-gradient(at 70% 80%, rgba(34,211,238,0.12) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(at 20% 20%, rgba(53,99,255,0.35) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(16,185,129,0.28) 0px, transparent 50%), radial-gradient(at 70% 80%, rgba(34,211,238,0.22) 0px, transparent 50%)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        aurora: {
          '0%,100%': { transform: 'translate(0,0) scale(1)' },
          '33%': { transform: 'translate(4%, -3%) scale(1.05)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.97)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.8)', opacity: '0.6' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'rise': {
          '0%': { opacity: '0', transform: 'translateY(24px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'sheen': {
          '0%': { transform: 'translateX(-120%) skewX(-12deg)' },
          '100%': { transform: 'translateX(220%) skewX(-12deg)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'aurora': 'aurora 18s ease-in-out infinite',
        'spin-slow': 'spin-slow 1.4s linear infinite',
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.16,1,0.3,1) infinite',
        'gradient-pan': 'gradient-pan 8s ease-in-out infinite',
        'rise': 'rise 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'sheen': 'sheen 1.2s ease-out',
        'marquee': 'marquee 28s linear infinite',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
