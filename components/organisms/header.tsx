"use client";

import Image from "next/image";
import Link from "next/link";

import logo from "@/public/next.svg";

export function Header() {
  return (
    <header className="flex flex-row justify-between items-center w-full h-16 bg-slate-500">
      <div className="flex flex-row items-center justify-start w-1/2 h-full">
        <div className="flex flex-row items-center justify-start w-1/2 h-full">
          <Link
            href="/"
            className="flex flex-row items-center justify-start w-full h-full"
          >
            {/* embed svg for logo */}
            <Image
              src={logo}
              alt="logo"
              width={50}
              height={50}
              className="flex flex-row items-center justify-start w-full h-full"
            />
          </Link>
        </div>
        <div className="flex flex-row items-center justify-start w-1/2 h-full">
          <Link
            href="/"
            className="flex flex-row items-center justify-start w-full h-full"
          >
            <h1 className="flex flex-row items-center justify-start w-full h-full text-2xl"></h1>
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end w-1/2 h-full">
        <div className="flex flex-row items-center justify-start w-1/2 h-full">
          <Link
            href="/login"
            className="flex flex-row items-center justify-start w-full h-full"
          >
            <h1 className="flex flex-row items-center justify-start w-full h-full text-2xl">
              Login
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
}
