declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_AUTH_SECRET: string;

      NUXT_PUBLIC_GOOGLE_SIGN_IN_CLIENT_ID: string;
      NUXT_GOOGLE_CLIENT_SECRET: string;

      NUXT_PUBLIC_BOX_CLIENT_ID: string;
      NUXT_BOX_CLIENT_SECRET: string;

      NUXT_PUBLIC_AUTH_ORIGIN: string;
    }
  }
}

export {};
