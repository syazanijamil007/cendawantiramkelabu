import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#3DF040",
          blue: "#7AD6EB",
          mauve: "#C690AF",
          bg: "#FAFCF8",
          ink: "#243329",
          muted: "#68766C",
          mint: "#EAFBEA",
        },
        forest: {
          50: "#f2f7f3",
          100: "#e2efe4",
          200: "#c6dfcb",
          300: "#9cc6a5",
          400: "#6da878",
          500: "#4c8a59",
          600: "#386d45",
          700: "#2d5739",
          800: "#264630",
          900: "#1f3a28",
          950: "#12211a",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(36, 51, 41, 0.15)",
        card: "0 4px 24px -8px rgba(36, 51, 41, 0.12)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "fade-up": "fade-up 0.7s ease-out both",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
