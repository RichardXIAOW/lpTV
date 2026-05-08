export default defineNuxtConfig({
  // ssr: false,

  compatibilityDate: "2025-04-01",

  nitro: {
    compressPublicAssets: true,
  },

  app: {
    head: {
      meta: [{ name: "referrer", content: "no-referrer" }],
    },
  },

  modules: ['@nuxt/ui'],

  css: ['~/assets/css/main.css'],

  // 激进的缓存策略
  routeRules: {
    '/_nuxt/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
    '/assets/**': { headers: { 'Cache-Control': 'public, max-age=31536000, immutable' } },
  }
}); 