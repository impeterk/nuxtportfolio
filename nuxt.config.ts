// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
  ],
  colorMode: {
    classSuffix: "",
  },
  routeRules: {
    "/": { prerender: true },
    "/api/**": { cors: true },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "Fira+Code": true,
    },
    display: "swap",
  },
  experimental: {
    viewTransition: true,
  },
});
