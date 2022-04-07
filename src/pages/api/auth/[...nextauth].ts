import Providers from "next-auth/providers";
import NextAuth from "next-auth";
import { env } from "process";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: "read:user",
    }),
  ],
});
