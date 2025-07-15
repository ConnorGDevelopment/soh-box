declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_AUTH_SECRET: string;

      NUXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      NUXT_GOOGLE_CLIENT_SECRET: string;

      NUXT_PUBLIC_BOX_CLIENT_ID: string;
      NUXT_BOX_CLIENT_SECRET: string;

      NUXT_PUBLIC_AUTH_ORIGIN: string;
      NUXT_PUBLIC_BASE_URL: string;
    }
  }
}

export {};
