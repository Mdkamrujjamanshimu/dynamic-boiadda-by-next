import { BiLogOut } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/images/logo.png";
import HeaderSearch from "./HeaderSearch";
import { useCartContext } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const TopHeader = ({ isOpen, setIsOpen }: any) => {
  const { total_item } = useCartContext() as any;
  const { authUser, logout } = useAuth() as any;

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-[url('https://bponi.sgp1.cdn.digitaloceanspaces.com/bponi/file/quykov1jj0hdkgu.webp')] bg-cover bg-center">
      <div className="container flex flex-col p-[2rem]">
        <div className="flex items-center justify-between gap-[1rem]">
          <div className="pr-[2rem] max-[345px]:pr-[4rem] max-[335px]:pr-[6rem]">
            <Link href={"/"}>
              <Image src={logo} alt="logo" width={100} height={70} />
            </Link>
          </div>
          <div className="w-full flex items-center justify-center  gap-[1.5rem] max-[1023px]:w-auto">
            <div className="w-full max-[1023px]:hidden">
              <HeaderSearch />
            </div>
            <div className="flex items-center ">
              <div className="flex items-center justify-center min-w-[9rem] text-[2.5rem]">
                <Link href={"#"} className="px-[1rem] ">
                  <AiOutlineHeart className="text-[#fff]" />
                </Link>
                {/* Cart with badge */}
                <div className="relative flex items-center justify-center p-[1rem]">
                  <Link href={"/cart"}>
                    <AiOutlineShoppingCart className="text-[#fff]" />
                  </Link>
                  <span className="absolute top-[5px] right-[0px] bg-[#86BC42] text-[#fff] text-[1.1rem] font-[500] w-[15px] h-[15px] flex items-center justify-center rounded-full">
                    {total_item}
                  </span>
                </div>
              </div>

              <div className="hidden max-[1023px]:flex flex items-center gap-[.5rem] text-[2.2rem] ">
                <div className="">
                  {authUser ? (
                    <button
                      onClick={handleLogout}
                      className="text-[#fff] text-[2.5rem] font-semibold bg-transparent border-none outline-none max-[360px]:pr-[2rem] max-[345px]:pr-[6rem] max-[335px]:pr-[7rem] cursor-pointer"
                    >
                      <BiLogOut />
                    </button>
                  ) : (
                    <span className="flex items-center text-[#fff] text-[2.5rem]">
                      <Link
                        href={"/login"}
                        className="text-[#fff] max-[360px]:pr-[2rem] max-[345px]:pr-[6rem] max-[335px]:pr-[7rem] cursor-pointer"
                      >
                        <BsPerson />
                      </Link>
                    </span>
                  )}
                </div>

                {/* Menu Toggle Button */}
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="max-[350px]:pr-[2.2rem] bg-transparent border-none cursor-pointer outline-none text-[#fff] text-[2.5rem]"
                >
                  {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
              </div>
              {/* লগইন / রেজিস্টার*/}
              <div className="text-[1.5rem] max-[1023px]:hidden">
                {authUser ? (
                  <button
                    onClick={handleLogout}
                    className="text-[#fff] font-semibold bg-transparent border-none outline-none pr-[3rem] max-[1175px]:pr-[4rem] cursor-pointer"
                  >
                    লগআউট
                  </button>
                ) : (
                  <span className="flex items-center text-[#fff] gap-[.5rem]">
                    <Link href={"/login"} className="text-[#fff] pr-[2.7rem]">
                      লগইন
                    </Link>
                    /
                    <Link
                      href={"/register"}
                      className="text-[#fff] pr-[4.2rem] cursor-pointer"
                    >
                      রেজিস্টার
                    </Link>
                  </span>
                )}
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
