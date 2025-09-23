"use client";
import CategoryLeft from "@/components/CategoryLeft";
import CategoryRight from "@/components/CategoryRight";

import { useProductContext } from "@/context/ProductContext";
import { useParams } from "next/navigation";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const page = () => {
  const { products } = useProductContext() as any;

  const params = useParams();
  let categoryName = "";

  if (params.slug) {
    categoryName = Array.isArray(params.slug) ? params.slug[0] : params.slug;
    categoryName = decodeURIComponent(categoryName);
  }

  const categoryProducts = products.filter(
    (curElem: any) => curElem.category === categoryName
  );

  return (
    <div>
      <div className="my-[10rem] container p-[2rem]">
        <div className="flex justify-between text-[#1F2937] py-[1rem]">
          <div className="">
            <h2>{categoryName}</h2>
          </div>
          <div className="flex items-center text-[1.5rem] font-semibold cursor-pointer">
            <span>সর্ট করুন</span>
            <BiChevronDown />
          </div>
        </div>
        <hr />
        <div className="w-full flex gap-[2rem] my-[2rem] text-[#1F2937]">
          <div className="w-[30%] max-[1024px]:hidden">
            <CategoryLeft />
          </div>
          <div className="w-[70%] max-[1024px]:w-full">
            <CategoryRight categoryProducts={categoryProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
