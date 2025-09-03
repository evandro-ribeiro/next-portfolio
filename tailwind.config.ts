import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/react-vertical-timeline-component/dist-es6/**/*.js",
  ],
  prefix: "",
  theme: {
    backgroundImage: {
      "dark-blue-gradient":
        "linear-gradient(to right, #095063, #0B397D, #4C00FF)",
      "dark-gradient-top":
        "linear-gradient(to top, var(--orange) 0%, #020051 15%, #111828 100%)",
      "orange-gradient":
        "linear-gradient(to bottom, #ffffff, #F5DD61, #FBA834)",
      "text-dark-blue-gradient":
        "linear-gradient(to bottom, #ffffff, #8f8fff, #3d00de)",
      "text-dark-gradient": "linear-gradient(to bottom, #ffffff, #002610)",

      "bg-principal": "url('/bg-principal.png')",
    },
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    screens: {
      xs: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        dark_blue: "var(--dark-blue)",
        light_blue: "var(--light-blue)",
        orange: "var(--orange)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
