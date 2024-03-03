import { ReactNode } from "react";

// Auth Session
import { getServerSession } from "next-auth";
import { authConfig } from "@/utils/auth";

import { redirect } from "next/navigation";

export default function HomeLayout({ children }: { children: ReactNode }) {
  const sessions = getServerSession(authConfig);

  if (!sessions) {
    return redirect("/signup");
  }

  return <div>{children}</div>;
}
