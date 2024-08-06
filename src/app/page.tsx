"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { Button } from "@nextui-org/button";
import {
  Avatar,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import HeaderLayout from "./components/HeaderLayout";
import { FaUserTie } from "react-icons/fa";
import ProductPage from "./components/ProductPage";
import { TbNeedleThread } from "react-icons/tb";
import Image from "next/image";
export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter();
  return (
    <div>{session ? <AuthorizedUser session={session} /> : <Guest />}</div>
  );
}
// Guest user
interface AuthorizedUserProps {
  session: {
    user?: {
      // Make user object optional
      name?: string | null | undefined;
      email?: string | null | undefined;
      image?: string | null | undefined;
      // Add other optional properties if present in your session user object
    };
  };
}
function Guest() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ...">
        <div className="text-center py-4 text-base font-normal text-white bg-[#9F7F7E]">
          Free Shipping on all domestic orders - Shop Now
        </div>
        <HeaderLayout OtherPage={<ProductPage />}>
          <NavbarContent justify="start">
            <NavbarBrand className="mr-4">
              {/* <AcmeLogo /> */}
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
                  href="#"
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
                    // icon={<TbNeedleThread size={25} />}
                    src="/assets/dashboard/Firbhet_Logo.jpeg"
                    classNames={{
                      base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
                      icon: "text-black/100 ",
                    }}
                  />
                  {/* <Image src="/assets/dashboard/Firbhet_Logo.jpeg" alt="Firbhet Logo" width={50} height={50} /> */}
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
    // <main className="min-h-screen bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ...">
    //   <div className="text-center py-4 text-base font-normal text-white bg-[#9F7F7E]">
    //     Free Shipping on all domestic orders - Shop Now
    //   </div>
    //   <Navbar
    //     isBordered
    //     className="backdrop-blur-sm data-[menu-open=true]:backdrop-blur-sm backdrop-saturate-50 bg-background/10"
    //   >
    //     <HeaderLayout OtherPage={<ProductPage />}>
    //     <NavbarContent className="hidden sm:flex gap-3">
    //       <NavbarBrand className="mr-4">
    //         <p className="hidden sm:block font-bold text-inherit">
    //           <Image
    //             src="/assets/dashboard/Firrki_Logo.png"
    //             alt="Firki Logo"
    //             width={350}
    //             height={350}
    //           />
    //         </p>
    //       </NavbarBrand>
    //       <NavbarItem>
    //         <Link
    //           href="#"
    //           aria-current="page"
    //           color="secondary"
    //           className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
    //         >
    //           Our Story
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem isActive>
    //         <Link href="/">
    //           <Avatar
    //             radius="md"
    //             // icon={<TbNeedleThread size={25} />}
    //             src="/assets/dashboard/Firbhet_Logo.jpeg"
    //             classNames={{
    //               base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
    //               icon: "text-black/100 ",
    //             }}
    //           />
    //           {/* <Image src="/assets/dashboard/Firbhet_Logo.jpeg" alt="Firbhet Logo" width={50} height={50} /> */}
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link
    //           color="foreground"
    //           href="#"
    //           className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
    //         >
    //           Shop
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link
    //           color="foreground"
    //           href="#"
    //           className="hover:bg-slate-400/10 rounded-md p-2 font-bold hover:text-[#AD8C87]"
    //         >
    //           Contact
    //         </Link>
    //       </NavbarItem>

    //     </NavbarContent>

    //     <NavbarContent as="div" className="items-center" justify="end">
    //       <Input
    //         classNames={{
    //           base: "max-w-full sm:max-w-[10rem] h-10",
    //           mainWrapper: "h-full",
    //           input: "text-small",
    //           inputWrapper:
    //             "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
    //         }}
    //         placeholder="Type to search..."
    //         size="sm"
    //         type="search"
    //       />
    //       <div>Guest</div>
    //       <Link href={"/login"}>
    //         <Button color="default" variant="flat" aria-label="Login">
    //           <FaUserTie />
    //         </Button>
    //       </Link>
    //     </NavbarContent>
    //     </HeaderLayout>
    //   </Navbar>
    //   {/* <div className="details">
    //     <ProductPage />
    //   </div> */}
    // </main>
  );
}

// Authorized User
function AuthorizedUser({ session }: AuthorizedUserProps) {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ...">
        <div className="text-center py-4 text-base font-normal text-white bg-[#9F7F7E]">
          Free Shipping on all domestic orders - Shop Now
        </div>
        <HeaderLayout OtherPage={<ProductPage />}>
          <NavbarContent justify="start">
            <NavbarBrand className="mr-4">
              {/* <AcmeLogo /> */}
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
                  href="#"
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
                    // icon={<TbNeedleThread size={25} />}
                    src="/assets/dashboard/Firbhet_Logo.jpeg"
                    classNames={{
                      base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
                      icon: "text-black/100 ",
                    }}
                  />
                  {/* <Image src="/assets/dashboard/Firbhet_Logo.jpeg" alt="Firbhet Logo" width={50} height={50} /> */}
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
