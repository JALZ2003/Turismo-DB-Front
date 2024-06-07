/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,jsx,ts,tsx}'
	],
	theme: {
		extend: {
			fontFamily: {
				roboto: ['Roboto', 'serif'],
				holtwood: ['Holtwood One SC', 'serif'],
			}
		}
	},
	variants: {},
	plugins: []
}