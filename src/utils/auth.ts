import { NextAuthOptions } from "next-auth";

// Prisma Config
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "../utils/db";
import { Adapter } from "next-auth/adapters";

// Providers
import GithubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";

export const authConfig = {
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
} satisfies NextAuthOptions;
