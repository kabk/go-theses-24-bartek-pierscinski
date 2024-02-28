// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/css/index.css'],
	app: {
		baseURL: '/go-theses-24-bartek-pierscinski/',
		pageTransition: {
			name: 'fade',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'fade',
			mode: 'out-in',
		},
	},
	modules: ['@vueuse/nuxt', '@nuxt/image', '@nuxt/content'],
	ssr: true,
})
