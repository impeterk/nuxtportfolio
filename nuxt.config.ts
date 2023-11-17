// https://nuxt.com/docs/api/configuration/nuxt-config

import { env } from "./config";
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
  partytown: {
    forward: ["dataLayer.push"],
  },
  gtm: {
    id: "GTM-MQZR67J9",
    scriptType: "text/partytown",
  },
  colorMode: {
    classSuffix: "",
  },
  routeRules: {
    "/": { prerender: true, cors: true },
    "/api/**": { cors: true },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
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
      env,
    },
  },
});
