// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      mapbox: {
        token: process.env.MAPBOX_TOKEN,
      },
    },
  },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
