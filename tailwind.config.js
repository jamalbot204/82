/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./panels/**/*.{js,ts,jsx,tsx}",
    "./modals/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
  ],
  darkMode: ['selector', '.theme-dark'],
  theme: {
    extend: {
      colors: {
        aurora: {
          bg: 'var(--aurora-bg)',
          surface: 'var(--aurora-surface)',
          'surface-hover': 'var(--aurora-surface-hover)',
          border: 'var(--aurora-border)',
          glow: 'var(--aurora-glow)',
          textPrimary: 'var(--aurora-text-primary)',
          textSecondary: 'var(--aurora-text-secondary)',
          accentPrimary: 'var(--aurora-accent-primary)',
          accentHover: 'var(--aurora-accent-hover)',
          accentSecondary: 'var(--aurora-accent-secondary)',
          accentDanger: 'var(--aurora-accent-danger)',
          codeBg: 'var(--aurora-code-bg)',
          markdownRed: 'var(--aurora-markdown-red)',
          markdownBlue: 'var(--aurora-markdown-blue)',
          textOnAccent: 'var(--aurora-text-on-accent)',
          textOnSurface: 'var(--aurora-text-on-surface)',
          inputBg: 'var(--aurora-input-bg)',
          msgUserBg: 'var(--aurora-msg-user-bg)',
          msgAiBg: 'var(--aurora-msg-ai-bg)',
        }
      },
      transitionTimingFunction: {
        'apple': 'var(--ease-apple)',
      },
      transitionProperty: {
        'aurora': 'var(--aurora-transition)',
      }
    },
  },
  plugins: [],
}
