"use client";
import React from "react";
import ProductsCard from "./ProductsCard";

const CategoryRight = ({ categoryProducts }: any) => {
  return (
    <div>
      <div className="w-full grid grid-cols-4 max-[767px]:grid-cols-3 max-[639px]:grid-cols-2 gap-[1rem]">
        {categoryProducts.map((curElem: any) => {
          return <ProductsCard key={curElem.id} curElem={curElem} />;
        })}
      </div>
    </div>
  );
};

export default CategoryRight;
