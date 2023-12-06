import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { unAuthorizedAxios } from '@/config/axios'
import { PAGE_ROUTES } from '@/constants/pageRoutes'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  callbacks: {
    async session({ session, token }: any) {
      session.user = token.user

      return session
    },
    async jwt({ token, user }) {
      if (user) {
        token.user = user
      }

      return token
    },
    async redirect({ baseUrl }) {
      return baseUrl
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const { data } = await unAuthorizedAxios.post(`/auth/login`, {
          email: credentials?.email,
          password: credentials?.password
        })

        return data
      },
    })
  ],
  pages: {
    signIn: PAGE_ROUTES.login.route,
    signOut: PAGE_ROUTES.login.route
  }
}

export default NextAuth(authOptions)