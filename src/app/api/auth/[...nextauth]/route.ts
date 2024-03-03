import NextAuth from "next-auth/next";

// Config
import { authConfig } from "@/utils/auth";

const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
