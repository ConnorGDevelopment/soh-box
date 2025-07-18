import type { DefaultJWT } from "next-auth/jwt";

// file: ~/next-auth.d.ts
declare module 'next-auth/jwt' {
    /** Returned by the `jwt` callback and `getToken` */
    interface JWT extends Record<string, unknown>, DefaultJWT {
        id_token?: string
        sub?: string
        hd?: string
    }
}

