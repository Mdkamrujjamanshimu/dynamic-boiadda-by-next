"use client";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="cart-container flex justify-center items-center py-[10rem]">
      <div className="bg-[#F3F4F6] flex flex-col justify-center items-center text-center gap-[2rem] p-[4rem] rounded-[1rem]">
        <h1 className="text-[#22C55E] text-[2.5rem] font-[600]">
          আপনার অর্ডারটি গ্রহণ করা হয়েছে। আমাদের সাথে থাকার জন্য ধন্যবাদ।
        </h1>
        <p className="text-[2rem]">
          To Track Your Order, Please{" "}
          <Link href={"/"}>
            <span className="text-[#22C55E] underline cursor-pointer">
              Click Here
            </span>
          </Link>
        </p>
        <Link href={"/"}>
          <button className="bg-[#22C55E] border-none outline-none p-[1rem] text-[1.8rem] text-[#fff] rounded-[.5rem]">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
