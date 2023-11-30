import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        green: "#3CBA00",
        yellow: "#FFC227",
        "dark-blue": "#202635",
        blue: "#20B4F3",
        white: "#FFFFFF",
        grey: "#A4A6AD",
        "grad1-start": "#E5ECED",
        "grad1-end": "#EFF0E2",
        "grad2-start": "E3C3ED",
        "grad2-end": "A3CDDF",
        "grad3-start": "65DCF8",
        "grad3-end": "3371E7",
        "minty-green": "#74B5B5",
        "coldy-red": "#B57483",
        "main-grey": "#EBECEF",
        "main-blue": "#0CDFFC",
        "main-dark-blue": "#1269EE",
        "main-light-grey": "#C5CCDD",
        "main-error-red": "#BA0000",
      },
    },
  },
  plugins: [],
};
export default config
