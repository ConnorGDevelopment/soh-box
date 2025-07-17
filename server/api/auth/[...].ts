
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
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    jwt: async ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      token, user, account, profile,
    }) => {
      // Send request to the API with access_token through account?.provider to exchange it with API token
      // Continue your process after getting the API token. Ex: Set the API token in cookies

      // TODO: Do an authentication request to backend here


      return token;
    },
    signIn: async ({
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      user, account, profile, email, credentials,
    }) => {
      // console.log(user);
      // console.log(account);
      // console.log(profile);
      // console.log(email);
      // console.log(credentials);
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
  },
});
