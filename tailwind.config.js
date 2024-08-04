/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#9E8464",
				secondary: "#414141",
				placeholder: "#D0D0D0",
				description: "#686868",
				title: "#2E2E2E",
				disabled: "#939393",
			},
		},
	},
	plugins: [],
};
