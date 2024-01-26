"use client";

import { Bell, ChevronDownIcon, Search, X } from "lucide-react";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Mobilenav from "./Mobilenav";
import { AiOutlineSetting, AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const [searchText, setSearchText] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleClearSearch = () => {
    setSearchText("");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-background w-full py-4 px-4 mx-auto z-50">
      <div className="flex items-center justify-between mx-auto w-full">
        <span className="flex items-center gap-4 ml-8">
          <div className=" ">
            <Image src="/icons/Logo.svg" width={40} height={40} alt="logo" />
          </div>
          <h1 className="text-md ml-16 md:text-2xl font-semibold hidden md:block">
            Dashboard
          </h1>
        </span>
        <div className="hidden md:flex items-center space-x-4">
          <div className="hidden bg-white md:flex items-center space-x-2 border rounded-full px-4 pr-36 py-2.5 relative">
            <Search className="w-5 h-5 text-gray-400" />
            {/* <Input
                            className="outline-none border-none bg-transparent dark:text-black flex-grow"
                            placeholder="Search..."
                            type="search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        /> */}

            <input
              className="outline-none border-none bg-transparent dark:text-black flex-grow "
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search..."
            />
            {searchText && (
              <div
                className="absolute top-3 right-3 cursor-pointer"
                onClick={handleClearSearch}
              >
                <X className="w-5 h-5 text-gray-400 font-semibold border rounded-full border-gray-400 " />
              </div>
            )}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <Image
              src="/icons/Group.svg"
              alt="calender icon"
              width={16}
              height={16}
              className="dark:hidden"
            />
            <Image
              src="/icons/calendar-dark.svg"
              alt="calender icon"
              width={16}
              height={16}
              className="hidden dark:block"
            />
            <span className="text-sm">November 15, 2023</span>
          </div>
          <span className="p-2 rounded-full  border">
            <Bell className="w-5 h-5" />
          </span>
          <AnimatePresence>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <div className="flex items-center space-x-2 border p-2 rounded-full">
                  <Avatar>
                    <AvatarImage alt="Justin Bergson" src="/user.png" />
                    <AvatarFallback>JB</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <span className="font-medium">Justin Bergson</span>
                    <span className="text-sm text-gray-500">
                      JustinB@gmail.com
                    </span>
                  </div>
                  <ChevronDownIcon className="w-5 h-5 text-gray-400 font-semibold" />
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Analytics</DropdownMenuItem>
                  <DropdownMenuItem>Team Collaboration</DropdownMenuItem>
                  <DropdownMenuItem>Subscription Plans</DropdownMenuItem>
                  <hr className="my-1 border-t border-gray-300" />
                  <DropdownMenuItem>
                    <span className="flex items-center">
                      Settings
                      <AiOutlineSetting className="ml-2 w-4 h-4" />
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="flex items-center justify-between">
                      Logout
                      <AiOutlineLogout className="ml-2 w-4 h-4" />
                    </span>
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            </DropdownMenu>
          </AnimatePresence>
        </div>

        <div className="flex bg-white md:hidden items-center space-x-2 border rounded-full px-4 pr-36 max-[480px]:pr-24 max-[400px]:pr-8  py-2.5 relative">
          <Search className="w-5 h-5 text-gray-400" />

          <input
            className="outline-none border-none bg-transparent dark:text-black flex-grow "
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search..."
          />
          {searchText && (
            <div
              className="absolute top-3 right-3 cursor-pointer"
              onClick={handleClearSearch}
            >
              <X className="w-5 h-5 text-gray-400 font-semibold border rounded-full border-gray-400 " />
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar>
                <AvatarImage alt="Justin Bergson" src="/user.png" />
                <AvatarFallback>JB</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <AnimatePresence>
              <DropdownMenuContent className="w-48">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Analytics</DropdownMenuItem>
                  <DropdownMenuItem>Team Collaboration</DropdownMenuItem>
                  <DropdownMenuItem>Subscription Plans</DropdownMenuItem>
                  <hr className="my-1 border-t border-gray-300" />
                  <DropdownMenuItem>
                    <span className="flex items-center">
                      Settings
                      <AiOutlineSetting className="ml-2 w-4 h-4" />
                    </span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span className="flex items-center justify-between">
                      Logout
                      <AiOutlineLogout className="ml-2 w-4 h-4" />
                    </span>
                  </DropdownMenuItem>
                </motion.div>
              </DropdownMenuContent>
            </AnimatePresence>
          </DropdownMenu>

          <Mobilenav />
        </div>
      </div>
      <div className="border-b border-l ml-32 mt-2 mb-4"></div>
    </header>
  );
};

export default Navbar;
