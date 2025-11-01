import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand:  "hsl(var(--brand))",
        brand2: "hsl(var(--brand-2))",
        accent: "hsl(var(--accent))",
        bg:     "hsl(var(--bg))",
        text:   "hsl(var(--text))",
        muted:  "hsl(var(--muted))",
        card:   "hsl(var(--card))",
        border: "hsl(var(--border))",
      },
      borderRadius: { xl: "1rem", "2xl": "1.25rem" },
      boxShadow: {
        soft: "0 6px 30px rgba(0,0,0,0.12)",
        ring: "0 0 0 1px hsl(var(--border)) inset",
      },
    },
  },
  plugins: [],
};
export default config;
