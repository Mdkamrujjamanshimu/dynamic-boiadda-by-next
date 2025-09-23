import { BsTelephone } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const Navbar = ({ isOpen, setIsOpen }:any) => {
  return (
    <div>
      <nav className="bg-[#86bc42] max-[1023px]:hidden">
        <div className="container flex justify-between items-center text-[1.5rem] text-[#fff] px-[2rem]">
          <ul className="flex items-center justify-between gap-[2.5rem] p-[1rem] text-[1.5rem]">
            <Link href={"/"} className="text-[#fff]">
              <li className="cursor-pointer">হোম</li>
            </Link>
            <Link href={"/category"} className="text-[#fff]">
              <li className="cursor-pointer">ক্যাটাগরি </li>
            </Link>
            <Link href={"#"} className="text-[#fff]">
              <li className="cursor-pointer">লেখক </li>
            </Link>
            <Link href={"#"} className="text-[#fff]">
              <li className="cursor-pointer">অর্ডার দেখুন</li>
            </Link>
          </ul>
          <div className="flex justify-center items-center text-[1.5rem] font-[500]">
            <div className="px-[.5rem]">
              <BsTelephone />
            </div>
            <span>
              <Link href={"tel:01737114925"} className="text-[#fff]">
                হট লাইন: +8801714819822
              </Link>
            </span>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#86bc42] text-[1.6rem] p-[2rem] transform transition-transform duration-300 ease-in-out z-50 min-[1024px]:hidden 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col gap-[1rem]">
          <Link
            href={"/"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff]"
          >
            <li>হোম</li>
          </Link>
          <Link
            href={"/category"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff]"
          >
            <li>ক্যাটাগরি</li>
          </Link>
          <Link
            href={"#"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff]"
          >
            <li>লেখক</li>
          </Link>
          <Link
            href={"#"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff]"
          >
            <li>অর্ডার দেখুন</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
