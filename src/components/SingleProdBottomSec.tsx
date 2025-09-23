import Link from "next/link";
import React from "react";

const SingleProdBottomSec = () => {
  return (
    <div>
      <div className="relative pt-[3rem]">
        <span className="absolute top-[1.7rem] left-[2rem] z-50 text-[2rem] bg-[#fff]">
          <Link href={"#"} className="text-[#86bc42]">
            ▪️ আরো দেখুন
          </Link>
        </span>
        <div className="border-[.2rem] border-[#7DB13D] border-dashed rounded-[1rem]">
          <div className="grid grid-cols-5 max-[1023px]:grid-cols-4 max-[767px]:grid-cols-3 max-[639px]:grid-cols-2 gap-[2rem] m-[2rem]">
            {/* <CardWithBorder /> */}
          </div>
          <div className="text-center my-[4rem]">
            <button className="bg-[#86BC42] text-[1.5rem] text-[#fff] border-none py-[1rem] px-[4rem] rounded-[.5rem] cursor-pointer">
              আরও দেখুন
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProdBottomSec;
