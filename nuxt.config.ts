// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'My App',
      meta: [
        // <meta name="description" content="My amazing site">
        { name: 'description', content: 'My amazing site.' }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  devtools: { enabled: true },
  // vite: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: '@use "@/assets/_colors.scss" as *;'
  //     }
  //   }
  // },
  typescript: {
    shim: false
  },
  // runtimeConfig: {
  //   public: {
  //     apiBase: '/api'
  //   }
  // }
})
