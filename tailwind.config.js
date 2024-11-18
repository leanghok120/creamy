/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        gruvbox: {
          accent: "#b8bb26",
          neutral: "#928374",
          primary: "#ebdbb2",
          "base-100": "#282828",
          "base-200": "#3c3836",
          "base-300": "#665c54",
          info: "#458588",
          success: "#98971a",
          warning: "#fabd2f",
          error: "#fb4934",
        },
      },
    ],
  },
};
