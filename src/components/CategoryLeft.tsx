import React from "react";

const CategoryLeft = () => {
  return (
    <div>
      <div className="w-full max-[1023px]:hidden flex flex-col gap-[2rem]">
        <div className="p-[2rem] border-[.1rem] border-[#c3c9d6] rounded-[.5rem] h-[25rem]">
          <span className="border-b-[.1rem] border-[#86BC42] text-[2rem] font-bold">
            লেখক
          </span>
          <p className="mt-[3rem] text-[1.5rem] cursor-pointer">
            অধ্যাপক মফিজুর রহমান
          </p>
        </div>
        <div className="p-[2rem] border-[.1rem] border-[#c3c9d6] rounded-[.5rem] h-[25rem]">
          <span className="border-b-[.1rem] border-[#86BC42] text-[2rem] font-bold">
            প্রকাশনী
          </span>
          <p className="mt-[3rem] text-[1.5rem] cursor-pointer">
            প্রচ্ছদ প্রকাশন
          </p>
        </div>
      </div>
    </div>
  );
};

export default CategoryLeft;
