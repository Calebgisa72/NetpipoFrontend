/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "#f1f5f5",
          dark: "#2e3634",
        },
        foreground: {
          DEFAULT: "#111111",
          dark: "#fdffff",
        },
        primary: "#6168f3",
        secondary: {
          DEFAULT: "#faf1f1",
          dark: "#173558",
        },
        muted: "#ffffff",
        description: "#a7a7a7",
        card: {
          DEFAULT: "#fffefe",
          dark: "#1b1b1b",
        },
      },
      fontFamily: {
        poppinskjesfdb: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        custom: "0px 3px 3px rgba(39, 39, 39, 0.6)",
      },
      animation: {
        bounceLong: "bounce 3s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(-25%)" },
          "40%": { transform: "translateY(0)" },
          "60%": { transform: "translateY(-10%)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      screens: {
        exs: "250px",
        xsm: "470px",
        smd: "665px",
        xmd: "850px",
        xlg: "1210px",
      },
    },
  },
  plugins: [],
};
