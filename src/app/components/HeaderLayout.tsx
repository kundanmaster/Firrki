"use client";
import React, { ReactNode, useRef, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/dist/client/components/navigation";
import { toast } from "sonner";
import { FaHeart, FaShoppingCart, FaUser, FaSearch } from "react-icons/fa";
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
      <div className="">
        <Navbar className="backdrop-blur-sm data-[menu-open=true]:backdrop-blur-sm backdrop-saturate-50 bg-background/50">
          {children}
          <NavbarContent
            as="div"
            className="items-center max-w-screen-xl "
            justify="end"
          >
            {/* <Input
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
            /> */}
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
              {/* <a
                href="#"
                className="hover:text-[#AD8C87]"
                onClick={toggleModal}
              >
                <FaUser className="w-6 h-6 " />
              </a> */}
            </div>
            <div>{session?.user?.name || session?.user?.name}</div>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform bg-gradient-to-br from-[#AD8C87] to-[#ceb3af]"
                  color="secondary"
                  name=""
                  size="sm"
                  src={session?.user?.image ? session?.user?.image : undefined}
                  // src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{session?.user?.email}</p>
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
                  onClick={() => sign_Out()}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>
        </Navbar>
      </div>

      {OtherPage}
    </>
  );
};

export default HeaderLayout;
