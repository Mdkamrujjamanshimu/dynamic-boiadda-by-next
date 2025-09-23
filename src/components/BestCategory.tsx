import { useProductContext } from "@/context/ProductContext";
import Link from "next/link";
import React from "react";
import { AiOutlineStar } from "react-icons/ai";

import CategorySection from "./CategorySection";

const BestCategory = () => {
  const { filteredCategory } = useProductContext() as any;
  const category = filteredCategory.slice(0, 5);

  return (
    <div className="my-[6rem]">
      <div className="w-full flex flex-col text-center mb-[3rem]">
        <h2 className="mb-[2rem] text-[2rem] font-[900] text-[#1F2937]">
          সেরা ক্যাটাগরি
        </h2>
        <div className="flex justify-center gap-[1rem] items-center max-[768px]:text-[1rem] text-[1.3rem] font-[500]">
          {category.map((category: any, index: any) => {
            return (
              <Link href={`/category/${category}`} key={index}>
                <div className="flex gap-[.5rem] max-[640px]:gap-[.2rem] items-center justify-center text-center bg-[#E5E7EB] text-[#1F2937] p-[1rem] rounded-full border-[.1rem] border-[#c3c9d6] ">
                  <AiOutlineStar className="max-[640px]:text-[.5rem]" />
                  <span className="truncate">{category}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {category.map((categoryName: any, index: any) => {
        return <CategorySection key={index} categoryName={categoryName} />;
      })}
      {/* <FreedomSection />
      <MotivationSection />
      <BdPoliticsSection /> */}
    </div>
  );
};

export default BestCategory;
