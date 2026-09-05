import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

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
        "linear-gradient(to top, var(--orange) 0%, #020051 15%, #0a0f1e 100%)",
      "orange-gradient":
        "linear-gradient(to bottom, #ffffff, #F5DD61, #FBA834)",
      "text-dark-blue-gradient":
        "linear-gradient(135deg, #ffffff 0%, #a78bff 50%, #4C00FF 100%)",
      "text-dark-gradient": "linear-gradient(to bottom, #ffffff, #002610)",
      "tech-gradient":
        "linear-gradient(135deg, #0a0f1e 0%, #0a2e65 50%, #0a0f1e 100%)",
      "hero-gradient":
        "radial-gradient(ellipse at 50% 0%, rgba(76,0,255,0.15) 0%, rgba(10,15,30,0) 70%)",
      "orange-glow-gradient":
        "radial-gradient(ellipse at 50% 100%, rgba(255,131,0,0.2) 0%, rgba(10,15,30,0) 70%)",
      "text-orange-gradient":
        "linear-gradient(135deg, #ff8300 0%, #F5DD61 50%, #FBA834 100%)",
      "text-tech-gradient":
        "linear-gradient(135deg, #ffffff 0%, #a78bff 30%, #4C00FF 60%, #ff8300 100%)",
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
        yellow: "var(--yellow)",
        orange_bright: "var(--orange-bright)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        "glow-blue": "0 0 20px rgba(76,0,255,0.4), 0 0 40px rgba(76,0,255,0.2)",
        "glow-orange": "0 0 20px rgba(255,131,0,0.4), 0 0 40px rgba(255,131,0,0.2)",
        "glow-yellow": "0 0 20px rgba(245,221,97,0.4), 0 0 40px rgba(245,221,97,0.2)",
        "card-tech": "0 8px 32px rgba(76,0,255,0.15), 0 2px 8px rgba(0,0,0,0.3)",
        "card-hover": "0 20px 60px rgba(76,0,255,0.25), 0 8px 24px rgba(255,131,0,0.1)",
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
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(76,0,255,0.3), 0 0 10px rgba(76,0,255,0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(76,0,255,0.6), 0 0 40px rgba(76,0,255,0.4)" 
          },
        },
        "glow-pulse-orange": {
          "0%, 100%": { 
            boxShadow: "0 0 5px rgba(255,131,0,0.3), 0 0 10px rgba(255,131,0,0.2)" 
          },
          "50%": { 
            boxShadow: "0 0 20px rgba(255,131,0,0.6), 0 0 40px rgba(255,131,0,0.4)" 
          },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in-blur": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "scan-line": {
          "0%": { top: "0%", opacity: "1" },
          "100%": { top: "100%", opacity: "0" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "rotate-gradient": {
          "0%": { "--angle": "0deg" } as Record<string, string>,
          "100%": { "--angle": "360deg" } as Record<string, string>,
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "glow-pulse-orange": "glow-pulse-orange 2s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in-blur": "fade-in-blur 0.8s ease-out",
        "scan-line": "scan-line 3s ease-in-out infinite",
        "shimmer": "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;

export default config;
