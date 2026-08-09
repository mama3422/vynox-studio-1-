import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Very dark navy — primary background
        navy: {
          DEFAULT: "#070B14",
          950: "#04060B",
          900: "#0A0F1C",
          800: "#0F1729",
          700: "#161F38",
          600: "#1E2C4D",
        },
        // Premium sky blue — primary accent
        sky: {
          50: "#EAF6FF",
          100: "#D3EEFF",
          200: "#A6DEFF",
          300: "#79CBFF",
          400: "#4CB8FF",
          DEFAULT: "#3AA9F5",
          500: "#2F9AEA",
          600: "#1E7FD1",
          700: "#1663A8",
        },
        ink: {
          50: "#F5F8FC",
          100: "#E7EDF5",
          300: "#B7C3D6",
          400: "#8EA0BC",
          500: "#66799A",
        },
        // "وَهـج" partner theme — strict monochrome: pure black, white, and
        // shades of gray. No hue/saturation anywhere in this palette.
        coal: {
          DEFAULT: "#0A0A0A",
          950: "#050505",
          900: "#0F0F0F",
          800: "#1A1A1A",
          700: "#242424",
        },
        ember: {
          50: "#FFFFFF",
          100: "#F2F2F2",
          200: "#E2E2E2",
          300: "#D0D0D0",
          400: "#FFFFFF",
          DEFAULT: "#B5B5B5",
          500: "#B5B5B5",
          600: "#8A8A8A",
          700: "#6B6B6B",
        },
        blush: {
          300: "#E5E5E5",
          400: "#BDBDBD",
          DEFAULT: "#8A8A8A",
          500: "#8A8A8A",
          600: "#5C5C5C",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        "display-ar": ["var(--font-display-ar)", "sans-serif"],
        "body-ar": ["var(--font-body-ar)", "sans-serif"],
      },
      backgroundImage: {
        "grid-glow":
          "radial-gradient(circle at 50% 0%, rgba(58,169,245,0.16), transparent 60%)",
        "ember-glow":
          "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.10), transparent 60%)",
        "noise": "url('/noise.svg')",
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(76,184,255,0.45)",
        "glow-lg": "0 0 80px -12px rgba(76,184,255,0.5)",
        card: "0 1px 0 0 rgba(255,255,255,0.06) inset, 0 20px 40px -20px rgba(0,0,0,0.6)",
        "ember-glow": "0 0 40px -8px rgba(255,255,255,0.35)",
        "ember-glow-lg": "0 0 80px -12px rgba(255,255,255,0.28)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
