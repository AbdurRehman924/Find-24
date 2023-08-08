// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt", "@formkit/nuxt"],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
});
