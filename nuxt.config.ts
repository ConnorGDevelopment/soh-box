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
    public: {
      googleSignIn: {
        clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      },
      box: {
        clientId: process.env.NUXT_PUBLIC_BOX_CLIENT_ID,
      },
    },
    authSecret: process.env.NUXT_AUTH_SECRET,
    google: {
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    },
    box: {
      clientSecret: process.env.NUXT_BOX_CLIENT_SECRET,
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
    globalAppMiddleware: true,
    baseURL: process.env.NUXT_PUBLIC_AUTH_ORIGIN,
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
