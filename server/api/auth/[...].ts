
import {
  NuxtAuthHandler,
} from "#auth";
import Google, { type GoogleProfile } from "next-auth/providers/google";


export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().authSecret,
  providers: [
    // @ts-expect-error For SSR
    Google.default({
      clientId: useRuntimeConfig().public.google.clientId,
      clientSecret: useRuntimeConfig().google.clientSecret,
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    signIn: async ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      user, account, profile, email, credentials,
    }) => {
      if (account?.provider === "google") {
        if (profile) {
          const googleProfile = profile as GoogleProfile;
          if (googleProfile.email_verified && googleProfile.hd === "stuartsoperahouse.org") {
            console.log("Success");
            return true;
          } else {
            console.log("Profile Missing Properties");
            return false;
          }
        } else {
          console.log("No Profile Returned");
          return false;
        }
      } else {
        console.log("Provider is not Google");
        return false;
      }
    },
    jwt: async ({ token, account, profile }) => {
      const richToken = token;
      if (account) {
        if (account.id_token) {
          richToken.id_token = account.id_token;
        }

        if (account.provider === 'google') {
          const googleProfile = profile as GoogleProfile;

          if (googleProfile.sub) {
            richToken.sub = googleProfile.sub;
          }

          if (googleProfile.hd) {
            richToken.hd = googleProfile.hd;
          }
        }
      }

      return richToken;
    },
    session: async ({ session, token }) => {
      return {
        ...session,
        id_token: token.id_token,
        sub: token.sub,
        hd: token.hd
      }
    }
  },
});
