import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "goldlight":"#1D3563 ",
        "primarygold":"#F27B21",
        "primaryrose": "#C89D9E",
        "primaryrosedark": "#bd7b7c",
        "primarygreen": "#DBE1D3", /* Example color */
        "primarytext": "#2A445D",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
