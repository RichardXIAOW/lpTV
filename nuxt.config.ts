export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  nitro: {
    preset: 'vercel', // 用 Serverless（稳定）
    // preset: 'vercel-edge', // 想用 Edge 就开这个
  },
  modules: [
    '@nuxt/ui'
  ],
  css: ['~/assets/css/main.css'],
})
