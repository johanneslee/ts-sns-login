import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth"
import FacebookProvider from "next-auth/providers/facebook"
import NaverProvider from "next-auth/providers/naver"
import KakaoProvider from "next-auth/providers/kakao"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { User } from "@/types/user"
import { NextApiRequest } from "next"
import { getUser } from "@/firebaseConfig"

export const authOptions: NextAuthOptions = {
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      id: 'credentials',
      type: 'credentials',
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password", placeholder: "password" }
      },
      async authorize(credentials: Record<"username" | "password", string> | undefined): Promise<any> {
        if (!credentials) {
          return null;
        }

        const username = credentials.username;
        const password = credentials.password;

        try {
          const user: User = await getUser(username, password);

          if (!user) {
            throw 'No User';
          }

          return user;
        } catch (e) {
          return null;
        }
      }
    })
  ],
  callbacks: {
    async session ({ session, token }) {
      if (session.user) {
        session.user.provider = token.provider as string;
      }
      return session;
    },
    async jwt ({ token, user, account }) {
      if (user) {
        token.provider = account?.provider;
      }
      return token;
    }
  },
  secret: process.env.NEXTAUTH_SECRET!
}

export default NextAuth(authOptions)