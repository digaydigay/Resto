import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Providers.GitHub({
      clientId: "0d41532f6142acddc413",
      clientSecret: "9e4fc86543704beb1d0c4c91e45892e86cb77b67",
    }),
  ],
});
