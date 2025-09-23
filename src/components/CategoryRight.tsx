"use client";
import React from "react";
import ProductsCard from "./ProductsCard";

const CategoryRight = ({ categoryProducts }: any) => {
  return (
    <div>
      <div className="w-full grid grid-cols-4 max-[767px]:grid-cols-3 max-[639px]:grid-cols-2 gap-[2rem]">
        {categoryProducts.map((curElem: any) => {
          return (
            <div
              key={curElem.id}
              className="border-[.1rem] border-[#c3c9d6] p-[1rem] rounded-[.5rem]"
            >
              <ProductsCard curElem={curElem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryRight;
