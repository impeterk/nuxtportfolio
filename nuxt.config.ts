// https://nuxt.com/docs/api/configuration/nuxt-config
import { env } from "./config";
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
    "nuxt-og-image",
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
  site: {
    url: env,
  },
  sitemap: {
    xsl: false,
  },
  colorMode: {
    classSuffix: "",
    dataValue: "theme",
  },
  experimental: {
    viewTransition: true,
  },
});
