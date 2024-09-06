import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],

  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "md": "820px",
        "sm": "640px",
      },
    },
    extend: {
      screens: {
        "above-sm": "770px",
        "custom-1": "526px",
        // "small":"300px"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // clipPath: {
      //   'custom': 'polygon(25% 0%, 100% 0%, 45% 35%, 0 0)',
      // },
    },
  },
  plugins: [require("tailwindcss-animate"),
  function ({ addUtilities }: any) {
    addUtilities({
      '.clip-path-custom': {
        'clip-path': 'polygon(25% 0%, 100% 0%, 45% 35%, 0 0)',
      },
    });
  },
  ],
} satisfies Config

export default config