// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/color-mode"],
  colorMode: {
    classSuffix: "",
  },
  routeRules: {
    "/": { prerender: true },
    "/api/**": { cors: true },
  },
});
