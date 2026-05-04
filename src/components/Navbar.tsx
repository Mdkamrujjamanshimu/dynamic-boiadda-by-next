"use client";
import { BsTelephone } from "react-icons/bs";
import React from "react";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";
import { useState } from "react";

const Navbar = ({ isOpen, setIsOpen }: any) => {
  const [openCategory, setOpenCategory] = useState(false);
  const [openAuthor, setOpenAuthor] = useState(false);
  const { filteredCategory } = useProductContext() as any;
  const categoryList = filteredCategory?.slice(0, 12) ?? [];
  const authorList = "অধ্যাপক মফিজুর রহমান";
  return (
    <div className="overflow-visible">
      <nav className="bg-[#86bc42]/90 max-[1023px]:hidden overflow-visible">
        <div className="container relative flex justify-between items-center text-[1.5rem] text-[#fff] px-[1rem] overflow-visible">
          <ul className="flex items-center justify-between gap-[2.5rem] py-[.5rem] text-[1.5rem] overflow-visible">
            <Link
              href={"/"}
              className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300"
            >
              <li className="cursor-pointer">হোম</li>
            </Link>
            <li className="group overflow-visible">
              <Link
                href={'/category'}
                className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300 inline-flex items-center"
              >
                ক্যাটাগরি
              </Link>

              <div className="pointer-events-none absolute left-[1rem] right-[1rem] top-[calc(100%-2px)] z-[1100] hidden w-[calc(100%-2rem)] overflow-y-auto overflow-visible rounded-[1rem] border border-[#d1d5db] bg-[#fff] text-[#1f2937] shadow-[0_10px_30px_rgba(0,0,0,0.15)] group-hover:block group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-[0.25rem] p-[0.75rem]">
                  {categoryList.length > 0 ? (
                    categoryList.map((category: string) => (
                      <Link
                        key={category}
                        href={`/category/${encodeURIComponent(category)}`}
                        className="block rounded-[0.75rem] px-[1rem] py-[0.8rem] text-[1.4rem] text-[#1f2937] hover:bg-[#eff6ff] transition-colors duration-200"
                      >
                        {category}
                      </Link>
                    ))
                  ) : (
                    <span className="block px-[1rem] py-[0.8rem] text-[1.4rem] text-[#374151]">
                      লোড হচ্ছে...
                    </span>
                  )}
                </div>
              </div>
            </li>
            <li className="group overflow-visible">
              <Link
                href={'/authors'}
                className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300 inline-flex items-center"
              >
                লেখক
              </Link>

              <div className="pointer-events-none absolute left-[1rem] right-[1rem] top-[calc(100%-2px)] z-[1100] hidden w-[calc(100%-2rem)] overflow-y-auto overflow-visible rounded-[1rem] border border-[#d1d5db] bg-[#fff] text-[#1f2937] shadow-[0_10px_30px_rgba(0,0,0,0.15)] group-hover:block group-hover:pointer-events-auto">
                <div className="grid grid-cols-4 gap-[0.25rem] p-[0.75rem]">
                  <Link
                    href={`/authors/${authorList}`}
                    className="block rounded-[0.75rem] px-[1rem] py-[0.8rem] text-[1.4rem] text-[#1f2937] hover:bg-[#eff6ff] transition-colors duration-200"
                  >
                    {authorList}
                  </Link>
                </div>
              </div>
            </li>
            {/* <Link
              href={"/authors"}
              className="text-[#fff] hover:bg-[#65a30d] rounded-full px-[1rem] py-[.5rem] transition-colors duration-300"
            >
              <li className="cursor-pointer">লেখক </li>
            </Link> */}
            <Link
              href={"/user/my-orders"}
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
              <Link href={"tel:+8801737114925"} className="text-[#fff]">
                হট লাইন: +8801737114925
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
          <li>
            <button
              onClick={() => setOpenCategory(!openCategory)}
              className="w-full text-left text-[#fff] bg-transparent hover:bg-[#65a30d] px-[1rem] py-[.5rem] transition-colors duration-300 rounded-[.5rem] border-none outline-none"
            >
              ক্যাটাগরি
            </button>

            {/* Submenu */}
            <div
              className={`ml-[1rem] mt-[.5rem] flex flex-col gap-[.5rem] transition-all duration-300 ${openCategory ? "block" : "hidden"
                }`}
            >
              {categoryList.length > 0 ? (
                categoryList.map((category: string) => (
                  <Link
                    key={category}
                    href={`/category/${encodeURIComponent(category)}`}
                    onClick={() => {
                      setIsOpen(false);
                      setOpenCategory(false);
                    }}
                    className="text-[#fff] bg-[#65a30d]/70 px-[1rem] py-[.4rem] rounded-[.5rem]"
                  >
                    {category}
                  </Link>
                ))
              ) : (
                <span className="text-[#fff] px-[1rem]">লোড হচ্ছে...</span>
              )}
            </div>
          </li>
          <li>
            <button
              onClick={() => setOpenAuthor(!openAuthor)}
              className="w-full text-left text-[#fff] bg-transparent hover:bg-[#65a30d] px-[1rem] py-[.5rem] transition-colors duration-300 rounded-[.5rem] border-none outline-none"
            >
              লেখক
            </button>

            {/* Submenu */}
            <div
              className={`ml-[1rem] mt-[.5rem] flex flex-col gap-[.5rem] transition-all duration-300 ${openAuthor ? "block" : "hidden"
                }`}
            >
              <Link
                href={`/authors/${authorList}`}
                onClick={() => {
                  setIsOpen(false);
                  setOpenCategory(false);
                }}
                className="text-[#fff] bg-[#65a30d]/70 px-[1rem] py-[.4rem] rounded-[.5rem]"
              >
                {authorList}
              </Link>

            </div>
          </li>

          <Link
            href={"/user/my-orders"}
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