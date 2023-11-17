// https://nuxt.com/docs/api/configuration/nuxt-config

const imageApi =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://peterkudelas.eu";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxtjs/partytown",
    "@zadigetvoltaire/nuxt-gtm",
  ],
  gtm: {
    scriptType: "text/partytown",
    id: "GTM-MQZR67J9",
  },
  image: {
    provider: "proxy",
    providers: {
      proxy: {
        provider: "ipx",
        options: {
          baseURL: `${imageApi}/ipx`,
        },
      },
    },
  },
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
  runtimeConfig: {
    public: {
      imageApi,
    },
  },
});
