// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@formkit/nuxt",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
  ],
  runtimeConfig: {
    public: {
      // baseURL: process.env.BASE_URL,
      baseURL: "https://api.find24.app/api/v1",
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
