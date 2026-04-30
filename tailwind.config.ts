import defaultTheme from "tailwindcss/defaultTheme";

const colors = {
  accent: { DEFAULT: "#4ADE80", light: "#16A34A" },
  dark: {
    bg: "#0F1117",
    card: "#1A1D27",
    card2: "#22263A",
    border: "#2D3150",
  },
  light: {
    bg: "#F5F7FA",
    card: "#FFFFFF",
    card2: "#EEF0F8",
    border: "#D1D5E4",
  },
  text: { dark: "#F0F4FF", light: "#0D1117" },
  muted: "#6B7280",
  danger: { dark: "#F87171", light: "#DC2626" },
  warn: { dark: "#FBBF24", light: "#D97706" },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
