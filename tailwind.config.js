/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./app.vue',
		'./error.vue',
	],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				parisienne: ['Parisienne', 'cursive'],
			},
			colors: {
				primary: '#D4A763',
				secondary: '#DD0BFF',
				dark: '#111111',
			},
			container: {
				width: '1170px',
				center: true,
				padding: {
					sm: '1rem',
					DEFAULT: '3rem',
				},
			},
		},
	},
	plugins: [],
}
