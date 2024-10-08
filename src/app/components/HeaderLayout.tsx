

"use client";
import React, { ReactNode, useRef, useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { FiUser, FiShoppingCart, FiSearch, FiX } from "react-icons/fi";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  useDisclosure,
} from "@nextui-org/react";
import Image from "next/image";

import GiftShop from "./GiftSection/GiftShop";
import GiftImage from "./GiftSection/GiftImage";

function useRotatingMessages(messages: string[], interval: number) {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, interval);

    return () => clearInterval(messageInterval);
  }, [messages, interval]);

  // Function to manually set the current message index
  const setMessageIndex = (index: number) => {
    setCurrentMessageIndex(index);
  };

  return { currentMessage: messages[currentMessageIndex], setMessageIndex, currentMessageIndex };
}


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
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [showShopDropdown, setShowShopDropdown] = useState<boolean>(false);
  const [showImageDropdown, setShowImageDropdown] = useState<boolean>(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const timeoutRefShop = useRef<NodeJS.Timeout | null>(null);
  const timeoutRefImage = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { currentMessage, setMessageIndex, currentMessageIndex } = useRotatingMessages(
    [
      "Free Shipping on all domestic orders - Shop Now",
      "20% off on your first purchase - Don't Miss Out",
      "Exclusive deals available for a limited time - Explore Now",
      "New Arrivals are here - Check Them Out",
      "Sign up for our newsletter and get 10% off",
    ],
    3000 // Updated to 4 seconds interval
  );

  // Function to handle dot click
  const handleDotClick = (index: number) => {
    setMessageIndex(index);
  }

  const sign_Out = () => {
    signOut();
    toast.error("Logged out successfully");
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    setSearchTerm("");
    setSearchResults([]);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
  ];

  const handleMouseEnterShop = () => {
    if (timeoutRefShop.current) {
      clearTimeout(timeoutRefShop.current);
    }
    setShowShopDropdown(true);
  };

  const handleMouseLeaveShop = () => {
    timeoutRefShop.current = setTimeout(() => {
      setShowShopDropdown(false);
    }, 100);
  };

  const handleMouseEnterImage = () => {
    if (timeoutRefImage.current) {
      clearTimeout(timeoutRefImage.current);
    }
    setShowImageDropdown(true);
  };

  const handleMouseLeaveImage = () => {
    timeoutRefImage.current = setTimeout(() => {
      setShowImageDropdown(false);
    }, 100);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
      closeSearch();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value.length > 0) {
      // Simulate search results or filter from existing data
      const results = items
        .filter(item => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
        .map(item => item.title);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <>
      <header className="bg-[#DBE1D3] sticky top-0 z-50">
      <div className="text-center py-0 text-xl font-normal text-white bg-[#c89d9e]">
          {currentMessage}
          <div className="flex justify-center py-2">
          {[
            "Free Shipping on all domestic orders - Shop Now",
            "20% off on your first purchase - Don't Miss Out",
            "Exclusive deals available for a limited time - Explore Now",
            "New Arrivals are here - Check Them Out",
            "Sign up for our newsletter and get 10% off",
          ].map((_, index) => (
            <span
              key={index}
              onClick={() => handleDotClick(index)}
              className={`mx-1 w-2 h-2 rounded-full cursor-pointer ${
                currentMessageIndex === index
                  ? "bg-white"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
        </div>
        {/* Dot indicators */}
        
        <div className="py-2 pr-5 flex items-center justify-between bg-[rgb(219,225,211)]">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/assets/dashboard/Firrki_Logo.png"
                alt="Firki Logo"
                style={{ width: "170px", height: "auto" }}
                width={170}
                height={210}
              />
            </Link>
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
              className={`md:flex items-center space-x-12 font-medium text-xl pr-48 ${
                menuOpen ? "block" : "hidden"
              } md:block relative`}
            >
              <a href="/" className="hover:text-[#AD8C87]">
                Home
              </a>

              <div
                className="relative"
                onMouseEnter={handleMouseEnterShop}
                onMouseLeave={handleMouseLeaveShop}
              >
                <a
                  href="/shop"
                  className="hover:text-[#AD8C87] font-medium flex items-center"
                >
                  Shop
                </a>
                {showShopDropdown && (
                  <div className="absolute left-1/2 ml-32 transform -translate-x-1/2 top-full mt-8
                  w-screen max-w-screen-2xl bg-white shadow-lg border-t border-gray-200 z-50">
                    <GiftShop />
                  </div>
                )}
              </div>
              {/* Image with Separate Hover Events */}
              <div
                className="relative"
                onMouseEnter={handleMouseEnterImage}
                onMouseLeave={handleMouseLeaveImage}
              >
               <a
                  href="/firrbhet"
                  className="hover:text-[#AD8C87] font-medium flex items-center"
                >
                  <Image
                    src="/assets/dashboard/gift-box-2.png"
                    alt="Firbhet Logo"
                    width={35}
                    height={35}
                    className="mb-4"
                  />
                  FirBhet
                </a>
                {showImageDropdown && (
                  <div className="absolute left-1/2 ml-16 transform -translate-x-1/2 top-full mt-2 w-screen max-w-screen-2xl bg-white shadow-lg border-t border-gray-200 z-50">
                    <GiftImage />
                  </div>
                )}
              </div>
              <a href="/design" className="hover:text-[#AD8C87]">
                Design
              </a>
              <a href="/ourStory" className="hover:text-[#AD8C87]">
                Our Story
              </a>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative flex items-center space-x-4">
                <div className="relative" ref={searchRef}>
                  <FiSearch
                    onClick={toggleSearch}
                    className="w-6 h-6 cursor-pointer hover:text-[#AD8C87]"
                  />
                  {searchOpen && (
                    <div className="absolute top-full mt-2 right-0 bg-white shadow-lg p-4 rounded-lg z-10 w-72">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search"
                          value={searchTerm}
                          onChange={handleSearchChange}
                          className="pl-8 pr-4 py-2 rounded-full text-sm border border-gray-300 focus:outline-none focus:border-pink-500 bg-gray-300 w-full"
                        />
                        {searchTerm && (
                          <FiX
                            className="absolute top-2 right-4 cursor-pointer"
                            onClick={() => setSearchTerm("")}
                          />
                        )}
                      </div>
                      <div className="mt-2">
                        {searchResults.length > 0 ? (
                          searchResults.map((result, index) => (
                            <p key={index} className="text-sm">
                              {result}
                            </p>
                          ))
                        ) : (
                          <p className="text-sm text-gray-500">No results found</p>
                        )}
                      </div>
                    </div>
                  )}
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
                <option value="GBP £">GBP £</option>
              </select>
              <div className="relative">
                <Image
                  className="cursor-pointer hover:text-[#AD8C87]"
                  src="/assets/dashboard/addToCard.png"
                  alt="Firbhet Logo"
                  width={34}
                  height={44}
                />
                <div className="absolute -top-1 -right-2 bg-[#9F7F7E] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  0
                </div>
              </div>
              <div className="relative">
                <Image
                  className="cursor-pointer hover:text-[#AD8C87]"
                  src="/assets/dashboard/like.png"
                  alt="like Logo"
                  width={34}
                  height={44}
                />
                <div className="absolute -top-1 -right-2 bg-[#9F7F7E] text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                  0
                </div>
              </div>
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <button
                    type="button"
                    className="flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors pb-2"
                  >
                    <Image
                      className="hover:text-[#AD8C87]"
                      src="/assets/dashboard/signin.png"
                      alt="Firbhet Logo"
                      width={39}
                      height={47}
                    />
                  </button>
                </DropdownTrigger>
                {session?.user ? (
                  <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem
                      key="profile"
                      className="h-14 gap-2"
                      textValue="Signed in as"
                    >
                      <p className="font-semimedium">Signed in as</p>
                      <p className="font-semimedium">{session.user.email}</p>
                    </DropdownItem>
                    <DropdownItem key="settings">My Settings</DropdownItem>
                    <DropdownItem key="team_settings">
                      Team Settings
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
                        <p className="font-semimedium text-[#AD8C87]">
                          Log in/ Sign in
                        </p>
                      </Link>
                    </DropdownItem>
                    <DropdownItem key="signin" textValue="Signed in as">
                      <Link href="/signup">
                        <p className="font-semimedium text-[#AD8C87]">
                          Create your Account
                        </p>
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                )}
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
      {OtherPage}
    </>
  );
};

export default HeaderLayout;   