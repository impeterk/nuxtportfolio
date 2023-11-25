// https://nuxt.com/docs/api/configuration/nuxt-config
import { env } from "./config";
export default defineNuxtConfig({
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-MQZR67J9');`,
        },
      ],
      noscript: [
        {
          tagPosition: "bodyOpen",
          innerHTML:
            "<iframe src='https://www.googletagmanager.com/ns.html?id=GTM-MQZR67J9' height='0' width='0' style='display:none;visibility:hidden'></iframe>",
        },
      ],
    },
    __dangerouslyDisableSanitizers: ["noscript"],
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/", "sitemap.xml"],
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
