export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@pinia/nuxt'],
  runtimeConfig: {
    apiBaseUrl: 'https://fakestoreapi.com/',
  },
});
