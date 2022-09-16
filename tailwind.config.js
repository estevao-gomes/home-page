/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandLight:
          "hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness) / <alpha-value>)",
        brand: "#ffffff",
        text1Light:
          "hsl(var(--brand-hue) var(--brand-saturation) 10% / <alpha-value>)",
        text2Light: "hsl(var(--brand-hue) 30% 30% / <alpha-value>)",
        surface1Light: "hsl(var(--brand-hue) 25% 90% / <alpha-value>)",
        surface2Light: "hsl(var(--brand-hue) 20% 99% / <alpha-value>)",
        surface3Light: "hsl(var(--brand-hue) 20% 92% / <alpha-value>)",
        surface4Light: "hsl(var(--brand-hue) 20% 85% / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
