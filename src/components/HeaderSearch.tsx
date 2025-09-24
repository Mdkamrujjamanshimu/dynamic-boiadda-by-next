import { BiSearch } from "react-icons/bi";

import React from "react";

const HeaderSearch = () => {
  return (
    <div className="relative flex flex-nowrap items-center bg-[#86b642] rounded-[.5rem]">
      <input
        type="search"
        name="search"
        id=""
        className="w-full text-[1.17rem] outline-none p-[1.3rem] font-[400]"
        placeholder="বই অথবা লেখকের নাম দিয়ে অনুসন্ধান করুন"
      />
      <div className="text-[#fff] px-[2rem] cursor-pointer">
        <BiSearch className="text-[2rem]" />
      </div>
    </div>
  );
};

export default HeaderSearch;
