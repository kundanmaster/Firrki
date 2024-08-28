


"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { useState, useEffect } from "react";
import { Button } from "@nextui-org/button";
import {
  Avatar,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import HeaderLayout from "./components/HeaderLayout";
import Image from "next/image";
import ProductPage from "./components/ProductPage";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div>{session ? <AuthorizedUser session={session} /> : <Guest />}</div>
  );
}

// Guest user
interface AuthorizedUserProps {
  session: {
    user?: {
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
    };
  };
}



function Guest() {


  return (
    <main className="min-h-screen ...">
      
      <HeaderLayout  OtherPage={<ProductPage />}>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            <p className="hidden sm:block font-bold text-inherit">
              <Image
                src="/assets/dashboard/Firrki_Logo.png"
                alt="Firki Logo"
                width={350}
                height={350}
              />
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link
                color="foreground"
                href="/"
                className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
              >
                Home
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
                href="#"
                aria-current="page"
                color="secondary"
                className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
              >
                Our Story
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/">
                <Avatar
                  radius="md"
                  src="/assets/dashboard/Firbhet_Logo.jpeg"
                  classNames={{
                    base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
                    icon: "text-black/100 ",
                  }}
                />
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
              >
                Shop
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
              >
                Contact
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
      </HeaderLayout>
    </main>
  );
}

// Authorized User
function AuthorizedUser({ session }: AuthorizedUserProps) {
 

  return (
    <>
      <main className="min-h-screen bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ...">
        
        <HeaderLayout OtherPage={<ProductPage />}>
          <NavbarContent justify="start">
            <NavbarBrand className="mr-4">
              <p className="hidden sm:block font-bold text-inherit">
                <Image
                  src="/assets/dashboard/Firrki_Logo.png"
                  alt="Firki Logo"
                  width={350}
                  height={350}
                />
              </p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-3">
              <NavbarItem>
                <Link
                  color="foreground"
                  href="/"
                  className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
                >
                  Home
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link
                  href="#"
                  aria-current="page"
                  color="secondary"
                  className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
                >
                  Our Story
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="/">
                  <Avatar
                    radius="md"
                    src="/assets/dashboard/Firbhet_Logo.jpeg"
                    classNames={{
                      base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
                      icon: "text-black/100 ",
                    }}
                  />
              </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  color="foreground"
                  href="#"
                  className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
                >
                  Shop
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link
                  color="foreground"
                  href="#"
                  className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
                >
                  Contact
                </Link>
              </NavbarItem>
            </NavbarContent>
          </NavbarContent>
        </HeaderLayout>
      </main>
    </>
  );
}
