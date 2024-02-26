// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	css: ['~/assets/css/index.css'],
	app: {
		pageTransition: {
			name: 'pagetransition',
			mode: 'out-in',
		},
		layoutTransition: {
			name: 'pagetransition',
			mode: 'out-in',
		},
	},
	modules: ['@vueuse/nuxt', '@nuxt/image', '@nuxt/content'],
	ssr: false,
	// nitro: {
	// 	preset: 'github_pages',
	// },
})
