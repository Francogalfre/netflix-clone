"use client";

import React from "react";

import { Button } from "./ui/button";
import { GithubIcon } from "lucide-react";

import { signIn } from "next-auth/react";

const GithubLogInBtn = () => {
  return (
    <Button
      variant={"outline"}
      className="flex gap-2 items-center"
      onClick={() => signIn("github")}
    >
      Enter with Github
      <GithubIcon className="w-4 h-4" />
    </Button>
  );
};

export default GithubLogInBtn;
