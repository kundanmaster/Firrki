"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { Button } from "@nextui-org/button";
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
} from "@nextui-org/react";
import { CircularProgress, Chip } from "@nextui-org/react";
import hero from "../../public/assets/hero-card.jpeg";
import HeaderLayout from "./components/HeaderLayout";
import { FaUserTie } from "react-icons/fa";
import ProductPage from "./components/ProductPage";
import { FcShop } from "react-icons/fc";
import FirrkiLogo from "../../public/assets/spool-of-thread.png";
import { TbNeedleThread } from "react-icons/tb";

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
    <main
      className="min-h-screen bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ..."
      // className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ..."
    >
      <Navbar
        isBordered
        className="backdrop-blur-sm data-[menu-open=true]:backdrop-blur-sm backdrop-saturate-50 bg-background/10"
      >
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarBrand className="mr-4">
            {/* <AcmeLogo /> */}
            <p className="hidden sm:block font-bold text-inherit">Firrki</p>
          </NavbarBrand>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="hover:bg-slate-400/10 rounded-md p-2"
            >
              Cushions
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link
              href="#"
              aria-current="page"
              color="secondary"
              className="hover:bg-slate-400/10 rounded-md p-2"
            >
              Decore
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="/">
              <Avatar
                radius="md"
                icon={<TbNeedleThread size={25} />}
                classNames={{
                  base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
                  icon: "text-black/100 ",
                }}
              />
              {/* <Image src="../../public/assets/spool-of-thread.png" width={20} height={20} alt="threads"/> */}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="hover:bg-slate-400/10 rounded-md p-2"
            >
              Design
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              color="foreground"
              href="#"
              className="hover:bg-slate-400/10 rounded-md p-2"
            >
              Bedding
            </Link>
          </NavbarItem>
        </NavbarContent>

        <NavbarContent as="div" className="items-center" justify="end">
          <Input
            classNames={{
              base: "max-w-full sm:max-w-[10rem] h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
            }}
            placeholder="Type to search..."
            size="sm"
            // startContent={<SearchIcon size={18} />}
            type="search"
          />
          <div>Guest</div>
          <Link href={"/login"}>
            <Button color="default" variant="flat" aria-label="Login">
              <FaUserTie />
            </Button>
          </Link>
          {/* <Link href={'/Signup'}> 
          <Button color="primary" variant="flat">
            Signup
          </Button>
          </Link> */}
          {/* <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="secondary"
                name="Kundan"
                size="sm"
                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
              <DropdownItem key="profile" className="h-8 gap-2">
                Guest
              </DropdownItem>

              <DropdownItem key="profile" className="h-14 gap-2">
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">guest@gmail.com</p>
              </DropdownItem>
              <DropdownItem key="settings">My Settings</DropdownItem>
              <DropdownItem key="team_settings">Team Settings</DropdownItem>
              <DropdownItem key="analytics">Analytics</DropdownItem>
              <DropdownItem key="system">System</DropdownItem>
              <DropdownItem key="configurations">Configurations</DropdownItem>
              <DropdownItem key="help_and_feedback">
                Help & Feedback
              </DropdownItem>
              <DropdownItem
                key="logout"
                color="danger"
                onClick={() => signOut()}
              >
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown> */}
        </NavbarContent>
      </Navbar>

      {/* <h1 className="text-3xl font-bold">Authorized User Page</h1> */}

      <div className="details">
        <ProductPage />
      </div>
      <div className="flex justify-center">
        <Button
          onClick={() => signOut()}
          className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
          aria-label="Sign Out"
        >
          Sign Out
        </Button>
      </div>

      <div className="flex justify-center">
        <Link
          href={"/products"}
          className="mt-5 px-10 py-1 rounded-sm bg-indigo-500 text-gray"
        >
          Profile
        </Link>
      </div>
    </main>
  );
}

// Authorized User
function AuthorizedUser({ session }: AuthorizedUserProps) {
  return (
    <main className="min-h-screen bg-gradient-to-r from-indigo-100 from-10% via-sky-200 via-30% to-emerald-100 to-90% ...">
      <HeaderLayout OtherPage={<ProductPage />}>
        <NavbarContent justify="start">
          <NavbarBrand className="mr-4">
            {/* <AcmeLogo /> */}
            <p className="hidden sm:block font-bold text-inherit">Firrki</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-3">
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="hover:bg-slate-400/10 rounded-md p-2"
              >
                Cushions
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
                href="#"
                aria-current="page"
                color="secondary"
                className="hover:bg-slate-400/10 rounded-md p-2"
              >
                Decore
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="/">
                <Avatar
                  radius="md"
                  icon={<TbNeedleThread size={25} />}
                  classNames={{
                    base: "bg-gradient-to-br from-bg-slate-200 to-bg-slate-300",
                    icon: "text-black/100 ",
                  }}
                />
                {/* <Image src="../../public/assets/spool-of-thread.png" width={20} height={20} alt="threads"/> */}
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="hover:bg-slate-400/10 rounded-md p-2"
              >
                Design
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                color="foreground"
                href="#"
                className="hover:bg-slate-400/10 rounded-md p-2"
              >
                Bedding
              </Link>
            </NavbarItem>
          </NavbarContent>
        </NavbarContent>
      </HeaderLayout>

      
    </main>
  );
}
