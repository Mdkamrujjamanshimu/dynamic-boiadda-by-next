"use client";
import React from "react";
import Link from "next/link";
import { useProductContext } from "@/context/ProductContext";

const page = () => {
  // TypeScript error fix
  const { filteredCategory } = useProductContext() as any;

  return (
    <div>
      <div className="py-[5rem] container p-[2rem]">
        <div className="text-[#1F2937]">
          <h2 className="text-center text-[2.5rem] font-[900] my-[2rem]">
            বিষয় সমূহ
          </h2>
          <div className="grid grid-cols-4 max-[767px]:grid-cols-2 gap-[2rem] p-[1rem] w-full h-full">
            {filteredCategory?.map((category: any, index: number) => {
              return (
                <Link
                  href={`/category/${encodeURIComponent(category)}`}
                  key={index}
                  className="flex items-center justify-center text-[#1F2937] text-[1.5rem] bg-[#E5E7EB] hover:bg-[#D1D5DB] text-center py-[3rem] px-[.5rem] rounded-[.5rem] shadow-[0_2px_5px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <p>{category}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
