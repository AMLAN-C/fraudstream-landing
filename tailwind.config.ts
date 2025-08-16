import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f9ff",
          100: "#e2f2ff",
          200: "#bee4ff",
          300: "#8ed0ff",
          400: "#5bb6ff",
          500: "#2b98ff",
          600: "#1179e6",
          700: "#0a5fb4",
          800: "#0a4a8a",
          900: "#0a3c6e"
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)"
      }
    },
  },
  plugins: [],
};
export default config;
