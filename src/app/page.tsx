// Auth Session
import { authConfig } from "@/utils/auth";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authConfig);

  if (!session) {
    return redirect("/login");
  } else {
    return redirect("/home");
  }
}
