import GoogleProvider from "next-auth/providers/google";
import {
  NuxtAuthHandler,
} from "#auth";



export default NuxtAuthHandler({
  // A secret string you define, to ensure correct encryption
  secret: useRuntimeConfig().authSecret,
  providers: [
    GoogleProvider({
      clientId: useRuntimeConfig().public.googleSignIn.clientId,
      clientSecret: useRuntimeConfig().google.clientSecret,
    }),
  ],
});
