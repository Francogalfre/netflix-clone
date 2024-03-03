import { ReactNode } from "react";
import Image from "next/image";

// Images
import BackgroudnImage from "../../../public/login_background.jpg";
import Logo from "../../../public/netflix_logo.svg";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <section className="flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Image
        src={BackgroudnImage}
        alt="Image from Netflix Login Background"
        className="hidden sm:flex sm:object-cover -z-10 brightness-50"
        priority
        fill
      />
      <Image
        src={Logo}
        alt="Netflix Logo"
        className="absolute top-4 left-4 md:left-10 md:top-6 object-contain saturate-150 w-32 h-32"
        priority
      />
      {children}
    </section>
  );
}
