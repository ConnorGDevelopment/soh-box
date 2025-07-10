import vuetify, {
  transformAssetUrls,
} from "vite-plugin-vuetify";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@sidebase/nuxt-auth",
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
    google: {
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    },
    public: {
      googleSignIn: {
        clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
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
  auth: {
    provider: {
      type: "authjs",
      trustHost: false,
      defaultProvider: "google",
      addDefaultCallbackUrl: true,
    },
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  googleSignIn: {
    clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
  },
});
