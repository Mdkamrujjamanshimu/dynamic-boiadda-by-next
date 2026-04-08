import { BsTelephone } from "react-icons/bs";
import React from "react";
import Link from "next/link";

const Navbar = ({ isOpen, setIsOpen }: any) => {
  return (
    <div className="overflow-visible">
      <nav className="bg-[#86bc42]/90 max-[1023px]:hidden">
        <div className="container flex justify-between items-center text-[1.5rem] text-[#fff] px-[1rem]">
          <ul className="flex items-center justify-between gap-[2.5rem] py-[.5rem] text-[1.5rem]">
            <Link
              href={"/"}
              className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300"
            >
              <li className="cursor-pointer">হোম</li>
            </Link>
            <Link
              href={"/category"}
              className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300"
            >
              <li className="cursor-pointer">ক্যাটাগরি </li>
            </Link>
            <Link
              href={"#"}
              className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300"
            >
              <li className="cursor-pointer">লেখক </li>
            </Link>
            <Link
              href={"/order"}
              className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300"
            >
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
        className={`bg-[#86bc42]/90 backdrop-blur-md fixed top-0 left-0 h-[100vh] w-[250px] text-[1.6rem] p-[.5rem] transform transition-transform duration-300 ease-in-out  min-[1024px]:hidden shadow-[0_4px_10px_rgba(0,0,0,0.25)] 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="flex flex-col gap-[1rem]">
          <Link
            href={"/"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff] hover:bg-[#65a30d] px-[1rem] py-[.5rem] transition-colors duration-300 rounded-[.5rem]"
          >
            <li>হোম</li>
          </Link>
          <Link
            href={"/category"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff] hover:bg-[#65a30d] px-[1rem] py-[.5rem] transition-colors duration-300 rounded-[.5rem]"
          >
            <li>ক্যাটাগরি</li>
          </Link>
          <Link
            href={"#"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff] hover:bg-[#65a30d] px-[1rem] py-[.5rem] transition-colors duration-300 rounded-[.5rem]"
          >
            <li>লেখক</li>
          </Link>
          <Link
            href={"/order"}
            onClick={() => setIsOpen(false)}
            className="text-[#fff] hover:bg-[#65a30d] px-[1rem] py-[.5rem] transition-colors duration-300 rounded-[.5rem]"
          >
            <li>অর্ডার দেখুন</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
