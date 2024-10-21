// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: [
	  "./pages/**/*.{js,ts,jsx,tsx}",
	  "./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  colors: {
		transparent: "transparent",
		current: "currentColor",
		black: "#000000",
		white: "#ffffff",
		"light-gray": "#f5f5f5",
		gray: "#969696",
		"epic-black": "#131212", // You can remove this if not needed
		pastel: {
		  green: "#6dcc93",
		  blue: "#A2D2DF",
		  yellow: "#eeac42",
		  red: "#ff6666",
		  orange: "#ffcc66",
		  blurple: "#7777ff",
		  pink: "#ff77ff",
		},
	  },
	  extend: {},
	},
	plugins: [],
  };
  