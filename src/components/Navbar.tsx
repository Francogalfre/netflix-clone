"use client";

import React from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

// Components
import UserNav from "./UserNav";
import Logo from "../../public/netflix_logo.svg";

// Icons
import { Search } from "lucide-react";
import { Bell } from "lucide-react";

const Navbar = () => {
  const path = usePathname();

  interface links {
    name: string;
    href: string;
  }

  const links: Array<links> = [
    { name: "Home", href: "/home" },
    { name: "TV Shows", href: "/home/shows" },
    { name: "Movies", href: "/home/movies" },
    { name: "New & Popular", href: "/home/new" },
    { name: "My list", href: "/home/user/list" },
  ];

  return (
    <nav className="flex w-full bg-gradient-to-b from-black ">
      <div className="flex w-full justify-between items-center py-6 px-12 sm:px-8 lg:px-16">
        <div className="flex items-center">
          <Link href={"/home"}>
            <Image src={Logo} alt="Netflix Logo" className="w-32" priority />
          </Link>
          <ul className="hidden lg:flex gap-x-4 ml-14">
            {links.map((link, index) => (
              <div key={index}>
                {path === link.href ? (
                  <li>
                    <Link
                      href={link.href}
                      className="text-white font-bold text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ) : (
                  <li>
                    <Link
                      href={link.href}
                      className="text-[#e5e5e5] hover:text-[#b3b3b3] text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>

        <div className="flex gap-x-6 items-center">
          <Search className="hidden sm:flex w-5 sm:h-5 text-gray-300 cursor-pointer" />
          <Bell className="hidden sm:flex w-5 sm:h-5 text-gray-300 cursor-pointer" />
          <UserNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
