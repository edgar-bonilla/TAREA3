export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  routeRules: {
    '/': { prerender: true }, 
  },
  css: [
    'bootstrap/dist/css/bootstrap.css', 
  ],
  build: {
    transpile: ['bootstrap'], 
  },
  runtimeConfig: {
    public: {
      snipcartApiKey: process.env.SNIPCART_API_KEY 
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.js',
          async: true,
          crossorigin: 'anonymous',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdn.snipcart.com/themes/v3.0.25/default/snipcart.css',
        },
      ],
    },
  },
})
