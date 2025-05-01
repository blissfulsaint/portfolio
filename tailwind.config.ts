import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './node_modules/blisskit-ui/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primaryColor: "var(--primary-color)",
      },
      keyframes: {
        backdropFadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '0.5' },
        },
        backdropFadeOut: {
          '0%': { opacity: '0.5' },
          '100%': { opacity: '0' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(20px)' },
        },
      },
      animation: {
        backdropFadeIn: 'backdropFadeIn 0.3s ease-out forwards',
        backdropFadeOut: 'backdropFadeOut 0.3s ease-in forwards',
        slideUp: 'slideUp 0.3s ease-out forwards',
        slideDown: 'slideDown 0.3s ease-in forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;