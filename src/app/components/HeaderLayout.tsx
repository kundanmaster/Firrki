"use client";
import React, { ReactNode, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { toast } from "sonner";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
import { CiSearch, CiHeart } from "react-icons/ci";
import { PiShoppingCartSimpleLight, PiUserThin } from "react-icons/pi";

import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import { RiUser3Line } from "react-icons/ri";
const HeaderLayout = ({
  children,
  OtherPage,
}: {
  children: ReactNode;
  OtherPage: ReactNode;
}) => {
  const { data: session, status } = useSession();
  const [currency, setCurrency] = useState<string>("INR ₹");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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

  return (
    <>
      {/* <div className="">
        <Navbar className="backdrop-blur-sm data-[menu-open=true]:backdrop-blur-sm backdrop-saturate-50 bg-background/50">
          {children}
          <NavbarContent
            as="div"
            className="items-center max-w-screen-xl "
            justify="end"
          >
            <div
              className="relative"
              ref={searchRef}
              style={{ marginLeft: "-50px" }}
            >
              <FaSearch
                onClick={toggleSearch}
                className="w-6 h-6 cursor-pointer"
              />
              {searchOpen && (
                <div className="absolute mt-2 left-0">
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-4 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-pink-500"
                    style={{ backgroundColor: "#d9e2d6" }}
                  />
                </div>
              )}
            </div>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="text-sm border border-gray-300 py-2 px-3 rounded-full focus:outline-none focus:border-pink-500"
              style={{ backgroundColor: "#d9e2d6" }}
            >
              <option value="INR ₹">INR ₹</option>
              <option value="USD $">USD $</option>
              <option value="EUR €">EUR €</option>
            </select>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#AD8C87]">
                <FaHeart className="w-6 h-6 " />
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                <FaShoppingCart className="w-6 h-6 " />
              </a>
            </div>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform bg-gradient-to-br from-[#AD8C87] to-[#ceb3af]"
                  color="secondary"
                  name=""
                  size="sm"
                  src={session?.user?.image ? session.user.image : undefined}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                {session?.user ? (
                  <>
                    <DropdownItem key="profile" className="h-14 gap-2">
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
                    >
                      Log Out
                    </DropdownItem>
                  </>
                ) : (
                  <DropdownItem key="signin">
                    <Link href="/login">
                      <p className="font-semibold text-[#AD8C87]">Please Sign in</p>
                    </Link>
                  </DropdownItem>
                )}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
      </div> */}
      <header className="bg-[#9F7F7E]">
        {/* Optional announcement bar */}
        {/* <div className="text-center py-4 text-base font-normal text-white">
    Free Shipping on all domestic orders - Shop Now
  </div> */}
        <div className="py-1 px-5 flex items-center justify-between bg-[#ececec]">
          <div className=" px-5 flex items-center">
            <Image
              src="/assets/dashboard/Firrki_Logo.png"
              alt="Firki Logo"
              width={250}
              height={350}
            />
          </div>
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6 font-bold text-xl">
              <a href="#" className="hover:text-[#AD8C87]">
                Home
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                Our Story
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                Shop
              </a>
              <a href="#" className="hover:text-[#AD8C87] flex items-center">
                <Image
                  src="/assets/dashboard/Firbhet_Logo.jpeg"
                  alt="Firbhet Logo"
                  width={48}
                  height={58}
                />
              </a>
              <a href="#" className="hover:text-[#AD8C87]">
                Contact
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative" ref={searchRef}>
                <CiSearch
                  onClick={toggleSearch}
                  className="w-6 h-6 cursor-pointer"
                />
                {searchOpen && (
                  <div className="absolute mt-2 left-0">
                    <input
                      type="text"
                      placeholder="Search"
                      className="pl-8 pr-4 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-pink-500 bg-[#d9e2d6]"
                    />
                  </div>
                )}
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
                <a href="#" className="hover:text-[#AD8C87]">
                  <CiHeart className="w-6 h-6" />
                </a>
                <a
                  href="#"
                  className="hover:text-[#AD8C87]"
                  onClick={toggleModal}
                >
                  <PiUserThin   className="w-6 h-6" />
                </a>
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
