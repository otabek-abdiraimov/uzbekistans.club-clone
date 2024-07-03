import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
	css: ['~/assets/css/tailwind.css'],
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},
	modules: ['@nuxt/image', '@nuxt/icon'],
	app: {
		head: {
			title: 'Uzbekistan’s Club',
		},
	},
})
