import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /*
       * Design tokens. Component class names (bg-paper, text-ink, …) are
       * unchanged; only the values are new, which is what turns the whole
       * site into the dark "edit suite" look.
       *   paper  — page background (near-black)
       *   raise  — slightly lifted surface (panels)
       *   card   — thumbnails / chips
       *   ink    — primary text (warm bone white)
       *   muted  — secondary text
       *   line   — hairlines and borders
       *   accent — the one accent colour (amber, like a timeline marker)
       */
      colors: {
        paper: "#0B0B0D",
        raise: "#121215",
        card: "#17171B",
        ink: "#EEEAE2",
        muted: "#8E8B85",
        line: "#2A2A30",
        accent: "#F2A93B",
      },
      fontFamily: {
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1240px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
