// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  devtools: { enabled: true },
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  colorMode: {
    classSuffix: "",
    dataValue: "theme",
  },
  experimental: {
    viewTransition: true,
  },
});
