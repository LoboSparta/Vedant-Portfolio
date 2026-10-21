import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#0D0F10",
        ink: "#F4F0E8",
        muted: "#A2A19D",
        card: "#171A1B",
        line: "#303436",
        accent: "#F4AD3D",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: { shell: "1320px" },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        amber: "0 0 0 1px rgba(244,173,61,.18), 0 16px 50px rgba(244,173,61,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
