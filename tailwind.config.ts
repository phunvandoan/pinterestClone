import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      screens: {
        xsm: { max: "475px" },
        sm: { max: "798px", min: "476px" },
        md: { max: "1035px", min: "799px" },
        lg: { max: "1272px", min: "1036px" },
        xl: { max: "1509px", min: "1273px" },
        xxl: { max: "1746px", min: "1510px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
