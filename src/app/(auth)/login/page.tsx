import React from "react";

import Link from "next/link";
import Image from "next/image";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Icons
import { GithubIcon } from "lucide-react";
import GoogleIcon from "../../../../public/google.svg";

export default function Login() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-xl md:px-14">
      <form>
        <h1 className="text-3xl font-semibold mb-6">Log In</h1>
        <div className="flex flex-col gap-6">
          <Input
            type="email"
            name="email"
            placeholder="Example@gmail.com"
            className="bg-[#333333] placeholder:text-xs placeholder:text-gray-400 w-auto md:w-80 h-12 inline-block"
          />
          <Button
            type="submit"
            className="w-full text-white bg-[#ff0b16] hover:bg-[#ff0b17d8]"
          >
            Sign Up
          </Button>
        </div>
      </form>

      <div className="mt-6 text-sm text-gray-400">
        New on Netflix?
        <Link href={"/signup"} className="ml-1 text-white hover:underline">
          Sign up Now
        </Link>
      </div>

      <div className="flex w-full justify-center mt-6 gap-x-3">
        <Button variant={"outline"} size="icon">
          <GithubIcon className="w-4 h-4" />
        </Button>
        <Button variant={"outline"} size="icon">
          <Image src={GoogleIcon} className="w-6 h-6" alt="Google Icon Image" />
        </Button>
      </div>
    </div>
  );
}
