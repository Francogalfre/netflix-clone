import { ReactNode } from "react";

// Auth Session
import { getServerSession } from "next-auth";
import { authConfig } from "@/utils/auth";

// Components
import Navbar from "@/components/Navbar";

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

  return (
    <>
      <Navbar />
      <main className="w-full max-w-7xl mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
    </>
  );
}
