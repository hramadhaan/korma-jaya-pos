import { DefaultSession } from "next-auth";
import NextAuth from "next-auth/next";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      id: string | null | undefined;
      token: string | null | undefined;
      role: string | null | undefined;
    };
  }
}
