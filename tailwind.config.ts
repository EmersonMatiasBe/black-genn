import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["selector", "class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			gray: {
  				'50': '#EAEAEA',
  				'100': '#BDBDBD',
  				'200': '#9D9D9D',
  				'300': '#707070',
  				'400': '#545454',
  				'500': '#292929',
  				'600': '#252525',
  				'700': '#1D1D1D',
  				'800': '#171717',
  				'900': '#111111'
  			},
  			yellow: {
  				'50': '#FCF7E8',
  				'100': '#F7E7B8',
  				'200': '#F3DC96',
  				'300': '#EECB66',
  				'400': '#EAC148',
  				'500': '#E5B21A',
  				'600': '#D0A218',
  				'700': '#A37E12',
  				'800': '#7E620E',
  				'900': '#604B0B'
  			},
  			primary: "#E5B21A",
			dark: "[#010207]"
  		},
		screens:{
			'1000': '1000px',
			'1440': '1440px'
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
