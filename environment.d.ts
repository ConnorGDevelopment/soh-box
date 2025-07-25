declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NUXT_AUTH_SECRET: string;

      NUXT_PUBLIC_GOOGLE_CLIENT_ID: string;
      NUXT_GOOGLE_CLIENT_SECRET: string;

      NUXT_PUBLIC_BOX_CLIENT_ID: string;
      NUXT_BOX_CLIENT_SECRET: string;

      NUXT_PUBLIC_BOX_SANDBOX_CCG_CLIENT_ID: string;
      NUXT_BOX_CLIENT_SANDBOX_CCG_CLIENT_SECRET: string;

      NUXT_PUBLIC_BOX_KEY_ID: string;
      NUXT_BOX_PRIVATE_KEY: string;
      NUXT_BOX_PASSPHRASE: string;
      NUXT_BOX_ENTERPRISE_ID: string;
      NUXT_BOX_DEVELOPER_TOKEN: string;

      NUXT_PUBLIC_AUTH_ORIGIN: string;
      NUXT_PUBLIC_BASE_URL: string;
    }
  }
}

export { };
