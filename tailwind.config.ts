import type { Config } from "tailwindcss";

export default {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				primary_color: "#0D6937",
				border_color: "#F8F8F8CC",
				chart_hight: "#066A3E",
				chart_middle: "#ED980F",
				chart_low: "#E7191F",
			}
		}
	},
	plugins: [require( "tailwindcss-animate" )],
} satisfies Config;