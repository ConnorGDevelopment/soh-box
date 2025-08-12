// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: {
    enabled: true,
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/scripts",
    "@nuxt/content",
    "@nuxt/test-utils",
    "vuetify-nuxt-module",
    "@sidebase/nuxt-auth",
  ],
  runtimeConfig: {
    authSecret: process.env.NUXT_AUTH_SECRET,
    public: {
      google: {
        clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      },
      box: {
        clientId: process.env.NUXT_PUBLIC_BOX_CLIENT_ID,
      },
    },
    google: {
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET,
    },
    box: {
      clientSecret: process.env.NUXT_BOX_SANDBOX_JWT_CLIENT_SECRET,
      appAuth: {
        publicKeyId: process.env.NUXT_BOX_SANDBOX_JWT_APP_AUTH_PUBLIC_KEY_ID,
        privateKey: process.env.NUXT_BOX_SANDBOX_JWT_APP_AUTH_PRIVATE_KEY,
        passphrase: process.env.NUXT_BOX_SANDBOX_JWT_APP_AUTH_PASSPHRASE,
      },
      enterpriseId: process.env.NUXT_BOX_SANDBOX_JWT_ENTERPRISE_ID,
      developerToken: process.env.NUXT_BOX_SANDBOX_JWT_DEVELOPER_TOKEN,
    },
  },
  auth: {
    isEnabled: true,
    provider: {
      type: "authjs",
      defaultProvider: "google",
    },
    originEnvKey: process.env.NODE_ENV === "development" ? "http://localhost:300" : process.env.NUXT_PUBLIC_AUTH_ORIGIN,
    baseURL: process.env.NODE_ENV === "development" ? "http://localhost:3000/api/auth" : process.env.NUXT_PUBLIC_BASE_URL,
    globalAppMiddleware: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
