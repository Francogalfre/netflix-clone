"use client";

import React from "react";
import { signOut } from "next-auth/react";

// Dropdown
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

// Button
import { Button } from "../ui/button";

// Avatar
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const UserNav = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-10 w-10">
          <Avatar className="rounded-sm">
            <AvatarImage src="https://wuqboyrvwmpucmfacsqi.supabase.co/storage/v1/object/public/user%20image/avatar.png" />
            <AvatarFallback className="rounded-xl">F</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 mt-2" align="end">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p>Franco Galfre</p>
            <p>francogalfre2007@gmail.com</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer" onClick={() => signOut()}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
