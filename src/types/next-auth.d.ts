import { Session } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    provider: string,
    expires: Date,
    user: {}
  }
}

declare module "next-auth/jwt" {
  interface JWT {

  }
}