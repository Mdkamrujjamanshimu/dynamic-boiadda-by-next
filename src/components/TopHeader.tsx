import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import HeaderSearch from "./HeaderSearch";

const TopHeader = ({ isOpen, setIsOpen }:any) => {
  return (
    <div className="bg-[url('https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/quykov1jj0hdkgu.webp')] bg-cover bg-center">
      <div className="container flex flex-col p-[2rem]">
        <div className="flex items-center justify-between gap-[1rem]">
          <div className="pr-[2rem] ">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={150} height={70} />
            </Link>
          </div>
          <div className="w-full flex items-center gap-[1.5rem] max-[1023px]:w-auto">
            <div className="w-full max-[1023px]:hidden">
              <HeaderSearch />
            </div>
            <div className="flex items-center gap-[2rem] max-[1200px]:gap-[1rem]">
              <div className="flex items-center text-[2.2rem] ">
                <Link href={"#"} className="px-[1rem]">
                  <AiOutlineHeart className="text-[#fff]" />
                </Link>
                <Link href={"/cart"} className="px-[1rem]">
                  <AiOutlineShoppingCart className="text-[#fff]" />
                </Link>
              </div>
              <div className="hidden max-[1023px]:flex flex items-center text-[2.2rem] ">
                <Link href={"/login"} className="px-[.5rem]">
                  <BsPerson className="text-[#fff]" />
                </Link>

                {/* Menu Toggle Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="px-[.5rem] bg-transparent border-none cursor-pointer outline-none text-[#fff] text-[2.5rem]"
                >
                  {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>

                {/* <Link href={"#"} className="px-[.5rem]">
                  <AiOutlineMenu className="text-[#fff]" />
                </Link> */}
              </div>
              <div className="text-[1.3rem] max-[1023px]:hidden">
                <span className="flex items-center text-[#fff] gap-[.5rem]">
                  <Link href={"/login"} className="text-[#fff] pr-[1.5rem]">
                    লগইন
                  </Link>
                  /
                  <Link href={"/register"} className="text-[#fff] pr-[2.2rem]">
                    রেজিস্টার
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden max-[1023px]:block">
          <HeaderSearch />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
