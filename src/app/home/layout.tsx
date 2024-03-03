import { ReactNode } from "react";

// Auth Session
import { getServerSession } from "next-auth";
import { authConfig } from "@/utils/auth";

import { redirect } from "next/navigation";

export default async function HomeLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getServerSession(authConfig);

  if (!session) {
    return redirect("/signup");
  }

  return <div>{children}</div>;
}
