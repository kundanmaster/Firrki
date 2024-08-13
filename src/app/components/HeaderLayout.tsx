"use client";
import React, { ReactNode, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { toast } from "sonner";
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleLight, PiUserThin } from "react-icons/pi";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  TooltipPlacement,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";
import CustomModal from "./Modal";
import CustomTooltip from "./Popover";
import { LiaShoppingBagSolid } from "react-icons/lia";

const HeaderLayout = ({
  children,
  OtherPage,
}: {
  children: ReactNode;
  OtherPage: ReactNode;
}) => {
  const sizes: Array<"2xl"> = ["2xl"];
  const { data: session, status } = useSession();
  const [currency, setCurrency] = useState<string>("INR ₹");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const placements = ["bottom-start"];
  const sign_Out = () => {
    signOut();
    toast.error("Logged out successfully");
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const items = [
    {
      image: "/assets/dashboard/master3.jpeg",
      title: "Cushion Cover",
      description: "This is a custom Cushion Cover",
      price: "$250",
    },
    {
      image: "/assets/dashboard/master3.jpeg",
      title: "Throw Pillow",
      description: "This is a soft throw pillow",
      price: "$120",
    },
    // Add more items as needed
  ];
  return (
    <>
      <header className="bg-[#9F7F7E]">
        <div className="py-1 pr-5 flex items-center justify-between bg-[#ececec]">
          <div className="flex items-center">
            <Image
              src="/assets/dashboard/Firrki_Logo.png"
              alt="Firki Logo"
              width={250}
              height={350}
            />
          </div>
          <div className="flex items-center space-x-6">
            <div className="block md:hidden">
              <button onClick={toggleMenu} className="focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              </button>
            </div>
            <nav
              className={`md:flex items-center space-x-6 font-bold text-xl pr-48 ${
                menuOpen ? "block" : "hidden"
              } md:block`}
            >
              <a href="#" className="hover:text-[#AD8C87]">
                Home
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                Shop
              </a>
              {/* <a href="#" className="hover:text-[#AD8C87]">
                Firbhet
              </a> */}
              <a href="#" className="hover:text-[#AD8C87] font-bold flex items-center">
                <Image src="/assets/dashboard/Firbhet_Logo.jpeg" alt="Firbhet Logo" width={48} height={58} />
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                Design
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                Our Story
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative" ref={searchRef}>
                <CiSearch onClick={onOpen} className="w-6 h-6 cursor-pointer hover:text-[#AD8C87]" />

                <div className="flex flex-wrap gap-3">
                  {sizes.map((size) => (
                    <div key={size}>
                      <CustomModal
                        title=""
                        bodyContent={
                          <>
                            <input
                              type="text"
                              placeholder="Search"
                              className="pl-8 pr-4 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-pink-500 bg-[#d9e2d6]"
                            />
                          </>
                        }
                        footerActions={<></>}
                        size={size}
                        isOpen={isOpen}
                        onClose={onClose}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
                className="text-sm border border-gray-300 py-2 px-3 rounded-full focus:outline-none focus:border-pink-500 bg-[#d9e2d6]"
              >
                <option value="INR ₹">INR ₹</option>
                <option value="USD $">USD $</option>
                <option value="EUR €">EUR €</option>
              </select>
              <div className="flex space-x-4">
                <div className="">
                  <CustomTooltip
                    items={items}
                    triggerElement={
                      <a href="#" className="hover:text-[#AD8C87]">
                        <CiHeart className="w-6 h-6" />
                      </a>
                    }
                    placement="top" // Customize placement as needed
                  />
                </div>

                <Dropdown placement="bottom-end">
                  <DropdownTrigger>
                    {/* <Avatar
                      
                      as="button"
                      className="transition-transform bg-transparent"
                      color="secondary"
                      name=""
                      size="sm"
                      src={
                        session?.user?.image ? session.user.image : undefined
                      }
                    /> */}

                    <button
                      type="button"
                      className="flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors"
                    >
                      <PiUserThin className="w-6 h-6 hover:text-[#AD8C87]" />
                    </button>
                  </DropdownTrigger>

                  {session?.user ? (
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                      <DropdownItem
                        key="profile"
                        className="h-14 gap-2"
                        textValue="Signed in as"
                      >
                        <p className="font-semibold">Signed in as</p>
                        <p className="font-semibold">{session.user.email}</p>
                      </DropdownItem>
                      <DropdownItem key="settings">My Settings</DropdownItem>
                      <DropdownItem key="team_settings">
                        Team Settings
                      </DropdownItem>
                      <DropdownItem key="analytics">Analytics</DropdownItem>
                      <DropdownItem key="system">System</DropdownItem>
                      <DropdownItem key="configurations">
                        Configurations
                      </DropdownItem>
                      <DropdownItem key="help_and_feedback">
                        Help & Feedback
                      </DropdownItem>
                      <DropdownItem
                        key="logout"
                        color="danger"
                        onClick={sign_Out}
                        textValue="Signed in as"
                      >
                        Log Out
                      </DropdownItem>
                    </DropdownMenu>
                  ) : (
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                      <DropdownItem key="signin" textValue="Signed in as">
                        <Link href="/login">
                          <p className="font-semibold text-[#AD8C87]">
                            Please Sign in
                          </p>
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  )}
                </Dropdown>
                <a href="#" className="hover:text-[#AD8C87]">
                  <PiShoppingCartSimpleLight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      {OtherPage}
    </>
  );
};

export default HeaderLayout;
