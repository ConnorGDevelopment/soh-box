declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      NUXT_GOOGLE_CLIENT_SECRET: string;
      NUXT_AUTH_SECRET: string;
    }
  }
}
