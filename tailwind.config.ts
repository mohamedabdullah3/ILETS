import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#12263A",
        beige: "#F5EDE1",
        gold: "#C9A227",
      },
    },
  },
  plugins: [],
};

export default config;
