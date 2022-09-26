/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light:
            "hsl(var(--brand-hue) var(--brand-saturation) var(--brand-lightness) / <alpha-value>)",
        },
        text1: {
          light:
            "hsl(var(--brand-hue) var(--brand-saturation) 10% / <alpha-value>)",
        },
        text2: { light: "hsl(var(--brand-hue) 30% 30% / <alpha-value>)" },
        surface1: {
          light: "hsl(var(--brand-hue) 25% 90% / <alpha-value>)",
        },
        surface2: {
          light: "hsl(var(--brand-hue) 20% 99% / <alpha-value>)",
        },
        surface3: {
          light: "hsl(var(--brand-hue) 20% 92% / <alpha-value>)",
        },
        surface4: {
          light: "hsl(var(--brand-hue) 20% 85% / <alpha-value>)",
        },
        border: {
          light:
            "hsl(var(--brand-hue) var(--brand-saturation) 40% / <alpha-value>)",
        },
      },
      boxShadow: {
        "brand-light":
          "hsla(var(--brand-hue) var(--brand-saturation) 40% 0.4 / <alpha-value>)/40 5px 5px, hsla(var(--brand-hue) var(--brand-saturation) 40% 0.3 / <alpha-value>) 10px 10px, hsla(var(--brand-hue) var(--brand-saturation) 40% 0.2 / <alpha-value>) 15px 15px, hsla(var(--brand-hue) var(--brand-saturation) 40% 0.1 / <alpha-value>) 20px 20px, hsla(var(--brand-hue) var(--brand-saturation) 40% 0.05 / <alpha-value>) 25px 25px",
      },
    },
  },
  plugins: [],
};
