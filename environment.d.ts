import "typescript";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NUXT_OAUTH_GOOGLE_CLIENT_ID: string;
            NUXT_OAUTH_GOOGLE_CLIENT_SECRET: string;
            GOOGLE_WEB_PROJECT_ID: string;
            GOOGLE_WEB_AUTH_URI: string;
            GOOGLE_WEB_TOKEN_URI: string;
            GOOGLE_WEB_REDIRECT_URI: string;
            GOOGLE_WEB_AUTH_PROVIDER_X509_CERT_URL: string;
        }
    }
}