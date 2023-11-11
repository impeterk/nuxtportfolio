// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "nuxt-icon",
  ],
  colorMode: {
    classSuffix: "",
  },
  routeRules: {
    "/": { prerender: true },
    "/api/**": { cors: true },
  },
  pages: true,
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  experimental: {
    viewTransition: true,
  },
});
