import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"

// This is the NextAuth.js configuration
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
})