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
          <div className="grid grid-cols-4 max-[767px]:grid-cols-2 gap-[2rem] w-full h-full">
            {filteredCategory?.map((category: any, index: number) => {
              return (
                <Link
                  href={`/category/${encodeURIComponent(category)}`}
                  key={index}
                  className="text-[#1F2937] text-[1.5rem] bg-[#E5E7EB] text-center py-[3rem] rounded-[.5rem] shadow-lg"
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
