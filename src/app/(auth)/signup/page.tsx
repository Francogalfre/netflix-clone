import React from "react";

import Link from "next/link";

// Components
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import GithubLogInBtn from "@/components/GithubLogInBtn";

export default function SignUp() {
  return (
    <div className="mt-24 rounded bg-black/80 py-10 px-6 md:mt-0 md:max-w-xl md:px-14">
      <form>
        <h1 className="text-3xl font-semibold mb-6">Sign Up</h1>
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
        Alredy have an Account?
        <Link href={"/login"} className="ml-1 text-white hover:underline">
          Log in Now
        </Link>
      </div>

      <div className="flex w-full justify-center mt-6 gap-x-3">
        <GithubLogInBtn text="Sign Up with Github" />
      </div>
    </div>
  );
}
