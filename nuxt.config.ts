import vuetify, {
  transformAssetUrls,
} from "vite-plugin-vuetify";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@sidebase/nuxt-auth",
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
      google: {
        clientId: process.env.NUXT_PUBLIC_GOOGLE_CLIENT_ID,
      },
      box: {
        clientId: process.env.NUXT_PUBLIC_BOX_CLIENT_ID,
        boxKeyId: process.env.NUXT_PUBLIC_BOX_KEY_ID,
        sandbox: {
          ccg: {
            clientId: process.env.NUXT_PUBLIC_BOX_SANDBOX_CCG_CLIENT_ID
          },
          jwt: {
            clientId: process.env.NUXT_PUBLIC_BOX_SANDBOX_JWT_CLIENT_ID,
          }
        }
      },
    },
    authSecret: process.env.NUXT_AUTH_SECRET,
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
      privateKey: process.env.NUXT_BOX_PRIVATE_KEY,
      passphrase: process.env.NUXT_BOX_PASSPHRASE,
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
    server: {
      hmr: {
        protocol: "http",
        host: "localhost",
        clientPort: 3000,
        port: 3000,
      },
    },
  },
  auth: {
    isEnabled: true,
    provider: {
      type: "authjs",
      defaultProvider: "google",
    },
    originEnvKey: process.env.NUXT_PUBLIC_AUTH_ORIGIN,
    baseURL: process.env.NUXT_PUBLIC_BASE_URL,
    globalAppMiddleware: {
      isEnabled: true,
    }
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  typescript: {
    strict: true
  }
});
