import vuetify, {
  transformAssetUrls,
} from "vite-plugin-vuetify";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "nuxt-vue3-google-signin",
    "@nuxt/eslint",
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins?.push(vuetify({
          autoImport: true,
        }));
      });
    },
  ],
  devtools: {
    enabled: true,
  },
  runtimeConfig: {
    oauth: {
      google: {
        clientId: process.env.NUXT_OAUTH_GOOGLE_CLIENT_ID,
        clientSecret: process.env.NUXT_OAUTH_GOOGLE_CLIENT_SECRET,
        redirectURL: process.env.GOOGLE_WEB_REDIRECT_URI,
      },
    },
  },
  build: {
    transpile: [
      "vuetify",
    ],
  },
  compatibilityDate: "2025-05-15",
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleSignIn: {
    clientId: process.env.GOOGLE_WEB_CLIENT_ID,
  },
});
