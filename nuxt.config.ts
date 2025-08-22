import {
  myVuetifyOptions,
} from "./vuetify.options";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  modules: [
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/content",
    "@nuxt/test-utils",
    "vuetify-nuxt-module",
  ],
  devtools: {
    enabled: true,
  },
  compatibilityDate: "2025-07-15",
  eslint: {
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    vuetifyOptions: myVuetifyOptions,
  },
});
