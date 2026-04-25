/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'Tajawal', 'sans-serif'],
        tajawal: ['Tajawal', 'Cairo', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delay': 'float 10s ease-in-out 2s infinite reverse',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'pulse-wa': 'pulseWa 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-20px)' } },
        fadeUp: { from: { opacity: '0', transform: 'translateY(28px)' }, to: { opacity: '1', transform: 'translateY(0)' } },
        pulseWa: {
          '0%,100%': { boxShadow: '0 4px 20px rgba(37,211,102,0.45)' },
          '50%': { boxShadow: '0 4px 36px rgba(37,211,102,0.75)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(31,38,135,0.10)',
        'card': '0 4px 24px rgba(13,110,253,0.10)',
        'card-hover': '0 16px 48px rgba(13,110,253,0.18)',
        'cta': '0 8px 30px rgba(13,110,253,0.35)',
      },
      backgroundImage: {
        'hero-mesh': 'radial-gradient(at 80% 20%, #dbeafe 0%, transparent 60%), radial-gradient(at 10% 80%, #dcfce7 0%, transparent 60%), radial-gradient(at 50% 50%, #eff6ff 0%, transparent 80%)',
        'footer-dark': 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)',
      },
    },
  },
  plugins: [],
}